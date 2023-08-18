import "../darkmodebtn/Button.css";

const Button = () => {
  return (
    <>
      <label className="toggle">
        <input type="checkbox" className="toggle-checkbox" />
        <div className="toggle-switch"></div>
      </label>
    </>
  );
};

export default Button;
