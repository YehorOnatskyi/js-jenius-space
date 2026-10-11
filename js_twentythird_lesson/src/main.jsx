import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// На GitHub Pages пряме посилання на маршрут спершу потрапляє в кореневий
// 404.html, який кладе шлях у ?p=. Повертаємо адресу на місце до старту роутера.
const redirectedTo = new URLSearchParams(window.location.search).get("p");
if (redirectedTo) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  window.history.replaceState(null, "", base + redirectedTo);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
