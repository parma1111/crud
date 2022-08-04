import React from "react";
import Counter from "./Counter/Counter";
import { Example } from "./Counter/Example";
import { Todo } from "./Counter/Todo";
import "./App.css";

export default function App() {
  const [showCounter, setShowCounter] = React.useState(false);
  return (
    <div className="App">
      {/* {showCounter && <Counter />}
      <br />
      <button onClick={() => setShowCounter(!showCounter)}>SHOW</button>
      <Example /> */}
      <Todo />
    </div>
  );
}

// React.useEffect
