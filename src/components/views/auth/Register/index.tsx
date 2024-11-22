import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<String>("");

  const { push } = useRouter();

  // const callbackUrl: string | string[] = query.callbackUrl || "/";
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
        <Input label="Fullname" name="fullname" type="text" placeholder="" />
        <Input label="Email" name="email" type="email" placeholder="" />
        <Input label="Phone" name="phone" type="number" placeholder="" />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder=""
        />
        <Button type="submit"> {isLoading ? "Loading..." : "Register"}</Button>
      </form>
      <p className={styles.register__note}>
        Already have an account? <Link href="/auth/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterView;
