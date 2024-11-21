import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<String>("");

  const { push } = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const form = e.target as HTMLFormElement;

    const data = {
      email: form.email.value,
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
    <div className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.login__form} action="">
        <h1 className={styles.login__form__title}>SIGN IN</h1>
        {error && <p className={styles.login__form__error}>{error}</p>}
        <label className={styles.login__form__label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.login__form__input}
          type="email"
          name="email"
          id="email"
        />
        <label className={styles.login__form__label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.login__form__input}
          type="password"
          name="password"
          id="password"
        />
        <button className={styles.login__form__submit} type="submit">
          {isLoading ? "Loading..." : "Sign in"}
        </button>
      </form>
      <p className={styles.login__note}>
        Don&apos;t have an account?{" "}
        <Link href="/auth/register">Sign up here</Link>
      </p>
    </div>
  );
};

export default LoginView;
