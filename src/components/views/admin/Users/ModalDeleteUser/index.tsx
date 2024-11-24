import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import userServices from "@/services/user";
import React from "react";
import styles from "./ModalDeleteUser.module.scss";
import { useSession } from "next-auth/react";

const ModalDeleteUser = ({
  deletedUser,
  setDeletedUser,
  setUsersData,
}: any) => {
  const session: any = useSession();
  console.log(session);

  const handleDelete = async () => {
    userServices.deleteUser(deletedUser.id, session.data?.accessToken);
    const { data } = await userServices.getAllUsers();
    setUsersData(data.data);
    setDeletedUser({});
  };

  return (
    <Modal className={styles.modal} onClose={() => setDeletedUser({})}>
      <h1 className={styles.modal__title}>Are you sure?</h1>
      <Button
        className={styles.modal__button}
        variant="primary"
        type="button"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </Modal>
  );
};

export default ModalDeleteUser;
