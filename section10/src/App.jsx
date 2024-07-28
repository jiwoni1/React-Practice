import "./App.css";
import { useState, useRef, useReducer, useMemo, useCallback } from "react";
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
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );

    case "DELETE":
      // return action.data;
      return state.filter((item) => item.id !== action.targetId);
  }
  throw new Error("Action code Error");
}

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
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
  }, []);

  // dispatch만 있게
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId, // 어떠한 것을 수정할건지
    });
  }, []);

  // const onDelete = (targetId) => {
  //   dispatch({
  //     type: "DELETE",
  //     targetId: targetId,
  //   });
  // };

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

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
