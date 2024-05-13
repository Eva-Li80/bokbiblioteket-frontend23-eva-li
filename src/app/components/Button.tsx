import React from 'react'

type ButtonProps = {
    children : React.ReactNode;
    onClick: () => void
    classname: string;
}

const Button = ({children, onClick, classname}: ButtonProps) => {
  return (
    <div className={classname} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button
