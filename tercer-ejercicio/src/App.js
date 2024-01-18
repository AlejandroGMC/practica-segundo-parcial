import React, { useState } from "react";
import "./styles/styles.css";

function Parent() {
  const [children, setChildren] = useState([1, 9, 3]);

  function removeChild(removedId) {
    setChildren(children.filter((id) => id !== removedId));
  }
  return (
    <div>
      <h2> Hi there.... </h2>
      {children.map((id) => (
        <Child key={id} id={id} remove={() => removeChild(id)} />
      ))}
    </div>
  );
}

function Child({ remove, id }) {
  return (
    <div>
      <button onClick={remove}>I'm the child {id}. Click to remove me!</button>
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