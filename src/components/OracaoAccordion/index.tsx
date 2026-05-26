import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";
import type { Oracao } from "../../interfaces";
import "./style.css";

interface OracaoAccordionProps {
  oracao: Oracao;
}

export default function OracaoAccordion({ oracao }: OracaoAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="prayer-accordion card">
      <button
        type="button"
        className="prayer-accordion-header"
        onClick={() => setOpen((previous) => !previous)}
      >
        <span>{oracao.titulo}</span>

        {open ? <IconChevronUp size={18} /> : <IconChevronDown size={18} />}
      </button>

      {open && (
        <div className="prayer-accordion-content">
          {oracao.texto.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </article>
  );
}
