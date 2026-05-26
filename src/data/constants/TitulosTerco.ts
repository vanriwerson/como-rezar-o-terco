export const TITULOS_TERCO = {
  GOZOSOS: "Contemplação dos Mistérios Gozosos sobre a infância de Jesus",
  DOLOROSOS: "Contemplação dos Mistérios Dolorosos da paixão e morte de Jesus",
  GLORIOSOS:
    "Contemplação dos Mistérios Gloriosos sobre a ressurreição de Jesus e assunção de Sua mãe Maria",
  LUMINOSOS:
    "Contemplação dos Mistérios Luminosos da Luz e dos ensinamentos de Jesus",
} as const;

export type TituloTerco = (typeof TITULOS_TERCO)[keyof typeof TITULOS_TERCO];
