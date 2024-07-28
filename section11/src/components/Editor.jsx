import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const contentRef = useRef();

  // 엔터 눌렀을 때 동작하는 이벤트핸들러
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        placeholder="새로운 Todo..."
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
