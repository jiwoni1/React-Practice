import "./App.css";
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번일기 테스트",
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "2번일기 테스트",
  },
  {
    id: 3,
    createDate: new Date().getTime(),
    emotionId: 3,
    content: "3번일기 테스트",
  },
];

function reducer(state, action) {
  return state;
}

function App() {
  const [data, dipatch] = useReducer(reducer, mockData);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
