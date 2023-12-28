import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Button } from "./components/ui/button";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Button className="m-4" onClick={() => console.log("sweet")}>
      Click me
    </Button>
  </React.StrictMode>
);
