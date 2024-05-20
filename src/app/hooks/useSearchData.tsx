import { useState } from "react";
import { useDispatch } from "react-redux";
import { Author, Book } from "@/app/lib/types";
import { setBooks } from "@/app/globalredux/feature/books/bookSlice";
import { setAuthors } from "@/app/globalredux/feature/authors/authorSlice";
import { fetchAthurByName, fetchBooksByTitle } from "@/app/lib/getApi";

export const useSearchData = (type: "book" | "author") => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const searchData = async () => {
        try {
          if (!search.trim()) {
            return;
          }
          let filterData;
          if (type === "book") {
            filterData = await fetchBooksByTitle(search);
            dispatch(setBooks(filterData as Book[]));
          } else {
            filterData = await fetchAthurByName(search);
            dispatch(setAuthors(filterData as Author[]));
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      const handleSearchClick = () => {
        dispatch(setBooks([]));
        dispatch(setAuthors([]));
        searchData();
      };

 return {search, setSearch, handleSearchClick}
    
}