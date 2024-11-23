import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";
import React from "react";
import styles from "./Users.module.scss";

type propstype = {
  users: any;
};

const UsersAdminView = ({ users }: propstype) => {
  return (
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
                    <Button type="button" variant="secondary">
                      Update
                    </Button>
                    <Button type="button" variant="secondary">
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
  );
};

export default UsersAdminView;
