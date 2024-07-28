import { useState } from "react";
import useInput from "../hooks/useInput";

// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput(); // 여러번 반복해서 사용하는 것도 가능
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
