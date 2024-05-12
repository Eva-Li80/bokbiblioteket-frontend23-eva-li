import React from "react";
import { Book } from "../lib/types";

type BookDetailsProps = {
  book: Book;
  style?: React.CSSProperties;
  showDescription: boolean

};

const BookDetails = ({ book, style, showDescription }: BookDetailsProps) => {
    if(!book){
        return <div>No Books!</div>
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
        <div style={style}>
          <h2>Title: {title}</h2>
          <img
            src={`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`}
            alt="Omslagsbild"
            width={200}
            height={250}
          />
          <p>First sentence: {first_sentence}</p>
          <p>Author name: {author_name}</p>
          <p>Year: {first_publish_year}</p>
          <p>Publisher: {publisher}</p>
          {showDescription &&  <p>Description: {description}</p>}
          <p>Genre: {subjects}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
