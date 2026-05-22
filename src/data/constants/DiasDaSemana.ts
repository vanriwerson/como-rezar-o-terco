export const DIAS_DA_SEMANA = {
  DOMINGO: "domingo",
  SEGUNDA: "segunda",
  TERCA: "terça",
  QUARTA: "quarta",
  QUINTA: "quinta",
  SEXTA: "sexta",
  SABADO: "sábado",
} as const;

export type DiaDaSemana = (typeof DIAS_DA_SEMANA)[keyof typeof DIAS_DA_SEMANA];
