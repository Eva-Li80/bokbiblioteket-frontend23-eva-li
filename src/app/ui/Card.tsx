import { ReactNode } from "react";
import styles from "./card.module.scss"

type CardProps = {
    title: string;
    children: ReactNode;
  };
  
  const Card = ({ title, children }: CardProps) => {
    return (
      <div className={styles.card}>
        <div className="title">
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    );
  };
  
  export default Card;
  