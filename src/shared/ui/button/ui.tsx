import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<IButtonProps> = ({
  children,
  className,
  onClick,
  type = "button",
}) => {
  return (
    <button
      className={classNames(styles.button, className)}
      type={type}
      onClick={(event) => {
        if (onClick) {
          onClick(event);
        }
      }}
    >
      {children}
    </button>
  );
};
