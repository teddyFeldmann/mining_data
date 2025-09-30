import type { Startup } from "./interfaces";

export const Startups = {
    Durin: { name: "Durin", website: "https://www.durin.com/"},
    TerraAI: { name: "Terra AI", website: "https://www.terraai.com/" },
    Kobold: { name: "Kobold Metals", website: "https://www.koboldmetals.com/"},
    EarthAI: { name: "Earth AI", website: "https://earth-ai.com/"},
    Mariana: { name: "Mariana Minerals", website: "https://marianaminerals.com/"},
}

export type StartupKey = keyof typeof Startups;
export const StartupsList: Startup[] = Object.values(Startups);