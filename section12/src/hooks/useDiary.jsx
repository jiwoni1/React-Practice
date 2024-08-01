// 해당하는 id에 맞는 data를 불러주는 함수
// 이 함수를 전역으로 빼고싶은데 그냥 js로 빼기에는
// react hook을 쓰고 있어서 못 뺌 -> custom hook으로 바꾸자
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      // 존재하지않는 페이지
      window.alert("존재하지 않는 일기장입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;
