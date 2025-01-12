/* 1. state to store the books
2. useEffects
2.1 fetch to load data 
2.2 set the data to the books state */


import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
const [books, setBooks] = useState([])

useEffect( () => {
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))



},[])

    return (
        <div >
        <h2 className="text-4xl font-bold text-center text-black">Books </h2>
        <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book book ={book} key={book.bookId} ></Book> )
                }
            </div>
            
        </div>
    );
};

export default Books;

