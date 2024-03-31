import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Button = forwardRef(
  function ButtonComponent(
    {
      children,
      isActive = false,
      type = "button",
      href = "/",
      style = "",
      className,
      onClick,
      loading,
      icon,
      text,
      onMouseEnter,
    },
    ref
  ) {
    const activeButtonClass = isActive ? "!border-blue-100 !bg-blue-100 !text-white-100" : "";
    const classNames = ` border border-black p-1 rounded-md hover:bg-gray-500 hover:text-white transition-all ${style} ${activeButtonClass}`;
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
            disabled={loading}
            onMouseEnter={onMouseEnter}
          >
            {children}
            {text}
          </button>
        )}
      </>
    );
  }
);

export default Button;
