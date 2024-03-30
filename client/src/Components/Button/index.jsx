import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Button = forwardRef(function ButtonComponent({
  children,
  isActive = false,
  type = "button",
  href = "/",
  style = "",
  className,
  onClick,

  onMouseEnter,
}) {
  const activeButtonClass = isActive
    ? "!border-blue-100 !bg-blue-100 !text-white-100"
    : "";
  const classNames = `font-bold relative flex cursor-pointer items-center justify-center transition-all pl-[9.5px] pr-[9.5px]  hover:bg-opacity-70 rounded-[0.2rem] ${style} ${activeButtonClass}`;
  return (
    <>
      {type === "link" ? (
        <Link
          to={href}
          className={`${classNames} ${className}`}
          onMouseEnter={onMouseEnter}
        >
          {children}
      
        </Link>
      ) : (
        <button
          type={type}
          className={`${classNames} ${className}`}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
        >
          {children}
        </button>
      )}
    </>
  );
});

export default Button;
