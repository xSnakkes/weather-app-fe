import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  error?: string | null;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  placeholder,
  className,
  label,
  error,
  onFocus,
  onBlur,
}) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.input__container}>
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={classNames(styles.input, className)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
