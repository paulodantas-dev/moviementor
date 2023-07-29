import "./global.css";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = document.getElementById("root") as HTMLDivElement;

createRoot(root).render(<App />);
