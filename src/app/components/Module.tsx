
import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen,children }) => {
  return (
    <div style={{ display: isOpen ? 'block' : 'none', width:"100%", height:"10vh", backgroundColor:"beige", borderRadius:20, padding: 10}}>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Modal;