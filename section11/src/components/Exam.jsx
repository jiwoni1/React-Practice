import { useReducer } from "react";

// 상태변화를 직접 처리하는 함수 만들기
// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
// function reducer(state, action) {
//   console.log(state, action);
//   if (action.type === "INCREASE") {
//     return state + action.data;
//   } else if (action.type === "DECREASE") {
//     return state - action.data;
//   }
// }

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;

    case "DECREASE":
      return state - action.data;

    default:
      return state;
  }
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // 상태변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  // reducer함수, state의 초기값
  const [state, dispatch] = useReducer(reducer, 0);

  // 버튼이 눌렸을 때, dipatch함수를 호출해서 상태를 변화시켜야한다는 것을 알림
  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    // 인수로 전달된 요청의 내용을 담고 있는 객체 -> 액션 객체
    dispatch({
      type: "INCREASE", // 값을 증가시켜달라
      data: 1, // 1만큼
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
