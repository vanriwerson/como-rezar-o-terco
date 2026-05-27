import { TERCOS_DO_ROSARIO } from "../data";

export function getTercoByRota(rota: string) {
  const terco = TERCOS_DO_ROSARIO.find((terco) => terco.rota === rota);
  return terco;
}
