import type { TercoDoRosario } from "../../interfaces";
import { misteriosGozosos } from "../tercos/misteriosGozosos";
import { misteriosDolorosos } from "../tercos/misteriosDolorosos";
import { misteriosGloriosos } from "../tercos/misteriosGloriosos";
import { misteriosLuminosos } from "../tercos/misteriosLuminosos";

export const TERCOS_DO_ROSARIO: TercoDoRosario[] = [
  misteriosGozosos,
  misteriosDolorosos,
  misteriosGloriosos,
  misteriosLuminosos,
];
