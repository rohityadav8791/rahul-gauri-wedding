export type InvitationSide = "groom" | "bride";
export type InvitationLanguage = "en" | "hi";

export interface InvitationSideContent {
  sideLabel: string;
  primaryName: string;
  unionLine: string;
  secondaryName: string;
  partnerConnector?: string;
  /** Inviting-side lineage shown under the couple names */
  familyIntroduction: string;
  parents: string[];
  grandparentsIntroduction: string;
  grandparents: string[];
  weekday: string;
  date: string;
  venue: string;
  closing: string;
  /** Back of the blue card — warm invite to the celebration */
  warmTitle: string;
  warmMessage: string;
  warmReceptionLine: string;
  signature: string;
}

const GROOM_EN: InvitationSideContent = {
  sideLabel: "Groom's Invitation",
  primaryName: "Rahul",
  unionLine: "weds",
  secondaryName: "Gauri",
  familyIntroduction: "Beloved son of",
  parents: ["Satendra Singh", "Kamlesh Devi"],
  grandparentsIntroduction: "Grandson of",
  grandparents: ["Rameshwar Dayal", "Goga Shri"],
  weekday: "Saturday",
  date: "1 December 2026",
  venue: "Royal Krishna Garden Makkhanpur",
  closing:
    "Your gracious presence and blessings will make this occasion truly memorable.",
  warmTitle: "Join us",
  warmMessage:
    "With warm hearts, we invite you to bless us on this auspicious day as we begin our new journey together.",
  warmReceptionLine:
    "It would mean the world to us to have you there — your presence will make our celebration complete.",
  signature: "With love, Rahul & Gauri",
};

const GROOM_HI: InvitationSideContent = {
  sideLabel: "वर पक्ष निमंत्रण",
  primaryName: "राहुल",
  unionLine: "का शुभ विवाह",
  secondaryName: "गौरी",
  partnerConnector: "के साथ",
  familyIntroduction: "सुपुत्र",
  parents: ["श्री सत्येन्द्र सिंह", "श्रीमती कमलेश देवी"],
  grandparentsIntroduction: "पौत्र",
  grandparents: ["रामेश्वर दयाल", "गोगा श्री"],
  weekday: "शनिवार",
  date: "1 दिसम्बर 2026",
  venue: "रॉयल कृष्णा गार्डन मक्कनपुर",
  closing: "कृपया पधारकर वर-वधू को अपना शुभाशीष प्रदान करें",
  warmTitle: "आमंत्रण",
  warmMessage:
    "हार्दिक प्रेम से निवेदन है कि आप इस पावन अवसर पर पधारकर हमें अपना आशीर्वाद दें।",
  warmReceptionLine:
    "आपकी उपस्थिति हमारे लिए अत्यंत हर्ष का विषय होगी — आपके आने से हमारा उत्सव पूर्ण होगा।",
  signature: "सप्रेम, राहुल एवं गौरी",
};

const BRIDE_EN: InvitationSideContent = {
  sideLabel: "Bride's Invitation",
  primaryName: "Gauri",
  unionLine: "weds",
  secondaryName: "Rahul",
  familyIntroduction: "Beloved daughter of",
  parents: ["Meena Devi", "Satish Yadav"],
  grandparentsIntroduction: "Granddaughter of",
  grandparents: ["Late Atarpyari Devi", "Late Faujdar Singh Yadav"],
  weekday: "Saturday",
  date: "1 December 2026",
  venue: "Royal Krishna Garden Makkhanpur",
  closing:
    "Your gracious presence and blessings will make this occasion truly memorable.",
  warmTitle: "Join us",
  warmMessage:
    "With warm hearts, we invite you to bless us on this auspicious day as we begin our new journey together.",
  warmReceptionLine:
    "It would mean the world to us to have you there — your presence will make our celebration complete.",
  signature: "With love, Gauri & Rahul",
};

const BRIDE_HI: InvitationSideContent = {
  sideLabel: "वधू पक्ष निमंत्रण",
  primaryName: "गौरी",
  unionLine: "का शुभ विवाह",
  secondaryName: "राहुल",
  partnerConnector: "के साथ",
  familyIntroduction: "सुपुत्री",
  parents: ["मीना देवी", "सतीश यादव"],
  grandparentsIntroduction: "पौत्री",
  grandparents: ["स्वर्गीय अतरप्यारी देवी", "स्वर्गीय फौजदार सिंह यादव"],
  weekday: "शनिवार",
  date: "1 दिसम्बर 2026",
  venue: "रॉयल कृष्णा गार्डन मक्कनपुर",
  closing: "कृपया पधारकर वर-वधू को अपना शुभाशीष प्रदान करें",
  warmTitle: "आमंत्रण",
  warmMessage:
    "हार्दिक प्रेम से निवेदन है कि आप इस पावन अवसर पर पधारकर हमें अपना आशीर्वाद दें।",
  warmReceptionLine:
    "आपकी उपस्थिति हमारे लिए अत्यंत हर्ष का विषय होगी — आपके आने से हमारा उत्सव पूर्ण होगा।",
  signature: "सप्रेम, गौरी एवं राहुल",
};

export const INVITATION_VERSIONS = {
  groom: { en: GROOM_EN, hi: GROOM_HI },
  bride: { en: BRIDE_EN, hi: BRIDE_HI },
} as const;

export function parseInvitationSide(value: string | null | undefined): InvitationSide {
  return value === "bride" ? "bride" : "groom";
}

export function getInvitationContent(
  side: InvitationSide,
  language: InvitationLanguage,
): InvitationSideContent {
  return INVITATION_VERSIONS[side][language];
}
