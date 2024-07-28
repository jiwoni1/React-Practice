import "./App.css";
import { useState, useRef } from "react";
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

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  // Editor에서 todo를 입력하면 todos에 저장되게
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State값들중에
    // targetId와 일치하는 id를 갖는 isDone을 toggle

    // 인수 : todos 배열에서 tagetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 데이터
    // 그래서 기존의 배열을 `변형`하는 메소드인 map을 사용
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === targetId) {
    //       return {
    //         ...todo,
    //         isDone: !todo.isDone,
    //       };
    //     }
    //     return todo;
    //   })
    // );
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    // 인자 : 조건을 만족하는 애들만 있게끔 만들어주는 배열
    // id가 targetId가 아니면 ok -> filter
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
