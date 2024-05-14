import React from "react";
import { Book } from "../lib/types";
import ButtonSmall from "./ButtonSmall";

type BookDetailsProps = {
  book: Book;
  showDescription: boolean;
  showpublisher: boolean;
  showGenre: boolean;
  className: string;
  onClick?: (book: Book) => void;
};

const BookDetails = ({
  book,
  showDescription,
  showpublisher,
  showGenre,
  className,
  onClick,
}: BookDetailsProps) => {
  if (!book) {
    return <div>No Books!</div>;
  }
  const {
    title,
    cover_i,
    first_sentence,
    author_name,
    first_publish_year,
    publisher,
    description,
    subjects,
  } = book;
  return (
    <div>
      {title && (
        <div className={className} style={{ fontSize: 20 }}>
          <h2>{title}</h2>
          <img
            src={`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`}
            alt="Omslagsbild"
            width={200}
            height={250}
          />
          <p>First sentence: {first_sentence}</p>
          <p>Author name: {author_name}</p>
          <p>Year: {first_publish_year}</p>
          {showpublisher && <p>Publisher: {publisher}</p>}
          {showDescription && <p>Description: {description}</p>}
          {showGenre && <p>Genre: {subjects}</p>}
          {onClick && (
            <ButtonSmall onClick={() => onClick(book)}>remove</ButtonSmall>
          )}
        </div>
      )}
    </div>
  );
};

export default BookDetails;
