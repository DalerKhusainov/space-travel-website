import styles from "./Button.module.css";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className={`${styles.largeButton} uppercase ff-serif text-dark fs-600 bg-white`}
    >
      {children}
    </button>
  );
}
