import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import React, { useState } from "react";
import styles from "./ModalUpdateUser.module.scss";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";

const ModalUpdateUser = ({
  updatedUser,
  setUpdatedUser,
  setUsersData,
}: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const session: any = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form: any = e.target as HTMLFormElement;

    const data = {
      role: form.role.value,
    };

    const result = await userServices.updateUser(
      updatedUser.id,
      data,
      session.data?.accessToken
    );
    if (result.status === 200) {
      setIsLoading(false);
      setUpdatedUser({});
      const { data } = await userServices.getAllUsers();
      setUsersData(data.data);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <Modal onClose={() => setUpdatedUser({})}>
      <h1 className={styles.modal__title}>Update User</h1>
      <form onSubmit={handleSubmit} className={styles.modal__form}>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder=""
          defaultValue={updatedUser.email}
          disabled
        />
        <Input
          label="Fullname"
          name="fullname"
          type="text"
          placeholder=""
          defaultValue={updatedUser.fullname}
          disabled
        />
        <Input
          label="Phone"
          name="phone"
          type="number"
          placeholder=""
          defaultValue={updatedUser.phone}
          disabled
        />
        <Select
          name="role"
          label="Role"
          defaultValue={updatedUser.role}
          options={[
            { label: "Member", value: "member" },
            { label: "Admin", value: "admin" },
          ]}
        />
        <Button
          className={styles.modal__form__button}
          type="submit"
          variant="primary"
        >
          {isLoading ? "Updating..." : "Update"}
        </Button>
      </form>
    </Modal>
  );
};

export default ModalUpdateUser;
