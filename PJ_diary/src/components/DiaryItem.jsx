import React, { useState, useRef } from "react";
import styled from "styled-components";

export const DiaryItem = ({ item, onDelete, onEdit }) => {
  const { name, content, emotion, create_date, id } = item;
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(item.content);
  const localContentInput = useRef();

  const handleClickRemove = (id) => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };

  const handleClickEdit = (id) => {
    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      setIsEdit(false);
    }
  };
  return (
    <SectionItem>
      <p>작성자 : {name}</p>
      <p>오늘의 감정 : {emotion}</p>
      <p>{new Date(create_date).toLocaleString()}</p>

      {isEdit ? (
        <div>
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
      ) : (
        <div>{item.content}</div>
      )}

      {isEdit ? (
        <>
          <button
            onClick={() => {
              setIsEdit(false);
            }}
          >
            취소
          </button>
          <button
            onClick={() => {
              handleClickEdit(id);
            }}
          >
            수정완료
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              handleClickRemove(id);
            }}
          >
            삭제
          </button>
          <button
            onClick={() => {
              setIsEdit(true);
            }}
          >
            수정하기
          </button>
        </>
      )}
    </SectionItem>
  );
};

const SectionItem = styled.section`
  margin-bottom: 16px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #e6e6e6;
  p {
    margin-bottom: 5px;
    font-size: 14px;
  }
  div {
    margin: 10px 0;
    padding-top: 10px;
    box-sizing: border-box;
    border-top: 1px solid gray;
  }
`;
