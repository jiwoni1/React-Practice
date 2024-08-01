import "./App.css";
import { useReducer, useRef, createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

// 이제 local storage에 저장해서 mockData가 필요없어짐
// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date("2024-07-31").getTime(),
//     emotionId: 1,
//     content: "1번일기 테스트",
//   },
//   {
//     id: 2,
//     createdDate: new Date("2024-07-30").getTime(),
//     emotionId: 2,
//     content: "2번일기 테스트",
//   },
//   {
//     id: 3,
//     createdDate: new Date("2024-06-13").getTime(),
//     emotionId: 3,
//     content: "3번일기 테스트",
//   },
// ];

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function reducer(state, action) {
  // 새로운 state값을 저장할 값 (로컬스토리지 저장용)
  // 새로운 값이 저장될때, 변경될 때, 삭제될때 local스토리지에 저장
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;

    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }
  // throw new Error("unknown action");

  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  // 컴포넌트가 마운트 될 때 local storage에서 data값 불러오기
  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    // 값이 null, undefined
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    // parse로 바꾸면 객체 데이터들이 다 문자열로 저장됨
    const parsedData = JSON.parse(storedData);

    // parsedData가 배열이 아닐경우
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId);
      {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });

    setIsLoading(false);
  }, []);

  // localStorage 써보기
  // localStorage.setItem("test", "hello");
  // localStorage.setItem("person", JSON.stringify({ name: "지원" }));
  // console.log(JSON.parse(localStorage.getItem("person")));
  // localStorage.removeItem("test");

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중입니다...</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
