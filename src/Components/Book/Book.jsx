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
     
     
     
    <div className="card bg-neutral-300 w-96 shadow-xl p-6">
          
     {/* //ekhane Link er dynamic route disi karon book er chobi te click korle jate oi Book Id er details ey jai */}
          
        <Link to = {`/books/${bookId}`}>
      <figure className="bg-gray-100 py-8 rounded-2xl">
        <img src={image} className="h-[166px]" alt={bookName} />
      </figure>
      
      </Link>
        
        

      <div className="card-body">
        <div className="flex justify-center gap-4">
          {tags.map((tag, index) => (
            <button key={index} className="btn glass  text-black">{tag}</button>
          ))}
        </div>
        
            <br />
        <h2 className="card-title text-black">
          {bookName}
          <div className="badge badge-secondary text-black">NEW</div>
        </h2>
        <p className="text-black">By : {author}</p>
        
        <div className="divider divider-neutral"></div>

        <div className="card-actions justify-between">
          <div className="badge badge-outline text-black">{category}</div>
          
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-black"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-black"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-black"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-black"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-black"
              />
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Book;
