import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<String>("");

  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const form = e.target as HTMLFormElement;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        // setIsLoading(false);
        form.reset();
        push("/");
      } else {
        // setIsLoading(false);
        setError("Invalid email or password");
      }
    } catch (error) {
      // setIsLoading(false);
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.login__form} action="">
        <h1 className={styles.login__form__title}>LOGIN</h1>
        {error && <p className={styles.login__form__error}>{error}</p>}
        <Input label="Email" name="email" type="email" />
        <Input label="Password" name="password" type="password" />
        <Button type="submit">{isLoading ? "Loading..." : "Login"}</Button>
        <hr className={styles.login__form__devider} />
        <div className={styles.login__form__google}>
          <Button
            type="button"
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
          >
            <i className="bx bxl-google" /> Login With Google
          </Button>
        </div>
      </form>
      <p className={styles.login__note}>
        Don&apos;t have an account?{" "}
        <Link href="/auth/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginView;
