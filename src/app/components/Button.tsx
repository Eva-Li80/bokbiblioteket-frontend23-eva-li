import React from 'react'
import styles from "./button.module.scss"

type ButtonProps = {
    children : React.ReactNode;
    onClick: () => void
}

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button
