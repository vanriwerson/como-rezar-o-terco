import { createBrowserRouter } from "react-router-dom";

import { MainLayout, CleanLayout } from "../layouts";

import { Creditos, Home, RitosFinais, TercoDoRosario } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/misterios/:tipo",
        element: <TercoDoRosario />,
      },

      {
        path: "/finais",
        element: <RitosFinais />,
      },
    ],
  },

  {
    path: "/creditos",
    element: <CleanLayout />,

    children: [
      {
        index: true,
        element: <Creditos />,
      },
    ],
  },
]);
