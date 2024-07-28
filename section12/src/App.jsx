import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion-image";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function App() {
  // useNavigate() 훅이 navigate함수를 반환해
  const nav = useNavigate(); // 이벤트 핸들러 함수 안에서 특정 조건에 따라서 페이지를 이동시킬 때

  const onClickButton = () => {
    nav("/new"); // navigate함수를 받아와서 사용, 인수로는 가고자하는 경로를 넣어줌
  };
  return (
    <>
      <div>
        <img src={getEmotionImage(1)} alt="" />
        <img src={getEmotionImage(2)} alt="" />
        <img src={getEmotionImage(3)} alt="" />
        <img src={getEmotionImage(4)} alt="" />
        <img src={getEmotionImage(5)} alt="" />
      </div>
      {/* <div>
        <img src={"/emotion1.png"} />
        <img src={"/emotion2.png"} />
        <img src={"/emotion3.png"} />
        <img src={"/emotion4.png"} />
        <img src={"/emotion5.png"} />
      </div> */}
      <div>
        {/* Link 태그 => 마피 html의 a태그, 근데 csr 방식으로 움직이는 */}
        <Link to={"/"}>Home </Link>
        <Link to={"/new"}>New </Link>
        <Link to={"/diary/1"}>Diary </Link>
      </div>
      {/* <div>
        <a href="/">Home</a>
        <a href="/new">New</a>
        <a href="/diary">Diary</a>
      </div> */}
      <button onClick={onClickButton}>New 페이지로 이동</button>
      {/* // Routes 컴포넌트 안에는 Route 컴포넌트만 쓸 수 있다.  */}
      {/* // Routes 컴포넌트 밖에 배치한다면 모든 페이지에 공통으로 렌더링 된다. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        {/* * : whild 카드 (마치 switch문의 default와 같은 것) */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
