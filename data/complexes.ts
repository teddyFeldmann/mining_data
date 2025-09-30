import type { Complex } from "./interfaces";
import { Companies as C } from "./companies";

export const Complexes = {
  NevadaGoldMines: {
    name: "Nevada Gold Mines",
    ownership: [
      { owner: C.BarrickGold, ownership: 61.5 },
      { owner: C.Newmont, ownership: 38.5 },
    ],
  },
  LaSal: {
    name: "La Sal",
    ownership: [{ owner: C.EnergyFuels, ownership: 100 }],
  },
};

export type ComplexKey = keyof typeof Complexes;
export const complexeslist: Complex[] = Object.values(Complexes);
