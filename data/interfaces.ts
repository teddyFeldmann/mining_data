export interface Mine {
  name: string;
  ownership: Ownership[];
  location: string;
  commodity: string[];
  stage: string;
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