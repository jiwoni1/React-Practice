import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  usePageTitle(`${params.id}번 일기 수정하기`);

  const curDiaryItem = useDiary(params.id);
  // 이거를 diary페이지에서도 써야해서 그냥 커스텀훅으로 만들기
  // const data = useContext(DiaryStateContext);
  // const [curDiaryItem, setCurDiaryItem] = useState();

  // useEffect(() => {
  //   const currentDiaryItem = data.find(
  //     (item) => String(item.id) === String(params.id)
  //   );

  //   if (!currentDiaryItem) {
  //     // 존재하지않는 페이지
  //     window.alert("존재하지 않는 일기장입니다.");
  //     nav("/", { replace: true });
  //   }

  //   setCurDiaryItem(currentDiaryItem);
  // }, [params.id, data]);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요?")) {
      // 삭제
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            text={"<"}
            onClick={() => {
              nav(-1);
            }}
          />
        }
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
