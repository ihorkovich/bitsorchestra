import { createContext, useContext, useState, ReactNode } from "react";
import { Book } from "../types";

interface BookContextType {
  currentBook: Book | null;
  setCurrentBook: (book: Book | null) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
};

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [currentBook, setCurrentBook] = useState<Book | null>(null);

  return (
    <BookContext.Provider value={{ currentBook, setCurrentBook }}>
      {children}
    </BookContext.Provider>
  );
};
