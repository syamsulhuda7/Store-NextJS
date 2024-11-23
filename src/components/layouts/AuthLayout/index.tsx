import React from "react";
import styles from "./AuthLayout.module.scss";
import Link from "next/link";

type propstype = {
  error?: string;
  title?: string;
  children?: React.ReactNode;
  link: string;
  linkText?: string;
  submitValue?: (e: React.FormEvent<HTMLFormElement>) => void;
};
const AuthLayout = ({
  error,
  title,
  children,
  link,
  linkText,
  submitValue,
}: propstype) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitValue && submitValue(e);
  };
  return (
    <div className={styles.authLayout}>
      <div className={styles.authLayout__container}>
        <div className={styles.authLayout__container__image}></div>
        <form
          onSubmit={handleSubmit}
          className={styles.authLayout__container__form}
          action=""
        >
          <h1 className={styles.authLayout__container__form__title}>{title}</h1>
          {error && (
            <p className={styles.authLayout__container__form__error}>{error}</p>
          )}
          {children}
          <p className={styles.authLayout__container__form__note}>
            {linkText}
            <Link href={link}>here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthLayout;
