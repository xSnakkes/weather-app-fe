import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface ITitleProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3";
  className?: string;
}

export const Title: React.FC<ITitleProps> = ({
  children,
  variant = "h1",
  className,
}) => {
  return React.createElement(
    variant,
    { className: classNames(className, styles.title) },
    children,
  );
};
