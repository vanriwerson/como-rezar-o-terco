import type { TercoDoRosario } from "../../interfaces";
import { DIAS_DA_SEMANA, TIPOS_TERCO } from "../";

export const misteriosLuminosos: TercoDoRosario = {
  tipo: TIPOS_TERCO.LUMINOSOS,
  diasDaSemana: [DIAS_DA_SEMANA.QUINTA],
  misterios: [
    {
      id: 1,
      titulo: "O Batismo de Nosso Senhor Jesus Cristo no Rio Jordão",
      imagem: "",
      descricao:
        "Jesus foi batizado por João Batista no rio Jordão, e o Espírito Santo desceu sobre Ele em forma de pomba.",
      referenciaBiblica: "Mateus 3:13-17",
    },
    {
      id: 2,
      titulo: "O Primeiro Milagre de Jesus nas Bodas de Caná",
      imagem: "",
      descricao:
        "Durante uma festa de casamento em Caná, Jesus transformou água em vinho a pedido de Sua Mãe, Maria.",
      referenciaBiblica: "João 2:1-11",
    },
    {
      id: 3,
      titulo: "O Anúncio do Reino de Deus e o Convite à Conversão",
      imagem: "",
      descricao:
        "Jesus anunciou o Reino de Deus e convidou todos à conversão, ao arrependimento e à fé no Evangelho.",
      referenciaBiblica: "Marcos 1:14-15",
    },
    {
      id: 4,
      titulo: "A Transfiguração de Nosso Senhor no Monte Tabor",
      imagem: "",
      descricao:
        "Jesus transfigurou-se diante de Pedro, Tiago e João, revelando Sua glória divina.",
      referenciaBiblica: "Mateus 17:1-8",
    },
    {
      id: 5,
      titulo: "A Instituição da Eucaristia na Última Ceia",
      imagem: "",
      descricao:
        "Na Última Ceia, Jesus instituiu a Eucaristia, oferecendo Seu Corpo e Sangue sob as espécies do pão e do vinho.",
      referenciaBiblica: "Lucas 22:14-20",
    },
  ],
};
