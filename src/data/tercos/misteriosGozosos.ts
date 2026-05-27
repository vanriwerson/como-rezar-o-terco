import { DIAS_DA_SEMANA } from "../constants/DiasDaSemana";
import { ilustracoes } from "../../assets";
import { TITULOS_TERCO } from "../constants/TitulosTerco";
import type { TercoDoRosario } from "../../interfaces";

export const misteriosGozosos: TercoDoRosario = {
  titulo: TITULOS_TERCO.GOZOSOS,
  diasDaSemana: [DIAS_DA_SEMANA.SEGUNDA, DIAS_DA_SEMANA.SABADO],
  rota: "gozosos",
  misterios: [
    {
      id: 1,
      titulo: "Anunciação do Anjo e Encarnação do Verbo",
      imagem: ilustracoes.misteriosGozosos.anunciacao,
      texto: [
        "Quando Isabel estava no sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia chamada Nazaré, a uma virgem prometida em casamento a um homem de nome José, da casa de Davi.",
        "A virgem se chamava Maria. O anjo entrou onde ela estava e disse: 'Alegra-te, cheia de graça! O Senhor é contigo!' Ela perturbou-se com estas palavras e começou a pensar qual seria o significado da saudação.",
        "O anjo, então, disse: 'Não tenhas medo, Maria! Econtraste graça junto a Deus. Conceberás e darás à luz um filho, e lhe porás o nome de Jesus.'",
      ],
      referenciaBiblica: "Lucas 1:26-38",
    },
    {
      id: 2,
      titulo: "Visitação de Maria Santíssima à Santa Isabel",
      imagem: ilustracoes.misteriosGozosos.visitacao,
      texto: [
        "Maria entrou na casa de Zacarias e saudou Isabel. Quando Isabel ouviu a saudação de Maria, a criança pulou de alegria em seu ventre, e Isabel ficou repleta do Espírito Santo.",
        "Com voz forte, ela exclamou: 'Bendita és tu entre as mulheres, e bendito é o fruto do teu ventre! Como mereço que a mãe do meu Senhor venha me visitar?'",
      ],
      referenciaBiblica: "Lucas 1:39-56",
    },
    {
      id: 3,
      titulo: "Nascimento do Menino Jesus em Belém",
      imagem: ilustracoes.misteriosGozosos.nascimento,
      texto: [
        "Maria deu à luz o seu filho primogênito, envolveu-o em faixas e  deitou-o numa manjedoura, porque não havia lugar para eles na hospedaria.",
      ],
      referenciaBiblica: "Lucas 2:1-21",
    },
    {
      id: 4,
      titulo: "Apresentação do menino Jesus no Templo e a purificação de Maria",
      imagem: "",
      texto: [
        "E quando se completaram os dias para a purificação, segundo a lei de Moisés, levaram o menino a Jerusalém para apresentá-lo ao Senhor, conforme está escrito na lei do senhor:",
        "'Todo primogênito do sexo masculino será consagrado ao Senhor.' Para tanto, deviam oferecer em sacrifício - um par de rolas ou dois pombinhos - como está escrito na Lei do Senhor.",
        "Simeão os abençoou e disse à Maria: 'Este menino será causa de queda e de reerguimento para muitos em Israel. Ele será um sinal de contradição.'",
      ],
      referenciaBiblica: "Lucas 2:22-35",
    },
    {
      id: 5,
      titulo: "A perda e o Encontro do Menino Jesus no Templo",
      imagem: "",
      texto: [
        "Depois de três dias, o encontraram no templo, sentado entre os mestres, ouvindo-os e fazendo-lhes perguntas. Quando o viram, seus pais ficaram muito comovidos, e sua mãe lhe disse:",
        "'Filho, por que agiste assim conosco? Olha, teu pai e eu estávamos angustiados à tua procura.' Ele respondeu: 'Por que me procuráveis? Não sabíeis que devo estar naquilo que é de meu Pai?'",
      ],
      referenciaBiblica: "Lucas 2:41-52",
    },
  ],
};
