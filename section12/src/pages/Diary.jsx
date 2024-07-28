import { useParams } from "react-router-dom"; // 현재 브라우저에 명시한 url Parameter의 값을 가져오는 hook

const Diary = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;
