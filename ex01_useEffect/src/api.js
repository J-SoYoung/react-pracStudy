import axios from "axios";

export const getCommentApi = (id) => {
  const res = axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
  });
  return res;
};

// axios는 서버에서 받아온 결과값을 return하면 내가 사용할 수 있는 값으로 반환되는데.
// fetch도 axios랑 같은 promise를 반환하는데 이 결과를 어떻게 사용해야 할지 잘 모르겠다!ㅜㅜ
// export const getCommentApi = (id) => {
//   const res = fetch(
//     `https://jsonplaceholder.typicode.com/comments?postId=${id}`
//   );
//   return res;
// };
