import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [name, setName] = useState("초기값");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [myself, setMyself] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeMyself = (e) => {
    setMyself(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {/* {country} */}
      </div>
      <div>
        <textarea value={myself} onChange={onChangeMyself} />
        {myself}
      </div>
    </div>
  );
};

export default Register;
