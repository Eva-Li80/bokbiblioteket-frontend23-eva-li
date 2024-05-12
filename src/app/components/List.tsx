import React from 'react'

type ListProps<T> = {
    items: T[];
    onClick?: (item: T) => void;
    typeToRender: (item: T) => React.ReactNode;

}

const List = <T,>({items, onClick, typeToRender}:ListProps<T>) => {
  return (
    <div>
        <ul>
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
