import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  if (!book) {
    return <p>Book not found</p>;
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div
      className="flex justify-center items-center py-10 "
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div
        className="flex bg-white shadow-inner  overflow-hidden"
        style={{
          width: "1170px",
          height: "711px",
          maxWidth: "95%",
          border: "1px solid #ddd",
        }}
      >
        {/* Book Image */}
        <div
          className="flex-shrink-0"
          style={{
            width: "470px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="w-full h-auto rounded-lg"
            src={image}
            alt={`${bookName} cover`}
          />
        </div>

        {/* Details Section */}
        <div className="flex-grow p-6">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">{bookName}</h1>
          <p className="text-md text-gray-500 mb-4 font-medium">By: {author}</p>
          <div className="divider divider-neutral"></div>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Category:</strong> {category}
          </p>
          <div className="divider divider-neutral"></div>
          <p className="text-sm text-gray-700 mb-4">
            <strong>Review:</strong> {review}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="divider divider-neutral"></div>
          <div className="text-sm text-gray-600 mb-4">
            <p>
              <strong>Number of Pages:</strong> {totalPages}
            </p>
            <p>
              <strong>Publisher:</strong> {publisher}
            </p>
            <p>
              <strong>Year of Publishing:</strong> {yearOfPublishing}
            </p>
            <p>
              <strong>Rating:</strong> {rating}
            </p>
          </div>
          <div className="divider divider-neutral"></div>
          <div className="mt-4 flex gap-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200">
              Read
            </button>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition duration-200">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
