export type Book = {
    id: number| string
    key: string;
    title: string;
    author_name: string[];
    first_publish_year: number;
    publisher: string[];
    first_sentence: [];
    cover_i: number;
    about?: AboutBook;
  };
  
  export type Author = {
    id: number| string
    key: string;
    name: string;
    birth_date?: string;
    alternate_names?: string[];
    top_subjects?: string[];
    top_work?: string;
    type: string;
    work_count: number;
    _version_?: number;
  }

  export type AboutBook = {
    review: string;
    grade: string;
    pages: string;
    key: string
  }
  