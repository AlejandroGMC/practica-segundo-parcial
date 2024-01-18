import React, { useState } from "react";
import "./styles/styles.css";

function Parent() {
  const [children, setChildren] = useState([1, 9, 3]);

  function removeChild(removedId) {
    setChildren(children.filter((id) => id !== removedId));
  }
  return (
    <div>
      <h1> ¡¡BIENVENIDO....!! </h1>
      {children.map((id) => (
        <Child key={id} id={id} remove={() => removeChild(id)} />
      ))}
    </div>
  );
}

function Child({ remove, id }) {
  return (
    <div className="qwerty">
      <button onClick={remove}> <h1>Hola</h1> {id}. <h1>¡Haz clic para eliminarme!</h1></button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}