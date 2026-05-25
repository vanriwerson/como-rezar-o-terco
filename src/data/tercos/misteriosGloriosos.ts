import type { TercoDoRosario } from "../../interfaces";
import { DIAS_DA_SEMANA, TITULOS_TERCO } from "..";

export const misteriosGloriosos: TercoDoRosario = {
  titulo: TITULOS_TERCO.GLORIOSOS,
  diasDaSemana: [DIAS_DA_SEMANA.QUARTA, DIAS_DA_SEMANA.DOMINGO],
  misterios: [
    {
      id: 1,
      titulo: "A Ressurreição de Jesus",
      imagem: "",
      texto: [
        "No primeiro dia da semana, bem de madrugada, as mulheres foram ao túmulo, levando os perfumes que tinham preparado.",
        "Encontraram a pedra do túmulo removida, mas, ao entrarem, não encontraram o corpo do Senhor Jesus e ficaram sem saber o que estava acontecendo.",
        "Nisso, dois homens com vestes resplandescentes pararam perto delas. Tomadas de medo, elas olhavam para o chão. Eles, porém, disseram-lhes: 'Por que procurais entre os mortos aquele que está vivo? Não está aqui. Ressuscitou!'",
      ],
      referenciaBiblica: "Lucas 24:1-9",
    },
    {
      id: 2,
      titulo: "A Ascensão de Jesus",
      imagem: "",
      texto: [
        "Jesus respondeu: 'Não cabe a vós saber os tempos ou momentos que o Pai determinou com a Sua autoridade. Mas recebereis o poder do Espírito Santo que virá sobre vós, para serdes minhas testemunhas em Jerusalém, por toda a Judéia e Samaria, e até os confins da terra.' Depois de dizer isto, Jesus foi elevado, à vista deles, e uma nuvem o retirou aos seus olhos.",
      ],
      referenciaBiblica: "Atos 1:6-11",
    },
    {
      id: 3,
      titulo: "A Descida do Espírito Santo sobre Nossa Senhora e os Apóstolos",
      imagem: "",
      texto: [
        "Quando chegou o dia de Pentecostes, os discípulos estavam todos reunidos no mesmo lugar. De repente, veio do céu um ruído como de um vento forte, que encheu toda a casa em que se encontravam.",
        "Então apareceram línguas como de fogo que se repartiram e pousaram sobre cada um deles. Todos ficaram cheios do Espírito Santo e começaram a falar em outras línguas, conforme o Espírito lhes concedia expressar-se.",
      ],
      referenciaBiblica: "Atos 2:1-8",
    },
    {
      id: 4,
      titulo: "A Assunção de Maria ao Céu",
      imagem: "",
      texto: [
        "(Do Catecismo da Igreja Católica) Finalmente, a Imaculada Virgem, preservada imune de toda mancha da culpa original, terminado o curso da vida terrestre, foi assunta em corpo a alma à glória celeste.",
        "E para que mais plenamente estivesse conforme a seu Filho, Senhor dos senhores e vencedor do pecado e da morte, foi exaltada pelo Senhor como Rainha do universo.",
        "A Assunção da Virgem Maria é uma participação singular na Ressurreição de seu Filho e uma antecipação da ressurreição dos outros cristãos (Catecismo, n. 966).",
      ],
      referenciaBiblica: "Apocalipse 12:1-10",
    },
    {
      id: 5,
      titulo: "Coroação de Nossa Senhora rainha do Céu e da Terra",
      imagem: "",
      texto: [
        "Então apareceu no céu um grande sinal: uma mulher vestida com o sol, tendo a lua debaixo dos pés e, sobre a cabeça, uma coroa de doze estrelas.",
      ],
      referenciaBiblica: "Apocalipse 11:19;12:1",
    },
  ],
};
