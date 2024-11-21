import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<String>("");

  const { push } = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const form = e.target as HTMLFormElement;

    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
    };

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (result.status === 200) {
      form.reset();
      push("/auth/login");
      setIsLoading(false);
    } else {
      console.log("result", result);
      setIsLoading(false);
      setError("Email is already registered");
    }
  };

  return (
    <div className={styles.register}>
      <form onSubmit={handleSubmit} className={styles.register__form} action="">
        <h1 className={styles.register__form__title}>REGISTER</h1>
        {error && <p className={styles.register__form__error}>{error}</p>}
        <label className={styles.register__form__label} htmlFor="fullname">
          Fullname
        </label>
        <input
          className={styles.register__form__input}
          type="text"
          name="fullname"
          id="fullname"
        />
        <label className={styles.register__form__label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.register__form__input}
          type="email"
          name="email"
          id="email"
        />
        <label className={styles.register__form__label} htmlFor="phone">
          Phone
        </label>
        <input
          className={styles.register__form__input}
          type="text"
          name="phone"
          id="phone"
        />
        <label className={styles.register__form__label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.register__form__input}
          type="password"
          name="password"
          id="password"
        />
        <button className={styles.register__form__submit} type="submit">
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
      <p className={styles.register__note}>
        Already have an account? <Link href="/auth/login">Sign in here</Link>
      </p>
    </div>
  );
};

export default RegisterView;
