const Controlloer = ({ onClickButton }) => {
  return (
    <div>
      <button onClick={onClickButton}>-1</button>
      <button onClick={onClickButton}>-10</button>
      <button onClick={onClickButton}>-100</button>
      <button onClick={onClickButton}>+100</button>
      <button onClick={onClickButton}>+10</button>
      <button onClick={onClickButton}>+1</button>
    </div>
  );
};

export default Controlloer;
