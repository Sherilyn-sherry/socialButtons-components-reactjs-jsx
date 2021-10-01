const Button = (props) => {
  const { className, buttonText } = props;

  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <div className="content-container">
      <h1 className="title">Social Buttons</h1>
      <div className="buttons-container">
        <Button buttonText="Like" className="btn1" />
        <Button buttonText="Comment" className="btn2" />
        <Button buttonText="Share" className="btn3" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
