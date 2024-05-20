import { Book } from "@/app/lib/types";

export const countBooks = (books: Book[]) => {
  return books.length
}