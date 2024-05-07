import React, { useState } from 'react'
import styles from "./form.module.scss"

const Form = () => {
    const [review, setReview] = useState('');
    const [grade, setGrade] = useState('');
    const [pages, setPages] = useState('');
    const [savedReview, setSavedReview] = useState('');
    const [savedGrade, setSavedGrade] = useState('');
    const [savedPages, setSavedPages] = useState('');
  
    const handleSave = () => {
        setSavedReview(review);
        setSavedGrade(grade);
        setSavedPages(pages);
      setReview('');
      setGrade('');
      setPages('');
    };

  
    return (
      <div className={styles.form}>
        <div>
            <p>{savedReview}</p>
            <p>{savedGrade} stjärnor</p>
            <p>{savedPages} sidor</p>
        </div>
        <article className={styles.items}>
          <input type="text" value={review} onChange={e => setReview(e.target.value)} placeholder='vad tyckte du....' />
          <select value={grade} onChange={e => setGrade(e.target.value)}>
            <option value="">Hur många 🌟 får boken</option>
            <option value="1">🌟</option>
            <option value="2">🌟🌟</option>
            <option value="3">🌟🌟🌟</option>
            <option value="4">🌟🌟🌟🌟</option>
            <option value="5">🌟🌟🌟🌟🌟</option>
          </select>
          <input type="text" value={pages} onChange={e => setPages(e.target.value)} placeholder='sidor..' />
          <button onClick={handleSave}>Spara</button>
        </article>
      </div>
    );
  };
  

export default Form
