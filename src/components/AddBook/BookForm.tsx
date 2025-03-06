import { FormEvent, useState, useEffect } from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Modal from "../Modal";
import { useBookContext } from "../../context/BookContext";

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    isbn: "",
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const { currentBook } = useBookContext();
  const categories = ["Fiction", "Business", "Science", "Fantasy"];

  useEffect(() => {
    if (currentBook) {
      setFormData({
        title: currentBook.title,
        author: currentBook.author,
        category: currentBook.category,
        isbn: currentBook.isbn,
      });
    }
  }, [currentBook]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      category: e.target.value,
    }));
  };

  const handleBookCreation = async (e: FormEvent) => {
    e.preventDefault();

    const createdAt = format(new Date(), "d MMMM yyyy, h:mm a", {
      locale: enUS,
    });
    setShowModal(true);

    try {
      if (currentBook) {
        const res = await fetch(
          `http://localhost:3000/books/${currentBook.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: formData.title,
              author: formData.author,
              category: formData.category,
              isbn: formData.isbn,
              createdAt: currentBook.createdAt,
              editedAt: createdAt,
              status: currentBook.status,
            }),
          },
        );

        if (!res.ok) throw new Error("Failed to update book");
      } else {
        await fetch("http://localhost:3000/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            author: formData.author,
            category: formData.category,
            isbn: formData.isbn,
            createdAt: createdAt,
            editedAt: "-",
            status: "active",
          }),
        });
      }
      setShowModal(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleBookCreation}
      className="flex-col-center mx-auto max-w-[490px] gap-3 rounded-lg p-4 text-[#122127] duration-300"
    >
      <input
        onChange={handleChangeInput}
        type="text"
        required
        placeholder="Title"
        name="title"
        value={formData.title}
        className="w-full rounded-md border border-[#122127a4] bg-[#F1F7F9] p-3 placeholder-[#122127] focus:outline-none focus:ring-2 focus:ring-[#122127]"
      />
      <input
        onChange={handleChangeInput}
        type="text"
        required
        placeholder="Author"
        name="author"
        value={formData.author}
        className="w-full rounded-md border border-[#122127a4] bg-[#F1F7F9] p-3 placeholder-[#122127] focus:outline-none focus:ring-2 focus:ring-[#122127]"
      />
      <select
        onChange={handleChangeDropdown}
        name="category"
        value={formData.category}
        required
        className="w-full rounded-md border border-[#122127a4] bg-[#F1F7F9] p-3 placeholder-[#122127] focus:outline-none focus:ring-2 focus:ring-[#122127]"
      >
        <option value="">Select category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        onChange={handleChangeInput}
        type="text"
        required
        placeholder="ISBN"
        name="isbn"
        value={formData.isbn}
        className="w-full rounded-md border border-[#122127a4] bg-[#F1F7F9] p-3 placeholder-[#122127] focus:outline-none focus:ring-2 focus:ring-[#122127]"
      />
      <button
        type="submit"
        className="mt-6 rounded-md border-2 border-[#122127] px-8 py-3 text-[#122127] duration-200 hover:bg-[#122127] hover:text-white"
      >
        Submit
      </button>
      {showModal && <Modal />}
    </form>
  );
};

export default BookForm;
