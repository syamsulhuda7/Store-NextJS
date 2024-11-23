import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import AuthLayout from "@/components/layouts/AuthLayout";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
    <AuthLayout
      title="Login"
      link="/auth/register"
      linkText="Don't have an account? Register "
      error={error}
      submitValue={handleSubmit}
    >
      <Input label="Email" name="email" type="email" />
      <Input label="Password" name="password" type="password" />
      <Button type="submit">{isLoading ? "Loading..." : "Login"}</Button>
      <hr className={styles.login__devider} />
      <div className={styles.login__google}>
        <Button
          type="button"
          onClick={() => signIn("google", { callbackUrl, redirect: false })}
        >
          <i className="bx bxl-google" /> Login With Google
        </Button>
      </div>
    </AuthLayout>
  );
};

export default LoginView;
