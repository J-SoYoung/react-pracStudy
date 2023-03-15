import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostItem } from "./components/post/PostItem";
import { Main } from "./page/Main";
import { PostPage } from "./page/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/:id" element={<PostItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
