import React from "react";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div>Main</div>
      <div>
        <button
          onClick={() => {
            navigate("/post");
          }}
        >
          POST-PAGE
        </button>
      </div>
    </>
  );
};
