'use strict';
/* ══════════════════════════════════════════════════════════
   i18n.js — Bilingual UI dictionary (English / Arabic)
   The interface flips to a full right-to-left Arabic layout
   when the language is set to 'ar'. Event content (descriptions,
   virtues, etc.) carries its own *_ar fields inside data.js.
   ══════════════════════════════════════════════════════════ */

const I18N = (() => {

  const DICT = {
    en: {
      dir: 'ltr',
      // Today & moon (Sakīna redesign)
      todayLabel: 'Today',
      appName: 'Islamic Calendar',
      allProjects: 'All projects',
      allProjectsAria: 'All Islamic projects',
      ramadanTitle: 'Ramadan',
      ramadanNow: 'Ramadan Mubarak',
      daysToGo: (n) => n === 1 ? 'day to go' : 'days to go',
      expected: 'Expected',
      moonPhases: ['New crescent', 'Waxing crescent', 'First quarter', 'Waxing gibbous', 'Full moon', 'Waning gibbous', 'Last quarter', 'Waning crescent'],
      moonLegend: 'Moon tonight',
      // Header
      headerSub: 'Sacred Days & Blessed Times',
      // Controls
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      langToggle: 'العربية',
      langToggleAria: 'Switch to Arabic',
      viewMonth: 'Month',
      viewYear: 'Year',
      // Navigation
      prevMonth: 'Previous month',
      nextMonth: 'Next month',
      prevYear: 'Previous year',
      nextYear: 'Next year',
      today: 'Today',
      thisYear: 'This Year',
      jumpToday: 'Jump to today',
      // Legend
      legEid: 'Eid',
      legNight: 'Sacred Night',
      legFasting: 'Fasting',
      legBlessed: 'Blessed Days',
      legHistorical: 'Historical',
      // Weekdays (Sun → Sat)
      weekdaysShort:  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekdaysNarrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      weekdaysLong:   ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      // Sidebar
      upcomingTitle: 'Upcoming Sacred Days',
      upcomingTitleAr: 'الأيام المباركة القادمة',
      weeklyTitle: 'Weekly Sunnah',
      weeklyTitleAr: 'السنن الأسبوعية',
      fridayName: "Friday (Jumu'ah)",
      fridayDesc: "Pray Jumu'ah · Read Surah Al-Kahf · Make du'a in the last hour before Maghrib",
      monThuName: 'Monday & Thursday',
      monThuDesc: 'Sunnah fasting days — deeds are presented to Allah and the Prophet ﷺ loved to be fasting when that happens',
      monthContains: 'This month contains:',
      monthEmpty: 'A month to maintain good deeds and prepare for what comes next.',
      upcomingEmpty: 'No major events in the next 90 days.',
      // Countdown
      tomorrow: 'Tomorrow',
      inDays: (n) => `in ${n} days`,
      // Disclaimer / notice
      disclaimer: 'Dates follow the Umm al-Qura (Saudi Arabia) calendar and may differ by ±1 day from local moon sighting. Islamic days begin at <em>sunset</em>, not midnight.',
      notice: 'Your browser may not fully support the Islamic calendar. Dates shown use an approximation.',
      // Modal sections
      secAbout: 'About',
      secVirtues: 'Virtues & Benefits',
      secHadith: 'Hadith',
      secAyah: 'Quranic Verse',
      secDo: 'What to Do',
      close: 'Close',
      ahSuffix: 'AH',
      // Category labels
      cat: {
        eid: 'Celebration',
        night: 'Sacred Night',
        fasting: 'Fasting Day',
        blessed: 'Blessed Days',
        historical: 'Historical',
        weekly: 'Weekly Sunnah',
      },
    },

    ar: {
      dir: 'rtl',
      todayLabel: 'اليوم',
      appName: 'التقويم الإسلامي',
      allProjects: 'كل المشاريع',
      allProjectsAria: 'كل المشاريع الإسلامية',
      ramadanTitle: 'رمضان',
      ramadanNow: 'رمضان مبارك',
      daysToGo: (n) => n === 1 ? 'يوم متبقٍّ' : (n === 2 ? 'يومان متبقيان' : n <= 10 ? 'أيام متبقية' : 'يومًا متبقيًا'),
      expected: 'المتوقع',
      moonPhases: ['هلال أول الشهر', 'هلال متزايد', 'التربيع الأول', 'أحدب متزايد', 'بدر', 'أحدب متناقص', 'التربيع الأخير', 'هلال متناقص'],
      moonLegend: 'القمر الليلة',
      headerSub: 'أيامٌ مباركة وأوقاتٌ فاضلة',
      themeToLight: 'الوضع الفاتح',
      themeToDark: 'الوضع الداكن',
      langToggle: 'English',
      langToggleAria: 'التبديل إلى الإنجليزية',
      viewMonth: 'شهر',
      viewYear: 'سنة',
      prevMonth: 'الشهر السابق',
      nextMonth: 'الشهر التالي',
      prevYear: 'السنة السابقة',
      nextYear: 'السنة التالية',
      today: 'اليوم',
      thisYear: 'هذه السنة',
      jumpToday: 'الانتقال إلى اليوم',
      legEid: 'عيد',
      legNight: 'ليلة مباركة',
      legFasting: 'صيام',
      legBlessed: 'أيام مباركة',
      legHistorical: 'أحداث تاريخية',
      weekdaysShort:  ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
      weekdaysNarrow: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
      weekdaysLong:   ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
      upcomingTitle: 'الأيام المباركة القادمة',
      upcomingTitleAr: 'Upcoming Sacred Days',
      weeklyTitle: 'السنن الأسبوعية',
      weeklyTitleAr: 'Weekly Sunnah',
      fridayName: 'الجمعة',
      fridayDesc: 'صلاة الجمعة · قراءة سورة الكهف · الدعاء في الساعة الأخيرة قبل المغرب',
      monThuName: 'الإثنين والخميس',
      monThuDesc: 'يوما صيام السُّنّة — تُعرض الأعمال على الله، وكان النبي ﷺ يحب أن يُعرض عمله وهو صائم',
      monthContains: 'يحتوي هذا الشهر على:',
      monthEmpty: 'شهرٌ للمداومة على الأعمال الصالحة والاستعداد لما هو آتٍ.',
      upcomingEmpty: 'لا توجد مناسبات كبرى خلال التسعين يومًا القادمة.',
      tomorrow: 'غدًا',
      inDays: (n) => `بعد ${num(n)} ${n === 2 ? 'يومين' : n <= 10 ? 'أيام' : 'يومًا'}`,
      disclaimer: 'التواريخ وفق تقويم أم القرى (المملكة العربية السعودية) وقد تختلف بمقدار ±يوم واحد عن رؤية الهلال المحلية. يبدأ اليوم الإسلامي عند <em>غروب الشمس</em> لا منتصف الليل.',
      notice: 'قد لا يدعم متصفحك التقويم الإسلامي بالكامل. التواريخ المعروضة تقريبية.',
      secAbout: 'نبذة',
      secVirtues: 'الفضائل والمنافع',
      secHadith: 'الحديث',
      secAyah: 'آيات قرآنية',
      secDo: 'ما الذي تفعله',
      close: 'إغلاق',
      ahSuffix: 'هـ',
      cat: {
        eid: 'احتفال',
        night: 'ليلة مباركة',
        fasting: 'يوم صيام',
        blessed: 'أيام مباركة',
        historical: 'حدث تاريخي',
        weekly: 'سُنّة أسبوعية',
      },
    },
  };

  // Eastern-Arabic numeral conversion (١٢٣…) used in Arabic mode
  const _arDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  function toArabic(value) {
    return String(value).replace(/[0-9]/g, d => _arDigits[+d]);
  }

  let _lang = 'en';

  function setLang(lang) { _lang = (lang === 'ar') ? 'ar' : 'en'; }
  function getLang() { return _lang; }
  function isRTL() { return _lang === 'ar'; }

  // Lookup a key for the active language (supports dotted paths like 'cat.eid')
  function t(key) {
    const parts = key.split('.');
    let v = DICT[_lang];
    for (const p of parts) v = v?.[p];
    if (v === undefined) { v = DICT.en; for (const p of parts) v = v?.[p]; }
    return v;
  }

  // Render a number in the active language's numeral system
  // Arabic uses ordinary digits (123) unless the reader chose Arabic-Indic (١٢٣)
  function num(value) {
    if (_lang !== 'ar') return String(value);
    return window.Sakina ? Sakina.numAr(value) : String(value);
  }

  return { setLang, getLang, isRTL, t, num, toArabic, DICT };
})();
