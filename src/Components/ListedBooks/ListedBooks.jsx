import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, [allBooks]);

  return (
    <div className="p-6">
      <h3 className="text-3xl text-gray-800 font-bold text-center mb-6">
        Listed Books
      </h3>
      <Tabs className="max-w-7xl mx-auto">
        <TabList className="flex justify-center space-x-4 border-b border-gray-300 mb-6">
          <Tab
            className="px-4 py-2 text-lg font-medium text-gray-700 cursor-pointer hover:text-gray-900 focus:outline-none"
            selectedClassName="border-b-2 border-green-500 text-green-600 font-bold"
          >
            Read List
          </Tab>
          <Tab
            className="px-4 py-2 text-lg font-medium text-gray-700 cursor-pointer hover:text-gray-900 focus:outline-none"
            selectedClassName="border-b-2 border-green-500 text-green-600 font-bold"
          >
            Wish List
          </Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl text-black font-bold mb-4">
            Books I Read: {readList.length}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className="text-2xl text-black font-bold mb-4">
            Books I Wish to Read: {readList.length}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
