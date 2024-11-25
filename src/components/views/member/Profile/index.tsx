import MemberLayout from "@/components/layouts/MemberLayout";
import React from "react";
import styles from "./Profile.module.scss";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Image from "next/image";

const ProfileMemberView = ({ profile }: any) => {
  return (
    <MemberLayout>
      <div className={styles.profile}>
        <div className={styles.profile__title}>Profile</div>
        <div className={styles.profile__content}>
          <div className={styles.profile__content__avatar}>
            <Image
              src={profile?.image}
              alt="profile"
              width={250}
              height={250}
            />
            <Button type="button">
              <label htmlFor="upload-image">Upload Image (max. 1Mb)</label>
            </Button>
            <input
              className={styles.profile__content__avatar__input}
              type="file"
              name="image"
              id="upload-image"
            />
          </div>
          <form className={styles.profile__content__detail}>
            <Input
              name="fullname"
              label="Fullname"
              defaultValue={profile?.fullname}
              type="text"
            />
            <Input
              name="email"
              label="Email"
              defaultValue={profile?.email}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              defaultValue={profile?.password}
              type="password"
            />
            <Input
              name="phone"
              label="Phone"
              defaultValue={profile?.phone}
              type="number"
            />
            <Button type="submit">Update Profile</Button>
          </form>
        </div>
      </div>
    </MemberLayout>
  );
};

export default ProfileMemberView;
