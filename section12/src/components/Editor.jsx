import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

// 이렇게 배열로 만들고 return에서는 map 메서드를 쓰는게 더 좋아
// const emotionList = [
//   {
//     emotionId: 1,
//     emotionName: "완전 좋아",
//   },
//   {
//     emotionId: 2,
//     emotionName: "좋아",
//   },
//   {
//     emotionId: 3,
//     emotionName: "그냥 그래",
//   },
//   {
//     emotionId: 4,
//     emotionName: "별로",
//   },
//   {
//     emotionId: 5,
//     emotionName: "완전 별로",
//   },
// ];

// date 객체를 바로 value값에 넣으면 인식을 못해서
// "2024-07-31" 이렇게 넣어줘야해

// date객체를 받아서 yyyy-mm-dd로 반환해주는 함수
// Viewer 컴포넌트에서도 써야해서 별도의 모듈로 분리하자
// const getStringedDate = (targetDate) => {
//   let year = targetDate.getFullYear();
//   let month = targetDate.getMonth() + 1;
//   let date = targetDate.getDate();

//   if (month < 10) {
//     month = `0${month}`;
//   }
//   if (date < 10) {
//     date = `0${date}`;
//   }

//   return `${year}-${month}-${date}`;
// };

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeInput = (e) => {
    // console.log(e.target.name); // 어떤 요소에 입력이 들어온건지
    // console.log(e.target.value); // 입력된 값은?

    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  // Editor 컴포넌트 재사용성을 위해 저장버튼을 props함수로 달기
  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <div className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </div>
      <div className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                });
              }}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId ? true : false}
            />
          ))}
        </div>
      </div>
      <div className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </div>

      <div className="button_section">
        <Button
          text={"취소"}
          onClick={() => {
            nav(-1);
          }}
        />
        <Button onClick={onClickSubmitButton} text={"저장"} type={"POSITIVE"} />
      </div>
    </div>
  );
};

export default Editor;
