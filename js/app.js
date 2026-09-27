'use strict';
/* ══════════════════════════════════════════════════════════
   app.js — Islamic Calendar Application Logic
   Handles theming (light/dark), language (EN / Arabic RTL),
   the month view and the whole-year view.
   ══════════════════════════════════════════════════════════ */

const App = (() => {

  // ── State ────────────────────────────────────────────────
  let currentYear;        // Hijri year (month view)
  let currentMonth;       // Hijri month (month view)
  let yearViewYear;       // Hijri year (year view)
  let view = 'month';     // 'month' | 'year'
  let lang = 'en';        // 'en' | 'ar'
  let theme = 'dark';     // 'dark' | 'light'
  let todayGregorian;     // local civil today (midnight)
  let todayHijri;

  const MONTHS = HijriCalendar.MONTH_NAMES;
  const $ = (id) => document.getElementById(id);

  // ── Init ─────────────────────────────────────────────────
  function init() {
    if (!HijriCalendar.isSupported()) $('noticeBar').hidden = false;

    // Restore persisted preferences (html attributes were set by inline script)
    theme = document.documentElement.getAttribute('data-theme') || 'dark';
    lang  = document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en';
    I18N.setLang(lang);

    // Establish today
    const now = new Date();
    todayGregorian = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    todayHijri = HijriCalendar.fromGregorian(todayGregorian);

    currentYear  = todayHijri.year;
    currentMonth = todayHijri.month;
    yearViewYear = todayHijri.year;

    applyI18n();
    renderAll();
    _wireEvents();
  }

  function _wireEvents() {
    $('prevMonth').addEventListener('click', () => navigate(-1));
    $('nextMonth').addEventListener('click', () => navigate(1));
    $('btnToday').addEventListener('click', goToToday);

    $('prevYear').addEventListener('click', () => navigateYear(-1));
    $('nextYear').addEventListener('click', () => navigateYear(1));
    $('btnThisYear').addEventListener('click', () => { yearViewYear = todayHijri.year; renderYear(true); });

    $('viewMonthBtn').addEventListener('click', () => setView('month'));
    $('viewYearBtn').addEventListener('click', () => setView('year'));

    $('themeToggle').addEventListener('click', toggleTheme);
    document.addEventListener('sakina:theme', _updateThemeControl);
    $('langToggle').addEventListener('click', toggleLang);

    $('modalClose').addEventListener('click', closeModal);
    $('modal').addEventListener('click', e => { if (e.target === $('modal')) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  // ── Theme (shared Sakīna day/night, remembered across all projects) ──
  function toggleTheme() {
    theme = window.Sakina ? Sakina.toggle() : (theme === 'dark' ? 'light' : 'dark');
    if (!window.Sakina) document.documentElement.setAttribute('data-theme', theme);
  }
  function _updateThemeControl() {
    const btn = $('themeToggle');
    btn.setAttribute('data-label-day', I18N.t('themeToLight'));
    btn.setAttribute('data-label-night', I18N.t('themeToDark'));
    theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    btn.setAttribute('aria-label', I18N.t(theme === 'dark' ? 'themeToLight' : 'themeToDark'));
    btn.setAttribute('title', I18N.t(theme === 'dark' ? 'themeToLight' : 'themeToDark'));
  }

  // ── Language ─────────────────────────────────────────────
  function toggleLang() {
    lang = lang === 'en' ? 'ar' : 'en';
    I18N.setLang(lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    try { localStorage.setItem('ic-lang', lang); } catch (_) {}
    applyI18n();
    renderAll();
  }

  // ── View switching ───────────────────────────────────────
  function setView(v) {
    view = v;
    const isYear = v === 'year';
    $('appMain').classList.toggle('year-mode', isYear);
    $('monthView').hidden = isYear;
    $('yearView').hidden = !isYear;
    $('viewMonthBtn').classList.toggle('active', !isYear);
    $('viewYearBtn').classList.toggle('active', isYear);
    $('viewMonthBtn').setAttribute('aria-selected', String(!isYear));
    $('viewYearBtn').setAttribute('aria-selected', String(isYear));
    if (isYear) renderYear(true); else renderCalendar();
  }

  function renderAll() {
    _renderTodayBanner();
    if (view === 'year') renderYear(true);
    else renderCalendar();
  }

  // ── Formatting helpers (language-aware) ──────────────────
  function fmtHijri(h) {
    const m = MONTHS[h.month - 1];
    if (lang === 'ar') return `${I18N.num(h.day)} ${m.ar} ${I18N.num(h.year)} هـ`;
    return `${h.day} ${m.en} ${h.year} AH`;
  }
  function fmtMonthYear(y, m) {
    const mn = MONTHS[m - 1];
    if (lang === 'ar') return `${mn.ar} ${I18N.num(y)} هـ`;
    return `${mn.en} ${y} AH`;
  }
  function gregLocale() { return lang === 'ar' ? 'ar' : 'en-GB'; }
  function fmtGreg(date, opts) {
    return date.toLocaleDateString(gregLocale(), Object.assign({ timeZone: 'UTC' }, opts));
  }

  // ── Apply UI translations + direction-sensitive bits ─────
  function applyI18n() {
    // Simple text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = I18N.t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = I18N.t(el.getAttribute('data-i18n-html'));
    });

    // Controls
    _updateThemeControl();
    $('langLabel').textContent = I18N.t('langToggle');
    $('langToggle').setAttribute('aria-label', I18N.t('langToggleAria'));
    $('langToggle').setAttribute('title', I18N.t('langToggleAria'));

    // Nav button chevrons (point outward for the active direction)
    const left = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>';
    const right = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';
    const prevG = lang === 'ar' ? right : left;
    const nextG = lang === 'ar' ? left : right;
    $('prevMonth').innerHTML = prevG; $('nextMonth').innerHTML = nextG;
    $('prevYear').innerHTML  = prevG; $('nextYear').innerHTML  = nextG;
    $('prevMonth').title = I18N.t('prevMonth'); $('nextMonth').title = I18N.t('nextMonth');
    $('prevYear').title  = I18N.t('prevYear');  $('nextYear').title  = I18N.t('nextYear');
    $('prevMonth').setAttribute('aria-label', I18N.t('prevMonth')); $('nextMonth').setAttribute('aria-label', I18N.t('nextMonth'));
    $('prevYear').setAttribute('aria-label', I18N.t('prevYear'));   $('nextYear').setAttribute('aria-label', I18N.t('nextYear'));
    $('btnToday').title = I18N.t('jumpToday');
    $('btnThisYear').textContent = I18N.t('thisYear');
    $('projectsLabel').textContent = I18N.t('allProjects');
    $('projectsLink').setAttribute('aria-label', I18N.t('allProjectsAria'));

    // Weekday header row
    _renderWeekdays();

    // Legends (month + year)
    const legendHTML = _legendHTML();
    $('legend').innerHTML = legendHTML;
    $('yearLegend').innerHTML = legendHTML;
    $('yearHint').textContent = lang === 'ar' ? '← اسحب لتصفّح الأشهر' : 'scroll to browse all 12 months →';

    // Sidebar titles
    $('upcomingTitle').innerHTML = _sidebarTitleHTML('upcoming');
    $('weeklyTitle').innerHTML = _sidebarTitleHTML('weekly');
    _renderWeeklyCard();
  }

  function _legendHTML() {
    const items = [
      ['eid', 'legEid'], ['night', 'legNight'], ['fasting', 'legFasting'],
      ['blessed', 'legBlessed'], ['historical', 'legHistorical'],
    ];
    return items.map(([cat, key]) =>
      `<div class="legend-item"><span class="leg-dot cat-${cat}"></span>${I18N.t(key)}</div>`
    ).join('') +
      `<div class="legend-item legend-moon"><span class="sk-moon" style="--x:-6px"></span>${I18N.t('moonLegend')}</div>`;
  }

  function _sidebarTitleHTML(which) {
    const main = I18N.t(which === 'upcoming' ? 'upcomingTitle' : 'weeklyTitle');
    const sub  = I18N.t(which === 'upcoming' ? 'upcomingTitleAr' : 'weeklyTitleAr');
    return `<span class="ar-label">${main}</span>${sub}`;
  }

  function _renderWeekdays() {
    const names = I18N.t('weekdaysShort');
    $('calWeekdays').innerHTML = names
      .map((n, i) => `<div class="wd${i === 5 ? ' fri' : ''}">${n}</div>`)
      .join('');
  }

  // ── Today banner ─────────────────────────────────────────
  function _renderTodayBanner() {
    const banner = $('todayBanner');
    const specials = getSpecialDaysFor(
      todayHijri.year, todayHijri.month, todayHijri.day, todayGregorian.getDay()
    ).map(e => localizeEvent(e, lang));

    const gStr = fmtGreg(_toUTC(todayGregorian), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const m = MONTHS[todayHijri.month - 1];
    const title = lang === 'ar'
      ? `${I18N.num(todayHijri.day)} ${m.ar} <em>${I18N.num(todayHijri.year)}</em>`
      : `${todayHijri.day} ${m.en} <em>${todayHijri.year}</em>`;
    const sub = lang === 'ar'
      ? `${todayHijri.day} ${m.en} ${todayHijri.year} AH`
      : `${I18N.toArabic(todayHijri.day)} ${m.ar} ${I18N.toArabic(todayHijri.year)} هـ`;
    const chips = specials.map(e =>
      `<button type="button" class="sk-tag today-chip cat-soft-${e.category}" data-today-event="${e.id}">${e.shortName || e.name}</button>`
    ).join('');

    const ramadan = _nextRamadan();
    let ramadanHTML = '';
    if (ramadan && ramadan.now) {
      ramadanHTML = `<div class="ramadan sk-card"><div class="ramadan__top"><span class="sk-eyebrow">${I18N.t('ramadanTitle')} ${I18N.num(todayHijri.year)}</span>${LANTERN}</div>
        <div class="ramadan__count"><span class="sk-display">${I18N.t('ramadanNow')}</span></div></div>`;
    } else if (ramadan) {
      const expected = fmtGreg(ramadan.gregorian, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      ramadanHTML = `<div class="ramadan sk-card"><div class="ramadan__top"><span class="sk-eyebrow">${I18N.t('ramadanTitle')} ${I18N.num(ramadan.hijriYear)}</span>${LANTERN}</div>
        <div class="ramadan__count"><span class="sk-display">${I18N.num(ramadan.days)}</span><span>${I18N.t('daysToGo')(ramadan.days)}</span></div>
        <span class="ramadan__date">${I18N.t('expected')}: ${expected}</span></div>`;
    }

    banner.innerHTML = `
      <div class="today__main">
        <span class="sk-eyebrow">${I18N.t('todayLabel')} · ${gStr}</span>
        <h1 class="sk-display today__title">${title}</h1>
        <span class="today__sub" ${lang === 'ar' ? 'lang="en" dir="ltr"' : 'lang="ar" dir="rtl"'}>${sub}</span>
        ${chips ? `<div class="today__chips">${chips}</div>` : ''}
      </div>
      <div class="today__side">
        ${ramadanHTML}
        <div class="today__moon sk-arch" aria-label="${_phaseName(todayHijri.day)}">
          <i class="sk-twinkle" style="left:20%;top:23%"></i><i class="sk-twinkle" style="left:74%;top:33%;animation-delay:1.2s"></i><i class="sk-twinkle" style="left:30%;top:55%;animation-delay:.6s"></i>
          <span class="sk-moon today__moon-disc" style="--x:${_moonX(todayHijri.day, 60)}"></span>
          <span class="today__moon-name">${_phaseName(todayHijri.day)}</span>
        </div>
      </div>`;

    banner.querySelectorAll('[data-today-event]').forEach(btn => {
      btn.addEventListener('click', () => {
        const raw = getSpecialDaysFor(todayHijri.year, todayHijri.month, todayHijri.day, todayGregorian.getDay());
        openModal(raw, todayHijri, _toUTC(todayGregorian));
      });
    });
  }

  const LANTERN = '<svg class="sk-swing" width="26" height="30" viewBox="0 0 24 28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 1v3"/><path d="M9 4h6"/><path d="M8 4 6.5 8h11L16 4"/><path d="M6.5 8C5 12 5 17 6.5 21h11c1.5-4 1.5-9 0-13"/><path d="M12 10.5c-1.6 1.7-1.6 5.3 0 7 1.6-1.7 1.6-5.3 0-7Z" fill="currentColor" opacity=".55"/><path d="m6.5 21 1.5 3h8l1.5-3"/></svg>';

  // Moon glyph: offset of the lit inset shadow for a Hijri day (waxing lit on the right)
  function _moonX(day, size) {
    const x = day <= 15 ? -Math.round(size * day / 15) : Math.round(size * (30 - day) / 15);
    return x + 'px';
  }
  function _phaseName(day) {
    const i = day <= 3 ? 0 : day <= 6 ? 1 : day <= 8 ? 2 : day <= 13 ? 3 : day <= 15 ? 4 : day <= 21 ? 5 : day <= 23 ? 6 : 7;
    return I18N.t('moonPhases')[i];
  }

  // Walk forward through the Umm al-Qura calendar to the next 1 Ramadan
  function _nextRamadan() {
    if (todayHijri.month === 9) return { now: true };
    for (let i = 1; i <= 400; i++) {
      const local = new Date(todayGregorian.getFullYear(), todayGregorian.getMonth(), todayGregorian.getDate() + i);
      const g = new Date(Date.UTC(local.getFullYear(), local.getMonth(), local.getDate(), 12));
      const h = HijriCalendar.fromGregorian(g);
      if (h.month === 9 && h.day === 1) return { days: i, gregorian: g, hijriYear: h.year };
    }
    return null;
  }

  function _toUTC(d) {
    return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 12));
  }

  // ══════════════════════════════════════════════════════════
  //  MONTH VIEW
  // ══════════════════════════════════════════════════════════
  function renderCalendar() {
    _renderNav();
    _renderGrid();
    _renderMonthCard();
    _renderUpcoming();
  }

  function _renderNav() {
    $('navHijri').textContent = fmtMonthYear(currentYear, currentMonth);

    const days = HijriCalendar.getMonthData(currentYear, currentMonth);
    if (days.length) {
      const first = days[0].gregorian;
      const last  = days[days.length - 1].gregorian;
      const opts  = { month: 'long', year: 'numeric' };
      const firstStr = fmtGreg(first, opts);
      const lastStr  = fmtGreg(last, opts);
      $('navGregorian').textContent = (firstStr === lastStr)
        ? firstStr
        : `${fmtGreg(first, { month: 'short' })} – ${lastStr}`;
    }
  }

  function _renderGrid() {
    const container = $('calDays');
    container.innerHTML = '';
    const days = HijriCalendar.getMonthData(currentYear, currentMonth);
    if (!days.length) return;

    const startDow = days[0].dayOfWeek;
    for (let i = 0; i < startDow; i++) {
      const empty = document.createElement('div');
      empty.className = 'day-cell empty';
      container.appendChild(empty);
    }
    for (const dayData of days) container.appendChild(_buildDayCell(dayData));
  }

  function _buildDayCell(dayData) {
    const { gregorian, hijri, dayOfWeek } = dayData;
    const specials = getSpecialDaysFor(hijri.year, hijri.month, hijri.day, dayOfWeek);
    const primary  = specials[0] ? localizeEvent(specials[0], lang) : null;
    const isToday  = _isToday(gregorian);
    const isFriday = dayOfWeek === 5;

    const cell = document.createElement('div');
    cell.className = 'day-cell';
    if (isToday)  cell.classList.add('is-today');
    if (isFriday) cell.classList.add('is-friday');
    if (specials.length) {
      cell.classList.add('is-special', `bg-${specials[0].category}`);
    }

    const dotHTML = specials.slice(0, 3)
      .map(s => `<span class="day-dot" style="background:${CAT_COLORS[s.category]}"></span>`)
      .join('');
    const labelText = primary ? (primary.shortName || '') : '';

    cell.innerHTML = `
      <div class="day-top">
        <div class="day-hijri">${I18N.num(hijri.day)}</div>
        <span class="sk-moon day-moon" style="--x:${_moonX(hijri.day, 14)}" title="${_phaseName(hijri.day)}"></span>
      </div>
      ${labelText ? `<div class="day-label cat-soft-${specials[0].category}">${labelText}</div>` : ''}
      <div class="day-bottom">
        <div class="day-gregorian">${I18N.num(gregorian.getUTCDate())}</div>
        ${dotHTML ? `<div class="day-dots">${dotHTML}</div>` : ''}
      </div>`;
    const gLong = fmtGreg(gregorian, { weekday: 'long', day: 'numeric', month: 'long' });
    cell.setAttribute('aria-label', `${fmtHijri(hijri)} · ${gLong}${primary ? ' · ' + (primary.shortName || primary.name) : ''}`);

    if (specials.length) {
      cell.setAttribute('role', 'button');
      cell.setAttribute('tabindex', '0');
      const open = () => openModal(specials, hijri, gregorian);
      cell.addEventListener('click', open);
      cell.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });
    }
    return cell;
  }

  function _isToday(gUTC) {
    return gUTC.getUTCFullYear() === todayGregorian.getFullYear() &&
           gUTC.getUTCMonth()    === todayGregorian.getMonth() &&
           gUTC.getUTCDate()     === todayGregorian.getDate();
  }

  // ── Month info card ───────────────────────────────────────
  function _renderMonthCard() {
    const card = $('monthCard');
    const seen = new Set();
    const events = [];
    const days = HijriCalendar.getMonthData(currentYear, currentMonth);

    for (const { hijri, dayOfWeek } of days) {
      for (const evt of getSpecialDaysFor(hijri.year, hijri.month, hijri.day, dayOfWeek)) {
        if (!seen.has(evt.id) && evt.priority >= 1) { seen.add(evt.id); events.push(evt); }
      }
    }

    const title = fmtMonthYear(currentYear, currentMonth);
    if (!events.length) {
      card.innerHTML = `<p class="month-title">${title}</p><p class="month-body">${I18N.t('monthEmpty')}</p>`;
      return;
    }

    const tagsHTML = events
      .sort((a, b) => b.priority - a.priority)
      .map(e => localizeEvent(e, lang))
      .map(e => `
        <span class="month-tag">
          <span class="month-tag-dot" style="background:${CAT_COLORS[e.category]}"></span>
          ${e.shortName}
        </span>`)
      .join('');

    card.innerHTML = `
      <p class="month-title">${title}</p>
      <p class="month-body">${I18N.t('monthContains')}</p>
      <div class="month-highlights">${tagsHTML}</div>`;
  }

  // ── Upcoming events ───────────────────────────────────────
  function _renderUpcoming() {
    const list = $('upcomingList');
    list.innerHTML = '';
    const upcoming = _findUpcomingEvents(90, 8);
    if (!upcoming.length) {
      list.innerHTML = `<p class="upcoming-empty">${I18N.t('upcomingEmpty')}</p>`;
      return;
    }
    for (const item of upcoming) list.appendChild(_buildUpcomingItem(item));
  }

  function _findUpcomingEvents(maxDays, limit) {
    const results = [];
    const seen = new Set();
    for (let i = 1; i <= maxDays && results.length < limit; i++) {
      const local = new Date(todayGregorian.getTime() + i * 86400000);
      const g = new Date(Date.UTC(local.getFullYear(), local.getMonth(), local.getDate(), 12));
      const h = HijriCalendar.fromGregorian(g);
      const dow = local.getDay();
      const evts = getSpecialDaysFor(h.year, h.month, h.day, dow)
        .filter(e => e.priority >= 2 && e.type !== 'weekly');
      for (const evt of evts) {
        const key = `${evt.id}-${h.year}-${h.month}`;
        if (!seen.has(key)) { seen.add(key); results.push({ event: evt, gregorian: g, hijri: h, daysUntil: i }); }
      }
    }
    return results;
  }

  function _buildUpcomingItem({ event, gregorian, hijri, daysUntil }) {
    const ev = localizeEvent(event, lang);
    const item = document.createElement('div');
    item.className = 'upcoming-item';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');

    const gStr = fmtGreg(gregorian, { day: 'numeric', month: 'short' });
    const countText = daysUntil === 1 ? I18N.t('tomorrow') : I18N.t('inDays')(daysUntil);
    const secondary = lang === 'ar'
      ? `<div class="upcoming-name">${ev.shortName}</div>`
      : `<div class="upcoming-name">${ev.name}</div>`;

    item.innerHTML = `
      <span class="upcoming-dot cat-soft-${event.category}"><span style="background:${CAT_COLORS[event.category]}"></span></span>
      <div class="upcoming-info">
        <div class="upcoming-ar">${event.arabicName}</div>
        ${secondary}
        <div class="upcoming-date">${fmtHijri(hijri)} · ${gStr}</div>
      </div>
      <span class="upcoming-countdown">${countText}</span>`;

    const open = () => {
      setView('month');
      navigateTo(hijri.year, hijri.month);
      openModal([event], hijri, gregorian);
    };
    item.addEventListener('click', open);
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
    return item;
  }

  // ── Weekly Sunnah card ────────────────────────────────────
  function _renderWeeklyCard() {
    const el = $('weeklyInfo');
    if (!el) return;
    el.innerHTML = `
      <div class="weekly-item">
        <span class="weekly-icon" style="background:var(--weekly)"></span>
        <div><strong>${I18N.t('fridayName')}</strong><span>${I18N.t('fridayDesc')}</span></div>
      </div>
      <div class="weekly-item">
        <span class="weekly-icon" style="background:var(--fasting)"></span>
        <div><strong>${I18N.t('monThuName')}</strong><span>${I18N.t('monThuDesc')}</span></div>
      </div>`;
  }

  // ══════════════════════════════════════════════════════════
  //  YEAR VIEW — 12 narrow adjacent month columns
  // ══════════════════════════════════════════════════════════
  function renderYear(scrollToCurrent) {
    $('yearTitle').textContent = lang === 'ar'
      ? `${I18N.num(yearViewYear)} هـ`
      : `${yearViewYear} AH`;

    const track = $('yearTrack');
    track.innerHTML = '';
    const yearData = HijriCalendar.getYearData(yearViewYear);
    const narrow = I18N.t('weekdaysNarrow');

    let currentColEl = null;
    let todayRowEl = null;

    for (const monthObj of yearData) {
      const col = document.createElement('div');
      col.className = 'year-col';

      // Header
      const range = _monthGregRange(monthObj.days);
      const isCurrentMonth = (yearViewYear === todayHijri.year && monthObj.month === todayHijri.month);
      if (isCurrentMonth) col.classList.add('is-current-month');

      const primaryName = lang === 'ar' ? monthObj.names.ar : monthObj.names.en;
      const secName     = lang === 'ar' ? monthObj.names.en : monthObj.names.ar;
      const secClass    = lang === 'ar' ? 'yc-month-en' : 'yc-month-en yc-sec-ar';
      col.innerHTML = `
        <div class="yc-head">
          <div class="yc-month-ar">${primaryName}</div>
          <div class="${secClass}">${secName}</div>
          <div class="yc-greg">${range}</div>
        </div>`;

      const daysWrap = document.createElement('div');
      daysWrap.className = 'yc-days';

      for (const d of monthObj.days) {
        const specials = getSpecialDaysFor(d.hijri.year, d.hijri.month, d.hijri.day, d.dayOfWeek);
        const isFri = d.dayOfWeek === 5;
        const isToday = _isToday(d.gregorian);

        const row = document.createElement('div');
        row.className = 'yc-day';
        if (isFri) row.classList.add('is-fri');
        if (isToday) { row.classList.add('is-today'); todayRowEl = row; }
        if (specials.length) row.classList.add('is-special', `bg-${specials[0].category}`);

        const dot = specials.length
          ? `<span class="yc-dot" style="background:${CAT_COLORS[specials[0].category]}"></span>` : '';

        row.innerHTML = `
          <span class="yc-dow">${narrow[d.dayOfWeek]}</span>
          <span class="yc-num">${I18N.num(d.hijri.day)}</span>
          ${dot || `<span class="yc-gnum">${I18N.num(d.gregorian.getUTCDate())}</span>`}`;

        if (specials.length) {
          row.setAttribute('role', 'button');
          row.setAttribute('tabindex', '0');
          const open = () => openModal(specials, d.hijri, d.gregorian);
          row.addEventListener('click', open);
          row.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
          });
        }
        daysWrap.appendChild(row);
      }

      col.appendChild(daysWrap);
      track.appendChild(col);
      if (isCurrentMonth) currentColEl = col;
    }

    // Bring the current month / today into view
    if (scrollToCurrent && currentColEl) {
      requestAnimationFrame(() => {
        currentColEl.scrollIntoView({ inline: 'center', block: 'nearest' });
        if (todayRowEl) todayRowEl.scrollIntoView({ block: 'center', inline: 'nearest' });
      });
    }
  }

  function _monthGregRange(days) {
    if (!days.length) return '';
    const first = days[0].gregorian;
    const last  = days[days.length - 1].gregorian;
    const fM = fmtGreg(first, { month: 'short' });
    const lM = fmtGreg(last,  { month: 'short' });
    const fY = first.getUTCFullYear(), lY = last.getUTCFullYear();
    if (fM === lM) return `${fM} ${I18N.num(fY)}`;
    return fY === lY ? `${fM} – ${lM} ${I18N.num(lY)}` : `${fM} ${I18N.num(fY)} – ${lM} ${I18N.num(lY)}`;
  }

  // ══════════════════════════════════════════════════════════
  //  NAVIGATION
  // ══════════════════════════════════════════════════════════
  function navigate(direction) {
    const nm = direction === -1
      ? HijriCalendar.prevMonth(currentYear, currentMonth)
      : HijriCalendar.nextMonth(currentYear, currentMonth);
    navigateTo(nm.year, nm.month);
  }
  function navigateTo(hYear, hMonth) {
    if (hYear < 1400 || hYear > 1600) return;
    currentYear = hYear; currentMonth = hMonth;
    renderCalendar();
  }
  function goToToday() {
    navigateTo(todayHijri.year, todayHijri.month);
  }
  function navigateYear(direction) {
    const y = yearViewYear + direction;
    if (y < 1400 || y > 1600) return;
    yearViewYear = y;
    renderYear(false);
  }

  // ══════════════════════════════════════════════════════════
  //  MODAL
  // ══════════════════════════════════════════════════════════
  function openModal(rawEvents, hijri, gregorian) {
    const events = rawEvents.map(e => localizeEvent(e, lang));
    $('modalContent').innerHTML = _buildModalHTML(events, hijri, gregorian);
    const overlay = $('modal');
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    $('modalBox').scrollTop = 0;

    if (events.length > 1) {
      const chips = $('modalContent').querySelectorAll('.mc-event-chip');
      const panels = $('modalContent').querySelectorAll('.mc-event-panel');
      chips.forEach((chip, i) => {
        chip.addEventListener('click', () => {
          chips.forEach(c => c.classList.remove('active'));
          panels.forEach(p => { p.style.display = 'none'; });
          chip.classList.add('active');
          panels[i].style.display = 'block';
        });
      });
    }
  }

  function closeModal() {
    const overlay = $('modal');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function _buildModalHTML(events, hijri, gregorian) {
    const primary = events[0];
    const badgeColor = CAT_COLORS[primary.category];
    const hijriStr = fmtHijri(hijri);
    const gStr = fmtGreg(gregorian, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    let chipsHTML = '', panelsHTML = '';
    if (events.length > 1) {
      chipsHTML = `<div class="mc-events-strip">
        ${events.map((e, i) => `
          <button class="mc-event-chip ${i === 0 ? 'active' : ''}" type="button">
            ${e.shortName || e.name}
          </button>`).join('')}
      </div>`;
      panelsHTML = events.map((e, i) => `
        <div class="mc-event-panel" style="display:${i === 0 ? 'block' : 'none'}">
          ${_eventDetailHTML(e)}
        </div>`).join('');
    } else {
      panelsHTML = `<div class="mc-event-panel">${_eventDetailHTML(primary)}</div>`;
    }

    const nameLine = (lang === 'ar')
      ? ''  // arabicName already shown prominently above
      : `<span class="mc-name">${primary.name}</span>`;

    return `
      <div class="mc-header">
        <span class="mc-emoji sk-arch" style="color:${badgeColor}" aria-hidden="true"><svg width="26" height="26" viewBox="-12 -12 24 24"><path fill="currentColor" d="M11 0L7.78 3.22L7.78 7.78L3.22 7.78L0 11L-3.22 7.78L-7.78 7.78L-7.78 3.22L-11 0L-7.78 -3.22L-7.78 -7.78L-3.22 -7.78L0 -11L3.22 -7.78L7.78 -7.78L7.78 -3.22Z"/></svg></span>
        <span class="mc-arabic-name">${primary.arabicName}</span>
        ${nameLine}
        <div class="mc-date-line">${hijriStr} &nbsp;·&nbsp; ${gStr}</div>
        <span class="mc-badge cat-soft-${primary.category}">
          ${I18N.t('cat.' + primary.category)}
        </span>
      </div>
      ${chipsHTML}
      ${panelsHTML}`;
  }

  function _eventDetailHTML(evt) {
    let html = `
      <div class="mc-section">
        <div class="mc-section-title">${I18N.t('secAbout')}</div>
        <p class="mc-desc">${evt.description}</p>
      </div>`;

    if (evt.virtues?.length) {
      html += `
        <div class="mc-section">
          <div class="mc-section-title">${I18N.t('secVirtues')}</div>
          <ul class="mc-virtues">${evt.virtues.map(v => `<li>${v}</li>`).join('')}</ul>
        </div>`;
    }

    if (evt.hadiths?.length) {
      html += `
        <div class="mc-section">
          <div class="mc-section-title">${I18N.t('secHadith')}</div>
          ${evt.hadiths.map(h => _hadithHTML(h)).join('')}
        </div>`;
    }

    if (evt.ayahs?.length) {
      html += `
        <div class="mc-section">
          <div class="mc-section-title">${I18N.t('secAyah')}</div>
          ${evt.ayahs.map(a => _ayahHTML(a)).join('')}
        </div>`;
    }

    if (evt.recommendations?.length) {
      html += `
        <div class="mc-section">
          <div class="mc-section-title">${I18N.t('secDo')}</div>
          <div class="mc-recs">${evt.recommendations.map(r => `<div class="mc-rec">${r}</div>`).join('')}</div>
        </div>`;
    }

    if (evt.notes) html += `<div class="mc-note">${evt.notes}</div>`;
    return html;
  }

  function _hadithHTML(h) {
    // In Arabic mode show the original wording when available (text would duplicate it).
    const showText = lang === 'ar' ? (!h.arabic && h.text) : h.text;
    return `
      <div class="hadith-card">
        ${h.arabic ? `<span class="hadith-arabic">${h.arabic}</span>` : ''}
        ${showText ? `<div class="hadith-text">${h.text}</div>` : ''}
        <div class="hadith-meta">
          ${h.narrator ? `<span class="narrator-tag">${h.narrator}</span>` : ''}
          <span class="source-tag">${h.source}</span>
        </div>
      </div>`;
  }

  function _ayahHTML(a) {
    // The Arabic verse is the original; show the English translation only in English mode.
    const showTranslation = lang !== 'ar' && a.translation;
    return `
      <div class="ayah-card">
        <span class="ayah-arabic">${a.arabic}</span>
        ${showTranslation ? `<div class="ayah-translation">${a.translation}</div>` : ''}
        <div class="ayah-ref">${a.reference}</div>
      </div>`;
  }

  // ── Public API ───────────────────────────────────────────
  return { init, renderCalendar, navigate, goToToday, openModal, closeModal, navigateTo, setView };
})();

document.addEventListener('DOMContentLoaded', App.init);
