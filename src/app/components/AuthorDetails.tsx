import React from "react";
import { Author } from "../lib/types";

type AuthorDetailsProps = {
  author: Author;
  style?: React.CSSProperties;
};

const AuthorDetails = ({ author, style }: AuthorDetailsProps) => {
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
        <div style={style}>
          <h2>{name}</h2>
          <img src={imageUrl} alt={name} style={{ width: 100, height: 150 }} />
          <h2>Birthdate: {birth_date}</h2>
          <h2>Top subjekt:{top_subjects}</h2>
          <h2>Top work:{top_work}</h2>
          <h2>Profession:{type}</h2>
          <h2>Work count: {work_count}</h2>
        </div>
      )}
    </div>
  );
};

export default AuthorDetails;
