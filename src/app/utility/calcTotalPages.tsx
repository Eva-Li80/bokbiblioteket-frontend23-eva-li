import { Book } from "@/app/lib/types";

export const calcTotalPages = (books: Book[]) => {
 return books.reduce(
    (total, book) => total + parseInt(book.about?.pages || "0"),
    0)
}

