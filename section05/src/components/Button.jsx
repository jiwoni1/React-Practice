const Button = ({ text, color = "black", children }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button
      onClick={onClickButton}
      //   onMouseEnter={onClickButton}
      style={{
        color: color,
      }}
    >
      {text} - {color}
      {children}
    </button>
  );
};

// Button.defaultProps = {
//   color: "black",
// };

export default Button;
