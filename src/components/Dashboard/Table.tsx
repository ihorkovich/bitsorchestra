import { Book } from "../../types";
import edit from "/icons/edit.svg";
import activate from "/icons/activate.svg";
import deactivate from "/icons/deactivate.svg";
import del from "/icons/delete.svg";

const Table = ({
  books,
  updateBookStatus,
  deleteBook,
  editBook,
}: {
  books: Book[];
  updateBookStatus: (id: string, newStatus: string) => void;
  deleteBook: (id: string) => void;
  editBook: (id: string) => void;
}) => {
  const th = [
    "Title",
    "Author",
    "Category",
    "ISBN",
    "Created At",
    "Edited At",
    "Status",
    "Actions",
  ];
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full">
        <thead>
          <tr className="my-10 bg-[#f1f7fa] py-10 text-dark-green">
            {th.map((t, i) => (
              <th key={i} className="border-b px-4 py-2">
                {t}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => (
              <tr key={book.id} className="border-b border-t last:border-b-0">
                <td className="px-4 py-2">{book.title}</td>
                <td className="px-4 py-2">{book.author}</td>
                <td className="px-4 py-2">{book.category}</td>
                <td className="px-4 py-2">{book.isbn}</td>
                <td className="px-4 py-2">{book.createdAt}</td>
                <td className="px-4 py-2">{book.editedAt}</td>
                <td className="px-4 py-2">
                  {book.status == "active" ? (
                    <span className="flex-between-center rounded-lg border border-gray-200 px-3 py-1">
                      <div className="aspect-square h-2 rounded-full bg-green-500"></div>
                      Active
                    </span>
                  ) : (
                    <span className="flex-between-center rounded-lg border border-gray-200 px-3 py-1">
                      <div className="aspect-square h-2 rounded-full bg-red-500"></div>
                      Inactive
                    </span>
                  )}
                </td>
                <td className="px-4 py-2">
                  <div className="flex-left-center">
                    <img
                      src={edit}
                      title="Edit"
                      className="aspect-square h-6 rounded-lg p-1 hover:cursor-pointer hover:bg-gray-200"
                      onClick={() => editBook(book.id)}
                    />

                    <img
                      src={book.status === "active" ? deactivate : activate}
                      title={
                        book.status === "active" ? "Deactivate" : "Activate"
                      }
                      className="aspect-square h-6 rounded-lg p-1 hover:cursor-pointer hover:bg-gray-200"
                      onClick={() =>
                        updateBookStatus(
                          book.id,
                          book.status === "active" ? "inactive" : "active",
                        )
                      }
                    />
                    {book.status == "active" ? null : (
                      <img
                        src={del}
                        title="Delete"
                        alt="Delete"
                        className="aspect-square h-6 rounded-lg p-1 hover:cursor-pointer hover:bg-gray-200"
                        onClick={() => deleteBook(book.id)}
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
