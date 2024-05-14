import React from "react";
import { Author } from "../../lib/types";
import ButtonSmall from "../Buttons/ButtonSmall";

type AuthorDetailsProps = {
  author: Author;
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
    <div>
      {name && (
        <div className={className} style={{fontSize: 20}}>
          <h2>{name}</h2>
          <img src={imageUrl} alt={name} style={{ width: 200, height: 250, border:"2px solid green" }} />
          <p>Birthdate: {birth_date}</p>
          <p>Top work:{top_work}</p>
          <p>Profession:{type}</p>
          <p>Work count: {work_count}</p>
          {onClick &&  <ButtonSmall onClick={() => onClick(author)}>remove</ButtonSmall>}
        </div>
      )}
    </div>
  );
};

export default AuthorDetails;
