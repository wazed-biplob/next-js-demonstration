"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1 className="text-center text-3xl">{counter}</h1>
      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        inc
      </button>
      <butoon
        className="btn btn-primary"
        onClick={() => setCounter(counter - 1)}
      >
        dec
      </butoon>
    </>
  );
};

export default Counter;
