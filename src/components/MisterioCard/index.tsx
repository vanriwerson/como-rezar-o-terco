import type { Misterio } from "../../interfaces";

import "./style.css";

interface MisterioCardProps {
  misterio: Misterio;
}

export default function MisterioCard({ misterio }: MisterioCardProps) {
  return (
    <article className="misterio-card">
      {misterio.imagem && (
        <div className="misterio-image-wrapper">
          <img
            src={misterio.imagem}
            alt={misterio.titulo}
            className="misterio-image"
          />

          <span className="misterio-number">{misterio.id}º Mistério</span>
        </div>
      )}

      <div className="misterio-content">
        <h2 className="misterio-title">{misterio.titulo}</h2>

        <div className="misterio-description">
          {misterio.texto.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <span className="misterio-reference">{misterio.referenciaBiblica}</span>
      </div>
    </article>
  );
}
