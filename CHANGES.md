# Islamic Calendar — Enhancement Notes

This round delivered a full enhancement of the calendar while keeping the original
modern / luxurious / high-grade vibe. Everything is still a dependency-free static
site (open `index.html` directly — no build step).

## ✅ Done in this round

### 1. Factual / calculation check (KSA Umm al-Qura)
- The Hijri engine uses the browser's `Intl` **`islamic-umalqura`** calendar — i.e. the
  **official Umm al-Qura calendar of Saudi Arabia**, with a tabular fallback only if the
  browser lacks it.
- Verified the conversion against known KSA dates, e.g.
  - 1 Ramadan 1445 → 11 Mar 2024
  - 1 Shawwal 1445 (Eid al-Fitr) → 10 Apr 2024
  - 9 Dhul Hijjah 1445 (Arafah) → 15 Jun 2024
  - 1 Muharram 1446 → 7 Jul 2024
  - 1 Ramadan 1446 → 1 Mar 2025
- Re-checked the reward "maths" in the content (6 of Shawwal = 36 × 10 ≈ a year;
  White Days = 3 × 10 = a month; Laylat al-Qadr = 1000 months ≈ 83 yrs) — all correct.

### 2. Hadith fact-check (`js/data.js`)
- **Laylat al-Qadr** "whoever stands in prayer…" was attributed to *Sahih al-Bukhari 1901*;
  1901 is the **fasting** hadith. Corrected to **Sahih al-Bukhari 2014** (Kitāb Faḍl Laylat al-Qadr).
- **White Days** second hadith had garbled text ("Thursday and Thursday") and cited
  *Abu Dawud 2452*, which is actually an Umm Salamah narration graded *munkar*. Replaced with
  the authentic Abu Hurairah "three pieces of advice" hadith (**Bukhari 1981, Muslim 721**).
- **Days of Tashreeq** narrator tightened from "Various companions" to **Nubayshah al-Hudhali**.
- Spot-checked all other references (Bukhari/Muslim/Tirmidhi/Abu Dawud/Nasa'i numbers and
  gradings) — the rest were sound.

### 3. Light & dark mode
- Full CSS-variable theme system: dark (refined midnight-navy + gold) and a new luxurious
  **light "parchment" theme** (ivory cards, deep gold, illuminated-manuscript feel).
- Toggle ☀/☾ in the header. Choice saved to `localStorage` (`ic-theme`) and the first
  visit honours the OS `prefers-color-scheme`. An inline head-script prevents theme flash.

### 4. Arabic RTL version (`js/i18n.js` + Arabic content in `js/data.js`)
- Language toggle (`العربية` / `English`), saved to `localStorage` (`ic-lang`).
- Switches `<html dir>` to `rtl`, flips the entire layout, swaps nav arrows, uses the
  **Cairo** font for UI and **Amiri** for Qur'an/headings, and renders **Eastern-Arabic
  numerals (٠–٩)**.
- Full Arabic translation of the UI **and** of every event's description, virtues,
  recommendations and notes. Hadiths show the **original Arabic wording**; ayāt show the
  Arabic verse + Arabic reference. English data is untouched — Arabic is merged via
  `localizeEvent()` keyed by event id (`SPECIAL_DAYS_AR`).

### 5. Whole-year view
- New **Month / Year** switch in the header.
- Year view = **12 narrow month columns** placed adjacently and **horizontally scrollable**
  (with scroll-snap), each column a compact vertical day list (weekday · Hijri day · Gregorian).
- Sticky month headers, special days colour-tinted, Fridays + today highlighted, prev/next
  year + "This Year", and it auto-scrolls to the current month. Works in both LTR and RTL.

### 6. Design polish
- Larger radii, refined shadows, glowing today cell, geometric header pattern per theme,
  hover lifts, nicer scrollbars, keyboard focus/Enter support on day cells, reduced-motion
  support, and improved responsive breakpoints.

## How it was verified
- 30-assertion logic test (Hijri year data, special-day matching, i18n, localisation,
  the hadith fixes) — all passing.
- Headless-Edge screenshots of all states: dark/light, EN/AR, month/year, and the detail
  modal in both languages. (Temp verification files were removed after.)

---

## 💡 Not done yet — ideas for a future round
These were out of scope for "finish ASAP" and can be picked up later:

- [ ] **Prayer times** per the user's location (would need a geolocation + calc library).
- [ ] **Hijri date adjustment (±1 day)** toggle for users whose local sighting differs from Umm al-Qura.
- [ ] **"Add to calendar"** (.ics export) for upcoming sacred days, and optional reminders.
- [ ] **Deep links / shareable URLs** (`?lang=ar&theme=light&view=year`) — handy and would also
      make automated screenshotting trivial.
- [ ] **PWA / offline**: manifest + service worker so it installs and works offline.
- [ ] **Audio**: short Qur'an recitation for the displayed ayah.
- [ ] **More languages** (Urdu, French, Turkish, Indonesian) — the i18n layer already supports it.
- [ ] **Print stylesheet** for the year view (print a full year on one page).
- [ ] A formal automated test/CI setup (the logic test was run ad-hoc this round).
- [ ] Independent scholarly review of the Arabic translations before publishing widely.
