import { useCallback, useState } from "react";
import Sidebar from "./Sidebar.jsx";

const startItems = [
  { id: 1, name: "Хліб" },
  { id: 2, name: "Молоко" },
  { id: 3, name: "Сир" },
];

function ItemList() {
  const [items, setItems] = useState(startItems);

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  const handleReset = useCallback(() => {
    setItems(startItems);
  }, [startItems]);

  return (
    <section>
      <h2>2. React.memo</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleDelete(item.id)}>✕</button>
          </li>
        ))}
      </ul>
      <Sidebar onReset={handleReset} />
    </section>
  );
}

export default ItemList;