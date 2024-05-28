// src/CounterComponent.js
import React, { useState } from "react";
import { observer } from "mobx-react";
import counterStore from "./counterStore";

const CounterComponent = observer(() => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    if (e.key === "Enter") {
      counterStore.setText(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <p>Count: {counterStore.count}</p>
      <button onClick={() => counterStore.increment()}>Increment</button>
      <button onClick={() => counterStore.decrement()}>Decrement</button>
      <div style={{paddingTop: "64px"}}>
        <input 
          type="text" 
          value={counterStore.text} 
          placeholder="Jūsų tekstas atsiras čia" 
          readOnly 
        />
      </div>
      <div>
        <input 
          type="text" 
          value={inputValue} 
          placeholder="Įrašykite savo tekstą" 
          onChange={handleInputChange} 
          onKeyDown={handleInputSubmit} 
        />
      </div>
    </div>
  );
});

export default CounterComponent;
