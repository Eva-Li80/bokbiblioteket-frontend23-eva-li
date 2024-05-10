"use client"
import { RootState } from '@/app/globalredux/store';
import { Author } from '@/app/lib/types';
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "../search.module.scss"
import { addToFavoritAuthor, selectAuthor } from '@/app/globalredux/feature/books/authorSlice';
export default function page() {
    const authors = useSelector((state: RootState) => state.authors.authors);
    const selectedAuthor = useSelector((state: RootState) => state.authors.selectedAuthor);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleAuthorClick = (author: Author) => {
      dispatch(selectAuthor(author)); 
    };
    
    const handleAddAuthor = (author: Author) => {
      dispatch(addToFavoritAuthor(author)); 
      dispatch(selectAuthor(null)); 
      setSearch("")
    };
  
  return (
    <div className={styles.favoritlist}>
         {selectedAuthor ? (
        <div>
          <h2>Name: {selectedAuthor.name}</h2>
          <p>Birthdate: {selectedAuthor.birth_date}</p>
          <p>Top subject: {selectedAuthor.top_subjects}</p>
          <p>Top work{selectedAuthor.top_work}</p>
          <p>Work count: {selectedAuthor.work_count}</p>
          <button onClick={() => handleAddAuthor(selectedAuthor)}>Add author to your authorlist..</button>
        </div>
      ) : (
        <div className={styles.favoritlist}>
          {authors.map((author: Author, index: number) => (
            <div key={index} onClick={() => handleAuthorClick(author)}>
              <h2 className={styles.favoritlistitem}>
              <img src={author.imageUrl} alt={author.name} style={{width:100, height: 150}} />
                {author.name}</h2>
              
            </div>
          ))}
        </div>
      )}
      
    </div>
  )
}
