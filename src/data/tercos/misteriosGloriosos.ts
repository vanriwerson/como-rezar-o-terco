import type { TercoDoRosario } from "../../interfaces";
import { DIAS_DA_SEMANA, TIPOS_TERCO } from "..";

export const misteriosGloriosos: TercoDoRosario = {
  tipo: TIPOS_TERCO.GLORIOSOS,
  diasDaSemana: [DIAS_DA_SEMANA.QUARTA, DIAS_DA_SEMANA.DOMINGO],
  misterios: [
    {
      id: 1,
      titulo: "A Ressurreição de Nosso Senhor Jesus Cristo",
      imagem: "",
      descricao:
        "Jesus ressuscitou ao terceiro dia, vencendo a morte e trazendo esperança de vida eterna.",
      referenciaBiblica: "Mateus 28:1-10",
    },
    {
      id: 2,
      titulo: "A Ascensão de Nosso Senhor Jesus Cristo",
      imagem: "",
      descricao:
        "Jesus subiu aos céus diante de Seus discípulos, prometendo permanecer com eles até o fim dos tempos.",
      referenciaBiblica: "Atos 1:6-11",
    },
    {
      id: 3,
      titulo: "A Descida do Espírito Santo",
      imagem: "",
      descricao:
        "O Espírito Santo desceu sobre Maria e os apóstolos em Pentecostes, fortalecendo a Igreja nascente.",
      referenciaBiblica: "Atos 2:1-4",
    },
    {
      id: 4,
      titulo: "A Assunção de Nossa Senhora aos Céus",
      imagem: "",
      descricao:
        "Maria foi elevada aos céus em corpo e alma, participando plenamente da glória de Deus.",
      referenciaBiblica: "Apocalipse 12:1",
    },
    {
      id: 5,
      titulo: "A Coroação de Nossa Senhora como Rainha do Céu e da Terra",
      imagem: "",
      descricao:
        "Maria foi coroada Rainha do Céu e da Terra, sendo exaltada acima de todos os anjos e santos.",
      referenciaBiblica: "Apocalipse 12:1",
    },
  ],
};
