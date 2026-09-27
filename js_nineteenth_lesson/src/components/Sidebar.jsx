import { memo } from "react";

function Sidebar({ onReset }) {
  console.log("Sidebar перемалювався");
  return (
    <aside>
      <h3>Бічна панель</h3>
      <button onClick={onReset}>Скинути список</button>
    </aside>
  );
}

export default memo(Sidebar);