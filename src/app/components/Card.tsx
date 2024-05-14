import { ReactNode } from "react";
import styles from "./card.module.scss";

type CardProps = {
  title?: string;
  children: ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}> {title}</h2>
      {children}
    </div>
  );
};

export default Card;
