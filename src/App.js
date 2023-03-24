import "./App.css";
import React, { useReducer, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  DiaryPage,
  EditPage,
  NewPage,
  NotFound,
} from "./pages/index";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDiapatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    date: 1679636691481,
    content: "오늘의 일기1",
    emotion: 1,
  },
  {
    id: 2,
    date: 1679636691483,
    content: "오늘의 일기2",
    emotion: 2,
  },
  {
    id: 3,
    date: 1679636691485,
    content: "오늘의 일기3",
    emotion: 3,
  },
  {
    id: 4,
    date: 1679636691487,
    content: "오늘의 일기4",
    emotion: 4,
  },
  {
    id: 5,
    date: 1679636691489,
    content: "오늘의 일기5",
    emotion: 5,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(0);

  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // EIDT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EIDT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDiapatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/diary/:id" element={<DiaryPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </DiaryDiapatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
