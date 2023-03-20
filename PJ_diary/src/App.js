import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Detailpage, Homepage, Postpage } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail" element={<Detailpage />} />
      </Routes>
    </div>
  );
}

export default App;
