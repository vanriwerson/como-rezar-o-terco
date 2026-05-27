import { IconBible } from "@tabler/icons-react";

import "./style.css";
import { OracaoAccordion, SectionTitle } from "../../components";
import type { Oracao } from "../../interfaces";
import { agradecimento, salveRainha } from "../../data";

export default function RitosFinais() {
  const oracoesFinais: Oracao[] = [agradecimento, salveRainha];

  return (
    <section className="final-page">
      <SectionTitle icon={<IconBible size={36} />} title="Ritos Finais" />

      {oracoesFinais.map((oracao, index) => (
        <OracaoAccordion key={index} oracao={oracao} />
      ))}
    </section>
  );
}
