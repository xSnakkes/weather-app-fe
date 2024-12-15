import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

interface ITabsProps {
  tabs: { name: string; path: string }[];
  className?: string;
  activeClassName?: string;
}

export const Tabs: React.FC<ITabsProps> = ({
  tabs,
  className,
  activeClassName,
}) => {
  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={`/${tab.path}`}
          className={({ isActive }) =>
            classNames(className, activeClassName, styles.tab, {
              [styles.active]: isActive,
            })
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};
