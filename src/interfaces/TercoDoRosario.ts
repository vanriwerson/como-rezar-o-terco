import type { DiaDaSemana, TipoTerco } from "../data";
import type { Misterio } from "./Misterio";

export interface TercoDoRosario {
  tipo: TipoTerco;
  diasDaSemana: DiaDaSemana[];
  misterios: Misterio[];
}
