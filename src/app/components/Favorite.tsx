
import React from 'react'
import StarIcon from "@mui/icons-material/Star";

type FavoriteProps = {
    onClick: () => void;
    color: "inherit" | "error";
    className: string;
}

const Favorite = ({onClick, color, className}: FavoriteProps) => {
  return (
    <div style={{fontSize:25}}>
          Mark and save as favorite, Click at the star
       <StarIcon
              className={className}
              onClick={onClick}
              color={color}
            />{" "}
          
    </div>
  )
}

export default Favorite
