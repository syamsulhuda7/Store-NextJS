import Sidebar from "@/components/fragments/Sidebar";
import React from "react";
import styles from "./AdminLayout.module.scss";

type propstype = {
  children: React.ReactNode;
};

const listSidebarItem = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: "bxs-dashboard",
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: "bxs-package",
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: "bxs-group",
  },
];

const AdminLayout = ({ children }: propstype) => {
  return (
    <div className={styles.adminLayout}>
      <Sidebar lists={listSidebarItem} />
      <div className={styles.adminLayout__main}>{children}</div>
    </div>
  );
};

export default AdminLayout;
