import Sidebar from "@/components/fragments/Sidebar";
import React from "react";
import styles from "./MemberLayout.module.scss";

type propstype = {
  children: React.ReactNode;
};

const listSidebarItem = [
  {
    title: "Dashboard",
    url: "/member",
    icon: "bxs-dashboard",
  },
  {
    title: "Orders",
    url: "/member/orders",
    icon: "bxs-package",
  },
  {
    title: "Profile",
    url: "/member/profile",
    icon: "bxs-group",
  },
];

const MemberLayout = ({ children }: propstype) => {
  return (
    <div className={styles.memberLayout}>
      <Sidebar lists={listSidebarItem} />
      <div className={styles.memberLayout__main}>{children}</div>
    </div>
  );
};

export default MemberLayout;
