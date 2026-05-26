import type { Misterio } from "../../interfaces";

import "./style.css";

interface MisterioCardProps {
  misterio: Misterio;
}

export default function MisterioCard({ misterio }: MisterioCardProps) {
  return (
    <article className="misterio-card">
      {misterio.imagem && (
        <img
          src={misterio.imagem}
          alt={misterio.titulo}
          className="misterio-image"
        />
      )}

      <div className="misterio-content">
        <span className="misterio-number">{misterio.id}º Mistério</span>

        <h2 className="misterio-title">{misterio.titulo}</h2>

        <p className="misterio-description">{misterio.texto}</p>

        <span className="misterio-reference">{misterio.referenciaBiblica}</span>
      </div>
    </article>
  );
}
