import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("counter");
  return (
    <>
      <div>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
};
