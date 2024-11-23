"use client";

import UsersAdminView from "@/components/views/admin/Users";
import userServices from "@/services/user";
import React, { useEffect, useState } from "react";

const AdminUsersPage = () => {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await userServices.getAllUsers();
      setUsers(data.data);
    };

    getAllUsers();
  }, []);

  return (
    <>
      <UsersAdminView users={users} />
    </>
  );
};

export default AdminUsersPage;
