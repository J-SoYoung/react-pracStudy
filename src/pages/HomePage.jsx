import React from "react";
import { MyButton } from "../components/MyButton";
import { MyHeader } from "../components/MyHeader";

export const HomePage = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  return (
    <div>
      <MyHeader
        headText="headTextzz"
        leftChild={
          <MyButton
            text="뒤로가기"
            type="positive"
            onClick={() => {
              alert("왼쪽버튼");
            }}
          />
        }
        rightChild={
          <MyButton
            text="시작하기"
            type="negative"
            onClick={() => {
              alert("오른쪽버튼");
            }}
          />
        }
      />
      <p>HomePage 홈페이지</p>
      <MyButton
        type="positive"
        text="작성완료"
        onClick={() => {
          alert("작성완료");
        }}
      />
      <MyButton
        type="negative"
        text="작성완료"
        onClick={() => {
          alert("작성완료");
        }}
      />
      <MyButton
        type="default"
        text="작성완료"
        onClick={() => {
          alert("작성완료");
        }}
      />
    </div>
  );
};
