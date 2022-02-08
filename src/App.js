import React from "react";
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="container">
      {/* <Counter initialValue={0} /> */}
      <Dropdown />
    </div>
  );
}

export default App;
