import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import authServices from "@/services/auth";
import AuthLayout from "@/components/layouts/AuthLayout";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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

    const result = await authServices.registerAccount(data);

    if (result.status === 200) {
      form.reset();
      push("/auth/login");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setError("Email is already registered");
    }
  };

  return (
    <AuthLayout
      error={error}
      title="REGISTER"
      link="/auth/login"
      linkText="Already have an account? Login "
      submitValue={handleSubmit}
    >
      <Input label="Fullname" name="fullname" type="text" placeholder="" />
      <Input label="Email" name="email" type="email" placeholder="" />
      <Input label="Phone" name="phone" type="number" placeholder="" />
      <Input label="Password" name="password" type="password" placeholder="" />
      <Button type="submit"> {isLoading ? "Loading..." : "Register"}</Button>
    </AuthLayout>
  );
};

export default RegisterView;
