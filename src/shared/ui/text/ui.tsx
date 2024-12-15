import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface ITextProps {
  children: React.ReactNode;
  variant?: "main" | "bold" | "secondary" | "input" | "small" | "button";
  className?: string;
  tag?: "p" | "span" | "div";
}

export const Text: React.FC<ITextProps> = ({
  children,
  variant = "main",
  className,
  tag = "p",
}) => {
  return React.createElement(
    tag,
    { className: classNames(className, styles[variant], styles.text) },
    children,
  );
};
