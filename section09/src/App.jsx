import "./App.css";
import { useState, useRef, useReducer } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

// 리렌더링 될 필요가 없고, 상수이기 때문에 값을 바꿀 수 없으므로
// 컴포넌트 밖에 선언해도됌
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "공부",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "알고 공부",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];

    case "UPDATE":
      // return action.data;
      return state.map((item) =>
        item.id === action.targetID ? { ...item, isDone: !item.isDone } : item
      );

    case "DELETE":
      // return action.data;
      return state.filter((item) => item.id !== action.targetID);

    default:
      return state;
  }
}

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    dispatch({
      type: "CREATE",
      data: newTodo,
    });
  };

  // dispatch만 있게
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId, // 어떠한 것을 수정할건지
    });
  };

  const onDelete = (targetID) => {
    dispatch({
      type: "DELETE",
      targetID: targetID,
    });
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      {/* <Exam /> */}
    </div>
  );
}

export default App;
