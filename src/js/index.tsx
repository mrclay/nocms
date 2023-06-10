import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "@components/App";

const reactRoot = document.querySelector<HTMLElement>("#root");
const root = createRoot(reactRoot!);
root.render(<App />);
