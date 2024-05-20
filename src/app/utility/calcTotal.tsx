import { Book } from "@/app/lib/types";

export const calcTotal = (books: Book[], type: keyof Book["about"]): number => {
   return books.reduce(
        (total, book) => total + parseInt(book.about?.[type] || "0"),
        0
      );
}