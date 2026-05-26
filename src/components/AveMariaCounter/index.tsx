import { useState } from "react";

import { IconRosetteFilled } from "@tabler/icons-react";

import "./style.css";

export default function AveMariaCounter() {
  const [checked, setChecked] = useState<boolean[]>(Array(10).fill(false));

  function toggle(index: number) {
    setChecked((previous) =>
      previous.map((item, currentIndex) =>
        currentIndex === index ? !item : item,
      ),
    );
  }

  return (
    <section className="ave-maria-counter">
      <p className="ave-maria-counter-title">Ave, Maria! Cheia de graça...</p>

      <div className="ave-maria-counter-items">
        {checked.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`ave-maria-bead ${item ? "checked" : ""}`}
            onClick={() => toggle(index)}
            aria-label={`${index + 1}ªAve Maria`}
          >
            <IconRosetteFilled size={20} />
          </button>
        ))}
      </div>
    </section>
  );
}
