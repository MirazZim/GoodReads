import { useEffect, useState } from "react";


const Books = () => {
const [books, setBooks] = useState([])

useEffect( () => {
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))



},[])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books : {books.length}</h2>
            
        </div>
    );
};

export default Books;

//1. state to store the books
//2. useEffects
//2.1 fetch to load data 
//2.2 set the data to the books state