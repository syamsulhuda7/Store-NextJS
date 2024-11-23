import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import styles from "./Users.module.scss";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";

type propstype = {
  users: any;
};

const UsersAdminView = ({ users }: propstype) => {
  const [updatedUser, setUpdatedUser] = useState<any>({});
  const [deletedUser, setDeletedUser] = useState<any>({});
  const [usersData, setUsersData] = useState<any>([]);

  useEffect(() => {
    setUsersData(users);
  }, [users]);
  return (
    <>
      {Object.keys(updatedUser).length > 0 && (
        <ModalUpdateUser
          updatedUser={updatedUser}
          setUpdatedUser={setUpdatedUser}
          setUsersData={setUsersData}
        />
      )}
      {Object.keys(deletedUser).length > 0 && (
        <ModalDeleteUser
          deletedUser={deletedUser}
          setDeletedUser={setDeletedUser}
          setUsersData={setUsersData}
        />
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
              {usersData.map((user: any, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>
                    <div className={styles.users__table__action}>
                      <Button
                        onClick={() => setUpdatedUser(user)}
                        type="button"
                        variant="secondary"
                      >
                        <i className="bx bxs-edit"></i>
                      </Button>
                      <Button
                        onClick={() => setDeletedUser(user)}
                        type="button"
                        variant="primary"
                      >
                        <i className="bx bxs-trash"></i>
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
