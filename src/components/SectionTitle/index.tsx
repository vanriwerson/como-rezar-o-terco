import { IconCrossFilled } from "@tabler/icons-react";
import "./style.css";

interface SectionTitleProps {
  icon?: React.ReactNode;
  title: string;
}

export default function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <div className="card section-title-wrapper">
      <div className="section-title-icon">
        {icon || <IconCrossFilled size={36} />}
      </div>

      <h2 className="section-title">{title}</h2>
    </div>
  );
}
