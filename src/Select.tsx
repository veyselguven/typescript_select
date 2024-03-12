/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import styles from "./select.module.css";
type SelectOption = {
  label: string;
  value: any;
};
type SelectProps = {
  options: SelectOption[];
  // value: SelectOptions | undefined
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export default function Select({ value, onChange, options }: SelectProps) {
  return (
    <>
      <div tabIndex={0} className={styles.container}>
        <span className={styles.value}>Value</span>
        <button className={styles["clear-btn"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${styles.show}`}>
          {options.map((option) => (
            <li key={option.label} className={styles.option}>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
