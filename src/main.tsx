// Lets you find common bugs in your components early during development.
import { StrictMode } from "react";

// CreateRoot lets you create a root to display React components inside a browser DOM node.
import { createRoot } from "react-dom/client";

// import the app style
import './index.scss';

// Bring the app instance
import App from "./App";

// Provider this is the library that Connect Redux store
import { Provider } from "react-redux";
import store from "./redux/store";

const appRoot = document.getElementById('root')!;

createRoot(appRoot).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>
)  
