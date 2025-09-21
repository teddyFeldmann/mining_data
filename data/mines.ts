import type { Mine } from "./interfaces";
import { Companies as C } from "./companies";

export const mines: Mine[] = [
  {
    name: "Mountain Pass",
    ownership: [{ owner: C.MPMaterials, ownership: 100 }],
    location: "California, USA",
    commodity: ["Rare Earths"],
    stage: "Production"
  },
  {
    name: "Bayan Obo",
    ownership: [{ owner: C.BaotouSteelRareEarthGroup, ownership: 100 }],
    location: "Inner Mongolia, China",
    commodity: ["Rare Earths"],
    stage: "Production"
  },
  {
    name: "Mt Weld",
    ownership: [{ owner: C.LynasRareEarths, ownership: 100 }],
    location: "Western Australia",
    commodity: ["Rare Earths"],
    stage: "Production"
  },
  {
    name: "Grasberg",
    ownership: [
      { owner: C.Inalum, ownership: 51 },
      { owner: C.FreeportMcMoRan, ownership: 49 },
    ],
    location: "Papua, Indonesia",
    commodity: ["Copper", "Gold"],
    stage: "Production"
  },
  {
    name: "Carlin Trend",
    ownership: [{ owner: C.NevadaGoldMines, ownership: 100 }],
    location: "Nevada, USA",
    commodity: ["Gold"],
    stage: "Production"
  },
  {
    name: "Muruntau",
    ownership: [{ owner: C.NavoiMiningAndMetallurgyCombinat, ownership: 100 }],
    location: "Uzbekistan",
    commodity: ["Gold"],
    stage: "Production"
  },
  {
    name: "South Deep",
    ownership: [{ owner: C.GoldFields, ownership: 100 }],
    location: "Gauteng, South Africa",
    commodity: ["Gold"],
    stage: "Production"
  },
  {
    name: "Greenbushes",
    ownership: [
      { owner: C.TianqiLithium, ownership: 51 },
      { owner: C.Albemarle, ownership: 49 },
    ],
    location: "Western Australia",
    commodity: ["Lithium"],
    stage: "Production"
  },
  {
    name: "Thacker Pass",
    ownership: [{ owner: C.LithiumAmericas, ownership: 100 }],
    location: "Nevada, USA",
    commodity: ["Lithium"],
    stage: "Construction"
  },
  {
    name: "Salar de Atacama",
    ownership: [
      { owner: C.SQM, ownership: 50 },
      { owner: C.Albemarle, ownership: 50 },
    ],
    location: "Chile",
    commodity: ["Lithium"],
    stage: "Production"
  },
  {
    name: "Voisey's Bay",
    ownership: [{ owner: C.Vale, ownership: 100 }],
    location: "Labrador, Canada",
    commodity: ["Nickel"],
    stage: "Production"
  },
  {
    name: "Nornickel Operations",
    ownership: [{ owner: C.Nornickel, ownership: 100 }],
    location: "Norilsk, Russia",
    commodity: ["Nickel"],
    stage: "Production"
  },
  {
    name: "NISK",
    ownership: [{ owner: C.PowerMetallic, ownership: 100 }],
    location: "Quebec, Canada",
    commodity: ["Nickel"],
    stage: "Exploration"
  },
  {
    name: "Carajás",
    ownership: [{ owner: C.Vale, ownership: 100 }],
    location: "Pará, Brazil",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Hamersley",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Sishen",
    ownership: [{ owner: C.AngloAmerican, ownership: 100 }],
    location: "Northern Cape, South Africa",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Borax Mine",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Boron, California, USA",
    commodity: ["Borates"],
    stage: "Production"
  },
  {
    name: "Kolwezi",
    ownership: [
      { owner: C.ZijinMining, ownership: 67 },
      { owner: C.Gecamines, ownership: 28 },
      { owner: C.DRCGovernment, ownership: 5 },
    ],
    location: "Lualaba Province, DRC",
    commodity: ["Copper"],
    stage: "Production"
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
    commodity: ["Copper"],
    stage: "Production"
  },
  {
    name: "Akyem",
    ownership: [{ owner: C.ZijinMining, ownership: 100 }],
    location: "Eastern Region, Ghana",
    commodity: ["Gold"],
    stage: "Production"
  },
  {
    name: "Garatau",
    ownership: [
      { owner: C.ZijinMining, ownership: 74 },
      { owner: C.GenorahResources, ownership: 26 },
    ],
    location: "Fetakgomo Tubase, South Africa",
    commodity: ["PGMs"],
    stage: "Production"
  },
  {
    name: "Gudai-Darri",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Tom Price",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Paraburdoo",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Marandoo",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Brockman 2",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Brockman 4",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Nammuldi / Western Turner Syncline",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Silvergrass",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Yandicoogina",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "West Angelas (Robe River JV)",
    ownership: [
      { owner: C.RioTinto, ownership: 53 },
      { owner: C.MitsuiAndCo, ownership: 33 },
      { owner: C.NipponSteel, ownership: 14 },
    ],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Robe Valley - Mesa A",
    ownership: [
      { owner: C.RioTinto, ownership: 53 },
      { owner: C.MitsuiAndCo, ownership: 33 },
      { owner: C.NipponSteel, ownership: 14 },
    ],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Robe Valley - Mesa J",
    ownership: [
      { owner: C.RioTinto, ownership: 53 },
      { owner: C.MitsuiAndCo, ownership: 33 },
      { owner: C.NipponSteel, ownership: 14 },
    ],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Hope Downs 1",
    ownership: [
      { owner: C.RioTinto, ownership: 50 },
      { owner: C.HancockProspecting, ownership: 50 },
    ],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Hope Downs 4",
    ownership: [
      { owner: C.RioTinto, ownership: 50 },
      { owner: C.HancockProspecting, ownership: 50 },
    ],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Western Range",
    ownership: [
      { owner: C.RioTinto, ownership: 54 },
      { owner: C.ChinaBaowuSteelGroup, ownership: 46 },
    ],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Iron Ore Company of Canada (IOC)",
    ownership: [
      { owner: C.RioTinto, ownership: 58.7 },
      { owner: C.MitsubishiCorporation, ownership: 26.2 },
      { owner: C.LabradorIronOreRoyalty, ownership: 15.1 },
    ],
    location: "Labrador & Quebec, Canada",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Weipa-Amrun",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Queensland, Australia",
    commodity: ["Bauxite"],
    stage: "Production"
  },
  {
    name: "Gove",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Northern Territory, Australia",
    commodity: ["Bauxite"],
    stage: "Production"
  },
  {
    name: "Boron (U.S. Borax)",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Boron, California, USA",
    commodity: ["Borates"],
    stage: "Production"
  },
  {
    name: "Diavik",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Northwest Territories, Canada",
    commodity: ["Diamonds"],
    stage: "Production"
  },
  {
    name: "Richards Bay Minerals (RBM)",
    ownership: [
      { owner: C.RioTinto, ownership: 74 },
      { owner: C.BlueHorizonInvestments, ownership: 26 },
    ],
    location: "KwaZulu-Natal, South Africa",
    commodity: ["Ilmenite", "Rutile", "Zircon"],
    stage: "Production"
  },
  {
    name: "QIT Madagascar Minerals (QMM)",
    ownership: [
      { owner: C.RioTinto, ownership: 80 },
      { owner: C.MadagascarGovernment, ownership: 20 },
    ],
    location: "Fort Dauphin, Madagascar",
    commodity: ["Ilmenite"],
    stage: "Production"
  },
  {
    name: "Lac Tio (QIT Fer et Titane)",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Québec, Canada",
    commodity: ["Ilmenite"],
    stage: "Production"
  },
  {
    name: "Kennecott (Bingham Canyon)",
    ownership: [{ owner: C.RioTinto, ownership: 100 }],
    location: "Utah, USA",
    commodity: ["Copper"],
    stage: "Production"
  },
  {
    name: "Oyu Tolgoi",
    ownership: [
      { owner: C.RioTinto, ownership: 66 },
      { owner: C.MongoliaGovernment, ownership: 34 },
    ],
    location: "Ömnögovi, Mongolia",
    commodity: ["Copper", "Gold"],
    stage: "Production"
  },
  {
    name: "Resolution Copper",
    ownership: [
      { owner: C.RioTinto, ownership: 55 },
      { owner: C.BHP, ownership: 45 },
    ],
    location: "Arizona, USA",
    commodity: ["Copper"],
    stage: "Exploration"
  },
  {
    name: "Escondida",
    ownership: [
      { owner: C.BHP, ownership: 57.5 },
      { owner: C.RioTinto, ownership: 30 },
      { owner: C.JECO, ownership: 12.5 },
    ],
    location: "Antofagasta, Chile",
    commodity: ["Copper"],
    stage: "Production"
  },
  {
    name: "Spence (Pampa Norte)",
    ownership: [{ owner: C.BHP, ownership: 100 }],
    location: "Antofagasta, Chile",
    commodity: ["Copper"],
    stage: "Production"
  },
  {
    name: "Olympic Dam",
    ownership: [{ owner: C.BHP, ownership: 100 }],
    location: "South Australia, Australia",
    commodity: ["Copper", "Uranium", "Gold", "Silver"],
    stage: "Production"
  },
  {
    name: "Prominent Hill",
    ownership: [{ owner: C.BHP, ownership: 100 }],
    location: "South Australia, Australia",
    commodity: ["Copper", "Gold"],
    stage: "Production"
  },
  {
    name: "Carrapateena",
    ownership: [{ owner: C.BHP, ownership: 100 }],
    location: "South Australia, Australia",
    commodity: ["Copper", "Gold"],
    stage: "Production"
  },
  {
    name: "Jansen (Stage 1)",
    ownership: [{ owner: C.BHP, ownership: 100 }],
    location: "Saskatchewan, Canada",
    commodity: ["Potash"],
    stage: "Construction"
  },
  {
    name: "South Flank (Mining Area C hub)",
    ownership: [
      { owner: C.BHP, ownership: 85 },
      { owner: C.Itochu, ownership: 8 },
      { owner: C.MitsuiAndCo, ownership: 7 },
    ],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Jimblebar",
    ownership: [
      { owner: C.BHP, ownership: 85 },
      { owner: C.Itochu, ownership: 8 },
      { owner: C.MitsuiAndCo, ownership: 7 },
    ],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Newman (Mt Whaleback & satellites)",
    ownership: [
      { owner: C.BHP, ownership: 85 },
      { owner: C.MitsuiItochuIron, ownership: 10 },
      { owner: C.Itochu, ownership: 5 },
    ],
    location: "Pilbara, Western Australia",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Goonyella Riverside (BMA)",
    ownership: [
      { owner: C.BHP, ownership: 50 },
      { owner: C.MitsubishiDevelopment, ownership: 50 },
    ],
    location: "Queensland, Australia",
    commodity: ["Steelmaking Coal"],
    stage: "Production"
  },
  {
    name: "Broadmeadow (BMA)",
    ownership: [
      { owner: C.BHP, ownership: 50 },
      { owner: C.MitsubishiDevelopment, ownership: 50 },
    ],
    location: "Queensland, Australia",
    commodity: ["Steelmaking Coal"],
    stage: "Production"
  },
  {
    name: "Peak Downs (BMA)",
    ownership: [
      { owner: C.BHP, ownership: 50 },
      { owner: C.MitsubishiDevelopment, ownership: 50 },
    ],
    location: "Queensland, Australia",
    commodity: ["Steelmaking Coal"],
    stage: "Production"
  },
  {
    name: "Saraji (BMA)",
    ownership: [
      { owner: C.BHP, ownership: 50 },
      { owner: C.MitsubishiDevelopment, ownership: 50 },
    ],
    location: "Queensland, Australia",
    commodity: ["Steelmaking Coal"],
    stage: "Production"
  },
  {
    name: "Caval Ridge (BMA)",
    ownership: [
      { owner: C.BHP, ownership: 50 },
      { owner: C.MitsubishiDevelopment, ownership: 50 },
    ],
    location: "Queensland, Australia",
    commodity: ["Steelmaking Coal"],
    stage: "Production"
  },
  {
    name: "Quellaveco",
    ownership: [
      { owner: C.AngloAmerican, ownership: 60 },
      { owner: C.MitsubishiCorporation, ownership: 40 },
    ],
    location: "Moquegua, Peru",
    commodity: ["Copper"],
    stage: "Production"
  },
  {
    name: "Collahuasi",
    ownership: [
      { owner: C.AngloAmerican, ownership: 44 },
      { owner: C.Glencore, ownership: 44 },
      { owner: C.JapaneseMitsuiJV, ownership: 12 },
    ],
    location: "Tarapacá, Chile",
    commodity: ["Copper"],
    stage: "Production"
  },
  {
    name: "Los Bronces",
    ownership: [
      { owner: C.AngloAmerican, ownership: 50.1 },
      { owner: C.CodelcoMitsuiJV, ownership: 29.5 },
      { owner: C.MitsubishiCorporation, ownership: 20.4 },
    ],
    location: "Metropolitan Region, Chile",
    commodity: ["Copper"],
    stage: "Production"
  },
  {
    name: "El Soldado",
    ownership: [
      { owner: C.AngloAmerican, ownership: 50.1 },
      { owner: C.CodelcoMitsuiJV, ownership: 29.5 },
      { owner: C.MitsubishiCorporation, ownership: 20.4 },
    ],
    location: "Valparaíso, Chile",
    commodity: ["Copper"],
    stage: "Production"
  },
  {
    name: "Sishen (Kumba Iron Ore)",
    ownership: [{ owner: C.AngloAmerican, ownership: 100 }],
    location: "Northern Cape, South Africa",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Kolomela (Kumba Iron Ore)",
    ownership: [{ owner: C.AngloAmerican, ownership: 100 }],
    location: "Northern Cape, South Africa",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Minas-Rio",
    ownership: [
      { owner: C.AngloAmerican, ownership: 85 },
      { owner: C.Vale, ownership: 15 },
    ],
    location: "Minas Gerais, Brazil",
    commodity: ["Iron Ore"],
    stage: "Production"
  },
  {
    name: "Woodsmith",
    ownership: [{ owner: C.AngloAmerican, ownership: 100 }],
    location: "North Yorkshire, United Kingdom",
    commodity: ["Polyhalite"],
    stage: "Construction"
  },
  {
  name: "Mogalakwena",
  ownership: [{ owner: C.ValterraPlatinum, ownership: 100 }],
  location: "Limpopo, South Africa",
  commodity: ["PGMs"],
  stage: "Production"
},
{
  name: "Amandelbult Complex (Dishaba & Tumela)",
  ownership: [{ owner: C.ValterraPlatinum, ownership: 100 }],
  location: "Limpopo, South Africa",
  commodity: ["PGMs"],
  stage: "Production"
},
{
  name: "Mototolo",
  ownership: [{ owner: C.ValterraPlatinum, ownership: 100 }],
  location: "Limpopo, South Africa",
  commodity: ["PGMs"],
  stage: "Production"
},
{
  name: "Modikwa",
  ownership: [
    { owner: C.ValterraPlatinum, ownership: 50 },
    { owner: C.AfricanRainbowMinerals, ownership: 41.5 },
    { owner: C.ModikwaCommunities, ownership: 8.5 },
  ],
  location: "Limpopo, South Africa",
  commodity: ["PGMs"],
  stage: "Production"
},
{
  name: "Unki",
  ownership: [{ owner: C.ValterraPlatinum, ownership: 100 }],
  location: "Shurugwi, Midlands, Zimbabwe",
  commodity: ["PGMs"],
  stage: "Production"
},
{
  name: "Twickenham (care & maintenance)",
  ownership: [{ owner: C.ValterraPlatinum, ownership: 100 }],
  location: "Limpopo, South Africa",
  commodity: ["PGMs"],
  stage: "Production"
},
{
  name: "Morenci",
  ownership: [
    { owner: C.FreeportMcMoRan, ownership: 72 },
    { owner: C.SumitomoMetalMiningArizona, ownership: 15 },
    { owner: C.SMMMorenci, ownership: 13 },
  ],
  location: "Greenlee County, Arizona, USA",
  commodity: ["Copper"],
  stage: "Production"
},
{
  name: "Bagdad",
  ownership: [{ owner: C.FreeportMcMoRan, ownership: 100 }],
  location: "Yavapai County, Arizona, USA",
  commodity: ["Copper", "Molybdenum"],
  stage: "Production"
},
{
  name: "Sierrita",
  ownership: [{ owner: C.FreeportMcMoRan, ownership: 100 }],
  location: "Pima County, Arizona, USA",
  commodity: ["Copper", "Molybdenum"],
  stage: "Production"
},
{
  name: "Miami",
  ownership: [{ owner: C.FreeportMcMoRan, ownership: 100 }],
  location: "Gila County, Arizona, USA",
  commodity: ["Copper"],
  stage: "Production"
},
{
  name: "Safford (Lone Star)",
  ownership: [{ owner: C.FreeportMcMoRan, ownership: 100 }],
  location: "Graham County, Arizona, USA",
  commodity: ["Copper"],
  stage: "Production"
},
{
  name: "Chino",
  ownership: [{ owner: C.FreeportMcMoRan, ownership: 100 }],
  location: "Grant County, New Mexico, USA",
  commodity: ["Copper"],
  stage: "Production"
},
{
  name: "Tyrone",
  ownership: [{ owner: C.FreeportMcMoRan, ownership: 100 }],
  location: "Grant County, New Mexico, USA",
  commodity: ["Copper"],
  stage: "Production"
},
{
  name: "Cerro Verde",
  ownership: [
    { owner: C.FreeportMcMoRan, ownership: 55.08 },
    { owner: C.SMMCerroVerde, ownership: 21 },
    { owner: C.Buenaventura, ownership: 19.58 },
    { owner: C.PublicShareholdersLima, ownership: 4.34 },
  ],
  location: "Arequipa, Peru",
  commodity: ["Copper", "Molybdenum"],
  stage: "Production"
},
{
  name: "El Abra",
  ownership: [
    { owner: C.FreeportMcMoRan, ownership: 51 },
    { owner: C.Codelco, ownership: 49 },
  ],
  location: "El Loa Province, Antofagasta, Chile",
  commodity: ["Copper"],
  stage: "Production"
},
{
  name: "Grasberg (PT Freeport Indonesia)",
  ownership: [
    { owner: C.FreeportMcMoRan, ownership: 48.76 },
    { owner: C.MINDIT, ownership: 51.24 },
  ],
  location: "Central Papua, Indonesia",
  commodity: ["Copper", "Gold"],
  stage: "Production"
},
{
  name: "Mission Complex",
  ownership: [{ owner: C.Asarco, ownership: 100 }],
  location: "Pima County, Arizona, USA",
  commodity: ["Copper"],
  stage: "Production"
},
{
  name: "Ray",
  ownership: [{ owner: C.Asarco, ownership: 100 }],
  location: "Pinal County, Arizona, USA",
  commodity: ["Copper"],
  stage: "Production"
},
{
  name: "Silver Bell",
  ownership: [{ owner: C.Asarco, ownership: 100 }],
  location: "Pima County, Arizona, USA",
  commodity: ["Copper"],
  stage: "Production"
},
{
  name: "Pinto Valley",
  ownership: [{ owner: C.CapstoneCopper, ownership: 100 }],
  location: "Globe-Miami District, Arizona, USA",
  commodity: ["Copper", "Molybdenum"],
  stage: "Production"
},
{
  name: "Cozamin",
  ownership: [{ owner: C.CapstoneCopper, ownership: 100 }],
  location: "Zacatecas, Mexico",
  commodity: ["Copper", "Silver", "Gold", "Zinc", "Lead"],
  stage: "Production"
},
{
  name: "Mantos Blancos",
  ownership: [{ owner: C.CapstoneCopper, ownership: 100 }],
  location: "Antofagasta, Chile",
  commodity: ["Copper", "Silver"],
  stage: "Production"
},
{
  name: "Mantoverde",
  ownership: [
    { owner: C.CapstoneCopper, ownership: 70 },
    { owner: C.MitsubishiMaterials, ownership: 30 },
  ],
  location: "Atacama, Chile",
  commodity: ["Copper"],
  stage: "Production"
},
{
  name: "Santo Domingo",
  ownership: [{ owner: C.CapstoneCopper, ownership: 100 }],
  location: "Atacama, Chile",
  commodity: ["Copper", "Iron", "Gold"],
  stage: "Exploration"
},
{
  name: "Buenavista del Cobre (Cananea)",
  ownership: [{ owner: C.SouthernCopper, ownership: 100 }],
  location: "Sonora, Mexico",
  commodity: ["Copper"],
  stage: "Production",
},
{
  name: "La Caridad",
  ownership: [{ owner: C.SouthernCopper, ownership: 100 }],
  location: "Sonora, Mexico",
  commodity: ["Copper"],
  stage: "Production",
},
{
  name: "Toquepala",
  ownership: [{ owner: C.SouthernCopper, ownership: 100 }],
  location: "Tacna, Peru",
  commodity: ["Copper"],
  stage: "Production",
},
{
  name: "Cuajone",
  ownership: [{ owner: C.SouthernCopper, ownership: 100 }],
  location: "Moquegua, Peru",
  commodity: ["Copper"],
  stage: "Production",
},
{
  name: "Pilares (La Caridad satellite)",
  ownership: [{ owner: C.SouthernCopper, ownership: 100 }],
  location: "Sonora, Mexico",
  commodity: ["Copper"],
  stage: "Production",
},
{
  name: "Tía María",
  ownership: [{ owner: C.SouthernCopper, ownership: 100 }],
  location: "Arequipa, Peru",
  commodity: ["Copper"],
  stage: "Exploration",
},
{
  name: "Los Chancas",
  ownership: [{ owner: C.SouthernCopper, ownership: 100 }],
  location: "Apurímac, Peru",
  commodity: ["Copper", "Molybdenum", "Gold"],
  stage: "Exploration",
},
{
  name: "El Arco",
  ownership: [{ owner: C.SouthernCopper, ownership: 100 }],
  location: "Baja California, Mexico",
  commodity: ["Copper", "Gold"],
  stage: "Exploration",
},
{
  name: "Detour Lake",
  ownership: [{ owner: C.AgnicoEagle, ownership: 100 }],
  location: "Ontario, Canada",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Canadian Malartic Complex (Odyssey)",
  ownership: [{ owner: C.AgnicoEagle, ownership: 100 }],
  location: "Quebec, Canada",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "LaRonde Complex",
  ownership: [{ owner: C.AgnicoEagle, ownership: 100 }],
  location: "Quebec, Canada",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Goldex",
  ownership: [{ owner: C.AgnicoEagle, ownership: 100 }],
  location: "Quebec, Canada",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Macassa",
  ownership: [{ owner: C.AgnicoEagle, ownership: 100 }],
  location: "Ontario, Canada",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Meliadine",
  ownership: [{ owner: C.AgnicoEagle, ownership: 100 }],
  location: "Nunavut, Canada",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Meadowbank (Amaruq)",
  ownership: [{ owner: C.AgnicoEagle, ownership: 100 }],
  location: "Nunavut, Canada",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Kittilä",
  ownership: [{ owner: C.AgnicoEagle, ownership: 100 }],
  location: "Lapland, Finland",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Fosterville",
  ownership: [{ owner: C.AgnicoEagle, ownership: 100 }],
  location: "Victoria, Australia",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Pinos Altos",
  ownership: [{ owner: C.AgnicoEagle, ownership: 100 }],
  location: "Chihuahua, Mexico",
  commodity: ["Gold", "Silver"],
  stage: "Production",
},
{
  name: "La India",
  ownership: [{ owner: C.AgnicoEagle, ownership: 100 }],
  location: "Sonora, Mexico",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Hope Bay",
  ownership: [{ owner: C.AgnicoEagle, ownership: 100 }],
  location: "Nunavut, Canada",
  commodity: ["Gold"],
  stage: "Exploration",
},
{
  name: "Ad Duwayhi",
  ownership: [{ owner: C.Maaden, ownership: 100 }],
  location: "Makkah Region, Saudi Arabia",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Mansourah-Massarah",
  ownership: [{ owner: C.Maaden, ownership: 100 }],
  location: "Makkah Region, Saudi Arabia",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Mahd Ad Dhahab",
  ownership: [{ owner: C.Maaden, ownership: 100 }],
  location: "Al Madinah Region, Saudi Arabia",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Al Amar",
  ownership: [{ owner: C.Maaden, ownership: 100 }],
  location: "Riyadh Region, Saudi Arabia",
  commodity: ["Gold", "Copper"],
  stage: "Production",
},
{
  name: "Bulghah & Sukhaybarat",
  ownership: [{ owner: C.Maaden, ownership: 100 }],
  location: "Al Madinah Region, Saudi Arabia",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "As Suq",
  ownership: [{ owner: C.Maaden, ownership: 100 }],
  location: "Makkah Region, Saudi Arabia",
  commodity: ["Gold"],
  stage: "Production",
},
{
  name: "Jabal Sayid",
  ownership: [
    { owner: C.Maaden, ownership: 50 },
    { owner: C.BarrickGold, ownership: 50 },
  ],
  location: "Madinah Region, Saudi Arabia",
  commodity: ["Copper"],
  stage: "Production",
},
{
  name: "Al Jalamid",
  ownership: [
    { owner: C.Maaden, ownership: 70 },
    { owner: C.SABIC, ownership: 30 },
  ],
  location: "Northern Borders Region, Saudi Arabia",
  commodity: ["Phosphate"],
  stage: "Production",
},
{
  name: "Al Ba'itha (Bauxite)",
  ownership: [
    { owner: C.Maaden, ownership: 74.9 },
    { owner: C.Alcoa, ownership: 25.1 },
  ],
  location: "Al-Qassim Region, Saudi Arabia",
  commodity: ["Bauxite"],
  stage: "Production",
},

  //   {
  //     name: "",
  //     ownership: [{ owner: C., ownership:  }],
  //     location: "",
  //     commodity:
  //   },
];
