import { TERCOS_DO_ROSARIO, type DiaDaSemana } from "../data";
import { getDiaDaSemana } from "./getDiaDaSemana";

export function getMisteriosDoDia() {
  const diaAtual = getDiaDaSemana();

  const tercoDoDia = TERCOS_DO_ROSARIO.find((terco) =>
    terco.diasDaSemana.includes(diaAtual as DiaDaSemana),
  );

  return tercoDoDia;
}
