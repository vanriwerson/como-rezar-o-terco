import "./style.css";

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <header className="page-title-wrapper">
      <div className="page-title-decoration" />

      <h1 className="page-title">{title}</h1>

      {subtitle && <p className="page-subtitle">{subtitle}</p>}
    </header>
  );
}
