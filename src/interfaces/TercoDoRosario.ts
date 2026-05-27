import type { DiaDaSemana, TituloTerco } from "../data";
import type { Misterio } from "./Misterio";

export interface TercoDoRosario {
  titulo: TituloTerco;
  diasDaSemana: DiaDaSemana[];
  rota: string;
  misterios: Misterio[];
}
