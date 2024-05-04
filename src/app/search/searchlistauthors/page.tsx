"use client"
import { addToFavoritAuthor, selectAuthor } from '@/app/globalredux/feature/books/bookSlice';
import { RootState } from '@/app/globalredux/store';
import { Author } from '@/app/lib/types';
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "../search.module.scss"
export default function page() {
    const authors = useSelector((state: RootState) => state.book.authors);
    const selectedAuthor = useSelector((state: RootState) => state.book.selectedAuthor);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

  
    const handleAuthorClick = (author: Author) => {
      dispatch(selectAuthor(author)); 
    };
    
    const handleAddAuthor = (author: Author) => {
      dispatch(addToFavoritAuthor(author)); 
      setSearch("")
    };
  
  return (
    <div className={styles.favoritlist}>
         {selectedAuthor ? (
        <div>
          <h2>Namn: {selectedAuthor.name}</h2>
          <p>Födelsedag: {selectedAuthor.birth_date}</p>
          <p>Top subjekt: {selectedAuthor.top_subjects}</p>
          <p>Top work{selectedAuthor.top_work}</p>
          <p>Work count: {selectedAuthor.work_count}</p>

          <Link href="/favoritauthors" onClick={() => handleAddAuthor(selectedAuthor)}>Lägg till författare i din favorit lisa med författare</Link>
       
        </div>
      ) : (
        <div className={styles.favoritlist}>
          {authors.map((autor: Author, index: number) => (
            <div key={index} onClick={() => handleAuthorClick(autor)}>
              <h2 className={styles.favoritlistitem}>{autor.name}</h2>
            </div>
          ))}
        </div>
      )}
      
    </div>
  )
}
