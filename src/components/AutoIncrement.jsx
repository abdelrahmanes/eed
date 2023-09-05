/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function AutoIncrement({ total, children, label }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < total) {
        setCounter(counter + 10);
      }
    }, 0);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="flex flex-col gap-3 text-center">
      {children}
      <h1 className="text-3xl font-extrabold">{counter}</h1>
      <h2 className="text-2xl font-bold">{label}</h2>
    </div>
  );
}

export default AutoIncrement;
