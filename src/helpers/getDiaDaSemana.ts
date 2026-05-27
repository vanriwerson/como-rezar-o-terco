import { DIAS_DA_SEMANA, type DiaDaSemana } from "../data";

const diasDaSemana = Object.values(DIAS_DA_SEMANA) as DiaDaSemana[];

export function getDiaDaSemana(): DiaDaSemana {
  return diasDaSemana[new Date().getDay()];
}
