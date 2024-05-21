import React from "react";
import { Author } from "../../lib/types";
import ButtonSmall from "../Buttons/ButtonSmall";
import styles from "./details.module.scss"

type AuthorDetailsProps = {
  author: Author | null;
  onClick?: (book: Author) => void;
  className: string;
};

const AuthorDetails = ({ author, onClick , className}: AuthorDetailsProps) => {
  if (!author) {
    return <div>No Author!</div>;
  }
  const {
    name,
    imageUrl,
    birth_date,
    top_work,
    type,
    work_count,
  } = author;
  return (
    <div className={styles.about}>
      {name && (
        <div className={className} >
          <h2>{name}</h2>
          <img src={imageUrl} alt={name} width={200} height={250} />
          <p>Birthdate: {birth_date}</p>
          <p>Top work: {top_work}</p>
          <p>Profession: {type}</p>
          <p>Work count: {work_count}</p>
          {onClick &&  <ButtonSmall onClick={() => onClick(author)}>remove</ButtonSmall>}
        </div>
      )}
    </div>
  );
};

export default AuthorDetails;
