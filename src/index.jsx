import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MounjaroEcommerce } from "./screens/MounjaroEcommerce/MounjaroEcommerce";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <MounjaroEcommerce />
  </StrictMode>,
);
