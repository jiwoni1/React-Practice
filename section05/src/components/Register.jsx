import { useState, useRef } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChangeInput = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소를 focus
      // 이름을 입력하는 input Tag에 우리가 접근할 수 있어야해 -> useRef 이용
      // console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          // input 태그가 렌더링하는 DOM 요소가 inputRef라는 레퍼런스 오브젝트에 저장이 됌
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChangeInput}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChangeInput}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChangeInput}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {/* {country} */}
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChangeInput} />
      </div>
      <button onClick={onsubmit}>제출</button>
    </div>
  );
};

export default Register;
