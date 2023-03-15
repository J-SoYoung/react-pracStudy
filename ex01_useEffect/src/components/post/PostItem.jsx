import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getCommentApi } from "../../api";

export const PostItem = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCommentApi(id).then((data) => {
      setItem(data.data);
    });
  }, []);

  return (
    <>
      <p>오늘은 useEffect와 비동기통신에 대해 공부합니다</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <h1>{id}방입니다</h1>
      {item?.map((i) => {
        return (
          <ItemBox key={i.id}>
            <p>username : ({i.name})</p>
            <p>email : {i.email}</p>
            <p>content : {i.body}</p>
          </ItemBox>
        );
      })}
    </>
  );
};

const ItemBox = styled.div`
  border: 1px solid blue;
  width: 500px;
  padding: 10px;
  box-sizing: border-box;
`;
