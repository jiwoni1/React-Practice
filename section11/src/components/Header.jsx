import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

const MemorizedHeader = memo(Header); // 최적화된 Header 컴포넌트 반환

export default MemorizedHeader; // 자신이 받는 props가 바뀌지않으면 리렌더링 되지않음
// export default Header; //
// export default memo(Header); // 이렇게도 가능
