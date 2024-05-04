import React from 'react'

export default function page() {
  return (
    <div>
      readbook
    </div>
  )
}


// "use client"
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../globalredux/store';
// import { Book } from '../lib/types';
// import { removeFavoritBook } from '../globalredux/feature/books/bookSlice';

// export default function page() {
//   const favoriteBooks = useSelector((state: RootState) => state.book.favoritBooks);
//   const dispatch = useDispatch();

//   const handleRemoveFavoritBook = (book: Book) => {
//     dispatch(removeFavoritBook(book))
//   }

//   return (
//     <div>
//       <h1>Favorit Böcker</h1>
//       {favoriteBooks.map((book: Book, index: number) => (
//         <div key={index}>
//           <h2>{book.title}</h2>
//           <button onClick={() => handleRemoveFavoritBook(book)}>X</button>
//         </div>
//       ))}
//     </div>
//   );
// };


