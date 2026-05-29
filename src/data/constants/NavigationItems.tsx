import type { ReactNode } from "react";

export interface NavigationItem {
  to: string;
  label: string;
  icon?: ReactNode;
}

import {
  IconCross,
  IconSparkles,
  IconCandle,
  IconSparkleHighlight,
} from "@tabler/icons-react";

export const MISTERIOS_NAVIGATION_ITEMS = [
  {
    to: "/misterios/gozosos",
    label: "Gozosos",
    icon: <IconSparkleHighlight size={24} />,
  },
  {
    to: "/misterios/dolorosos",
    label: "Dolorosos",
    icon: <IconCross size={24} />,
  },
  {
    to: "/misterios/gloriosos",
    label: "Gloriosos",
    icon: <IconSparkles size={24} />,
  },
  {
    to: "/misterios/luminosos",
    label: "Luminosos",
    icon: <IconCandle size={24} />,
  },
];
