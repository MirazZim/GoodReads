import { Link } from "react-router-dom";

const Book = ({ book }) => {
  /* Destructuring and taking names from json like
    1."bookId": 1,
    "bookName": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 192,
    "rating": 4.5,
    "category": "Classic",
    "tags": ["Fiction", "Romance"],
    "publisher": "Scribner",
    "yearOfPublishing": 1925

    as we can see in the json file theres props named image,bookName etc so we destructred them
     */
  const { bookId, image, bookName, author, tags, category } = book;

  return (

    /* ekhane Link er dynamic route disi Book Id er */
    <Link to = {`/books/${bookId}`}>


        <div className="card bg-base-100 w-96 shadow-xl p-6">
      <figure className="bg-gray-100 py-8 rounded-2xl">
        <img src={image} className="h-[166px]" alt={bookName} />
      </figure>

      <div className="card-body">
        <div className="flex justify-center gap-4">
          {tags.map((tag) => (
            <button className="btn glass text-white">{tag}</button>
          ))}
        </div>
            <br />
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By : {author}</p>
        <div className="divider"></div>

        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
    
  );
};

export default Book;
