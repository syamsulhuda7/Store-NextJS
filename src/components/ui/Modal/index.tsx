import styles from "./Modal.module.scss";
import React, { useEffect, useRef } from "react";

type propstype = {
  children: React.ReactNode;
  onClose: any;
  className?: string;
};

const Modal = ({ children, onClose, className }: propstype) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  const ref: any = useRef();
  return (
    <div className={styles.modal}>
      <div className={`${styles.modal__main} ${className}`} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
