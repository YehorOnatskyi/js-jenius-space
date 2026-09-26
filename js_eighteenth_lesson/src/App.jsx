import EffectDemo from "./hooks/EffectDemo.jsx";
import LayoutDemo from "./hooks/LayoutDemo.jsx";
import HelloRandom from "./hooks/HelloRandom.jsx";
import UserForm from "./hooks/UserForm.jsx";
import FocusInput from "./hooks/FocusInput.jsx";

function App() {
  return (
    <>
      <h1>Хуки</h1>
      <EffectDemo />
      <LayoutDemo />
      <HelloRandom />
      <UserForm />
      <FocusInput />
    </>
  );
}

export default App;