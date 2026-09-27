import { useMemo, useState } from "react";

function SumList() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [clicks, setClicks] = useState(0);

  const sum = useMemo(() => {
    console.log("рахую суму");
    return numbers.reduce((acc, n) => acc + n, 0);
  }, [numbers]);

  return (
    <section>
      <h2>1. useMemo</h2>
      <p>Числа: {numbers.join(", ")}</p>
      <p>Сума: {sum}</p>
      <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
        Додати число
      </button>
      <button onClick={() => setClicks(clicks + 1)}>
        Просто клік ({clicks})
      </button>
    </section>
  );
}

export default SumList;