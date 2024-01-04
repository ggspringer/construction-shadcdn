import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/components/ThemeProvider";
import { RouterProvider, Router } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import "./index.css";

const router = new Router({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
