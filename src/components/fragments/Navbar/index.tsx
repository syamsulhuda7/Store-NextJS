import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Button from "@/components/ui/Button";
import Image from "next/image";
import userServices from "@/services/user";
import Link from "next/link";

const Navbar = () => {
  const [profile, setProfile] = useState<any>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const session: any = useSession();
  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await userServices?.getProfile(
        session?.data?.accessToken
      );
      setProfile(data.data);
    };

    getAllUsers();
  }, [session?.data?.accessToken]);
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Link href={"/"}>Menu1</Link>
        <Link href={"/"}>Menu2</Link>
        <Link href={"/"}>Menu3</Link>
      </div>
      <div className={styles.navbar__right}>
        <div
          onMouseEnter={() => setIsOpen(true)}
          className={styles.navbar__right__profile}
        >
          <Image
            className={styles.navbar__right__profile__image}
            src={profile?.image}
            alt="logo"
            width={35}
            height={35}
          ></Image>
          <p className={styles.navbar__right__profile__name}>
            Welcome, {profile?.fullname}
          </p>
          <i className="bx bxs-chevron-down"></i>
        </div>
        {isOpen && (
          <div
            onMouseLeave={() => setIsOpen(false)}
            className={styles.navbar__toggle}
          >
            {session?.data?.user?.role === "admin" && (
              <Link href="/admin">Admin Panel</Link>
            )}
            <Link href="/member">Member Panel</Link>
            <hr />
            <Button
              type="button"
              variant="secondary"
              className={styles.navbar__right__button}
              onClick={() => (session ? signOut() : signIn())}
            >
              {session ? "Logout" : "Login"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
