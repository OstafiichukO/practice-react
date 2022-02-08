import React from "react";
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import ColorPicker from "./components/ColorPicker/";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#687088" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

function App() {
  return (
    <div className="container">
      {/* <Counter initialValue={0} /> */}
      {/* <Dropdown /> */}
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
}

export default App;
