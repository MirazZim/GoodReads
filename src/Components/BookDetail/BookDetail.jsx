import { useParams } from "react-router-dom";


const BookDetail = () => {

    /* useParam call korle ekta object dibe jetar moddhe joto parameters ase shegular property hishebe thakbe */
    const {bookId} = useParams();
    console.log(bookId);

    return (
        <div>
            <h2>Book Details : {bookId}</h2>
        </div>
    );
};

export default BookDetail;