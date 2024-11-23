import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";
import React, { useState } from "react";
import styles from "./Users.module.scss";
import Modal from "@/components/ui/Modal";

type propstype = {
  users: any;
};

const UsersAdminView = ({ users }: propstype) => {
  const [modalUpdateUser, setModalUpdateUser] = useState<any>({});
  return (
    <>
      {Object.keys(modalUpdateUser).length > 0 && (
        <Modal onClose={() => setModalUpdateUser({})}>
          <h1>Update User</h1>
          <p>{modalUpdateUser.email}</p>
        </Modal>
      )}
      <AdminLayout>
        <div className={styles.users}>
          <h1>User Management</h1>
          <table className={styles.users__table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>
                    <div className={styles.users__table__action}>
                      <Button
                        onClick={() => setModalUpdateUser(user)}
                        type="button"
                        variant="secondary"
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => setModalUpdateUser(user)}
                        type="button"
                        variant="secondary"
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </>
  );
};

export default UsersAdminView;
