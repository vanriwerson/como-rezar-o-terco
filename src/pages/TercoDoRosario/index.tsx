import { useEffect, useMemo, useState } from "react";

import { useParams } from "react-router-dom";

import {
  misteriosDolorosos,
  misteriosGloriosos,
  misteriosGozosos,
  misteriosLuminosos,
} from "../../data";

import type { TercoDoRosario } from "../../interfaces";

import "./style.css";
import {
  AveMariaCounter,
  MisterioCard,
  MisterioStepper,
} from "../../components";
import { getTercoByRota } from "../../helpers";

export default function TercoDoRosario() {
  const { tipo } = useParams();

  const [currentMisterio, setCurrentMisterio] = useState(0);

  const terco = getTercoByRota(tipo!);

  useEffect(() => {
    window.scrollTo({
      top: 0,
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
    <section className="terco-page">
      <div className="terco-page-header">
        <span className="terco-page-badge">{terco.titulo}</span>

        <p className="terco-page-days">
          {`(${terco.diasDaSemana.join(", ")})`}
        </p>
      </div>

      <MisterioCard misterio={misterio} />

      <AveMariaCounter />

      <MisterioStepper
        current={currentMisterio + 1}
        total={terco.misterios.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </section>
  );
}
