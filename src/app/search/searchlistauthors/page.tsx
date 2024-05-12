"use client"
import { RootState } from '@/app/globalredux/store';
import { Author } from '@/app/lib/types';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "../search.module.scss"
import { addToFavoritAuthor, selectAuthor } from '@/app/globalredux/feature/books/authorSlice';
import List from '@/app/components/List';
import AuthorDetails from '@/app/components/AuthorDetails';
import Modal from '@/app/components/Module';
export default function page() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
    const authors = useSelector((state: RootState) => state.authors.authors);
    const selectedAuthor = useSelector((state: RootState) => state.authors.selectedAuthor);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleAuthorClick = (author: Author) => {
      dispatch(selectAuthor(author)); 
    };
    
    const handleAddAuthor = (author: Author) => {
      dispatch(addToFavoritAuthor(author)); 
      setSearch("")
      setModalIsOpen(true);

      setTimeout(() => {
        setModalIsOpen(false);
      }, 3000);
    };
  
  return (
    <div className={styles.favoritlist}>
        <div>
        <Modal isOpen={modalIsOpen} />
      </div>
         {selectedAuthor ? (
        <div className={styles.favoritlistdetails}>
         <AuthorDetails author={selectedAuthor}/>
          <button onClick={() => handleAddAuthor(selectedAuthor)}>Add author to your authorlist..</button>
        </div>
      ) : (
       <div className={styles.favoritlist}>
        <h2>Searched authors</h2>
        <List items={authors} onClick={handleAuthorClick} typeToRender={(author: Author) => (
          <div>
              <h2 className={styles.favoritlistitem}>
              <img src={author.imageUrl} alt={author.name} style={{width:100, height: 150}} />
                {author.name}</h2>
              
            </div>
        )}/>
          
        </div>
      )}
      
    </div>
  )
}
