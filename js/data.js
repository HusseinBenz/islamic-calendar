'use strict';
/* ══════════════════════════════════════════════════════════
   data.js — Special Islamic Days Database
   Each event has:
     id, name, arabicName, shortName, emoji, category, priority
     type: 'specific' | 'period' | 'monthly-days'
     hijriMonth, day / dayStart+dayEnd / monthDays
     description, virtues[], recommendations[], hadiths[], ayahs[], notes?
   Priority:  5 = Eid  |  4 = Laylatul Qadr  |  3 = Major
              2 = Notable  |  1 = Regular  |  0 = Weekly recurring
   ══════════════════════════════════════════════════════════ */

const SPECIAL_DAYS = [

  // ────────────────────────────────────────────────────────
  // MUHARRAM
  // ────────────────────────────────────────────────────────
  {
    id: 'new-year',
    name: 'Islamic New Year',
    arabicName: 'رأس السنة الهجرية',
    shortName: 'New Year',
    emoji: '🌙',
    category: 'historical',
    priority: 2,
    type: 'specific',
    hijriMonth: 1,
    day: 1,
    description:
      'The first of Muharram marks the beginning of the Hijri (Islamic lunar) year. ' +
      'The Islamic calendar was established to commemorate the Hijrah — the Prophet Muhammad\'s ﷺ ' +
      'migration from Mecca to Medina in 622 CE. This migration was a defining moment of the early ' +
      'Muslim community: a sacrifice of home and property in exchange for obedience to Allah. ' +
      'Muharram is one of the four sacred (Haram) months in which fighting was forbidden even in pre-Islamic Arabia.',
    virtues: [
      'Muharram is called "the sacred month of Allah" — honouring Allah\'s own title for it',
      'One of the four sacred months alongside Rajab, Dhul Qa\'dah, and Dhul Hijjah',
      'Fasting in Muharram is the best voluntary fast after Ramadan',
      'A time for reflection, renewed intentions, and gratitude for another year of faith',
    ],
    recommendations: [
      'Reflect on your deeds of the past year and renew your intentions for the new year',
      'Increase voluntary fasting throughout the month of Muharram',
      'Make du\'a for a year of obedience, health, and closeness to Allah',
      'Learn about the Hijrah and its lessons of sacrifice and trust in Allah ﷻ',
    ],
    hadiths: [
      {
        text:
          'The best of fasting after Ramadan is fasting Allah\'s month of Muharram, and the best ' +
          'of prayer after the obligatory prayer is the night prayer.',
        narrator: 'Abu Hurairah (رضي الله عنه)',
        source: 'Sahih Muslim 1163',
      },
    ],
    ayahs: [
      {
        arabic:
          'إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا فِي كِتَابِ اللَّهِ ' +
          'يَوْمَ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ مِنْهَا أَرْبَعَةٌ حُرُمٌ',
        translation:
          'Indeed, the number of months with Allah is twelve months in the register of Allah ' +
          '[from] the day He created the heavens and the earth; of these, four are sacred.',
        reference: 'Surah At-Tawbah 9:36',
      },
    ],
  },

  {
    id: 'tasuaah',
    name: "Tasuaah — 9th of Muharram",
    arabicName: 'يوم التاسوعاء',
    shortName: "Tasuaah (9th)",
    emoji: '✨',
    category: 'fasting',
    priority: 2,
    type: 'specific',
    hijriMonth: 1,
    day: 9,
    description:
      'The 9th of Muharram is known as Tasuaah. When the Prophet ﷺ noticed the Jews fasting on ' +
      'Ashura (10th Muharram) in Medina, he adopted and commanded the fast. He also intended to ' +
      'add the 9th the following year, to distinguish Muslim practice from that of the People of ' +
      'the Book — but he passed away before the next Muharram. Therefore fasting the 9th alongside ' +
      'the 10th is a confirmed Sunnah and the most complete way to observe Ashura.',
    virtues: [
      'Sunnah of the Prophet ﷺ — he intended to fast this day with Ashura',
      'Distinguishes the Muslim fast from other religious traditions',
      'Maximises the blessings of the Ashura fast',
    ],
    recommendations: [
      'Fast today (9th) together with Ashura (10th) — this is the most complete practice',
      'Alternatively, fast the 10th and 11th',
      'Make dhikr, du\'a, and seek forgiveness throughout the day',
    ],
    hadiths: [
      {
        text:
          'If I live until next year, I will certainly fast the ninth of Muharram along with the tenth.',
        narrator: 'Ibn Abbas (رضي الله عنهما)',
        source: 'Sahih Muslim 1134',
      },
    ],
    ayahs: [],
  },

  {
    id: 'ashura',
    name: 'Ashura — Day of Salvation',
    arabicName: 'يوم عاشوراء',
    shortName: 'Ashura',
    emoji: '🌊',
    category: 'fasting',
    priority: 3,
    type: 'specific',
    hijriMonth: 1,
    day: 10,
    description:
      'Ashura — the 10th of Muharram — is one of the most significant days of the Islamic year. ' +
      'On this day, Allah ﷻ saved Prophet Musa (Moses) ﷺ and the Children of Israel from Pharaoh ' +
      'by parting the sea. When the Prophet Muhammad ﷺ arrived in Medina and found the Jews fasting, ' +
      'he learned the reason and declared: "We have more right to Musa than you," and he fasted ' +
      'and commanded the believers to fast. Fasting on Ashura expiates the sins of the previous year.',
    virtues: [
      'Fasting expiates the minor sins of the previous year',
      'Commemorates Allah\'s salvation of Prophet Musa ﷺ from Pharaoh — a day of gratitude',
      'The Prophet ﷺ gave it great importance and commanded Muslims to fast it',
      'A blessed day in the sacred month of Muharram',
    ],
    recommendations: [
      'Fast on this day — one of the highest-reward voluntary fasts in the year',
      'Fast the 9th (Tasuaah) alongside it to follow the fullest Sunnah',
      'Make du\'a, engage in dhikr, and reflect on Allah\'s mercy toward those who obey Him',
      'Avoid any innovated mourning practices not established in the authentic Sunnah',
    ],
    hadiths: [
      {
        text:
          'Fasting the day of Ashura — I hope from Allah that it expiates the sins of the year before it.',
        narrator: 'Abu Qatada (رضي الله عنه)',
        source: 'Sahih Muslim 1162',
      },
      {
        text:
          'The Prophet ﷺ came to Medina and found the Jews fasting on the day of Ashura. He asked, ' +
          '"What is this day you are fasting?" They said: "This is a great day on which Allah saved Musa ' +
          'and drowned Pharaoh, so Musa fasted this day in gratitude." He said: "We have more right to ' +
          'Musa than you," so he fasted it and commanded [the Muslims] to fast it.',
        narrator: 'Ibn Abbas (رضي الله عنهما)',
        source: 'Sahih Bukhari 2004, Sahih Muslim 1130',
      },
    ],
    ayahs: [],
  },

  // ────────────────────────────────────────────────────────
  // RABI' AL-AWWAL
  // ────────────────────────────────────────────────────────
  {
    id: 'mawlid',
    name: "Mawlid al-Nabi — Birth of the Prophet ﷺ",
    arabicName: 'المولد النبوي الشريف',
    shortName: 'Mawlid',
    emoji: '☪️',
    category: 'historical',
    priority: 1,
    type: 'specific',
    hijriMonth: 3,
    day: 12,
    description:
      'The 12th of Rabi\' al-Awwal is traditionally observed as the birth anniversary of Prophet ' +
      'Muhammad ﷺ. Some scholars also note this is the date of his passing. Muslims worldwide ' +
      'honour this month by increasing salawat (blessings upon the Prophet), studying his seerah ' +
      '(biography), and renewing their love and commitment to his Sunnah. Scholarly opinion on ' +
      'formal Mawlid celebrations varies — what is universally agreed is that loving and following ' +
      'the Prophet ﷺ is an obligation upon every Muslim.',
    virtues: [
      'This month contains the birth of the best human being ever created — a cause for gratitude',
      'An occasion to increase salawat upon the Prophet ﷺ',
      'An opportunity to study his seerah and deepen love for him',
    ],
    recommendations: [
      'Increase salawat: "Allahumma salli \'ala Muhammad wa \'ala ali Muhammad..."',
      'Read the seerah — learn about his character, wisdom, and love for the ummah',
      'Act on his Sunnah consistently — the greatest way to honour him ﷺ',
      'Note: Follow the guidance of your trusted scholars regarding formal Mawlid celebrations',
    ],
    hadiths: [
      {
        text:
          'None of you truly believes until I am more beloved to him than his father, his children, and all of mankind.',
        narrator: 'Anas ibn Malik (رضي الله عنه)',
        source: 'Sahih Bukhari 15, Sahih Muslim 44',
      },
    ],
    ayahs: [
      {
        arabic:
          'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ ' +
          'آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا',
        translation:
          'Indeed, Allah confers blessing upon the Prophet, and His angels [ask Him to do so]. ' +
          'O you who have believed, ask [Allah to confer] blessing upon him and ask [Allah to ' +
          'grant him] peace.',
        reference: 'Surah Al-Ahzab 33:56',
      },
    ],
    notes: '⚠️ Scholars differ on the ruling of Mawlid celebrations. Consult trusted scholars and focus on following his Sunnah.',
  },

  // ────────────────────────────────────────────────────────
  // RAJAB
  // ────────────────────────────────────────────────────────
  {
    id: 'isra-miraj',
    name: "Isra' wal Mi'raj — The Night Journey & Ascension",
    arabicName: 'الإسراء والمعراج',
    shortName: "Isra' wal Mi'raj",
    emoji: '🌃',
    category: 'historical',
    priority: 2,
    type: 'specific',
    hijriMonth: 7,
    day: 27,
    description:
      "In one miraculous night, the Prophet Muhammad ﷺ was transported from Masjid al-Haram in " +
      "Mecca to Masjid al-Aqsa in Jerusalem (Isra'), and then ascended through all seven heavens " +
      "to a station beyond (Mi'raj), where he was directly addressed by Allah ﷻ. During this " +
      "ascension, the five daily prayers were gifted to the Muslim ummah — originally fifty, reduced " +
      "to five on the advice of Prophet Musa ﷺ, while carrying the reward of fifty. This night " +
      "confirms the reality of the unseen, the honour of the Prophet ﷺ, and the supreme importance of salah.",
    virtues: [
      'The night the five daily prayers were gifted to the ummah — carrying the reward of fifty',
      'Confirms the miraculous nature of the prophethood of Muhammad ﷺ',
      'The Prophet ﷺ led all the prophets in prayer at Masjid al-Aqsa',
      'Demonstrates the nearness that can be achieved between a servant and Allah ﷻ',
    ],
    recommendations: [
      'Reflect on this miracle and strengthen your iman and certainty in the unseen',
      'Be grateful for the gift of the five daily prayers — a direct link to Allah',
      'Establish or improve your salah — it is the pillar of the religion',
      'Note: No specific worship ritual is authentically established for this night — avoid innovations',
    ],
    hadiths: [
      {
        text:
          'Then the prayers were enjoined upon him: fifty prayers a day. When he returned, he passed ' +
          'by Musa who asked, "What have you been ordered?" He said, "Fifty prayers a day." Musa said, ' +
          '"Your followers cannot bear fifty prayers a day..." [Eventually reduced to five, with the ' +
          'reward of fifty remaining.]',
        narrator: 'Anas ibn Malik (رضي الله عنه)',
        source: 'Sahih Bukhari 349',
      },
    ],
    ayahs: [
      {
        arabic:
          'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى ' +
          'الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا',
        translation:
          'Exalted is He who took His servant by night from al-Masjid al-Haram to al-Masjid ' +
          'al-Aqsa, whose surroundings We have blessed, to show him of Our signs.',
        reference: "Surah Al-Isra' 17:1",
      },
    ],
    notes: "⚠️ The exact date of Isra' wal Mi'raj is not historically certain. No specific act of worship has been authentically prescribed for this night.",
  },

  // ────────────────────────────────────────────────────────
  // SHA'BAN
  // ────────────────────────────────────────────────────────
  {
    id: 'shaban',
    name: "The Month of Sha'ban",
    arabicName: 'شَهْرُ شَعْبَان',
    shortName: "Sha'ban",
    emoji: '🌛',
    category: 'fasting',
    priority: 1,
    type: 'period',
    hijriMonth: 8,
    dayStart: 1,
    dayEnd: 29,
    description:
      "Sha'ban, the 8th month, falls between the sacred month of Rajab and the blessed month of " +
      "Ramadan. The Prophet ﷺ used to fast more in Sha'ban than in any other voluntary month, " +
      "explaining that it is a month people neglect — a month in which deeds are lifted to Allah. " +
      "Sha'ban is the perfect spiritual warm-up for Ramadan: increasing fasting, Quran recitation, " +
      "and making up missed days builds the spiritual momentum needed to maximise Ramadan.",
    virtues: [
      "Deeds are presented to Allah during this month — the Prophet ﷺ loved to be fasting when that happened",
      "The Prophet ﷺ fasted most of Sha'ban — more than any other voluntary month",
      "A month of spiritual preparation and warm-up before Ramadan",
      "Opportunity for good deeds that go unnoticed by the crowds",
    ],
    recommendations: [
      "Increase voluntary fasting to prepare your body and soul for Ramadan",
      "Make up any missed Ramadan fasts before Sha'ban ends",
      "Increase Quran recitation and night prayer (qiyam al-layl)",
      "Increase salawat upon the Prophet ﷺ",
    ],
    hadiths: [
      {
        text:
          "That is a month to which people do not pay attention, between Rajab and Ramadan. It is a " +
          "month in which deeds are lifted up to the Lord of the Worlds, and I like my deeds to be " +
          "lifted up when I am fasting.",
        narrator: "Usama ibn Zayd (رضي الله عنه)",
        source: "Sunan al-Nasa'i 2357 (graded Hasan)",
      },
    ],
    ayahs: [],
  },

  {
    id: 'nisf-shaban',
    name: "Nisf Sha'ban — Night of Forgiveness",
    arabicName: "لَيْلَةُ النِّصْفِ مِن شَعْبَان",
    shortName: "Mid-Sha'ban",
    emoji: '✨',
    category: 'night',
    priority: 2,
    type: 'specific',
    hijriMonth: 8,
    day: 15,
    description:
      "The 15th night of Sha'ban (the night between the 14th and 15th days) is known as Laylat " +
      "al-Bara'ah (Night of Salvation) or Laylat al-Nisf. Several hadiths mention that Allah looks " +
      "upon His creation this night and forgives all except those who associate partners with Him or " +
      "harbour enmity. The great scholar Ibn Taymiyyah affirmed this night has virtue. It is an " +
      "opportunity for sincere repentance, du'a, and extra worship.",
    virtues: [
      "A night of special divine attention and mercy",
      "Opportunity for seeking forgiveness and drawing close to Allah",
      "Many of the righteous predecessors (salaf) honoured this night with extra worship",
      "Also coincides with the Ayyam al-Beed (White Days) fasting on the 15th",
    ],
    recommendations: [
      "Pray extra voluntary prayers (qiyam al-layl) on this night",
      "Make sincere du'a and seek forgiveness (istighfar) abundantly",
      "Fast the 15th day — as part of the monthly White Days fast",
      "Avoid innovated group rituals not established in the authentic Sunnah",
    ],
    hadiths: [
      {
        text:
          "Allah looks at His creation on the night of the middle of Sha'ban and forgives all of " +
          "them, except the one who associates partners with Him (mushrik) and the one who has " +
          "hatred in his heart [towards a fellow Muslim].",
        narrator: "Mu'adh ibn Jabal (رضي الله عنه)",
        source: "Ibn Hibban (graded Sahih by Ibn Hibban); some hadith scholars consider the chain weak",
      },
    ],
    ayahs: [],
    notes: "⚠️ Scholars differ on authenticity of hadiths about this night. Engage in general worship without inventing specific rituals.",
  },

  // ────────────────────────────────────────────────────────
  // RAMADAN
  // ────────────────────────────────────────────────────────
  {
    id: 'ramadan',
    name: 'Ramadan — The Month of Fasting',
    arabicName: 'رَمَضَان',
    shortName: 'Ramadan',
    emoji: '🌙',
    category: 'fasting',
    priority: 3,
    type: 'period',
    hijriMonth: 9,
    dayStart: 1,
    dayEnd: 20,
    description:
      'Ramadan is the ninth and holiest month of the Islamic calendar. Muslims worldwide fast from ' +
      'pre-dawn (Suhoor) to sunset (Iftar), abstaining from food, drink, and all that breaks the ' +
      'fast. This is not merely physical — it is a month of complete spiritual transformation. The ' +
      'Quran was revealed during Ramadan. The gates of Paradise are opened, the gates of Hell are ' +
      'closed, and the devils are chained. Every night, Allah frees people from the Fire. The ' +
      'Prophet ﷺ was like "a wind sent in mercy" in his generosity during this month.',
    virtues: [
      'Gates of Paradise are opened throughout the entire month',
      'Gates of Hellfire are closed and the devils are chained',
      'Every night, people are freed from the Fire',
      'The Quran was revealed in this month — the greatest gift to humanity',
      'Fasting with sincere faith and hope in reward brings forgiveness of all past sins',
      'Every deed\'s reward is multiplied in this blessed month',
    ],
    recommendations: [
      'Fast every day with sincere intention (niyyah)',
      'Pray Tarawih every night — even a few raka\'at is better than none',
      'Complete at least one full recitation of the Quran',
      'Increase charity — the Prophet ﷺ doubled and tripled his generosity in Ramadan',
      'Make Suhoor (pre-dawn meal) — there is barakah in it',
      'Guard your tongue, eyes, and ears — fasting is a complete spiritual discipline',
      'Seek Umrah in Ramadan (reward equivalent to Hajj with the Prophet ﷺ)',
    ],
    hadiths: [
      {
        text:
          'When the month of Ramadan starts, the gates of heaven are opened and the gates of Hell ' +
          'are closed and the devils are chained.',
        narrator: 'Abu Hurairah (رضي الله عنه)',
        source: 'Sahih Bukhari 1899, Sahih Muslim 1079',
      },
      {
        text:
          'Whoever fasts Ramadan out of faith and in hope of reward, his previous sins will be forgiven.',
        narrator: 'Abu Hurairah (رضي الله عنه)',
        source: 'Sahih Bukhari 38, Sahih Muslim 760',
      },
      {
        text:
          'Every deed of the son of Adam is for him except fasting — it is for Me, and I will reward ' +
          'for it. Fasting is a shield. If one of you is fasting, let him not act obscenely or foolishly. ' +
          'If someone fights him or insults him, let him say: I am fasting.',
        narrator: 'Abu Hurairah (رضي الله عنه) — Hadith Qudsi',
        source: 'Sahih Bukhari 1904, Sahih Muslim 1151',
      },
    ],
    ayahs: [
      {
        arabic:
          'شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ ' +
          'الْهُدَىٰ وَالْفُرْقَانِ ۚ فَمَن شَهِدَ مِنكُمُ الشَّهْرَ فَلْيَصُمْهُ',
        translation:
          'The month of Ramadan [is that] in which was revealed the Quran, a guidance for the people ' +
          'and clear proofs of guidance and criterion. So whoever sights [the new moon of] the month, ' +
          'let him fast it.',
        reference: 'Surah Al-Baqarah 2:185',
      },
      {
        arabic:
          'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى ' +
          'الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',
        translation:
          'O you who have believed, decreed upon you is fasting as it was decreed upon those before ' +
          'you — that you may become righteous.',
        reference: 'Surah Al-Baqarah 2:183',
      },
    ],
  },

  {
    id: 'ramadan-last10',
    name: 'Last Ten Nights of Ramadan',
    arabicName: 'الْعَشْرُ الأَوَاخِرُ مِن رَمَضَان',
    shortName: 'Last 10 Nights',
    emoji: '⭐',
    category: 'night',
    priority: 4,
    type: 'period',
    hijriMonth: 9,
    dayStart: 21,
    dayEnd: 29,
    description:
      'The last ten nights of Ramadan are the most precious of the entire year. The Prophet ﷺ ' +
      '"would strive harder during the last ten nights than at any other time." He would wake his ' +
      'family, tighten his belt (showing intensified effort), and perform I\'tikaf (seclusion in ' +
      'the mosque). These nights contain Laylatul Qadr — the Night of Power — which is better than ' +
      'a thousand months of worship. Every odd night is a potential Laylatul Qadr, making these ten ' +
      'nights an unparalleled opportunity for forgiveness and nearness to Allah.',
    virtues: [
      'Contains Laylatul Qadr — one night better than 1,000 months (83+ years) of worship',
      'The Prophet ﷺ exerted himself more during these nights than at any other time of year',
      'Angels descend in multitudes with peace and mercy until dawn',
      'The divine decrees for the coming year are decided on Laylatul Qadr',
      'A complete night of worship can secure forgiveness of all past sins',
    ],
    recommendations: [
      'Observe I\'tikaf (spiritual retreat in the mosque) for all ten nights if possible',
      'Seek Laylatul Qadr especially on the odd nights: 21st, 23rd, 25th, 27th, and 29th',
      'Pray the entire night — at minimum, pray the last portion before Fajr',
      'Recite abundantly: "Allahumma innaka \'afuwwun tuhibb al-\'afwa fa\'fu \'anni"',
      'Limit social media, TV, and worldly talk — these nights are too precious to waste',
    ],
    hadiths: [
      {
        text:
          'The Prophet ﷺ used to exert himself in devotion during the last ten nights to a greater ' +
          'extent than at any other time.',
        narrator: 'Aisha (رضي الله عنها)',
        source: 'Sahih Muslim 1175',
      },
      {
        text: 'Seek Laylatul Qadr in the odd nights of the last ten days of Ramadan.',
        narrator: 'Aisha (رضي الله عنها)',
        source: 'Sahih Bukhari 2017',
      },
    ],
    ayahs: [
      {
        arabic:
          'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ﴿١﴾ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ﴿٢﴾ ' +
          'لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ ﴿٣﴾ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا ' +
          'بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ ﴿٤﴾ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ ﴿٥﴾',
        translation:
          'Indeed, We sent the Quran down during the Night of Decree. And what can make you know what ' +
          'the Night of Decree is? The Night of Decree is better than a thousand months. The angels and ' +
          'the Spirit descend therein by permission of their Lord for every matter. Peace it is until ' +
          'the emergence of dawn.',
        reference: 'Surah Al-Qadr 97:1–5',
      },
    ],
  },

  {
    id: 'laylatul-qadr',
    name: "Laylatul Qadr — Night of Power",
    arabicName: 'لَيْلَةُ الْقَدْرِ',
    shortName: 'Laylatul Qadr',
    emoji: '🌟',
    category: 'night',
    priority: 5,
    type: 'specific',
    hijriMonth: 9,
    day: 27,
    description:
      "The 27th night of Ramadan is the most commonly observed as Laylatul Qadr (Night of Power), " +
      "though it can fall on any odd night of the last ten. This single night carries more reward " +
      "than 1,000 months — over 83 years — of continuous worship. The Quran was sent down to the " +
      "lowest heaven on this night. Angels descend in multitudes. Sins are forgiven. Du'as are " +
      "answered. Whoever stands in prayer this night with faith and sincerity has all their previous " +
      "sins forgiven. Imam al-Shafi'i and many scholars say the 27th is the most likely night.",
    virtues: [
      'A SINGLE night = more reward than 1,000 months (83+ years) of unbroken worship',
      'The Quran was revealed on this night — the greatest guidance ever sent to humanity',
      'All previous sins are forgiven for whoever worships this night with sincere faith',
      'Angels and Jibreel ﷺ descend in immense numbers — peace fills the earth until dawn',
      'Du\u2019as made on this night have a special nearness to acceptance',
    ],
    recommendations: [
      'Stand the entire night in prayer, Quran recitation, and dhikr',
      'Recite the special du\'a taught by the Prophet ﷺ himself:\n"Allahumma innaka \'afuwwun tuhibb al-\'afwa fa\'fu \'anni"\n(O Allah, You are pardoning and You love pardon, so pardon me)',
      'Recite Surah Al-Qadr and Surah Al-Ikhlas repeatedly',
      'Do not limit your search to only the 27th — seek Laylatul Qadr in ALL odd nights',
      'Stay away from screens and distractions — this night is your entire lifetime compressed',
    ],
    hadiths: [
      {
        text:
          'I asked: "O Messenger of Allah, if I know which night is Laylatul Qadr, what should I say?" ' +
          'He said: "Say: Allahumma innaka \'afuwwun tuhibb al-\'afwa fa\'fu \'anni ' +
          '(O Allah, You are pardoning and You love to pardon, so pardon me)."',
        narrator: 'Aisha (رضي الله عنها)',
        source: 'Sunan al-Tirmidhi 3513 (graded Sahih)',
      },
      {
        text:
          'Whoever stands [in prayer] on Laylatul Qadr out of faith and in hope of reward, his ' +
          'previous sins will be forgiven.',
        narrator: 'Abu Hurairah (رضي الله عنه)',
        source: 'Sahih Bukhari 2014, Sahih Muslim 760',
      },
    ],
    ayahs: [
      {
        arabic:
          'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ﴿١﴾ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ﴿٢﴾ ' +
          'لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ',
        translation:
          'Indeed, We sent the Quran down during the Night of Decree. And what can make you know ' +
          'what the Night of Decree is? The Night of Decree is better than a thousand months.',
        reference: 'Surah Al-Qadr 97:1–3',
      },
    ],
  },

  // ────────────────────────────────────────────────────────
  // SHAWWAL
  // ────────────────────────────────────────────────────────
  {
    id: 'eid-fitr',
    name: 'Eid al-Fitr — Festival of Breaking the Fast',
    arabicName: 'عِيدُ الفِطْر',
    shortName: 'Eid al-Fitr',
    emoji: '🎉',
    category: 'eid',
    priority: 5,
    type: 'specific',
    hijriMonth: 10,
    day: 1,
    description:
      'Eid al-Fitr is one of the two greatest celebrations in Islam, marking the joyful end of ' +
      'the blessed month of Ramadan. It is a day of immense gratitude — Allah rewards His servants ' +
      'for their month of fasting. Muslims gather for the Eid prayer, pay Zakat al-Fitr (obligatory ' +
      'charity due before the prayer), wear their finest clothes, and celebrate with family and community. ' +
      'Fasting is strictly forbidden on this day — it is a gift from Allah to be received with joy.',
    virtues: [
      'One of only two celebrations legislated in Islam — a divine gift to the ummah',
      "Allah's reward to the believers who completed the month of Ramadan",
      'A day of joy, gratitude, and forgiveness for those who fasted sincerely',
      'Strengthens family bonds and community unity across the Muslim world',
    ],
    recommendations: [
      '⛔ Fasting on Eid al-Fitr is FORBIDDEN (haram) — receive it as a gift from Allah',
      'Pay Zakat al-Fitr (sadaqat al-fitr) before the Eid prayer so the poor can celebrate',
      'Perform Ghusl (ritual bath) and wear your best clean clothes',
      'Eat something sweet (dates or similar) before going to the Eid prayer',
      'Take a different route home from the prayer as a Sunnah',
      'Greet: "Taqabbal Allahu minna wa minkum" (May Allah accept from us and from you)',
      'Visit family, maintain ties of kinship, and spread joy',
    ],
    hadiths: [
      {
        text:
          'The Messenger of Allah ﷺ forbade fasting on two days: Eid al-Fitr and Eid al-Adha.',
        narrator: "Abu Sa'id al-Khudri (رضي الله عنه)",
        source: 'Sahih Bukhari 1991, Sahih Muslim 1137',
      },
      {
        text: 'The Prophet ﷺ used to eat dates before going to the prayer on Eid al-Fitr.',
        narrator: 'Anas ibn Malik (رضي الله عنه)',
        source: 'Sahih Bukhari 953',
      },
    ],
    ayahs: [],
  },

  {
    id: 'six-shawwal',
    name: 'Six Days of Shawwal',
    arabicName: 'سِتٌّ مِّن شَوَّال',
    shortName: '6 Days Shawwal',
    emoji: '🌿',
    category: 'fasting',
    priority: 2,
    type: 'period',
    hijriMonth: 10,
    dayStart: 2,
    dayEnd: 7,
    description:
      'Fasting any six days during Shawwal after Ramadan — beginning from the 2nd (since the 1st ' +
      'is Eid) — earns the reward equivalent to fasting the entire year. The calculation: Ramadan ' +
      '(30 days) + 6 days of Shawwal = 36 days. Each day is rewarded as 10, so 36 × 10 = 360 days ' +
      '— a full year. These six days can be fasted consecutively or spread throughout the month.',
    virtues: [
      'Combined with Ramadan, equals the reward of fasting an ENTIRE year',
      'A beautiful continuation of the spiritual momentum built during Ramadan',
      'If made an annual habit, it is as if one fasted their entire life (year after year)',
    ],
    recommendations: [
      'Fast any 6 days in Shawwal — they need not be consecutive',
      '⛔ Do NOT fast on the 1st of Shawwal (Eid day) — it is forbidden',
      'Some scholars recommend making up missed Ramadan fasts first (scholarly difference)',
      'Continue the Quranic and night-prayer habits from Ramadan throughout Shawwal',
    ],
    hadiths: [
      {
        text:
          'Whoever fasts Ramadan and follows it with six days of Shawwal, it is as if he has ' +
          'fasted the entire year.',
        narrator: "Abu Ayyub al-Ansari (رضي الله عنه)",
        source: 'Sahih Muslim 1164',
      },
    ],
    ayahs: [],
  },

  // ────────────────────────────────────────────────────────
  // DHUL HIJJAH
  // ────────────────────────────────────────────────────────
  {
    id: 'dhul-hijjah-ten',
    name: 'Blessed Ten Days of Dhul Hijjah',
    arabicName: 'الْعَشْرُ الأَوَائِلُ مِن ذِي الحِجَّة',
    shortName: 'Blessed 10 Days',
    emoji: '🕋',
    category: 'blessed',
    priority: 3,
    type: 'period',
    hijriMonth: 12,
    dayStart: 1,
    dayEnd: 8,
    description:
      'The first ten days of Dhul Hijjah are the greatest and most blessed days of the entire ' +
      'year — surpassing even the last ten nights of Ramadan in one narration. In these days, ' +
      'Allah swears by "ten nights" in Surah Al-Fajr. The Prophet ﷺ declared that no righteous ' +
      'deed done at any other time is more beloved to Allah than deeds done during these ten days. ' +
      'Pilgrims perform Hajj during this period, and every Muslim — wherever they are — can share ' +
      'in the immense blessings by maximising worship, fasting, charity, and Takbeer.',
    virtues: [
      'The BEST days of the entire year — Allah swears by them in the Quran',
      'Righteous deeds are more beloved to Allah during these days than at any other time',
      'Contains the Day of Arafah — the greatest single day of the Islamic year',
      'Encompasses the Hajj pilgrimage — the fifth pillar of Islam',
      'Even Jihad cannot match the deeds of these ten days (except in rare cases)',
    ],
    recommendations: [
      'Increase ALL forms of worship: dhikr, Quran, prayer, charity, fasting',
      'Fast especially on the Day of Arafah (9th) — forgives 2 years of sins',
      'Make Takbeer abundantly: "Allahu Akbar, Allahu Akbar, La ilaha ill-Allah, Allahu Akbar, Allahu Akbar wa lillahi\'l-hamd"',
      'If planning Udhiyah (Qurbani), do not cut hair or nails from 1st Dhul Hijjah until after sacrifice',
      'Give generously in charity during these days',
      'Make du\'a for those performing Hajj',
    ],
    hadiths: [
      {
        text:
          'There are no days during which righteous deeds are more beloved to Allah than these ten ' +
          'days [of Dhul Hijjah]. They said: Not even jihad in Allah\'s cause? He said: Not even ' +
          'jihad in Allah\'s cause, except for a man who goes out with both his self and his wealth ' +
          'and returns with nothing.',
        narrator: 'Ibn Abbas (رضي الله عنهما)',
        source: 'Sahih Bukhari 969, Sunan Abu Dawud 2438',
      },
    ],
    ayahs: [
      {
        arabic: 'وَالْفَجْرِ ﴿١﴾ وَلَيَالٍ عَشْرٍ',
        translation:
          'By the dawn. And [by] ten nights.',
        reference:
          'Surah Al-Fajr 89:1–2 (Ibn Abbas, Ibn Kathir, and most classical scholars identify ' +
          '"ten nights" as the first ten of Dhul Hijjah)',
      },
    ],
  },

  {
    id: 'arafah',
    name: 'Day of Arafah — Greatest Day of the Year',
    arabicName: 'يَوْمُ عَرَفَة',
    shortName: 'Day of Arafah',
    emoji: '🏔️',
    category: 'fasting',
    priority: 5,
    type: 'specific',
    hijriMonth: 12,
    day: 9,
    description:
      'The 9th of Dhul Hijjah — the Day of Arafah — is the centrepiece of the Hajj pilgrimage ' +
      'and arguably the most important single day in the Islamic calendar. Pilgrims stand on the ' +
      'Plain of Arafah in a monumental gathering of worship. For those not on Hajj, fasting this ' +
      'day expiates two full years of sins. Allah descends to the lowest heaven and boasts to the ' +
      'angels about His servants standing at Arafah, freeing more people from the Fire on this ' +
      'day than any other. The verse perfecting the religion was revealed on this day.',
    virtues: [
      'Fasting expiates the sins of TWO years: the past year and the coming year',
      'Allah frees more people from Hellfire on this day than on any other day',
      'Allah descends and boasts about the people of Arafah to the angels',
      'The verse completing and perfecting the religion was revealed on this day',
      'The greatest day of the greatest 10 days of the greatest month for deeds',
    ],
    recommendations: [
      'FAST this day if you are not on Hajj — one of the greatest fasts of the entire year',
      'Make abundant du\'a throughout the day — Allah is closer than at any other time',
      'Recite: "La ilaha ill-Allah, wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu, wa huwa \'ala kulli shay\'in qadir" (1,000 times if possible)',
      'Seek forgiveness (istighfar) profusely — this is a day of divine mercy',
      'If on Hajj: stand at Arafah with full spiritual presence — this is the essence of Hajj',
    ],
    hadiths: [
      {
        text:
          'Fasting the Day of Arafah — I hope from Allah that it expiates the sins of the year ' +
          'before it and the year after it.',
        narrator: 'Abu Qatada (رضي الله عنه)',
        source: 'Sahih Muslim 1162',
      },
      {
        text:
          'There is no day on which Allah frees more of His servants from the Fire than the Day ' +
          'of Arafah. He draws near, then boasts about them to the angels, saying: "What do these people want?"',
        narrator: 'Aisha (رضي الله عنها)',
        source: 'Sahih Muslim 1348',
      },
      {
        text:
          "The best du'a is the du'a of the Day of Arafah. The best that I and the prophets before " +
          "me have said is: La ilaha ill-Allah, wahdahu la sharika lah, lahul-mulku wa lahul-hamd, " +
          "wa huwa 'ala kulli shay'in qadir.",
        narrator: "Reported from various companions",
        source: "Sunan al-Tirmidhi 3585 (graded Hasan)",
      },
    ],
    ayahs: [
      {
        arabic:
          'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي ' +
          'وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا',
        translation:
          'This day I have perfected for you your religion and completed My favour upon you and ' +
          'have approved for you Islam as your religion.',
        reference: "Surah Al-Ma'idah 5:3 (Revealed on the Day of Arafah, Farewell Hajj, 10 AH)",
      },
    ],
  },

  {
    id: 'eid-adha',
    name: 'Eid al-Adha — Festival of Sacrifice',
    arabicName: 'عِيدُ الأَضْحَى',
    shortName: 'Eid al-Adha',
    emoji: '🐑',
    category: 'eid',
    priority: 5,
    type: 'specific',
    hijriMonth: 12,
    day: 10,
    description:
      'Eid al-Adha is the greater of the two Islamic Eids, coinciding with the completion of Hajj. ' +
      'It commemorates the ultimate test of Prophet Ibrahim ﷺ: his willingness to sacrifice his son ' +
      'Ismail ﷺ in complete obedience to Allah — and Allah\'s mercy in substituting a ram at the last ' +
      'moment. Muslims worldwide pray the Eid prayer, perform or arrange the Udhiyah (sacrificial ' +
      'animal), distribute its meat, and celebrate together. Fasting is strictly forbidden today.',
    virtues: [
      'The greatest day of the year in the sight of Allah — "Yawm al-Nahr" (Day of Sacrifice)',
      'Commemorates absolute submission to Allah — the essence of Islam (meaning: submission)',
      'Udhiyah (sacrifice) is an act of worship connecting to Ibrahim ﷺ across millennia',
      'A global celebration of unity — the same Eid prayed in every corner of the earth',
    ],
    recommendations: [
      '⛔ Fasting on Eid al-Adha is FORBIDDEN (haram)',
      'Pray the Eid prayer and listen to the sermon',
      'Perform or arrange the Udhiyah — a Sunnah Mu\'akkadah (emphasised Sunnah) or Wajib',
      'Distribute the meat: ideally 1/3 for family, 1/3 for neighbours, 1/3 for the poor',
      'Make Takbeer from Fajr of the 9th until Asr of the 13th',
      'Wear your best clothes and spread joy with your family',
      'Make du\'a for the Hajj pilgrims on this day of completion',
    ],
    hadiths: [
      {
        text:
          'The greatest of days in the sight of Allah is the Day of Sacrifice (Yawm al-Nahr), ' +
          'then the day that follows it (11th Dhul Hijjah).',
        narrator: 'Abdullah ibn Qurt (رضي الله عنه)',
        source: 'Sunan Abu Dawud 1765 (graded Sahih)',
      },
    ],
    ayahs: [
      {
        arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
        translation: 'So pray to your Lord and sacrifice [to Him alone].',
        reference: 'Surah Al-Kawthar 108:2',
      },
      {
        arabic:
          'لَن يَنَالَ اللَّهَ لُحُومُهَا وَلَا دِمَاؤُهَا وَلَٰكِن يَنَالُهُ التَّقْوَىٰ مِنكُمْ',
        translation:
          'Their meat will not reach Allah, nor will their blood, but what reaches Him is piety from you.',
        reference: 'Surah Al-Hajj 22:37',
      },
    ],
  },

  {
    id: 'tashreeq',
    name: "Ayyam al-Tashreeq — Days of Celebration",
    arabicName: 'أَيَّامُ التَّشْرِيق',
    shortName: 'Tashreeq Days',
    emoji: '🌅',
    category: 'blessed',
    priority: 2,
    type: 'period',
    hijriMonth: 12,
    dayStart: 11,
    dayEnd: 13,
    description:
      'The 11th, 12th, and 13th of Dhul Hijjah are the Ayyam al-Tashreeq — the Days of ' +
      'Drying Meat (referring to the pre-refrigeration preservation of the Udhiyah). They are ' +
      'days of eating, drinking, remembrance of Allah, and continuation of the Hajj rites (stoning ' +
      'at Mina). The Takbeer continues throughout. Fasting is forbidden on all three days as ' +
      'they are part of the Eid celebration.',
    virtues: [
      'Extension of Eid — days of joy and remembrance combined',
      'Takbeer continues from Fajr of 9th Dhul Hijjah until Asr of the 13th',
      'Pilgrims perform the final Hajj rites (stoning the Jamarat) during these days',
      'Included in the "best 10 days" by some scholars (counting to the 13th)',
    ],
    recommendations: [
      '⛔ Fasting is FORBIDDEN on the 11th, 12th, and 13th of Dhul Hijjah',
      'Continue making Takbeer throughout these days',
      'Continue enjoying the Eid celebration with family',
      'Make du\'a for acceptance of Hajj for pilgrims departing from Mina',
    ],
    hadiths: [
      {
        text:
          'The days of Tashreeq are days of eating, drinking, and remembrance of Allah.',
        narrator: 'Nubayshah al-Hudhali (رضي الله عنه)',
        source: 'Sahih Muslim 1141',
      },
    ],
    ayahs: [
      {
        arabic: 'وَاذْكُرُوا اللَّهَ فِي أَيَّامٍ مَّعْدُودَاتٍ',
        translation:
          'And remember Allah during [specific] numbered days.',
        reference:
          'Surah Al-Baqarah 2:203 (referring to the days of Tashreeq, according to classical exegesis)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────
  // EVERY MONTH — Ayyam al-Beed (White Days)
  // ────────────────────────────────────────────────────────
  {
    id: 'white-days',
    name: "Ayyam al-Beed — The White Days",
    arabicName: 'أَيَّامُ البِيض',
    shortName: 'White Days',
    emoji: '🌕',
    category: 'fasting',
    priority: 1,
    type: 'monthly-days',
    monthDays: [13, 14, 15],
    description:
      'The 13th, 14th, and 15th of every Hijri month are called the "White Days" (Ayyam al-Beed) ' +
      'because these are the nights of the full moon when the moon illuminates the sky all night. ' +
      'The Prophet ﷺ would fast these three days every month without fail, and he advised others ' +
      'to do the same. Fasting three days per month earns the reward equivalent to fasting the ' +
      'entire month (since each good deed is multiplied by 10).',
    virtues: [
      'Fasting 3 days per month = full-month fasting reward (10× multiplication of deeds)',
      'The Prophet ﷺ never abandoned fasting these days while travelling or at home',
      'A consistent, sustainable Sunnah that keeps one in a state of worship throughout the year',
      'These nights coincide with the full moon — a natural marker of the monthly cycle',
    ],
    recommendations: [
      'Fast all three days: the 13th, 14th, and 15th of every Hijri month',
      'Note: The 13th of Dhul Hijjah (a Tashreeq day) — fasting is forbidden that day specifically',
      'Note: The 15th of Sha\'ban coincides with Nisf Sha\'ban — a night of special virtue',
      'Set a reminder so you never miss these three days',
    ],
    hadiths: [
      {
        text:
          'My beloved friend [the Prophet ﷺ] advised me to fast three days of every month: ' +
          'the 13th, 14th, and 15th.',
        narrator: "Abu Dharr al-Ghifari (رضي الله عنه)",
        source: 'Sunan al-Tirmidhi 761 (graded Hasan Sahih)',
      },
      {
        text:
          'My friend [the Prophet ﷺ] advised me to do three things which I will not abandon until ' +
          'I die: to fast three days of every month, to pray the Duha prayer, and to pray Witr before sleeping.',
        narrator: 'Abu Hurairah (رضي الله عنه)',
        source: 'Sahih Bukhari 1981, Sahih Muslim 721',
      },
    ],
    ayahs: [],
  },

  // ────────────────────────────────────────────────────────
  // WEEKLY — Friday
  // ────────────────────────────────────────────────────────
  {
    id: 'jummah',
    name: "Yawm al-Jumu'ah — The Day of Friday",
    arabicName: "يَوْمُ الجُمُعَة",
    shortName: "Jumu'ah",
    emoji: '🕌',
    category: 'weekly',
    priority: 1,
    type: 'weekly',
    dayOfWeek: 5,
    description:
      "Friday is the best day of the week and the weekly Eid of the Muslims. It is the day Adam " +
      "ﷺ was created, the day he entered Paradise, and the day the Hour will be established. The " +
      "Jumu'ah prayer is obligatory for Muslim men. On Friday there is a special hour during which " +
      "any du'a is answered. The Prophet ﷺ commanded increasing salawat upon him on Fridays. Reading " +
      "Surah Al-Kahf on Friday brings a light between that Friday and the next.",
    virtues: [
      'The best day on which the sun rises — the weekly Eid of the Muslims',
      'Contains a blessed hour when any du\'a is answered (most likely the last hour before Maghrib)',
      'Reading Surah Al-Kahf provides protection and light for the entire week',
      'Increasing salawat upon the Prophet ﷺ on Friday is a confirmed Sunnah',
      'Adam ﷺ was created on Friday — a day connected to the origin of humanity',
    ],
    recommendations: [
      'Pray Jumu\'ah — it is obligatory for Muslim men and carries immense reward',
      'Make du\'a abundantly — especially in the last hour before Maghrib',
      'Read Surah Al-Kahf (from memory or from the Mushaf)',
      'Increase salawat upon the Prophet ﷺ throughout the day',
      'Perform Ghusl before Jumu\'ah prayer',
      'Come early to the mosque and sit close to listen to the khutbah attentively',
    ],
    hadiths: [
      {
        text:
          "The best day on which the sun rises is Friday. On this day Adam was created, on this day " +
          "he was made to enter Paradise, on this day he was expelled from it, and the Hour will not " +
          "be established except on Friday.",
        narrator: 'Abu Hurairah (رضي الله عنه)',
        source: 'Sahih Muslim 854',
      },
      {
        text:
          "On Friday there is an hour during which no Muslim stands and asks Allah for something " +
          "good except that Allah grants it to him.",
        narrator: 'Abu Hurairah (رضي الله عنه)',
        source: 'Sahih Bukhari 935, Sahih Muslim 852',
      },
    ],
    ayahs: [
      {
        arabic:
          'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا ' +
          'إِلَىٰ ذِكْرِ اللَّهِ وَذَرُوا الْبَيْعَ ۚ ذَٰلِكُمْ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ',
        translation:
          'O you who have believed, when [the adhaan] is called for the prayer on the day of Jumu\'ah ' +
          '[Friday], then proceed to the remembrance of Allah and leave trade. That is better for you, ' +
          'if you only knew.',
        reference: "Surah Al-Jumu'ah 62:9",
      },
    ],
  },

];

// ── Matching helper ───────────────────────────────────────
function getSpecialDaysFor(hYear, hMonth, hDay, dayOfWeek) {
  const matches = [];

  for (const evt of SPECIAL_DAYS) {
    let hit = false;

    if (evt.type === 'specific') {
      hit = evt.hijriMonth === hMonth && evt.day === hDay;
    } else if (evt.type === 'period') {
      hit = evt.hijriMonth === hMonth && hDay >= evt.dayStart && hDay <= evt.dayEnd;
    } else if (evt.type === 'weekly') {
      hit = evt.dayOfWeek === dayOfWeek;
    } else if (evt.type === 'monthly-days') {
      hit = evt.monthDays.includes(hDay);
      // Suppress White Days on days that are already forbidden for fasting
      if (hit && evt.id === 'white-days') {
        const forbidden =
          (hMonth === 10 && hDay === 1) ||   // Eid al-Fitr
          (hMonth === 12 && hDay >= 10 && hDay <= 13); // Eid al-Adha + Tashreeq
        if (forbidden) hit = false;
      }
    }

    if (hit) matches.push(evt);
  }

  // Sort highest priority first
  matches.sort((a, b) => b.priority - a.priority);
  return matches;
}

// Category colour lookup
const CAT_COLORS = {
  eid:        'var(--eid)',
  night:      'var(--night)',
  fasting:    'var(--fasting)',
  blessed:    'var(--blessed)',
  historical: 'var(--historical)',
  weekly:     'var(--weekly)',
};

/* ══════════════════════════════════════════════════════════
   ARABIC LOCALISATION (keyed by event id)
   Parallel Arabic content for the RTL version. Hadith entries
   are matched by index to the English `hadiths[]`; where an
   authentic original wording is provided it is shown directly,
   otherwise an Arabic rendering of the meaning is shown.
   Ayah entries carry the Arabic reference only (the Arabic text
   is already the original inside the English data).
   ══════════════════════════════════════════════════════════ */
const SPECIAL_DAYS_AR = {
  'new-year': {
    description:
      'يُؤرّخ أول يومٍ من شهر مُحرَّم لبداية السنة الهجرية القمرية. وُضع التقويم الإسلامي إحياءً ' +
      'لذكرى الهجرة — هجرة النبي محمد ﷺ من مكة إلى المدينة سنة ٦٢٢م. كانت هذه الهجرة لحظةً فاصلةً ' +
      'في تاريخ الأمة المسلمة الأولى: تضحيةٌ بالديار والأموال في سبيل طاعة الله. ومُحرَّم أحد الأشهر ' +
      'الحُرُم الأربعة التي كان القتال فيها محرَّمًا حتى في جاهلية العرب.',
    virtues: [
      'مُحرَّم هو «شهر الله المحرَّم» — شرّفه الله بإضافته إلى اسمه',
      'أحد الأشهر الحُرُم الأربعة مع رجب وذي القعدة وذي الحجة',
      'صيام مُحرَّم أفضل الصيام بعد رمضان',
      'وقتٌ للمحاسبة وتجديد النيّات وشكر الله على عامٍ جديدٍ من الإيمان',
    ],
    recommendations: [
      'حاسِب نفسك على أعمال العام الماضي وجدّد نيّتك للعام الجديد',
      'أكثِر من صيام التطوع طوال شهر مُحرَّم',
      'ادعُ الله بعامٍ من الطاعة والصحة والقرب منه',
      'تعلّم عن الهجرة ودروسها في التضحية والتوكل على الله ﷻ',
    ],
    hadiths: [
      { arabic: 'أفضلُ الصيامِ بعد رمضانَ شهرُ اللهِ المحرَّم، وأفضلُ الصلاةِ بعد الفريضةِ صلاةُ الليل.' },
    ],
    ayahs: [{ reference: 'سورة التوبة ٩:٣٦' }],
  },

  'tasuaah': {
    description:
      'اليوم التاسع من مُحرَّم يُعرف بيوم تاسوعاء. لمّا رأى النبي ﷺ اليهود يصومون عاشوراء (العاشر من ' +
      'مُحرَّم) في المدينة صام وأمر بصيامه، وعزم على صيام التاسع في العام التالي مخالفةً لأهل الكتاب، ' +
      'لكنه تُوفِّي قبل أن يأتي المحرَّم القادم. فصيام التاسع مع العاشر سُنّةٌ ثابتة وأكمل صور إحياء عاشوراء.',
    virtues: [
      'سُنّةٌ من سنن النبي ﷺ — فقد عزم على صيامه مع عاشوراء',
      'فيه مخالفةٌ لأهل الكتاب في صيامهم',
      'يُكمِّل أجر صيام عاشوراء',
    ],
    recommendations: [
      'صُم اليوم (التاسع) مع عاشوراء (العاشر) — وهذا أكمل العمل',
      'أو صُم العاشر والحادي عشر',
      'أكثِر من الذكر والدعاء والاستغفار طوال اليوم',
    ],
    hadiths: [
      { arabic: 'لئن بقيتُ إلى قابلٍ لأصومنّ التاسع.' },
    ],
  },

  'ashura': {
    description:
      'عاشوراء — العاشر من مُحرَّم — من أعظم أيام السنة الإسلامية. فيه نجّى الله ﷻ نبيّه موسى ﷺ ' +
      'وبني إسرائيل من فرعون بأن فلق لهم البحر. ولمّا قدِم النبي محمد ﷺ المدينة ووجد اليهود يصومونه ' +
      'علِم سببه فقال: «نحن أحقُّ بموسى منكم»، فصامه وأمر المؤمنين بصيامه. وصيام عاشوراء يُكفّر ذنوب السنة الماضية.',
    virtues: [
      'صيامه يُكفّر صغائر ذنوب السنة الماضية',
      'إحياءٌ لذكرى نجاة موسى ﷺ من فرعون — يوم شكرٍ لله',
      'أولاه النبي ﷺ عظيم العناية وأمر المسلمين بصيامه',
      'يومٌ مبارك في شهر مُحرَّم الحرام',
    ],
    recommendations: [
      'صُم هذا اليوم — من أعظم أيام صيام التطوع أجرًا في السنة',
      'صُم التاسع (تاسوعاء) معه اتباعًا لأكمل السُّنّة',
      'أكثِر من الدعاء والذكر وتأمَّل رحمة الله بمن أطاعه',
      'اجتنب ما أُحدث من مظاهر الحزن التي لم تثبت في السُّنّة الصحيحة',
    ],
    hadiths: [
      { arabic: 'صيامُ يومِ عاشوراءَ أحتسبُ على اللهِ أن يُكفِّر السنةَ التي قبله.' },
      {
        arabic:
          'قدِم النبيُّ ﷺ المدينةَ فرأى اليهودَ تصومُ يومَ عاشوراء، فقال: «ما هذا اليومُ الذي تصومونه؟» ' +
          'قالوا: هذا يومٌ عظيم، نجّى اللهُ فيه موسى وقومَه وأغرق فرعونَ وقومَه، فصامه موسى شكرًا، ' +
          'فقال ﷺ: «نحن أحقُّ بموسى منكم»، فصامه وأمر بصيامه.',
      },
    ],
  },

  'mawlid': {
    description:
      'يُؤرَّخ الثاني عشر من ربيع الأول تقليديًّا لمولد النبي محمد ﷺ، ويرى بعض العلماء أنه تاريخ ' +
      'وفاته أيضًا. ويُعظّم المسلمون هذا الشهر بالإكثار من الصلاة على النبي ﷺ ودراسة سيرته وتجديد ' +
      'محبّته واتباع سُنّته. وقد اختلف العلماء في حكم الاحتفال الرسمي بالمولد، أمّا محبّة النبي ﷺ ' +
      'واتباعه فأمرٌ واجبٌ متّفقٌ عليه على كل مسلم.',
    virtues: [
      'في هذا الشهر وُلد خير البشر — وهذا موجبٌ للشكر',
      'مناسبةٌ للإكثار من الصلاة على النبي ﷺ',
      'فرصةٌ لدراسة السيرة وتعميق محبّته ﷺ',
    ],
    recommendations: [
      'أكثِر من الصلاة عليه: «اللهم صلِّ على محمد وعلى آل محمد...»',
      'اقرأ السيرة — وتعرّف على أخلاقه وحكمته ومحبّته لأمته',
      'اعمل بسُنّته باستمرار — وهو أعظم ما تُكرِمه به ﷺ',
      'تنبيه: اتبع توجيه علمائك الموثوقين في مسألة الاحتفال الرسمي بالمولد',
    ],
    hadiths: [
      { arabic: 'لا يؤمنُ أحدُكم حتى أكونَ أحبَّ إليه من والدِه وولدِه والناسِ أجمعين.' },
    ],
    ayahs: [{ reference: 'سورة الأحزاب ٣٣:٥٦' }],
    notes: '⚠️ اختلف العلماء في حكم الاحتفال بالمولد. استشر العلماء الموثوقين، واجعل تركيزك على اتباع سُنّته ﷺ.',
  },

  'isra-miraj': {
    description:
      'في ليلةٍ واحدةٍ معجِزة، أُسري بالنبي محمد ﷺ من المسجد الحرام بمكة إلى المسجد الأقصى بالقدس ' +
      '(الإسراء)، ثم عُرج به عبر السماوات السبع إلى مقامٍ فوقها (المعراج) حيث كلّمه الله ﷻ. وفي هذا ' +
      'المعراج فُرضت الصلوات الخمس على الأمة — كانت خمسين ثم خُفِّفت إلى خمسٍ بمشورة موسى ﷺ مع بقاء ' +
      'أجر الخمسين. تؤكّد هذه الليلة حقيقة الغيب، وشرف النبي ﷺ، وعظيم منزلة الصلاة.',
    virtues: [
      'الليلة التي فُرضت فيها الصلوات الخمس — بأجر الخمسين',
      'تأكيدٌ على معجزة نبوة محمد ﷺ',
      'أمَّ النبي ﷺ الأنبياء جميعًا في الصلاة بالمسجد الأقصى',
      'تُبيّن ما يمكن أن يبلغه العبد من القرب من الله ﷻ',
    ],
    recommendations: [
      'تأمّل هذه المعجزة وقوِّ إيمانك ويقينك بالغيب',
      'اشكر الله على نعمة الصلوات الخمس — صلتك المباشرة به',
      'أقِم صلاتك أو حسّنها — فهي عماد الدين',
      'تنبيه: لم يثبت لهذه الليلة عبادةٌ مخصوصة — فاجتنب البدع',
    ],
    hadiths: [
      {
        text:
          'ثم فُرضت عليه الصلوات: خمسون صلاةً في كل يوم. فلمّا رجع مرَّ على موسى فقال: بِمَ أُمرت؟ ' +
          'قال: بخمسين صلاةً كل يوم. قال موسى: إن أمتك لا تطيق خمسين صلاةً كل يوم... ' +
          '[فلم يزل يُراجع ربّه حتى صارت خمسًا، وبقي أجر الخمسين].',
      },
    ],
    ayahs: [{ reference: 'سورة الإسراء ١٧:١' }],
    notes: '⚠️ تاريخ الإسراء والمعراج غير مؤكَّدٍ تاريخيًّا، ولم يثبت لهذه الليلة عملٌ مخصوص.',
  },

  'shaban': {
    description:
      'شعبان هو الشهر الثامن، يقع بين شهر رجبٍ الحرام وشهر رمضان المبارك. وكان النبي ﷺ يصوم في ' +
      'شعبان أكثر من أي شهرٍ تطوّعًا، وبيّن أنه شهرٌ يغفل عنه الناس تُرفع فيه الأعمال إلى الله. وشعبان ' +
      'خير تهيئةٍ روحيةٍ لرمضان: بالإكثار من الصيام وتلاوة القرآن وقضاء ما فات.',
    virtues: [
      'تُعرض الأعمال على الله في هذا الشهر — وكان النبي ﷺ يحب أن يُعرض عمله وهو صائم',
      'كان النبي ﷺ يصوم أكثر شعبان — أكثر من أي شهرٍ تطوّعًا',
      'شهر استعدادٍ روحيٍّ قبل رمضان',
      'فرصةٌ للأعمال الصالحة التي يغفل عنها الكثيرون',
    ],
    recommendations: [
      'أكثِر من صيام التطوع لتُهيّئ بدنك وروحك لرمضان',
      'اقضِ ما عليك من أيام رمضان قبل انتهاء شعبان',
      'أكثِر من تلاوة القرآن وقيام الليل',
      'أكثِر من الصلاة على النبي ﷺ',
    ],
    hadiths: [
      {
        arabic:
          'ذاك شهرٌ يغفُلُ الناسُ عنه بين رجبٍ ورمضان، وهو شهرٌ تُرفعُ فيه الأعمالُ إلى ربِّ ' +
          'العالمين، فأُحبُّ أن يُرفعَ عملي وأنا صائم.',
      },
    ],
  },

  'nisf-shaban': {
    description:
      'ليلة الخامس عشر من شعبان (الليلة التي بين الرابع عشر والخامس عشر) تُعرف بليلة البَراءة أو ' +
      'ليلة النصف من شعبان. وردت أحاديث في أن الله يطّلع على خلقه فيها فيغفر لهم إلا مشركًا أو مُشاحنًا. ' +
      'وأثبت لها شيخ الإسلام ابن تيمية فضلًا. وهي فرصةٌ للتوبة الصادقة والدعاء وزيادة العبادة.',
    virtues: [
      'ليلةٌ ذات عنايةٍ ورحمةٍ إلهيةٍ خاصة',
      'فرصةٌ لطلب المغفرة والقرب من الله',
      'أحياها كثيرٌ من السلف الصالح بزيادة العبادة',
      'يوافق صيام الخامس عشر أيام البِيض',
    ],
    recommendations: [
      'صلِّ من النوافل (قيام الليل) في هذه الليلة',
      'أكثِر من الدعاء الصادق والاستغفار',
      'صُم اليوم الخامس عشر ضمن أيام البِيض',
      'اجتنب ما أُحدث من طقوسٍ جماعيةٍ لم تثبت في السُّنّة',
    ],
    hadiths: [
      { arabic: 'يطّلعُ اللهُ إلى خلقِه في ليلةِ النصفِ من شعبان، فيغفرُ لجميعِ خلقِه إلا لمشركٍ أو مُشاحن.' },
    ],
    notes: '⚠️ اختلف العلماء في صحة أحاديث هذه الليلة. أكثِر من العبادة المطلقة دون إحداث عبادةٍ مخصوصة.',
  },

  'ramadan': {
    description:
      'رمضان هو الشهر التاسع وأقدس شهور السنة الإسلامية. يصوم المسلمون من الفجر (السحور) إلى غروب ' +
      'الشمس (الإفطار) ممتنعين عن الطعام والشراب وكل ما يُفطِّر. وليس صيامًا بدنيًّا فحسب، بل شهرُ ' +
      'تحوّلٍ روحيٍّ كامل. أُنزل فيه القرآن، وتُفتَّح أبواب الجنة وتُغلَّق أبواب النار وتُصفَّد الشياطين، ' +
      'ولله في كل ليلةٍ عتقاءُ من النار. وكان النبي ﷺ أجود ما يكون في رمضان «كالريح المرسلة».',
    virtues: [
      'تُفتَّح أبواب الجنة طوال الشهر',
      'تُغلَّق أبواب النار وتُصفَّد الشياطين',
      'لله في كل ليلةٍ عتقاءُ من النار',
      'أُنزل فيه القرآن — أعظم هدايةٍ للبشرية',
      'من صام إيمانًا واحتسابًا غُفِر له ما تقدّم من ذنبه',
      'تُضاعَف أجور الأعمال في هذا الشهر المبارك',
    ],
    recommendations: [
      'صُم كل يومٍ بنيّةٍ صادقة',
      'صلِّ التراويح كل ليلة — وقليلها خيرٌ من تركها',
      'اختِم القرآن مرّةً على الأقل',
      'أكثِر من الصدقة — فقد كان النبي ﷺ يضاعفها في رمضان',
      'تسحّر — فإن في السحور بركة',
      'احفظ لسانك وبصرك وسمعك — فالصيام انضباطٌ روحيٌّ كامل',
      'اعتمر في رمضان (عمرةٌ فيه تعدل حجّة)',
    ],
    hadiths: [
      { arabic: 'إذا دخل شهرُ رمضانَ فُتِّحت أبوابُ الجنةِ وغُلِّقت أبوابُ النارِ وصُفِّدت الشياطين.' },
      { arabic: 'من صام رمضانَ إيمانًا واحتسابًا غُفِر له ما تقدّم من ذنبه.' },
      {
        arabic:
          'كلُّ عملِ ابنِ آدمَ له إلا الصيامَ فإنه لي وأنا أجزي به، والصيامُ جُنّة، فإذا كان يومُ صومِ ' +
          'أحدِكم فلا يرفُث ولا يصخَب، فإن سابّه أحدٌ أو قاتله فليقل: إني صائم.',
      },
    ],
    ayahs: [{ reference: 'سورة البقرة ٢:١٨٥' }, { reference: 'سورة البقرة ٢:١٨٣' }],
  },

  'ramadan-last10': {
    description:
      'العشر الأواخر من رمضان أثمنُ ليالي العام. كان النبي ﷺ «يجتهد فيها ما لا يجتهد في غيرها»، ' +
      'فيوقظ أهله ويشدّ مئزره ويعتكف في المسجد. وفيها ليلة القدر التي هي خيرٌ من ألف شهر، وكل ليلة ' +
      'وترٍ يُرجى أن تكون ليلة القدر، فهي فرصةٌ لا تُضاهى للمغفرة والقرب من الله.',
    virtues: [
      'فيها ليلة القدر — ليلةٌ خيرٌ من ألف شهر (أكثر من ٨٣ سنة) عبادة',
      'كان النبي ﷺ يجتهد فيها أكثر من أي وقتٍ في السنة',
      'تنزل الملائكة بالسلام والرحمة حتى الفجر',
      'تُقدَّر فيها مقادير العام في ليلة القدر',
      'إحياء ليلةٍ كاملةٍ يُرجى به غفران ما تقدّم من الذنب',
    ],
    recommendations: [
      'اعتكف في المسجد العشر كلها إن استطعت',
      'تحرَّ ليلة القدر في الأوتار: ٢١، ٢٣، ٢٥، ٢٧، ٢٩',
      'أحيِ الليل بالصلاة، أو صلِّ آخره قبل الفجر على الأقل',
      'أكثِر من: «اللهم إنك عفوٌّ تحب العفو فاعفُ عني»',
      'قلّل من وسائل التواصل والملهيات — فهذه الليالي أثمنُ من أن تُضيَّع',
    ],
    hadiths: [
      { arabic: 'كان النبيُّ ﷺ يجتهدُ في العشرِ الأواخرِ ما لا يجتهدُ في غيرها.' },
      { arabic: 'تحرَّوا ليلةَ القدرِ في الوترِ من العشرِ الأواخرِ من رمضان.' },
    ],
    ayahs: [{ reference: 'سورة القدر ٩٧:١–٥' }],
  },

  'laylatul-qadr': {
    description:
      'الليلة السابعة والعشرون من رمضان أكثرُ الليالي التي يُلتمس فيها ليلة القدر، وإن كانت قد تقع ' +
      'في أي ليلة وترٍ من العشر. هذه الليلة الواحدة خيرٌ من ألف شهر — أكثر من ٨٣ سنة من العبادة ' +
      'المتصلة. نزل فيها القرآن، وتتنزّل الملائكة، وتُغفر الذنوب، وتُستجاب الدعوات. ومن قامها إيمانًا ' +
      'واحتسابًا غُفِر له ما تقدّم من ذنبه. ورجّح الإمام الشافعي وكثيرٌ من العلماء أن السابعة والعشرين أرجى الليالي.',
    virtues: [
      'ليلةٌ واحدة = أجرٌ خيرٌ من ألف شهر (أكثر من ٨٣ سنة) عبادةٍ متصلة',
      'نزل فيها القرآن — أعظم هدايةٍ أُنزلت للبشرية',
      'تُغفر فيها الذنوب لمن قامها إيمانًا واحتسابًا',
      'تتنزّل فيها الملائكة وجبريل ﷺ بأعدادٍ عظيمة — سلامٌ حتى الفجر',
      'للدعاء فيها قربٌ خاصٌّ من الإجابة',
    ],
    recommendations: [
      'أحيِ الليل كله بالصلاة وتلاوة القرآن والذكر',
      'أكثِر من الدعاء الذي علّمه النبي ﷺ:\n«اللهم إنك عفوٌّ تحب العفو فاعفُ عني»',
      'ردّد سورة القدر وسورة الإخلاص',
      'لا تقصُر التماسها على السابعة والعشرين — بل التمِسها في كل الأوتار',
      'ابتعد عن الشاشات والملهيات — هذه الليلة عمرٌ كاملٌ في ليلة',
    ],
    hadiths: [
      {
        arabic:
          'قلتُ: يا رسولَ الله، أرأيتَ إن علمتُ أيَّ ليلةٍ ليلةُ القدر، ما أقولُ فيها؟ قال: ' +
          '«قولي: اللهم إنك عفوٌّ تحبُّ العفوَ فاعفُ عني».',
      },
      { arabic: 'من قام ليلةَ القدرِ إيمانًا واحتسابًا غُفِر له ما تقدّم من ذنبه.' },
    ],
    ayahs: [{ reference: 'سورة القدر ٩٧:١–٣' }],
  },

  'eid-fitr': {
    description:
      'عيد الفطر أحد أعظم احتفالين في الإسلام، يُؤذِن بنهاية شهر رمضان المبارك بفرح. يومُ شكرٍ ' +
      'عظيم — يُثيب الله عباده على شهر صيامهم. يجتمع المسلمون لصلاة العيد، ويُخرجون زكاة الفطر قبل ' +
      'الصلاة، ويلبسون أجمل ثيابهم، ويحتفلون مع الأهل والمجتمع. والصيام في هذا اليوم محرَّم — فهو هديّةٌ ' +
      'من الله تُستقبل بالفرح.',
    virtues: [
      'أحد عيدين شرعهما الإسلام — هديّةٌ ربانيةٌ للأمة',
      'جزاء الله للمؤمنين الذين أتمّوا شهر رمضان',
      'يوم فرحٍ وشكرٍ ومغفرةٍ لمن صام صادقًا',
      'يُقوّي روابط الأسرة ووحدة المجتمع في العالم الإسلامي',
    ],
    recommendations: [
      '⛔ صيام يوم عيد الفطر محرَّم — فاستقبله هديّةً من الله',
      'أخرِج زكاة الفطر قبل صلاة العيد ليفرح الفقراء',
      'اغتسل والبس أجمل ثيابك الطاهرة',
      'كُل تمراتٍ (أو شيئًا حلوًا) قبل الذهاب لصلاة العيد',
      'ارجع من الصلاة من طريقٍ آخر اتباعًا للسُّنّة',
      'هنّئ: «تقبّل الله منا ومنكم»',
      'صِل الأرحام وزُر الأهل وانشر الفرح',
    ],
    hadiths: [
      { arabic: 'نهى رسولُ الله ﷺ عن صيامِ يومين: يومِ الفطرِ ويومِ الأضحى.' },
      { arabic: 'كان النبيُّ ﷺ لا يغدو يومَ الفطرِ حتى يأكلَ تمرات.' },
    ],
  },

  'six-shawwal': {
    description:
      'صيام ستة أيامٍ من شوال بعد رمضان — ابتداءً من الثاني (لأن الأول عيد) — يعدل أجر صيام السنة ' +
      'كلها. والحساب: رمضان (٣٠ يومًا) + ٦ أيامٍ من شوال = ٣٦ يومًا، كل يومٍ بعشر، فـ ٣٦ × ١٠ = ٣٦٠ ' +
      'يومًا — سنةٌ كاملة. ويمكن صيامها متتابعةً أو متفرّقةً في الشهر.',
    virtues: [
      'مع رمضان تعدل أجر صيام السنة كاملة',
      'استمرارٌ جميلٌ للزخم الروحي المكتسَب في رمضان',
      'إن داوم عليها العبد كان كمن صام الدهر كله',
    ],
    recommendations: [
      'صُم أي ٦ أيامٍ من شوال — ولا يلزم أن تكون متتابعة',
      '⛔ لا تصُم اليوم الأول من شوال (يوم العيد) — فصيامه محرَّم',
      'يرى بعض العلماء قضاء ما فات من رمضان أولًا (مسألةٌ خلافية)',
      'داوِم على عادات القرآن وقيام الليل من رمضان طوال شوال',
    ],
    hadiths: [
      { arabic: 'من صام رمضانَ ثم أتبعه ستًّا من شوالٍ كان كصيامِ الدهر.' },
    ],
  },

  'dhul-hijjah-ten': {
    description:
      'العشر الأُوَل من ذي الحجة أعظمُ أيام السنة وأبركها — حتى فُضِّلت في روايةٍ على العشر الأواخر ' +
      'من رمضان. أقسم الله بها في قوله «وليالٍ عشر». وأخبر النبي ﷺ أن ما من أيامٍ العملُ الصالح فيها ' +
      'أحبُّ إلى الله من هذه العشر. يؤدّي الحجّاج فيها مناسك الحج، ويمكن لكل مسلمٍ أينما كان أن يشارك ' +
      'في بركاتها بالإكثار من العبادة والصيام والصدقة والتكبير.',
    virtues: [
      'أفضل أيام السنة — أقسم الله بها في القرآن',
      'العمل الصالح فيها أحبُّ إلى الله من أي وقتٍ آخر',
      'فيها يوم عرفة — أعظم أيام السنة',
      'تشمل فريضة الحج — الركن الخامس من أركان الإسلام',
      'حتى الجهاد لا يعدل العمل في هذه العشر (إلا في حالاتٍ نادرة)',
    ],
    recommendations: [
      'أكثِر من كل العبادات: الذكر والقرآن والصلاة والصدقة والصيام',
      'صُم خاصةً يوم عرفة (التاسع) — يُكفّر سنتين',
      'أكثِر من التكبير: «الله أكبر الله أكبر، لا إله إلا الله، والله أكبر الله أكبر ولله الحمد»',
      'إن أردت الأضحية فلا تأخذ من شعرك أو أظفارك من أول ذي الحجة حتى تذبح',
      'أكثِر من الصدقة في هذه الأيام',
      'ادعُ لمن يؤدّون الحج',
    ],
    hadiths: [
      {
        arabic:
          'ما من أيامٍ العملُ الصالحُ فيهنَّ أحبُّ إلى الله من هذه الأيامِ العشر. قالوا: ولا الجهادُ ' +
          'في سبيل الله؟ قال: «ولا الجهادُ في سبيل الله، إلا رجلًا خرج بنفسه وماله فلم يرجع من ذلك بشيء».',
      },
    ],
    ayahs: [{ reference: 'سورة الفجر ٨٩:١–٢ (فسّرها ابن عباس وابن كثير وجمهور العلماء بالعشر الأُوَل من ذي الحجة)' }],
  },

  'arafah': {
    description:
      'اليوم التاسع من ذي الحجة — يوم عرفة — هو ركن الحج الأعظم، ولعله أعظمُ يومٍ في التقويم ' +
      'الإسلامي. يقف الحجّاج على صعيد عرفات في مشهد عبادةٍ مهيب. ولغير الحاج، صيام هذا اليوم يُكفّر ' +
      'سنتين كاملتين. ويتجلّى الله فيُباهي بأهل عرفة الملائكة، ويُعتق فيه من النار ما لا يُعتق في غيره. ' +
      'وفيه نزلت آية إكمال الدين.',
    virtues: [
      'صيامه يُكفّر سنتين: السنة الماضية والسنة القادمة',
      'يُعتق الله فيه من النار أكثر من أي يومٍ آخر',
      'يتجلّى الله فيُباهي بأهل عرفة الملائكة',
      'فيه نزلت آية إكمال الدين وإتمام النعمة',
      'أعظمُ أيام أعظمِ عشرٍ من أعظمِ شهور العمل الصالح',
    ],
    recommendations: [
      'صُم هذا اليوم إن لم تكن حاجًّا — من أعظم صيام السنة',
      'أكثِر من الدعاء طوال اليوم — فالله أقربُ ما يكون فيه',
      'ردّد: «لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيءٍ قدير» (ألف مرة إن استطعت)',
      'أكثِر من الاستغفار — فهو يوم رحمةٍ إلهية',
      'إن كنت حاجًّا: قِف بعرفة بحضور قلبٍ تام — فهو روح الحج',
    ],
    hadiths: [
      { arabic: 'صيامُ يومِ عرفةَ أحتسبُ على اللهِ أن يُكفّر السنةَ التي قبله والسنةَ التي بعده.' },
      {
        arabic:
          'ما من يومٍ أكثرَ من أن يُعتقَ اللهُ فيه عبدًا من النارِ من يومِ عرفة، وإنه ليدنو ثم يُباهي ' +
          'بهم الملائكةَ فيقول: «ما أراد هؤلاء؟».',
      },
      {
        arabic:
          'خيرُ الدعاءِ دعاءُ يومِ عرفة، وخيرُ ما قلتُ أنا والنبيون من قبلي: لا إله إلا الله وحده ' +
          'لا شريك له، له الملكُ وله الحمد، وهو على كل شيءٍ قدير.',
      },
    ],
    ayahs: [{ reference: 'سورة المائدة ٥:٣ (نزلت يوم عرفة في حجة الوداع سنة ١٠هـ)' }],
  },

  'eid-adha': {
    description:
      'عيد الأضحى أكبرُ العيدين، يوافق إتمام الحج. يُحيي ذكرى أعظم ابتلاءٍ لإبراهيم ﷺ: استعداده ' +
      'لذبح ابنه إسماعيل ﷺ طاعةً لله، ورحمة الله بفدائه بكبشٍ عظيم. يصلي المسلمون صلاة العيد، ' +
      'ويذبحون الأضاحي، ويوزّعون لحومها، ويحتفلون معًا. والصيام في هذا اليوم محرَّم.',
    virtues: [
      'أعظمُ الأيام عند الله — «يوم النحر»',
      'يجسّد الاستسلام التام لله — جوهر الإسلام (ومعناه: الاستسلام)',
      'الأضحية عبادةٌ تَصِل العبد بإبراهيم ﷺ عبر القرون',
      'احتفالٌ عالميٌّ للوحدة — تُصلّى صلاة العيد نفسها في كل أنحاء الأرض',
    ],
    recommendations: [
      '⛔ صيام يوم عيد الأضحى محرَّم',
      'صلِّ صلاة العيد واستمع للخطبة',
      'اذبح أو رتّب الأضحية — وهي سُنّةٌ مؤكَّدة أو واجبة',
      'وزّع اللحم: ثلثٌ للأهل، وثلثٌ للجيران، وثلثٌ للفقراء',
      'كبّر من فجر التاسع إلى عصر الثالث عشر',
      'البس أجمل ثيابك وانشر الفرح مع أهلك',
      'ادعُ لحجاج بيت الله في يوم الإتمام',
    ],
    hadiths: [
      { arabic: 'إن أعظمَ الأيامِ عند اللهِ يومُ النحرِ ثم يومُ القَرّ.' },
    ],
    ayahs: [{ reference: 'سورة الكوثر ١٠٨:٢' }, { reference: 'سورة الحج ٢٢:٣٧' }],
  },

  'tashreeq': {
    description:
      'الحادي عشر والثاني عشر والثالث عشر من ذي الحجة هي أيام التشريق — سُمّيت بذلك لأن الناس كانوا ' +
      'يُشرّقون فيها لحوم الأضاحي (يُجفّفونها). وهي أيام أكلٍ وشربٍ وذكرٍ لله ومتابعةٍ لمناسك الحج ' +
      '(رمي الجمار بمنى)، يستمر فيها التكبير. والصيام محرَّمٌ في هذه الأيام الثلاثة لأنها من أيام العيد.',
    virtues: [
      'امتدادٌ للعيد — أيام فرحٍ وذكرٍ معًا',
      'يستمر التكبير من فجر التاسع إلى عصر الثالث عشر',
      'يؤدّي الحجّاج فيها آخر مناسك الحج (رمي الجمار)',
      'أدرجها بعض العلماء ضمن «أفضل العشر» (إلى الثالث عشر)',
    ],
    recommendations: [
      '⛔ الصيام محرَّمٌ في الحادي عشر والثاني عشر والثالث عشر من ذي الحجة',
      'داوِم على التكبير طوال هذه الأيام',
      'استمر في الاحتفال بالعيد مع أهلك',
      'ادعُ بقبول الحج للحجاج المنفِرين من منى',
    ],
    hadiths: [
      { arabic: 'أيامُ التشريقِ أيامُ أكلٍ وشربٍ وذكرٍ لله.' },
    ],
    ayahs: [{ reference: 'سورة البقرة ٢:٢٠٣ (في أيام التشريق على ما ذهب إليه المفسّرون)' }],
  },

  'white-days': {
    description:
      'الثالث عشر والرابع عشر والخامس عشر من كل شهرٍ هجريٍّ تُسمّى «أيام البِيض» لأنها ليالي اكتمال ' +
      'القمر الذي يُنير السماء طوال الليل. وكان النبي ﷺ يصومها كل شهرٍ ولا يدعها، وأوصى بها غيره. ' +
      'وصيام ثلاثة أيامٍ في الشهر يعدل أجر صيام الشهر كله (لأن الحسنة بعشر أمثالها).',
    virtues: [
      'صيام ٣ أيامٍ شهريًّا = أجر صيام الشهر كله (مضاعفة الحسنة بعشر)',
      'لم يكن النبي ﷺ يدع صيامها سفرًا ولا حضرًا',
      'سُنّةٌ ثابتةٌ مستدامة تُبقي العبد في عبادةٍ طوال العام',
      'توافق هذه الليالي اكتمال القمر — علامةٌ طبيعيةٌ للدورة الشهرية',
    ],
    recommendations: [
      'صُم الأيام الثلاثة: الثالث عشر والرابع عشر والخامس عشر من كل شهرٍ هجري',
      'تنبيه: الثالث عشر من ذي الحجة (من أيام التشريق) — صيامه محرَّمٌ خاصة',
      'تنبيه: الخامس عشر من شعبان يوافق ليلة النصف — ليلةٌ ذات فضل',
      'ضع تذكيرًا حتى لا تفوتك هذه الأيام الثلاثة',
    ],
    hadiths: [
      { arabic: 'أوصاني خليلي ﷺ بصيامِ ثلاثةِ أيامٍ من كلِّ شهر: الثالثَ عشرَ والرابعَ عشرَ والخامسَ عشر.' },
      {
        arabic:
          'أوصاني خليلي بثلاث: صيامِ ثلاثةِ أيامٍ من كل شهر، وركعتي الضحى، وأن أوترَ قبل أن أنام.',
      },
    ],
  },

  'jummah': {
    description:
      'الجمعة خيرُ أيام الأسبوع وعيدُ المسلمين الأسبوعي. فيه خُلق آدم ﷺ، وفيه أُدخل الجنة، وفيه تقوم ' +
      'الساعة. وصلاة الجمعة فريضةٌ على الرجال المسلمين. وفي الجمعة ساعةٌ تُستجاب فيها الدعوة. وأمر ' +
      'النبي ﷺ بالإكثار من الصلاة عليه يوم الجمعة. وقراءة سورة الكهف يوم الجمعة تكون نورًا بين الجمعتين.',
    virtues: [
      'خيرُ يومٍ طلعت عليه الشمس — عيد المسلمين الأسبوعي',
      'فيه ساعةٌ تُستجاب فيها الدعوة (أرجاها آخر ساعةٍ قبل المغرب)',
      'قراءة سورة الكهف تكون حفظًا ونورًا طوال الأسبوع',
      'الإكثار من الصلاة على النبي ﷺ يوم الجمعة سُنّةٌ ثابتة',
      'خُلق آدم ﷺ يوم الجمعة — يومٌ يتصل بأصل البشرية',
    ],
    recommendations: [
      'صلِّ الجمعة — فهي فريضةٌ على الرجال وأجرها عظيم',
      'أكثِر من الدعاء — خاصةً في آخر ساعةٍ قبل المغرب',
      'اقرأ سورة الكهف (حفظًا أو من المصحف)',
      'أكثِر من الصلاة على النبي ﷺ طوال اليوم',
      'اغتسل قبل صلاة الجمعة',
      'بكّر إلى المسجد واقترب من الإمام وأنصت للخطبة',
    ],
    hadiths: [
      {
        arabic:
          'خيرُ يومٍ طلعت عليه الشمسُ يومُ الجمعة: فيه خُلق آدم، وفيه أُدخل الجنة، وفيه أُخرج منها، ' +
          'ولا تقومُ الساعةُ إلا في يومِ الجمعة.',
      },
      {
        arabic:
          'في الجمعةِ ساعةٌ لا يوافقها عبدٌ مسلمٌ وهو قائمٌ يصلي يسألُ اللهَ شيئًا إلا أعطاه إياه.',
      },
    ],
    ayahs: [{ reference: 'سورة الجمعة ٦٢:٩' }],
  },
};

// Concise Arabic names for tags / labels (keyed by event id)
const SHORT_NAMES_AR = {
  'new-year': 'رأس السنة',
  'tasuaah': 'تاسوعاء',
  'ashura': 'عاشوراء',
  'mawlid': 'المولد',
  'isra-miraj': 'الإسراء والمعراج',
  'shaban': 'شعبان',
  'nisf-shaban': 'نصف شعبان',
  'ramadan': 'رمضان',
  'ramadan-last10': 'العشر الأواخر',
  'laylatul-qadr': 'ليلة القدر',
  'eid-fitr': 'عيد الفطر',
  'six-shawwal': 'ستٌّ من شوال',
  'dhul-hijjah-ten': 'العشر الأُوَل',
  'arafah': 'يوم عرفة',
  'eid-adha': 'عيد الأضحى',
  'tashreeq': 'أيام التشريق',
  'white-days': 'الأيام البِيض',
  'jummah': 'الجمعة',
};

// ── Localised event view ──────────────────────────────────
// Returns the event with Arabic fields merged in when lang==='ar'.
function localizeEvent(evt, lang) {
  if (lang !== 'ar') return evt;
  const ar = SPECIAL_DAYS_AR[evt.id];
  if (!ar) return evt;

  const merged = Object.assign({}, evt, {
    name:            evt.arabicName,
    shortName:       SHORT_NAMES_AR[evt.id] ?? evt.shortName,
    description:     ar.description     ?? evt.description,
    virtues:         ar.virtues         ?? evt.virtues,
    recommendations: ar.recommendations ?? evt.recommendations,
    notes:           ar.notes           ?? evt.notes,
  });

  if (evt.hadiths?.length) {
    merged.hadiths = evt.hadiths.map((h, i) => {
      const a = ar.hadiths?.[i] || {};
      return Object.assign({}, h, {
        arabic: a.arabic ?? h.arabic,
        text:   a.text   ?? h.text,
      });
    });
  }
  if (evt.ayahs?.length) {
    merged.ayahs = evt.ayahs.map((a, i) => {
      const ax = ar.ayahs?.[i] || {};
      return Object.assign({}, a, { reference: ax.reference ?? a.reference });
    });
  }
  return merged;
}
