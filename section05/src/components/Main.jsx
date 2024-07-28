import "./Main.css";

const Main = () => {
  const user = {
    name: "포도",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그인</div>;
  } else {
    return <div>로그아웃</div>;
  }

  //   return <>{user.isLogin ? <button>로그아웃</button> : <div>로그인</div>}</>;
};

export default Main;
