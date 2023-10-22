import { useState } from "react";
import useCounterHook from "../../../Hooks/useCounterHook";
import "./customhookpage.css";

export default function CustomHook() {
  const { increment, decrement, reset, setCount, count } = useCounterHook();

  const [value, setUserValue] = useState("");

  console.log("Count:", count);

  const handleSetValueChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = parseFloat(inputValue);

    if (!isNaN(numericValue)) {
      setUserValue(numericValue);
    }
    console.log("Value:", value);
  };

  const handleSetValue = () => {
    setCount(value);
    setUserValue("");
    console.log("InnerValue", value);
  };

  return (
    <section className="section">
      <div className="heading">
        <h1>Custom Hook</h1>
      </div>

      <div className="count">{count}</div>

      <div className="btn-container">
        <button className="btn-flex btn-count" onClick={increment}>
          +
        </button>
        <button className="btn-reset btn-count" onClick={reset}>
          Reset
        </button>
        <button
          className="btn-flex btn-count"
          disabled={count < 0 || count === 0}
          onClick={decrement}
        >
          -
        </button>
      </div>

      <div>
        <span>Enter Value:</span>{" "}
        <input type="text" onChange={handleSetValueChange} />
        <button className="enter-value" onClick={handleSetValue}>
          Set Value
        </button>
      </div>
    </section>
  );
}
