import {
  IconBrandInstagram,
  IconBrush,
  IconBook,
  IconHeartHandshake,
} from "@tabler/icons-react";

import "./style.css";

export default function Creditos() {
  return (
    <section className="credits-page">
      <div className="credits-header">
        <IconHeartHandshake size={52} />
        <h1>Créditos</h1>
      </div>

      <div className="card credits-card">
        <div className="credits-card-icon">
          <IconBrush size={26} />
        </div>

        <div className="credits-card-content">
          <h2>Artes e Ilustrações</h2>
          <p>
            Todas as artes de de contemplação dos mistérios foram produzidas
            pela minha irmã Jéssica especialmente para este projeto.
          </p>

          <a
            href="https://instagram.com/jess.ic6300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram size={26} stroke={1.8} />
            @jess.ic6300
          </a>
        </div>
      </div>

      <div className="card credits-card">
        <div className="credits-card-icon">
          <IconBook size={26} />
        </div>

        <div className="credits-card-content">
          <h2>Conteúdo Textual</h2>

          <p>
            As orações e textos para meditação dos mistérios foram retirados do
            livro "Roteiro Religioso Mariano - Terço dos Homens -Mãe Rainha",
            feito por Cleber Carlos Miranda.
          </p>
        </div>
      </div>

      <div className="credits-footer">
        <div className="footer-divider" />

        <p>
          Aplicação desenvolvida com o intuito de encorajar e auxiliar na reza
          diária do Santo Terço. Não tem fins lucrativos.
        </p>
      </div>
    </section>
  );
}
