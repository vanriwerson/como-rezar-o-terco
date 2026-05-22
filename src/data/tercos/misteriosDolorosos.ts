import type { TercoDoRosario } from "../../interfaces";
import { DIAS_DA_SEMANA, TIPOS_TERCO } from "..";

export const misteriosDolorosos: TercoDoRosario = {
  tipo: TIPOS_TERCO.DOLOROSOS,
  diasDaSemana: [DIAS_DA_SEMANA.TERCA, DIAS_DA_SEMANA.SEXTA],
  misterios: [
    {
      id: 1,
      titulo: "A Agonia de Nosso Senhor Jesus Cristo no Horto",
      imagem: "",
      descricao:
        "Jesus rezou no Horto das Oliveiras antes de Sua paixão, sofrendo grande angústia e aceitando a vontade do Pai.",
      referenciaBiblica: "Lucas 22:39-46",
    },
    {
      id: 2,
      titulo: "A Flagelação de Nosso Senhor Jesus Cristo",
      imagem: "",
      descricao:
        "Jesus foi cruelmente açoitado pelos soldados antes de ser condenado à morte.",
      referenciaBiblica: "João 19:1",
    },
    {
      id: 3,
      titulo: "A Coroação de Espinhos de Nosso Senhor Jesus Cristo",
      imagem: "",
      descricao:
        "Os soldados colocaram uma coroa de espinhos sobre a cabeça de Jesus, zombando Dele como Rei.",
      referenciaBiblica: "Mateus 27:27-31",
    },
    {
      id: 4,
      titulo: "Nosso Senhor Jesus Cristo Carregando a Cruz",
      imagem: "",
      descricao:
        "Jesus carregou Sua cruz até o Calvário, suportando dores e humilhações por amor à humanidade.",
      referenciaBiblica: "João 19:16-17",
    },
    {
      id: 5,
      titulo: "A Crucifixão e Morte de Nosso Senhor Jesus Cristo",
      imagem: "",
      descricao:
        "Jesus foi crucificado e morreu na cruz para salvar a humanidade dos pecados.",
      referenciaBiblica: "Lucas 23:33-46",
    },
  ],
};
