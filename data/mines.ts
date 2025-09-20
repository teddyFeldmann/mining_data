export interface Mine {
  name: string;
  owner: string;
  ownership: string;
  location: string;
  commodity: string;
}

export const mines: Mine[] = [
  // Rare earths
  {
    name: "Mountain Pass",
    owner: "MP Materials",
    ownership: "100%",
    location: "California, USA",
    commodity: "Rare Earths",
  },
  {
    name: "Bayan Obo",
    owner: "Baotou Steel Rare Earth Group",
    ownership: "100%",
    location: "Inner Mongolia, China",
    commodity: "Rare Earths",
  },
  {
    name: "Mt Weld",
    owner: "Lynas Rare Earths",
    ownership: "100%",
    location: "Western Australia",
    commodity: "Rare Earths",
  },

  // Copper
  {
    name: "Bingham Canyon",
    owner: "Rio Tinto",
    ownership: "100%",
    location: "Utah, USA",
    commodity: "Copper",
  },
  {
    name: "Escondida",
    owner: "BHP (57.5%), Rio Tinto (30%), JECO (12.5%)",
    ownership: "57.5% / 30% / 12.5%",
    location: "Atacama Desert, Chile",
    commodity: "Copper",
  },
  {
    name: "Grasberg",
    owner: "PT Freeport Indonesia (Inalum 51%, Freeport-McMoRan 49%)",
    ownership: "51% / 49%",
    location: "Papua, Indonesia",
    commodity: "Copper & Gold",
  },
  {
    name: "Resolution Copper",
    owner: "Rio Tinto / BHP",
    ownership: "55% / 45%",
    location: "Arizona, USA",
    commodity: "Copper",
  },

  // Gold
  {
    name: "Carlin Trend",
    owner: "Nevada Gold Mines (Barrick 61.5%, Newmont 38.5%)",
    ownership: "61.5% / 38.5%",
    location: "Nevada, USA",
    commodity: "Gold",
  },
  {
    name: "Muruntau",
    owner: "Navoi Mining & Metallurgy Combinat",
    ownership: "100%",
    location: "Uzbekistan",
    commodity: "Gold",
  },
  {
    name: "South Deep",
    owner: "Gold Fields",
    ownership: "100%",
    location: "Gauteng, South Africa",
    commodity: "Gold",
  },

  // Lithium
  {
    name: "Greenbushes",
    owner: "Tianqi Lithium (51%), Albemarle (49%)",
    ownership: "51% / 49%",
    location: "Western Australia",
    commodity: "Lithium",
  },
  {
    name: "Thacker Pass",
    owner: "Lithium Americas",
    ownership: "100%",
    location: "Nevada, USA",
    commodity: "Lithium",
  },
  {
    name: "Salar de Atacama",
    owner: "SQM / Albemarle",
    ownership: "Multiple JVs",
    location: "Chile",
    commodity: "Lithium",
  },

  // Nickel
  {
    name: "Voisey's Bay",
    owner: "Vale",
    ownership: "100%",
    location: "Labrador, Canada",
    commodity: "Nickel",
  },
  {
    name: "Nornickel Operations",
    owner: "Nornickel",
    ownership: "100%",
    location: "Norilsk, Russia",
    commodity: "Nickel",
  },
  {
    name: "NISK",
    owner: "Power Nickel",
    ownership: "100%",
    location: "Quebec, Canada",
    commodity: "Nickel",
  },

  // Iron ore
  {
    name: "Carajás",
    owner: "Vale",
    ownership: "100%",
    location: "Pará, Brazil",
    commodity: "Iron Ore",
  },
  {
    name: "Hamersley",
    owner: "Rio Tinto",
    ownership: "100%",
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Sishen",
    owner: "Kumba Iron Ore (Anglo American)",
    ownership: "100%",
    location: "Northern Cape, South Africa",
    commodity: "Iron Ore",
  },

  // Borates
  {
    name: "Borax Mine",
    owner: "Rio Tinto",
    ownership: "100%",
    location: "Boron, California, USA",
    commodity: "Borates",
  },
];
