import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement, IncrementByAmount } from "./Redux/counterSlice";
import { useState } from "react";

function App() {
  let dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <p>This is {count} </p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <p>
        Increment By
        <input
          type="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </p>
      <button
        onClick={() => {
          dispatch(IncrementByAmount(+number));
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;
