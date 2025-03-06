import BookForm from "../components/AddBook/BookForm";

const AddBook = () => {
  return (
    <section className="container mx-auto">
      <div className="py-10">
        <h1 className="text-center text-4xl font-semibold text-dark-green md:text-6xl">
          Add book
        </h1>
        <p className="text-center text-sm text-gray-600">
          Thank you for supporting most modest book database!
        </p>
      </div>
      <BookForm />
    </section>
  );
};

export default AddBook;
