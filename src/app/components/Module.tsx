
import React from 'react';
import styles from "./modules.module.scss"

interface ModalProps {
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen}) => {
  return (
    <div style={{ display: isOpen ? 'block' : 'none'}} className={styles.modules}>
      <div className={styles.text}>
        <h2>Added to your list 🎈</h2>
      </div>
    </div>
  );
};

export default Modal;