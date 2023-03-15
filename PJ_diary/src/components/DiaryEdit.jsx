import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Title } from "../styles/HomeStyle";

export const DiaryEdit = ({ onCreate }) => {
  const [state, setState] = useState({
    name: "",
    content: "",
    emotion: "happy",
  });

  const nameInput = useRef();
  const contentInput = useRef();

  const onChangeValue = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateDiary = (e) => {
    e.preventDefault();
    if (state.name.length < 1) {
      alert("작성자는 최소 1글자 이상 작성해주세요");
      nameInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      alert("일기본문은 최소 5글자 이상 작성해주세요");
      contentInput.current.focus();
      return;
    }
    onCreate(state.name, state.content, state.emotion);
    setState({
      name: "",
      content: "",
      emotion: "happy",
    });
  };

  return (
    <div>
      <Title>오늘의 일기</Title>
      <form onSubmit={handleCreateDiary}>
        <Section>
          <input
            ref={nameInput}
            name="name"
            type="text"
            value={state.name || ""}
            placeholder="작성자"
            onChange={onChangeValue}
          />
        </Section>
        <Section>
          <textarea
            ref={contentInput}
            name="content"
            value={state.content || ""}
            placeholder="일기내용"
            onChange={onChangeValue}
          />
        </Section>
        <Section>
          오늘의 감정점수&nbsp;:&nbsp;
          <select name="emotion" value={state.emotion || ""} onChange={onChangeValue}>
            <option value={"happy"}>happy</option>
            <option value={"lovely"}>lovely</option>
            <option value={"sad"}>sad</option>
            <option value={"angry"}>angry</option>
          </select>
        </Section>
        <button type="submit">일기 저장하기</button>
      </form>
    </div>
  );
};

const Section = styled.section`
  width: 100%;
  margin-bottom: 10px;
  & > input,
  textarea {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
`;
