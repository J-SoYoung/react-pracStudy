import React, { useState, useEffect } from "react";

const TextView = React.memo(({ text }) => {
  useEffect(() => {
    // console.log(`text:: ${text}`);
  });
  return <div>{text}</div>;
});
const CountView = React.memo(({ count }) => {
  useEffect(() => {
    // console.log(`count:: ${count}`);
  });
  return <div>{count}</div>;
});

export const Optimize = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <div style={{ padding: "50px", border: "1px solid purple" }}>
      <div>
        <h2>count</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <CountView count={count} />
      </div>
      <div>
        <h2>text</h2>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <TextView text={text} />
      </div>
    </div>
  );
};
