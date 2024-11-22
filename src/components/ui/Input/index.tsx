import React from "react";
import styles from "./Input.module.scss";

type Propstypes = {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
};

const Input = ({ label, name, type, placeholder }: Propstypes) => {
  return (
    <>
      {label && (
        <label className={styles.inputContainer__label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={styles.inputContainer__input}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
