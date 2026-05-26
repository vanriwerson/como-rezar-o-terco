import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import "./style.css";

interface MisterioStepperProps {
  onPrevious: () => void;
  onNext: () => void;
  current: number;
  total: number;
}

export default function MisterioStepper({
  onPrevious,
  onNext,
  current,
  total,
}: MisterioStepperProps) {
  return (
    <nav className="misterio-stepper">
      <button type="button" onClick={onPrevious}>
        <IconChevronLeft size={18} />
        Anterior
      </button>

      <span className="misterio-progress">
        {current}/{total}
      </span>

      <button type="button" onClick={onNext}>
        Próximo
        <IconChevronRight size={18} />
      </button>
    </nav>
  );
}
