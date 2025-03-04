import "./TodoItem.css";

const TodoItem = ({ isDone, content, date, onUpdate, id, onDelete }) => {
  //   const newDate = new Date(date).toLocalString();
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

export default TodoItem;
