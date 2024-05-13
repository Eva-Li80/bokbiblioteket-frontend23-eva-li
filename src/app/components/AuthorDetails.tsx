import React from "react";
import { Author } from "../lib/types";
import styles from "./details.module.scss"

type AuthorDetailsProps = {
  author: Author;
};

const AuthorDetails = ({ author }: AuthorDetailsProps) => {
  if (!author) {
    return <div>No Author!</div>;
  }
  const {
    name,
    imageUrl,
    birth_date,
    top_subjects,
    top_work,
    type,
    work_count,
  } = author;
  return (
    <div>
      {name && (
        <div className={styles.details}>
          <h2>{name}</h2>
          <img src={imageUrl} alt={name} style={{ width: 200, height: 250, border:"2px solid green" }} />
          <p>Birthdate: {birth_date}</p>
          <p>Top subjekt:{top_subjects}</p>
          <p>Top work:{top_work}</p>
          <p>Profession:{type}</p>
          <p>Work count: {work_count}</p>
        </div>
      )}
    </div>
  );
};

export default AuthorDetails;
