import React, { useState, useRef } from "react";
import styled from "styled-components";
import { DiaryEdit, DiaryList } from "../components/index";

export const Homepage = () => {
  const [diarylist, setDiarylist] = useState([]);
  const dataId = useRef(0);

  const onCreate = (name, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      name,
      content,
      emotion,
      create_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setDiarylist([newItem, ...diarylist]);
  };

  const onDelete = (targetId) => {
    const newList = diarylist.filter((d) => {
      return d.id !== targetId;
    });
    // console.log(newList);
    setDiarylist(newList);
  };

  const onEdit = (id, newContent) => {
    const editItem = diarylist.map((d) => (d.id === id ? { ...d, content: newContent } : d));
    setDiarylist(editItem);
  };

  return (
    <>
      <Main>
        <DiaryEdit onCreate={onCreate} />
      </Main>
      <Main>
        <DiaryList diarylist={diarylist} onDelete={onDelete} onEdit={onEdit} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 20px 0;
  box-sizing: border-box;
  border-bottom: 1px solid black;
`;
