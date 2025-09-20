import type { Company } from "./interfaces";

export const Companies = {
  RioTinto: { name: "Rio Tinto" },
  BHP: { name: "BHP" },
  JECO: { name: "JECO" },
  MPMaterials: { name: "MP Materials" },
  LithiumAmericas: { name: "Lithium Americas" },
  BaotouSteelRareEarthGroup: { name: "Baotou Steel Rare Earth Group" },
  LynasRareEarths: { name: "Lynas Rare Earths" },
  Inalum: { name: "Inalum" },
  FreeportMcMoRan: { name: "Freeport-McMoRan" },
  NevadaGoldMines: { name: "Nevada Gold Mines" },
  NavoiMiningAndMetallurgyCombinat: { name: "Navoi Mining & Metallurgy Combinat" },
  GoldFields: { name: "Gold Fields" },
  TianqiLithium: { name: "Tianqi Lithium" },
  Albemarle: { name: "Albemarle" },
  SQM: { name: "SQM" },
  Vale: { name: "Vale" },
  Nornickel: { name: "Nornickel" },
  PowerMetallic: { name: "Power Metallic" },
  AngloAmerican: { name: "Anglo American" },
} as const satisfies Record<string, Company>;

export type CompanyKey = keyof typeof Companies;
export const companiesList: Company[] = Object.values(Companies);
