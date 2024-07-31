import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // 리스트 정렬
  const getSortedDate = () => {
    // sort를 써서 원본을 정렬하면 문제가 생길 수도 있음
    // 객체는 sort함수가 잘 못알아 들으므로 비교함수를 써야해
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    }); // 원본배열을 정렬한 값을 반환, 원본은 그대로
  };

  const sortedData = getSortedDate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
          onClick={() => {
            nav("/new");
          }}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem
            key={item.id}
            // createdDate={item.createdDate}
            // emotionId={item.emotionId}
            // content={item.content}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
