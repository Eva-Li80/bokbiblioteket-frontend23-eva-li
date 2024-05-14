import React from 'react'
import styles from "./button.module.scss"

type ButtonProps = {
    children : React.ReactNode;
    onClick: () => void
}

const ButtonSmall = ({children, onClick }: ButtonProps) => {
  return (
    <div className={styles.buttonsmall} onClick={onClick}>
      {children}
    </div>
  )
}

export default ButtonSmall
