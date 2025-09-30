export interface Mine {
  name: string;
  ownership?: Ownership[];
  location: string;
  commodity: string[];
  stage: string;
  complex?: Complex;
  lat?: number;
  lng?: number;
}

export interface Company {
    name: string;
    primaryListing?: string[];
    secondaryListing?: string[];
}

export interface Ownership {
    owner: Company,
    ownership: number
}

export interface Complex {
  name: string;
  ownership: Ownership[];
}

export interface EquipmentCompany {
  name: string;
  products: string[];
  website: string;
}

export interface FundingRound {
  roundName: string;
  amount: number;
}

export interface Startup {
  name: string;
  funding?: FundingRound[];
  website?: string;
}
