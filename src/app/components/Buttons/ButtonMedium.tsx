import React from 'react'
import styles from "./button.module.scss"

type ButtonProps = {
    children : React.ReactNode;
    onClick: () => void
}

const ButtonMedium = ({children, onClick}: ButtonProps) => {
  return (
    <div className={styles.buttonmedium } onClick={onClick}>
      {children}
    </div>
  )
}

export default ButtonMedium
