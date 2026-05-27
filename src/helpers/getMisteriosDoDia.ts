import {
  misteriosDolorosos,
  misteriosGloriosos,
  misteriosGozosos,
  misteriosLuminosos,
  type DiaDaSemana,
} from "../data";
import { getDiaDaSemana } from "./getDiaDaSemana";

export function getMisteriosDoDia() {
  const diaAtual = getDiaDaSemana();

  const tercos = [
    misteriosGozosos,
    misteriosDolorosos,
    misteriosGloriosos,
    misteriosLuminosos,
  ];

  const tercoDoDia = tercos.find((terco) =>
    terco.diasDaSemana.includes(diaAtual as DiaDaSemana),
  );

  return tercoDoDia;
}
