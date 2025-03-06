import { useEffect, useState } from "react";
import { Book } from "../types";
import Table from "../components/Dashboard/Table";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import { useBookContext } from "../context/BookContext";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [status, setStatus] = useState<string>("active");
  const [loading, setLoading] = useState<boolean>(false);
  const { setCurrentBook } = useBookContext();
  const navigate = useNavigate();

  const filterBooks = (status: string) => {
    return status == "all"
      ? books
      : status == "active"
        ? books.filter((book) => book.status == "active")
        : books.filter((book) => book.status == "inactive");
  };

  const updateBookStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`http://localhost:3000/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update book status");

      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === id ? { ...book, status: newStatus } : book,
        ),
      );
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBook = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/books/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete book");

      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const editBook = (id: string) => {
    navigate("/add-book");
    const bookToEdit = books.find((book) => book.id === id);
    if (bookToEdit) {
      setCurrentBook(bookToEdit);
    }
  };

  useEffect(() => {
    setCurrentBook(null);
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3000/books");
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="container">
      <div className="py-10">
        <h1 className="text-4xl font-semibold text-dark-green md:text-6xl">
          Books
        </h1>
        <p className="text-sm text-gray-600">
          The most modest book database in the world!
        </p>
      </div>
      <div className="flex-between-center mb-5">
        <Dropdown status={status} setStatus={setStatus} />
        <div className="flex-between-center gap-3">
          <p>Current: {filterBooks(status).length}</p>
          <p>Total: {books.length}</p>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Table
          books={filterBooks(status)}
          updateBookStatus={updateBookStatus}
          deleteBook={deleteBook}
          editBook={editBook}
        />
      )}
    </section>
  );
};

export default Dashboard;
