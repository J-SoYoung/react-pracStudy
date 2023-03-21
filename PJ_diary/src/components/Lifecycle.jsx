import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("컴포넌트가 생겼다. mount!");

    return () => {
      console.log("컴포넌트가 사라졌다. unmount");
    };
  }, []);
  return <div> unmountComponent Test </div>;
};

export const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <>
      <div style={{ padding: "20px" }}>
        <button onClick={toggle}> 버튼 ON OFF </button>
        {isVisible && <UnmountTest />}
      </div>
    </>
  );
};
