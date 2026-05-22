export const TIPOS_TERCO = {
  GOZOSOS: "Mistérios Gozosos",
  DOLOROSOS: "Mistérios Dolorosos",
  GLORIOSOS: "Mistérios Gloriosos",
  LUMINOSOS: "Mistérios Luminosos",
} as const;

export type TipoTerco = (typeof TIPOS_TERCO)[keyof typeof TIPOS_TERCO];
