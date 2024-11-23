import React from "react";
import styles from "./Select.module.scss";

type Option = {
  label: string;
  value: string;
};
type propstype = {
  name: string;
  label?: string;
  defaultValue?: string;
  disabled?: boolean;
  options: Option[];
};
const Select = ({
  name,
  label,
  defaultValue,
  disabled,
  options,
}: propstype) => {
  return (
    <div className={styles.container}>
      <label className={styles.container__label} htmlFor={name}>
        {label}
      </label>
      <select
        className={styles.container__select}
        name={name}
        id={name}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
