"use client"
import { useState } from 'react';
import { AboutBook, Book } from '@/app/lib/types';
import styles from "./form.module.scss";

interface FormProps {
    onSave: (formData: AboutBook) => void;
}

const Form = ({ onSave}: FormProps) => {
    const [review, setReview] = useState('');
    const [grade, setGrade] = useState('');
    const [pages, setPages] = useState('');

    const handleSave = () => {
        onSave({
          review, grade, pages,
          key: ''
        });
        setReview('');
        setGrade('');
        setPages('');
    };

    return (
        <div className={styles.form}>
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

export default Form;
