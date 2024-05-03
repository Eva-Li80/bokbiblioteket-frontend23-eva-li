"use client"
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/globalredux/store";
import { Author} from "@/app/lib/types";
import { setAuthors, selectAuthor, addToFavoritAuthor } from "@/app/globalredux/feature/books/bookSlice";
import { fetchAthurByName } from "@/app/lib/getApi";

const FavoritAuthor = () => {
  const authors = useSelector((state: RootState) => state.book.authors);
  const selectedAuthor = useSelector((state: RootState) => state.book.selectedAuthor);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const searchAuthor = async () => {
    try {
      const filteredAuthors = await fetchAthurByName(search);
      dispatch(setAuthors(filteredAuthors as Author[]));
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  useEffect(() => {
    searchAuthor();
  }, [dispatch]);

  const handleAuthorClick = (author: Author) => {
    dispatch(selectAuthor(author)); 
  };
  
  const handleAddAuthor = (author: Author) => {
    dispatch(addToFavoritAuthor(author)); 
    setSearch("")
  };

  const handleSearchClick = () => {
    searchAuthor(); 
  };
  
  

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter author name"
      />
      <button onClick={handleSearchClick}>Search</button>
      {selectedAuthor ? (
        <div>
          <h2>{selectedAuthor.name}</h2>
          <button onClick={() => handleAddAuthor(selectedAuthor)}>add author</button>
        </div>
      ) : (
        <div>
          {authors.map((autor: Author, index: number) => (
            <div key={index} onClick={() => handleAuthorClick(autor)}>
              <h2>{autor.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritAuthor;
