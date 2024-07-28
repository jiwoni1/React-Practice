import { TodoDispatchContext } from "../App";
import "./TodoItem.css";
import { memo, useContext } from "react";

const TodoItem = ({ isDone, content, date, id }) => {
  //   const newDate = new Date(date).toLocalString();
  const { onDelete, onUpdate } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        // readOnly
        // checked={isDone}
        onChange={onChangeCheckbox}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
};

// export default TodoItem;
export default memo(TodoItem, (prevPrpos, nextProps) => {
  if (prevPrpos.id !== nextProps.id) return false;
  if (prevPrpos.content !== nextProps.content) return false;
  if (prevPrpos.date !== nextProps.date) return false;
  if (prevPrpos.isDone !== nextProps.isDone) return false;

  return true;
});
