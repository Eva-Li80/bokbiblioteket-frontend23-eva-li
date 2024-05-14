import React from 'react'
import styles from "./list.module.scss"

type ListProps<T> = {
    items: T[];
    onClick?: (item: T) => void;
    typeToRender: (item: T) => React.ReactNode;
    className: string;

}

const List = <T,>({items, onClick, typeToRender, className}:ListProps<T>) => {
  return (
    <div>
        <ul  className={className}>
            {items.map((item:T, index) => (
                <li key={index}  onClick={() => onClick && onClick(item)}>
                    {typeToRender(item)}
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default List
