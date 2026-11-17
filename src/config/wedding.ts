export interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
  description: string;
  dressCode?: string;
}

/** Per-side overrides merged onto shared event fields (bride details are the defaults). */
export type EventSideOverride = Partial<
  Pick<WeddingEvent, "date" | "time" | "venue" | "address" | "mapUrl" | "description">
>;

export const WEDDING_CONFIG = {
  couple: {
    illustration: "/images/couple-animated.png",
    groom: {
      name: "Rahul",
      fullName: "Rahul Yadav",
      tagline: "A heart full of love and dreams",
      photo: "/images/groom-placeholder.svg",
    },
    bride: {
      name: "Gauri",
      fullName: "Gauri Yadav",
      tagline: "Grace, beauty, and endless joy",
      photo: "/images/bride-placeholder.svg",
    },
  },

  weddingDate: new Date("2026-12-01T20:00:00"),

  /** Countdown target by inviting family side. */
  weddingDateBySide: {
    bride: new Date("2026-12-01T20:00:00"),
    groom: new Date("2026-12-01T19:00:00"),
  },

  families: {
    groom: {
      surname: "Yadav Family",
      parents: "Satendra Singh & Kamlesh Devi",
    },
    bride: {
      surname: "Yadav Family",
      parents: "Meena Devi & Satish Yadav",
    },
  },

  invitation: {
    invocation: "॥ श्री गणेशाय नमः ॥",
    title: "Wedding",
    blessing: "With the blessings of the Almighty and our beloved elders",
    groomElders: ["Late Rameshwar Dayal", "Goga Shri"],
    groomParents: ["Satendra Singh", "Kamlesh Devi"],
    invitationLine:
      "cordially invite you to grace the auspicious wedding ceremony of their beloved son",
    brideIntroduction: "Beloved daughter of",
    brideParents: ["Meena Devi", "Satish Yadav"],
    brideGrandparentsIntroduction: "Granddaughter of",
    brideGrandparents: ["Late Atarpyari Devi", "Late Faujdar Singh Yadav"],
    venue: "Royal Krishna Garden Makkhanpur",
    closing:
      "Your gracious presence and blessings will make this occasion truly memorable.",
    hindi: {
      invocation: "॥ श्री गणेशाय नमः ॥",
      title: "शुभ विवाह",
      blessing: "ईश्वर की असीम कृपा एवं पूज्यजनों के पावन आशीर्वाद से",
      groomElders: ["स्वर्गीय रामेश्वर दयाल", "गोगा श्री"],
      groomParents: ["श्री सत्येन्द्र सिंह", "श्रीमती कमलेश देवी"],
      invitationLine: "अपने प्रिय सुपुत्र",
      groomName: "चिरंजीव राहुल यादव",
      unionLine: "का शुभ विवाह",
      brideName: "आयुष्मती गौरी यादव",
      brideConnector: "के साथ",
      brideIntroduction: "सुपुत्री",
      brideParents: ["मीना देवी", "सतीश यादव"],
      brideGrandparentsIntroduction: "पौत्री",
      brideGrandparents: ["स्वर्गीय अतरप्यारी देवी", "स्वर्गीय फौजदार सिंह यादव"],
      weekday: "शनिवार",
      date: "1 दिसम्बर 2026",
      venue: "रॉयल कृष्णा गार्डन मक्कनपुर",
      closing: "कृपया पधारकर वर-वधू को अपना शुभाशीष प्रदान करें",
    },
  },

  receptionInvitation: {
    invocation: "॥ श्री गणेशाय नमः ॥",
    title: "Reception",
    blessing: "With the blessings of the Almighty and our beloved elders",
    groomElders: ["Late Rameshwar Dayal", "Goga Shri"],
    groomParents: ["Satendra Singh", "Kamlesh Devi"],
    invitationLine:
      "cordially invite you to celebrate the Wedding Reception of their beloved son",
    coupleConnector: "and",
    brideIntroduction: "Beloved daughter of",
    brideParents: ["Meena Devi", "Satish Yadav"],
    brideGrandparentsIntroduction: "Granddaughter of",
    brideGrandparents: ["Late Atarpyari Devi", "Late Faujdar Singh Yadav"],
    date: new Date("2026-11-23T19:00:00"),
    venuePrefix: "At",
    venue: "Utkarsh Lawn",
    dinner: "Dinner : 7:00 PM onwards",
    closing:
      "Your gracious presence and blessings will be our greatest honour as we celebrate the beginning of their new journey together.",
    hindi: {
      invocation: "॥ श्री गणेशाय नमः ॥",
      title: "प्रीतिभोज समारोह",
      blessing: "ईश्वर की असीम कृपा एवं पूज्यजनों के पावन आशीर्वाद से",
      groomElders: ["स्वर्गीय रामेश्वर दयाल", "गोगा श्री"],
      groomParents: ["श्री सत्येन्द्र सिंह", "श्रीमती कमलेश देवी"],
      invitationLine: "आपको सपरिवार सादर आमंत्रित करते हैं",
      coupleIntroduction: "नवविवाहित युगल",
      groomName: "चिरंजीव राहुल यादव",
      coupleConnector: "एवं",
      brideName: "आयुष्मती गौरी यादव",
      occasionLine: "के सम्मान में आयोजित प्रीतिभोज समारोह में",
      expectation:
        "आपकी स्नेहमयी उपस्थिति एवं शुभाशीष की हार्दिक अपेक्षा है।",
      weekday: "सोमवार",
      date: "23 नवम्बर 2026",
      venuePrefix: "स्थान",
      venue: "उत्कर्ष लॉन",
      dinner: "रात्रि भोज : सायं 7:00 बजे से",
      closing: "आपकी उपस्थिति हमारे लिए अत्यंत हर्ष एवं सौभाग्य का विषय होगी।",
    },
  },

  preWeddingInvitation: {
    invocation: "॥ श्री गणेशाय नमः ॥",
    title: "Pre-Wedding Celebrations",
    blessing: "With the blessings of the Almighty and our beloved elders",
    groomElders: ["Late Rameshwar Dayal", "Goga Shri"],
    groomParents: ["Satendra Singh", "Kamlesh Devi"],
    invitationLine:
      "cordially invite you to celebrate the joyous pre-wedding festivities of",
    coupleConnector: "with",
    ceremonies: ["Haldi Ceremony", "Mehndi Ceremony", "Sangeet Evening"],
    date: new Date("2026-11-20T10:00:00"),
    venuePrefix: "Venue",
    venue: "Our Residence",
    closing: "Come celebrate with music, laughter, colours and togetherness.",
    hindi: {
      invocation: "॥ श्री गणेशाय नमः ॥",
      title: "पूर्व वैवाहिक समारोह",
      blessing: "ईश्वर की कृपा एवं पूज्यजनों के आशीर्वाद से",
      groomElders: ["स्वर्गीय रामेश्वर दयाल", "गोगा श्री"],
      groomParents: ["श्री सत्येन्द्र सिंह", "श्रीमती कमलेश देवी"],
      invitationLine: "सादर आमंत्रित करते हैं अपने प्रिय सुपुत्र",
      groomName: "चिरंजीव राहुल यादव",
      coupleConnector: "एवं",
      brideName: "आयुष्मती गौरी यादव",
      occasionLine: "के शुभ विवाह के उपलक्ष्य में आयोजित",
      ceremonies: ["हल्दी समारोह", "मेहंदी समारोह", "संगीत संध्या"],
      datePrefix: "दिनांक",
      date: "20 नवम्बर 2026",
      venuePrefix: "स्थान",
      venue: "निवास स्थान",
      closing: "आपकी उपस्थिति हमारे लिए सौभाग्य एवं प्रसन्नता का विषय होगी।",
    },
  },

  blessing: {
    hindi: "शुभ विवाह",
    english: "With the blessings of our families, we invite you to celebrate our union",
  },

  hashtag: "#RahulWedsGauri",

  hero: {
    background: "/images/Generated_image.png",
    couple: "/images/couple-animated.png",
  },

  music: {
    en: {
      src: "/music/ordinary.mp3",
      title: "Ordinary — Alex Warren",
      startOffsetSec: 0,
    },
    hi: {
      src: "/music/leja-instrumental.mp3",
      title: "Leja (Instrumental) — Lost Stories",
      startOffsetSec: 50,
    },
  },

  photos: [
    "/images/gallery-1.svg",
    "/images/gallery-2.svg",
    "/images/gallery-3.svg",
    "/images/gallery-4.svg",
    "/images/gallery-5.svg",
    "/images/gallery-6.svg",
  ],

  sharedAlbum: {
    title: "Shared Memories",
    url: "https://photos.app.goo.gl/vPQqe1g9Uv35TFE39",
    email: "ry8416200@gmail.com",
    description:
      "Capture the joy of our celebration — add your favourite photos from Mehndi to Reception.",
  },

  events: [
    {
      id: "haldi",
      title: "Haldi Ceremony",
      date: "2026-11-30",
      time: "10:00 AM",
      venue: "Rupaspur Chauraha, Firozabad - Fauji Building Material",
      address:
        "Fauji Building Material, Rupaspur Chauraha, Firozabad, Uttar Pradesh 283203",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Fauji+Building+Material+Rupaspur+Chauraha+Firozabad+Uttar+Pradesh",
      description: "A morning of turmeric blessings, laughter, and joyful rituals.",
      dressCode: "Yellow / Light festive colors",
    },
    {
      id: "lagan-teeka",
      title: "Lagan Teeka",
      date: "2026-11-27",
      time: "5:00 PM onwards",
      venue: "GPS Garden Rupaspur Firozabad",
      address:
        "GPS Garden Rupaspur, Firozabad, Uttar Pradesh 283203",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=GPS+Garden+Rupaspur+Firozabad+Uttar+Pradesh",
      description: "The sacred teeka ceremony blessing the couple before the wedding.",
      dressCode: "Traditional / Festive wear",
    },
    // {
    //   id: "cocktail",
    //   title: "Sangeet Evening",
    //   date: "2026-11-20",
    //   time: "Time to be announced",
    //   venue: "Our Residence",
    //   address: "Our Residence",
    //   mapUrl: "https://maps.google.com/?q=India",
    //   description: "An evening filled with music, laughter, dance, and celebration.",
    //   dressCode: "Festive / Evening wear",
    // },
    {
      id: "wedding",
      title: "Barat & Wedding Ceremony",
      date: "2026-12-01",
      time: "8:00 PM onwards",
      venue: "Makkhanpur Royal Krishna Garden",
      address:
        "Makkhanpur, Royal Krishna Garden, Firozabad, Uttar Pradesh 283203",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Makkhanpur+Royal+Krishna+Garden+Firozabad+Uttar+Pradesh",
      description: "The sacred union of Rahul and Gauri — witness our vows and blessings.",
      dressCode: "Traditional / Formal ethnic wear",
    },
  ] satisfies WeddingEvent[],

  /**
   * Bride-side Haldi/Mehndi/Wedding times live on `events` above.
   * Groom-side differences (times / venues) are merged when side=groom.
   */
  eventSideOverrides: {
    groom: {
      haldi: {
        time: "10:00 AM",
        venue: "Rupaspur Chauraha, Firozabad - Fauji Building Material",
        address:
          "Fauji Building Material, Rupaspur Chauraha, Firozabad, Uttar Pradesh 283203",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Fauji+Building+Material+Rupaspur+Chauraha+Firozabad+Uttar+Pradesh",
      },
      wedding: {
        time: "7:00 PM onwards",
      },
    },
  } as const satisfies Record<string, Record<string, EventSideOverride>>,

  closing: {
    message:
      "Your presence and blessings will make our celebration complete. We look forward to sharing this special journey with you.",
    signature: "With love, Rahul & Gauri",
  },
} as const;

export type WeddingConfig = typeof WEDDING_CONFIG;
