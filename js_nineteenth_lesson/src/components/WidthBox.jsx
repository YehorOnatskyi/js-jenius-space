import useWindowWidth from "../hooks/useWindowWidth.js";

function WidthBox() {
  const width = useWindowWidth();

  return (
    <section>
      <h2>3. Кастомний хук</h2>
      <p>Ширина вікна: {width}px</p>
    </section>
  );
}

export default WidthBox;