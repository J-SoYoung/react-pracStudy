import React from "react";
import styled from "styled-components";
import { Title } from "../styles/HomeStyle";
import { DiaryItem } from "./DiaryItem";

export const DiaryList = ({ diarylist, onDelete, onEdit }) => {
  return (
    <>
      <Title>일기 리스트</Title>
      <p>{diarylist.length}개의 일기가 있습니다</p>
      <ArticleList>
        {diarylist.map((item, index) => {
          return <DiaryItem item={item} key={index} onDelete={onDelete} onEdit={onEdit} />;
        })}
      </ArticleList>
    </>
  );
};
const ArticleList = styled.article`
  /* border: 1px solid blue; */
  margin-top: 20px;
`;
