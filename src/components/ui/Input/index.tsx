import React from "react";
import styles from "./Input.module.scss";

type Propstypes = {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
};

const Input = ({
  label,
  name,
  type,
  placeholder,
  required = true,
}: Propstypes) => {
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
        required={required}
      />
    </>
  );
};

export default Input;
