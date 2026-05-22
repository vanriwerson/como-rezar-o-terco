import { DIAS_DA_SEMANA, TIPOS_TERCO } from "../";
import { ilustracoes } from "../../assets";
import type { TercoDoRosario } from "../../interfaces";

export const misteriosGozosos: TercoDoRosario = {
  tipo: TIPOS_TERCO.GOZOSOS,
  diasDaSemana: [DIAS_DA_SEMANA.SEGUNDA, DIAS_DA_SEMANA.SABADO],
  misterios: [
    {
      id: 1,
      titulo: "A Anunciação do Anjo Gabriel a Nossa Senhora",
      imagem: ilustracoes.misteriosGozosos.anunciacao,
      descricao:
        "O Anjo Gabriel apareceu a Maria, anunciando que ela seria a mãe de Jesus, o Filho de Deus.",
      referenciaBiblica: "Lucas 1:26-38",
    },
    {
      id: 2,
      titulo: "A Visitação de Nossa Senhora a Santa Isabel",
      imagem: ilustracoes.misteriosGozosos.visitacao,
      descricao:
        "Maria visitou sua prima Isabel, que estava grávida de João Batista. Ao ouvir a saudação de Maria, Isabel ficou cheia do Espírito Santo e reconheceu Maria como a Mãe do Senhor.",
      referenciaBiblica: "Lucas 1:39-56",
    },
    {
      id: 3,
      titulo: "O Nascimento de Jesus em Belém",
      imagem: ilustracoes.misteriosGozosos.nascimento,
      descricao:
        "Jesus nasceu em um estábulo em Belém, pois não havia lugar para eles na hospedaria. Ele foi colocado em uma manjedoura e envolto em panos.",
      referenciaBiblica: "Lucas 2:1-20",
    },
    {
      id: 4,
      titulo: "A Apresentação de Jesus no Templo",
      imagem: "",
      descricao:
        "Maria e José levaram Jesus ao templo para apresentá-lo ao Senhor, conforme a lei judaica. Lá, Simeão e Ana reconheceram Jesus como o Messias.",
      referenciaBiblica: "Lucas 2:22-38",
    },
    {
      id: 5,
      titulo: "O Encontro de Jesus no Templo aos Doze Anos",
      imagem: "",
      descricao:
        "Quando Jesus tinha doze anos, ele ficou no templo discutindo com os mestres da lei, surpreendendo a todos com sua sabedoria.",
      referenciaBiblica: "Lucas 2:41-52",
    },
  ],
};
