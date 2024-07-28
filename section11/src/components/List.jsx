import "./List.css";
import { useState, useMemo, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterdData = () => {
    if (search === "") {
      return todos;
    }
    // filter 메서드를 호출하고 그 결과값을 반환
    return todos.filter((todo) =>
      // 배열의 모든 todo 아이템을 순회하면서
      // 연산의 결과값이 참이되는값을 모아 배열로 반환
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  // 리렌더링 될 때마다 이 함수를 호출하게 됨(search가 변할 때마다)
  const filteredTodos = getFilterdData(); // 결과값 저장

  // const getAnalyzedData = () => {
  //   console.log("getAnalyzedData 호출");
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return { totalCount, doneCount, notDoneCount };
  // };

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("겟에널랄지 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>totalCount : {totalCount}</div>
      <div>doneCount : {doneCount}</div>
      <div>notDoneCount : {notDoneCount}</div>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {/* todos에서 filteredTodos로 */}
        {filteredTodos.map((todo) => (
          // return을 주던가 ()를 써줘야함

          <TodoItem
            key={todo.id}
            {...todo}

            // {...todo}로 넘겨줄수도있다. key는 따로 써야함
          />
        ))}
        {/* <TodoItem />
        <TodoItem />
        <TodoItem /> */}
      </div>
    </div>
  );
};

export default List;
