import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  AveMariaCounter,
  MisterioCard,
  MisterioStepper,
  OracaoAccordion,
} from "../../components";

import { paiNosso } from "../../data";
import { getTercoByRota } from "../../helpers";
import "./style.css";

const SCROLL_OFFSET_TOP = 160;

export default function TercoDoRosario() {
  const { tipo } = useParams();

  const [currentMisterio, setCurrentMisterio] = useState(0);

  const terco = getTercoByRota(tipo!);

  useEffect(() => {
    window.scrollTo({
      top: SCROLL_OFFSET_TOP,
      behavior: "smooth",
    });
  }, [currentMisterio]);

  if (!terco) {
    return "Terço não encontrado";
  }

  const misterio = terco.misterios[currentMisterio];

  function handleNext() {
    setCurrentMisterio((previous) =>
      previous < terco!.misterios.length - 1 ? previous + 1 : previous,
    );
  }

  function handlePrevious() {
    setCurrentMisterio((previous) => (previous > 0 ? previous - 1 : previous));
  }

  return (
    <section className="terco">
      <div className="terco-header">
        <span className="terco-badge">{terco.titulo}</span>

        <p className="terco-days">{terco.diasDaSemana.join(", ")}</p>
      </div>

      <MisterioCard misterio={misterio} />

      <OracaoAccordion oracao={paiNosso} />

      <AveMariaCounter key={currentMisterio} />

      <MisterioStepper
        current={currentMisterio + 1}
        total={terco.misterios.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </section>
  );
}
