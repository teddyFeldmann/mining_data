import type { EquipmentCompany } from "./interfaces";

export const EquipmentCompanies = {
    Epiroc: { name: "Epiroc", products: ["drill rigs"], website: "https://www.epiroc.com/"},
    Sandvik: { name: "Sandvik", products: ["drill rigs"], website: "https://www.home.sandvik/en/"},
}

export type EquipmentCompanyKey = keyof typeof EquipmentCompanies;
export const EquipmentCompaniesList: EquipmentCompany[] = Object.values(EquipmentCompanies);