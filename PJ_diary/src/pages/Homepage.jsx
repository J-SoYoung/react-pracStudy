import axios from "axios";
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import styled from "styled-components";
import { DiaryEdit, DiaryList } from "../components/index";

export const Homepage = () => {
  const [diarylist, setDiarylist] = useState([]);
  const dataId = useRef(0);

  const getDiaryData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
    const resData = res.data.slice(0, 20).map((it) => {
      return {
        name: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        create_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setDiarylist(resData);
  };
  useEffect(() => {
    setTimeout(() => {
      getDiaryData();
    }, 1500);
  }, []);

  const onCreate = useCallback((name, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      name,
      content,
      emotion,
      create_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setDiarylist((data) => [newItem, ...data]);
    // 항상 최신의 업데이트를 참조할 수 있어야 한다. = 함수형업데이트
  }, []);

  const onDelete = useCallback((id) => {
    // 함수형 업데이트를 사용해야 하기 때문에 인자 부분을 업데이트 해야함
    setDiarylist((data) => data.filter((d) => d.id !== id));
  }, []);

  const onEdit = useCallback((id, newContent) => {
    setDiarylist((data) => data.map((d) => (d.id === id ? { ...d, content: newContent } : d)));
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    const goodDiary = diarylist.filter((data) => data.emotion >= 3).length;
    const badDiary = diarylist.length - goodDiary;
    const goodDiaryRatio = (goodDiary / diarylist.length) * 100;
    return { goodDiary, badDiary, goodDiaryRatio };
  }, [diarylist.length]);

  const { goodDiary, badDiary, goodDiaryRatio } = getDiaryAnalysis;

  return (
    <>
      <Main>
        <DiaryEdit onCreate={onCreate} />
      </Main>
      <Main>
        <div>전체 일기 개수: {diarylist.length}개</div>
        <div>기분 좋은 일기 개수: {goodDiary}개</div>
        <div>기분 나쁜 일기 개수: {badDiary}개</div>
        <div>기분 좋은 일기 비율: {goodDiaryRatio}%</div>
        <br></br>
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
