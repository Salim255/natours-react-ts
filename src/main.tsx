// Lets you find common bugs in your components early during development.
import { StrictMode } from "react";

// CreateRoot lets you create a root to display React components inside a browser DOM node.
import { createRoot } from "react-dom/client";

// import the app style
import './index.css';

// Bring the app instance
import App from "./App";

const appRoot = document.getElementById('root')!;

createRoot(appRoot).render(
  <StrictMode>
    <App />
  </StrictMode>
)  
