import { useParams, useNavigate } from "react-router-dom"; // 현재 브라우저에 명시한 url Parameter의 값을 가져오는 hook
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  console.log(params);

  usePageTitle(`${params.id}번 일기`);

  // id에 맞는 데이터 반환
  const curDiaryItem = useDiary(params.id);
  console.log(curDiaryItem); // 맨처음 호출됬을 때는 undefined
  // 왜냐하면 useDiary 훅을 보면 useEffect가 실행되어야(렌더링된후) 값이 저장되기때문

  // 그래서 undefined일때 대비
  if (!curDiaryItem) {
    return <div>데이터 로딩중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button
            text={"<"}
            onClick={() => {
              nav(-1);
            }}
          />
        }
        rightChild={
          <Button
            text={"수정하기"}
            onClick={() => {
              nav(`/edit/${params.id}`);
            }}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
