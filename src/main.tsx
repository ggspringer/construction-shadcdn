import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <Button className="m-4" onClick={() => console.log("sweet")}>
        Click me
      </Button>
    </ThemeProvider>
  </React.StrictMode>
);
