import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

interface ILinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  activeClassName?: string;
}

export const Link: React.FC<ILinkProps> = ({
  children,
  className,
  to,
  activeClassName,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(className, styles.link, {
          [activeClassName || ""]: isActive,
        })
      }
    >
      {children}
    </NavLink>
  );
};
