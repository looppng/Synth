import "./App.css";
import Osc1 from "./components/Osc1/Osc1";
import React from "react";
import Filter from "./components/Filter/Filter";
import Keyboard from "./components/Keyboard/keyboard";
import ADSR from "./components/ADSR/ADSR";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Osc1 />
        <Filter />
        <ADSR />
        <div className="keyboard mb-5">
          <Keyboard />
        </div>
      </div>
    </div>
  );
};

export default App;
