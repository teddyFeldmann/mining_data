import type { Mine } from "./interfaces";
import { Companies as C } from "./companies";

export const mines: Mine[] = [
  // Rare earths
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

  // Copper
  {
    name: "Bingham Canyon",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Utah, USA",
    commodity: "Copper",
  },
  {
    name: "Escondida",
    ownership: [
      { owner: C.BHP, ownership: 57.5 },
      { owner: C.RioTinto, ownership: 30 },
      { owner: C.JECO, ownership: 12.5 },
    ],
    location: "Atacama Desert, Chile",
    commodity: "Copper",
  },
  {
    name: "Grasberg",
    ownership: [{ owner: C.Inalum, ownership: 51}, {owner: C.FreeportMcMoRan, ownership: 49}],
    location: "Papua, Indonesia",
    commodity: "Copper & Gold",
  },
  {
    name: "Resolution Copper",
    ownership: [{ owner: C.RioTinto, ownership: 51 }, { owner: C.BHP, ownership: 49}],
    location: "Arizona, USA",
    commodity: "Copper",
  },

  // Gold
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

  // Lithium
  {
    name: "Greenbushes",
    ownership: [{ owner: C.TianqiLithium, ownership: 51 }, {owner: C.Albemarle, ownership: 49}],
    location: "Western Australia",
    commodity: "Lithium",
  },
  {
    name: "Thacker Pass",
    ownership: [{ owner: C.LithiumAmericas, ownership:  100}],
    location: "Nevada, USA",
    commodity: "Lithium",
  },
  {
    name: "Salar de Atacama",
    ownership: [{ owner: C.SQM, ownership: 50 }, {owner: C.Albemarle, ownership: 50}],
    location: "Chile",
    commodity: "Lithium",
  },

  // Nickel
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

  // Iron ore
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

  // Borates
  {
    name: "Borax Mine",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Boron, California, USA",
    commodity: "Borates",
  },
];
