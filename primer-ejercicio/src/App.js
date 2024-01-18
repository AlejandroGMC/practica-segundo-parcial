import "./styles/styles.css";
import { useState } from "react";

export default function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <button onClick={() => setShow((show) => !show)}> <h1>Mostrar/esconder</h1></button>
      {show ? <h1>¡¡Bienvenido a los desafíos de React!!</h1> : null}
    </div>
  );
}