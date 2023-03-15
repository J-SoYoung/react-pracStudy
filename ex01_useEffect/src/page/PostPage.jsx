import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostItem } from "../components/post/PostItem";

export const PostPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("fetch-useEffect", data);
      });
  }, []);

  const getData = () => {};

  return (
    <>
      <h1>PostPage</h1>
      <div>
        <input type="text" />
        <button onClick={getData}>데이터요청</button>
        <div>
          <button onClick={() => navigate("/post/1")}>1</button>
          <button onClick={() => navigate("/post/2")}>2</button>
          <button onClick={() => navigate("/post/3")}>3</button>
          <button onClick={() => navigate("/post/4")}>4</button>
          <button onClick={() => navigate("/post/5")}>5</button>
          <button onClick={() => navigate("/post/6")}>6</button>
          <button onClick={() => navigate("/post/7")}>7</button>
          <button onClick={() => navigate("/post/8")}>8</button>
          <button onClick={() => navigate("/post/9")}>9</button>
          <button onClick={() => navigate("/post/10")}>10</button>
        </div>
      </div>
    </>
  );
};
