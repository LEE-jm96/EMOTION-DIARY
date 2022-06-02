const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header>
      <div className="head_left_btn">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_right_btn">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
