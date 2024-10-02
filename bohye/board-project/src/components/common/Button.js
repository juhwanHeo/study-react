import classes from "./Button.module.css";

const Button = ({ onClick, children, type = "submit", className = "" }) => {
  return (
    <button
      className={`${classes.btn} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
