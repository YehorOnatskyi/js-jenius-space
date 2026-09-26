import { useReducer, useState } from "react";

const initialState = { name: "", lastName: "", birthYear: "" };

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "lastName":
          return { ...state, lastName: action.value }
              ;                         // 4
    case "birthYear":
      return { ...state, birthYear: action.value };
    default:
      return state;
  }
}

function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthYear, setBirthYear] = useState("");

  return (
    <section>
      <h2>4. useReducer</h2>
      <p>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={() => dispatch({ type: "name", value: name })}>Ім'я</button>
      </p>
      <p>
        <input value={lastName} onChange={(event) => setLastName(event.target.value)} />
        <button onClick={() => dispatch({ type: "lastName", value: lastName })}>Прізвище</button>
      </p>
      <p>
        <input value={birthYear} onChange={(event) => setBirthYear(event.target.value)} />
        <button onClick={() => dispatch({ type: "birthYear", value: birthYear })}>Рік народження</button>
      </p>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </section>
  );
}

export default UserForm;