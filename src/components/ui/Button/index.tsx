import React from "react";
import styles from "./Button.module.scss";

type propstype = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: string;
  className?: string;
};
const Button = ({
  type,
  onClick,
  children,
  variant = "primary",
  className,
}: propstype) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
