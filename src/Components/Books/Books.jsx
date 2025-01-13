import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [sort, setSort] = useState('');

    // Sorting logic
    const handleSort = (sortType) => {
        setSort(sortType);

        let sortedBooks = [...books];

        if (sortType === "Number of Pages") {
            sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
        }
        if (sortType === "Ratings") {
            sortedBooks.sort((a, b) => b.rating - a.rating); // Assuming you want higher ratings first
        }
        if (sortType === "Year of Publishing") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing); // Assuming newer books first
        }

        setBooks(sortedBooks);
    };

    // Fetch books data
    useEffect(() => {
        fetch("./booksData.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    return (
        <div>
            {/* <div className="divider"></div> */}
            <h2 className="text-4xl font-bold text-center text-black">Books</h2>
            <div className="divider divider-neutral"></div>
            <div className="flex items-center justify-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 ">
                        {sort ? `Sort by: ${sort}` : "Sort By "}
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                        <li onClick={() => handleSort("Ratings")}>
                            <a>Ratings</a>
                        </li>
                        <li onClick={() => handleSort("Number of Pages")}>
                            <a>Number of Pages</a>
                        </li>
                        <li onClick={() => handleSort("Year of Publishing")}>
                            <a>Year of Publishing</a>
                        </li>
                    </ul>
                </div>
            </div>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                    <Book book={book} key={book.bookId}></Book>
                ))}
            </div>
            <br />
        </div>
    );
};

export default Books;
