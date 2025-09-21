import type { Mine } from "./interfaces";
import { Companies as C } from "./companies";

export const mines: Mine[] = [
  {
    name: "Mountain Pass",
    ownership: [{ owner: C.MPMaterials, ownership: 100 }],
    location: "California, USA",
    commodity: "Rare Earths",
  },
  {
    name: "Bayan Obo",
    ownership: [{ owner: C.BaotouSteelRareEarthGroup, ownership: 100 }],
    location: "Inner Mongolia, China",
    commodity: "Rare Earths",
  },
  {
    name: "Mt Weld",
    ownership: [{ owner: C.LynasRareEarths, ownership: 100 }],
    location: "Western Australia",
    commodity: "Rare Earths",
  },
  {
    name: "Bingham Canyon",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Utah, USA",
    commodity: "Copper",
  },
  {
    name: "Grasberg",
    ownership: [
      { owner: C.Inalum, ownership: 51 },
      { owner: C.FreeportMcMoRan, ownership: 49 },
    ],
    location: "Papua, Indonesia",
    commodity: "Copper & Gold",
  },
  {
    name: "Carlin Trend",
    ownership: [{ owner: C.NevadaGoldMines, ownership: 100 }],
    location: "Nevada, USA",
    commodity: "Gold",
  },
  {
    name: "Muruntau",
    ownership: [{ owner: C.NavoiMiningAndMetallurgyCombinat, ownership: 100 }],
    location: "Uzbekistan",
    commodity: "Gold",
  },
  {
    name: "South Deep",
    ownership: [{ owner: C.GoldFields, ownership: 100 }],
    location: "Gauteng, South Africa",
    commodity: "Gold",
  },
  {
    name: "Greenbushes",
    ownership: [
      { owner: C.TianqiLithium, ownership: 51 },
      { owner: C.Albemarle, ownership: 49 },
    ],
    location: "Western Australia",
    commodity: "Lithium",
  },
  {
    name: "Thacker Pass",
    ownership: [{ owner: C.LithiumAmericas, ownership: 100 }],
    location: "Nevada, USA",
    commodity: "Lithium",
  },
  {
    name: "Salar de Atacama",
    ownership: [
      { owner: C.SQM, ownership: 50 },
      { owner: C.Albemarle, ownership: 50 },
    ],
    location: "Chile",
    commodity: "Lithium",
  },
  {
    name: "Voisey's Bay",
    ownership: [{ owner: C.Vale, ownership: 100 }],
    location: "Labrador, Canada",
    commodity: "Nickel",
  },
  {
    name: "Nornickel Operations",
    ownership: [{ owner: C.Nornickel, ownership: 100 }],
    location: "Norilsk, Russia",
    commodity: "Nickel",
  },
  {
    name: "NISK",
    ownership: [{ owner: C.PowerMetallic, ownership: 100 }],
    location: "Quebec, Canada",
    commodity: "Nickel",
  },
  {
    name: "Carajás",
    ownership: [{ owner: C.Vale, ownership: 100 }],
    location: "Pará, Brazil",
    commodity: "Iron Ore",
  },
  {
    name: "Hamersley",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Sishen",
    ownership: [{ owner: C.AngloAmerican, ownership: 100 }],
    location: "Northern Cape, South Africa",
    commodity: "Iron Ore",
  },
  {
    name: "Borax Mine",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Boron, California, USA",
    commodity: "Borates",
  },
  {
    name: "Kolwezi",
    ownership: [
      { owner: C.ZijinMining, ownership: 67 },
      { owner: C.Gecamines, ownership: 28 },
      { owner: C.DRCGovernment, ownership: 5 },
    ],
    location: "Lualaba Province, DRC",
    commodity: "Copper",
  },
  {
    name: "Kamoa-Kakula",
    ownership: [
      { owner: C.ZijinMining, ownership: 39.6 },
      { owner: C.IvanhoeMines, ownership: 39.6 },
      { owner: C.Gecamines, ownership: 20 },
      { owner: C.CrystalRiver, ownership: 0.8 },
    ],
    location: "Lualaba Province, DRC",
    commodity: "Copper",
  },
  {
    name: "Akyem",
    ownership: [{ owner: C.ZijinMining, ownership: 100 }],
    location: "Eastern Region, Ghana",
    commodity: "Gold",
  },
  {
    name: "Garatau",
    ownership: [
      { owner: C.ZijinMining, ownership: 74 },
      { owner: C.GenorahResources, ownership: 26 },
    ],
    location: "Fetakgomo Tubase, South Africa",
    commodity: "PGMs",
  },
  {
    name: "Gudai-Darri",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Tom Price",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Paraburdoo",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Marandoo",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Brockman 2",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Brockman 4",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Nammuldi / Western Turner Syncline",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Silvergrass",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Yandicoogina",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "West Angelas (Robe River JV)",
    ownership: [
      { owner: C.RioTinto, ownership: 53 },
      { owner: C.MitsuiAndCo, ownership: 33 },
      { owner: C.NipponSteel, ownership: 14 },
    ],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Robe Valley - Mesa A",
    ownership: [
      { owner: C.RioTinto, ownership: 53 },
      { owner: C.MitsuiAndCo, ownership: 33 },
      { owner: C.NipponSteel, ownership: 14 },
    ],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Robe Valley - Mesa J",
    ownership: [
      { owner: C.RioTinto, ownership: 53 },
      { owner: C.MitsuiAndCo, ownership: 33 },
      { owner: C.NipponSteel, ownership: 14 },
    ],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Hope Downs 1",
    ownership: [
      { owner: C.RioTinto, ownership: 50 },
      { owner: C.HancockProspecting, ownership: 50 },
    ],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Hope Downs 4",
    ownership: [
      { owner: C.RioTinto, ownership: 50 },
      { owner: C.HancockProspecting, ownership: 50 },
    ],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Western Range",
    ownership: [
      { owner: C.RioTinto, ownership: 54 },
      { owner: C.ChinaBaowuSteelGroup, ownership: 46 },
    ],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Iron Ore Company of Canada (IOC)",
    ownership: [
      { owner: C.RioTinto, ownership: 58.7 },
      { owner: C.MitsubishiCorporation, ownership: 26.2 },
      { owner: C.LabradorIronOreRoyalty, ownership: 15.1 },
    ],
    location: "Labrador & Quebec, Canada",
    commodity: "Iron Ore",
  },
  {
    name: "Weipa-Amrun",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Queensland, Australia",
    commodity: "Bauxite",
  },
  {
    name: "Gove",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Northern Territory, Australia",
    commodity: "Bauxite",
  },
  {
    name: "Boron (U.S. Borax)",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Boron, California, USA",
    commodity: "Borates",
  },
  {
    name: "Diavik",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Northwest Territories, Canada",
    commodity: "Diamonds",
  },
  {
    name: "Richards Bay Minerals (RBM)",
    ownership: [
      { owner: C.RioTinto, ownership: 74 },
      { owner: C.BlueHorizonInvestments, ownership: 26 },
    ],
    location: "KwaZulu-Natal, South Africa",
    commodity: "Ilmenite/Rutile/Zircon",
  },
  {
    name: "QIT Madagascar Minerals (QMM)",
    ownership: [
      { owner: C.RioTinto, ownership: 80 },
      { owner: C.MadagascarGovernment, ownership: 20 },
    ],
    location: "Fort Dauphin, Madagascar",
    commodity: "Ilmenite",
  },
  {
    name: "Lac Tio (QIT Fer et Titane)",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Québec, Canada",
    commodity: "Ilmenite",
  },
  {
    name: "Kennecott (Bingham Canyon)",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Utah, USA",
    commodity: "Copper",
  },
  {
    name: "Oyu Tolgoi",
    ownership: [
      { owner: C.RioTinto, ownership: 66 },
      { owner: C.MongoliaGovernment, ownership: 34 },
    ],
    location: "Ömnögovi, Mongolia",
    commodity: "Copper & Gold",
  },
  {
    name: "Resolution Copper",
    ownership: [
      { owner: C.RioTinto, ownership: 55 },
      { owner: C.BHP, ownership: 45 },
    ],
    location: "Arizona, USA",
    commodity: "Copper (project)",
  },
  {
    name: "Escondida",
    ownership: [
      { owner: C.BHP, ownership: 57.5 },
      { owner: C.RioTinto, ownership: 30 },
      { owner: C.JECO, ownership: 12.5 },
    ],
    location: "Antofagasta, Chile",
    commodity: "Copper",
  },
  {
    name: "Spence (Pampa Norte)",
    ownership: [{ owner: C.BHP, ownership: 100 }],
    location: "Antofagasta, Chile",
    commodity: "Copper",
  },
  {
    name: "Olympic Dam",
    ownership: [{ owner: C.BHP, ownership: 100 }],
    location: "South Australia, Australia",
    commodity: "Copper (U/Au/Ag by-products)",
  },
  {
    name: "Prominent Hill",
    ownership: [{ owner: C.BHP, ownership: 100 }],
    location: "South Australia, Australia",
    commodity: "Copper & Gold",
  },
  {
    name: "Carrapateena",
    ownership: [{ owner: C.BHP, ownership: 100 }],
    location: "South Australia, Australia",
    commodity: "Copper & Gold",
  },
  {
    name: "Jansen (Stage 1)",
    ownership: [{ owner: C.BHP, ownership: 100 }],
    location: "Saskatchewan, Canada",
    commodity: "Potash (project)",
  },
  {
    name: "South Flank (Mining Area C hub)",
    ownership: [
      { owner: C.BHP, ownership: 85 },
      { owner: C.Itochu, ownership: 8 },
      { owner: C.MitsuiAndCo, ownership: 7 },
    ],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Jimblebar",
    ownership: [
      { owner: C.BHP, ownership: 85 },
      { owner: C.Itochu, ownership: 8 },
      { owner: C.MitsuiAndCo, ownership: 7 },
    ],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Newman (Mt Whaleback & satellites)",
    ownership: [
      { owner: C.BHP, ownership: 85 },
      { owner: C.MitsuiItochuIron, ownership: 10 },
      { owner: C.Itochu, ownership: 5 },
    ],
    location: "Pilbara, Western Australia",
    commodity: "Iron Ore",
  },
  {
    name: "Goonyella Riverside (BMA)",
    ownership: [
      { owner: C.BHP, ownership: 50 },
      { owner: C.MitsubishiDevelopment, ownership: 50 },
    ],
    location: "Queensland, Australia",
    commodity: "Steelmaking Coal",
  },
  {
    name: "Broadmeadow (BMA)",
    ownership: [
      { owner: C.BHP, ownership: 50 },
      { owner: C.MitsubishiDevelopment, ownership: 50 },
    ],
    location: "Queensland, Australia",
    commodity: "Steelmaking Coal",
  },
  {
    name: "Peak Downs (BMA)",
    ownership: [
      { owner: C.BHP, ownership: 50 },
      { owner: C.MitsubishiDevelopment, ownership: 50 },
    ],
    location: "Queensland, Australia",
    commodity: "Steelmaking Coal",
  },
  {
    name: "Saraji (BMA)",
    ownership: [
      { owner: C.BHP, ownership: 50 },
      { owner: C.MitsubishiDevelopment, ownership: 50 },
    ],
    location: "Queensland, Australia",
    commodity: "Steelmaking Coal",
  },
  {
    name: "Caval Ridge (BMA)",
    ownership: [
      { owner: C.BHP, ownership: 50 },
      { owner: C.MitsubishiDevelopment, ownership: 50 },
    ],
    location: "Queensland, Australia",
    commodity: "Steelmaking Coal",
  },
  {
    name: "Quellaveco",
    ownership: [
      { owner: C.AngloAmerican, ownership: 60 },
      { owner: C.MitsubishiCorporation, ownership: 40 },
    ],
    location: "Moquegua, Peru",
    commodity: "Copper",
  },
  {
    name: "Collahuasi",
    ownership: [
      { owner: C.AngloAmerican, ownership: 44 },
      { owner: C.Glencore, ownership: 44 },
      { owner: C.JapaneseMitsuiJV, ownership: 12 },
    ],
    location: "Tarapacá, Chile",
    commodity: "Copper",
  },
  {
    name: "Los Bronces",
    ownership: [
      { owner: C.AngloAmerican, ownership: 50.1 },
      { owner: C.CodelcoMitsuiJV, ownership: 29.5 },
      { owner: C.MitsubishiCorporation, ownership: 20.4 },
    ],
    location: "Metropolitan Region, Chile",
    commodity: "Copper",
  },
  {
    name: "El Soldado",
    ownership: [
      { owner: C.AngloAmerican, ownership: 50.1 },
      { owner: C.CodelcoMitsuiJV, ownership: 29.5 },
      { owner: C.MitsubishiCorporation, ownership: 20.4 },
    ],
    location: "Valparaíso, Chile",
    commodity: "Copper",
  },

  // -----------------------------
  // ANGLO AMERICAN — IRON ORE
  // -----------------------------
  {
    name: "Sishen (Kumba Iron Ore)",
    ownership: [{ owner: C.AngloAmerican, ownership: 100 }],
    location: "Northern Cape, South Africa",
    commodity: "Iron Ore",
  },
  {
    name: "Kolomela (Kumba Iron Ore)",
    ownership: [{ owner: C.AngloAmerican, ownership: 100 }],
    location: "Northern Cape, South Africa",
    commodity: "Iron Ore",
  },
  {
    name: "Minas-Rio",
    ownership: [
      { owner: C.AngloAmerican, ownership: 85 },
      { owner: C.Vale, ownership: 15 },
    ],
    location: "Minas Gerais, Brazil",
    commodity: "Iron Ore",
  },
  {
    name: "Woodsmith",
    ownership: [{ owner: C.AngloAmerican, ownership: 100 }],
    location: "North Yorkshire, United Kingdom",
    commodity: "Polyhalite (project)",
  },

  //   {
  //     name: "",
  //     ownership: [{ owner: C., ownership:  }],
  //     location: "",
  //     commodity:
  //   },
];
