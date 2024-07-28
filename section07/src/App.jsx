import "./App.css";
import Even from "./components/Even";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMounted = useRef(false);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  // useEffect
  // 1. Mount
  useEffect(() => {
    console.log("마운트");
  }, []);
  // 빈배열 전달
  // ex. 컴포넌트가 마운트될때, 데이터를 불러오는 코드..

  // 2. Update
  // 배열 없이
  // mount될때도 실행됨
  useEffect(() => {
    console.log("update");
  });

  // mount될때는 빼고, 진짜 update될때만 실행되게 하고싶다면
  // useRef로 Flag를 하나 만들어줌
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return; // 강제 종료
    }
    console.log("only update");
  });
  // ex. update될때, 현재 업데이트된 스테이트 값들이 정상적인 값인지 검사하는 기능

  // 3. UnMount
  // 짝수일때만 나타나게 Even 컴포넌트 만듦
  // ex. 언마운트될때(화면에서 사라질때) 해당 컴포넌트에서 쓰고 있던
  // 메모리를 해제하는 최적화 작업 수행

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
