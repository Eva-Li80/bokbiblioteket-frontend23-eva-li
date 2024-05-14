import React from "react";
import { Book } from "../lib/types";
import styles from "./details.module.scss"
import ButtonSmall from "./ButtonSmall";

type BookDetailsProps = {
  book: Book;
  showDescription: boolean;
  showpublisher: boolean;
  showGenre: boolean;
className: string;
  onClick?: (book: Book) => void;

};

const BookDetails = ({ book, showDescription , showpublisher, showGenre, className , onClick}: BookDetailsProps) => {
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
        <div className={className}>
          <h2>{title}</h2>
          <img
            src={`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`}
            alt="Omslagsbild"
            width={200}
            height={250}
          />
          <p>First sentence: {first_sentence}</p>
          {subjects && author_name.length > 0 && (
          <p>Author: {author_name[0]}</p>)}
          <p>Year: {first_publish_year}</p>
          {showpublisher && publisher && publisher.length > 0 && (
            <p>Publisher: {publisher}</p>
          )}
          {showDescription && description && <p>Description: {description}</p>}
          {showGenre && subjects && subjects.length > 0 && (
          <p>Genre: {subjects[0]}</p>)}
         {onClick &&  <ButtonSmall onClick={() => onClick(book)}>remove</ButtonSmall>}
        </div>
      )}
    </div>
  );
};

export default BookDetails;

