'use strict';
/* ══════════════════════════════════════════════════════════
   hijri.js — Hijri (Islamic) calendar utilities
   Uses the browser's built-in Intl API with the Umm al-Qura
   calendar.  Falls back to the tabular Islamic calendar when
   the Intl API is unavailable.
   ══════════════════════════════════════════════════════════ */

const HijriCalendar = (() => {

  // ── Month names ──────────────────────────────────────────
  const MONTH_NAMES = [
    { en: 'Muharram',        ar: 'مُحَرَّم'          },
    { en: 'Safar',           ar: 'صَفَر'              },
    { en: "Rabi' al-Awwal",  ar: 'رَبِيعُ الأَوَّل'  },
    { en: "Rabi' al-Thani",  ar: 'رَبِيعُ الثَّانِي' },
    { en: 'Jumada al-Awwal', ar: 'جُمَادَى الأُولَى'  },
    { en: 'Jumada al-Thani', ar: 'جُمَادَى الآخِرَة'  },
    { en: 'Rajab',           ar: 'رَجَب'              },
    { en: "Sha'ban",         ar: 'شَعْبَان'           },
    { en: 'Ramadan',         ar: 'رَمَضَان'           },
    { en: 'Shawwal',         ar: 'شَوَّال'            },
    { en: "Dhul Qa'dah",     ar: 'ذُو القَعْدَة'      },
    { en: 'Dhul Hijjah',     ar: 'ذُو الحِجَّة'       },
  ];

  // ── Intl formatter ───────────────────────────────────────
  let _fmt = null;
  let _supported = false;

  try {
    _fmt = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
      year: 'numeric', month: 'numeric', day: 'numeric',
    });
    // Sanity-check: 1 Jan 2024 should map to a year > 1000 AH
    const parts = _fmt.formatToParts(new Date(Date.UTC(2024, 0, 1, 12)));
    const y = parseInt(parts.find(p => p.type === 'year')?.value ?? '0');
    _supported = y > 1000;
  } catch (_) {
    _supported = false;
  }

  // ── Conversion cache (keyed by UTC-noon timestamp) ───────
  const _cache = new Map();

  // Return date normalised to UTC noon to avoid DST / timezone edge-cases
  function _noon(date) {
    return new Date(Date.UTC(
      date.getFullYear(), date.getMonth(), date.getDate(), 12
    ));
  }

  // ── Tabular Islamic Calendar fallback ────────────────────
  // (civil/astronomical tabular; differs from Umm al-Qura by 1-3 days)
  function _tabular(date) {
    const y = date.getUTCFullYear();
    const m = date.getUTCMonth() + 1;
    const d = date.getUTCDate();
    const a  = Math.floor((14 - m) / 12);
    const y2 = y + 4800 - a;
    const m2 = m + 12 * a - 3;
    const jdn = d +
      Math.floor((153 * m2 + 2) / 5) +
      365 * y2 +
      Math.floor(y2 / 4) -
      Math.floor(y2 / 100) +
      Math.floor(y2 / 400) - 32045;

    let l = jdn - 1948440 + 10632;
    const n = Math.floor((l - 1) / 10631);
    l -= 10631 * n - 354;
    const j =
      Math.floor((10985 - l) / 5316) * Math.floor((50 * l) / 17719) +
      Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
    l -= Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
         Math.floor(j / 16) * Math.floor((15238 * j) / 43) - 29;

    return {
      year:  30 * n + j - 30,
      month: Math.floor((24 * l) / 709),
      day:   l - Math.floor((709 * Math.floor((24 * l) / 709)) / 24),
    };
  }

  // ── Public: convert a Gregorian Date → Hijri ─────────────
  function fromGregorian(date) {
    const noon = _noon(date);
    const key  = noon.getTime();
    if (_cache.has(key)) return _cache.get(key);

    let h;
    if (_supported) {
      const parts = _fmt.formatToParts(noon);
      h = {
        year:  parseInt(parts.find(p => p.type === 'year').value),
        month: parseInt(parts.find(p => p.type === 'month').value),
        day:   parseInt(parts.find(p => p.type === 'day').value),
      };
    } else {
      h = _tabular(noon);
    }
    _cache.set(key, h);
    return h;
  }

  // ── Anchor-based search for 1st Gregorian day of a Hijri month ──
  let _anchor = null;

  function _ensureAnchor() {
    if (_anchor) return;
    const today = new Date();
    const noon  = _noon(today);
    _anchor = { gregorian: noon, hijri: fromGregorian(noon) };
  }

  function getFirstGregorianOfMonth(hYear, hMonth) {
    _ensureAnchor();
    const { gregorian: ag, hijri: ah } = _anchor;

    const anchorMonths  = ah.year * 12 + ah.month;
    const targetMonths  = hYear  * 12 + hMonth;
    const monthDiff     = targetMonths - anchorMonths;

    // Estimate: shift from anchor by monthDiff × 29.53 days, back to 1st
    const daysToFirst = monthDiff * 29.53059 - (ah.day - 1);
    const estimate    = new Date(ag.getTime() + daysToFirst * 86400000);

    // Search ±5 days first, then widen to ±18
    for (const range of [5, 18]) {
      for (let off = -range; off <= range; off++) {
        const test = new Date(estimate.getTime() + off * 86400000);
        const h    = fromGregorian(test);
        if (h.year === hYear && h.month === hMonth && h.day === 1) return test;
      }
    }
    console.warn(`HijriCalendar: could not find 1st of ${hYear}/${hMonth}`);
    return null;
  }

  // ── Build array of day-objects for a full Hijri month ────
  function getMonthData(hYear, hMonth) {
    const first = getFirstGregorianOfMonth(hYear, hMonth);
    if (!first) return [];

    const days = [];
    let cur = new Date(first);

    for (let guard = 0; guard < 35; guard++) {
      const h = fromGregorian(cur);
      if (h.year !== hYear || h.month !== hMonth) break;
      days.push({
        gregorian:  new Date(Date.UTC(cur.getUTCFullYear(), cur.getUTCMonth(), cur.getUTCDate())),
        hijri:      h,
        dayOfWeek:  cur.getUTCDay(),   // 0 = Sunday … 6 = Saturday
      });
      cur = new Date(cur.getTime() + 86400000);
    }
    return days;
  }

  // ── Build all 12 months of a Hijri year (for the year view) ──
  function getYearData(hYear) {
    const months = [];
    for (let m = 1; m <= 12; m++) {
      months.push({
        month: m,
        names: MONTH_NAMES[m - 1],
        days: getMonthData(hYear, m),
      });
    }
    return months;
  }

  // ── Navigation helpers ───────────────────────────────────
  function prevMonth(hYear, hMonth) {
    return hMonth === 1
      ? { year: hYear - 1, month: 12 }
      : { year: hYear, month: hMonth - 1 };
  }

  function nextMonth(hYear, hMonth) {
    return hMonth === 12
      ? { year: hYear + 1, month: 1 }
      : { year: hYear, month: hMonth + 1 };
  }

  // ── Format helpers ───────────────────────────────────────
  function monthYearLabel(hYear, hMonth) {
    const m = MONTH_NAMES[hMonth - 1];
    return {
      ar: `${m.ar} ${hYear} هـ`,
      en: `${m.en} ${hYear} AH`,
    };
  }

  function formatHijriDate(h) {
    const m = MONTH_NAMES[h.month - 1];
    return `${h.day} ${m.en} ${h.year} AH`;
  }

  // ── Expose ───────────────────────────────────────────────
  return {
    fromGregorian,
    getFirstGregorianOfMonth,
    getMonthData,
    getYearData,
    prevMonth,
    nextMonth,
    monthYearLabel,
    formatHijriDate,
    isSupported: () => _supported,
    MONTH_NAMES,
  };
})();
