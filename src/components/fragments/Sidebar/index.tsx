import React from "react";
import styles from "./Sidebar.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";

type propstype = {
  lists: Array<{ title: string; url: string; icon: string }>;
};

const Sidebar = ({ lists }: propstype) => {
  const pathname = usePathname();
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <h1 className={styles.sidebar__top__title}>Admin Panel</h1>
        <div className={styles.sidebar__top__lists}>
          {lists.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className={`${styles.sidebar__top__lists__item} ${
                pathname === item.url &&
                styles.sidebar__top__lists__item__active
              }`}
            >
              <i className={`bx ${item.icon}`} />
              <h4>{item.title}</h4>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.sidebar__bottom}>
        <Button
          className={styles.sidebar__bottom__button}
          type="button"
          variant="secondary"
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
