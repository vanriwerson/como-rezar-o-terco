import { Link } from "react-router-dom";

import {
  IconChevronRight,
  IconCross,
  IconSparkleHighlight,
} from "@tabler/icons-react";

import "./style.css";
import { OracaoAccordion, SectionTitle } from "../../components";
import {
  aoEspiritoSanto,
  sinalDaCruz,
  oferecimento,
  credo,
  paiNosso,
  aveMaria,
} from "../../data";
import type { Oracao } from "../../interfaces";
import { getMisteriosDoDia } from "../../helpers";

export default function Home() {
  const oracoesIniciais: Oracao[] = [
    sinalDaCruz,
    aoEspiritoSanto,
    oferecimento,
    credo,
  ];

  const tercoDoDia = getMisteriosDoDia();

  return (
    <section className="home-page">
      <SectionTitle
        icon={<IconSparkleHighlight size={36} />}
        title="Ritos Iniciais"
      />

      {oracoesIniciais.map((oracao, index) => (
        <OracaoAccordion key={index} oracao={oracao} />
      ))}

      <SectionTitle
        icon={<IconCross size={36} />}
        title="Um Pai-Nosso e 3 Ave-Marias em honra à Santíssima Trindade"
      />

      <OracaoAccordion oracao={paiNosso} />

      <div className="card prayer-card">
        <p>A Primeira Ave-Maria em honra a Deus Pai que nos criou</p>
        <p>
          A Segunda Ave-Maria em honra a Deus Filho que nos remiu os pecados
        </p>
        <p>A Terceira Ave-Maria em honra ao Espírito Santo que nos santifica</p>
      </div>

      <OracaoAccordion oracao={aveMaria} />

      <Link to={`/misterios/${tercoDoDia!.rota}`} className="home-start-button">
        Iniciar Mistérios
        <IconChevronRight size={18} />
      </Link>
    </section>
  );
}
