import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect의 콜백함수가 반환하는 함수
    // 정리함수 or 클린함수
    console.log("이건?");
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;
