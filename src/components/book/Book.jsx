import { useContext, useState } from "react";
import Rating from "../book-slider/Rating";
import CartContext from "../../context/cartContext";


const Book = ({ book }) => {
    const { addToCart } = useContext(CartContext);
    const [qty, setQty] = useState(1);
    return ( 
        <>
            <div className="book-content">
                <img src={`/books/${book.image}`} alt={book.title} className="book-content-img" />
                <div className="book-content-info">
                    <h1 className="book-title">{book.title}</h1>
                    <div className="book-author">
                        by <span>{book.author}</span> (Author)
                    </div>
                    <Rating rating={book.rating} reviews={book.reviews} />
                    <div className="book-add-to-cart">
                        <input
                            className="book-add-to-card-input"
                            type="number"
                            min="1"
                            max="100"
                            value={qty}
                            onChange={e => setQty(e.target.value)}
                        />
                        <button
                            onClick={() => addToCart({ ...book, quantity: qty })}
                            className="book-add-to-cart-btn"
                        >
                            <i className="bi bi-cart-plus"></i>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <p className="book-description">
                {book.description}
            </p>
            <div className="book-icons">
                <div className="book-icon">
                    <small>Print Length</small>
                    <i className="bi bi-file-earmark-break"></i>
                    <b>{book.printLength} Pages</b>
                </div>
                <div className="book-icon">
                    <small>Language</small>
                    <i className="bi bi-globe"></i>
                    <b>{book.language} </b>
                </div>
                <div className="book-icon">
                    <small>Publication Date</small>
                    <i className="bi bi-calendar3"></i>
                    <b>{book.publicationDate}</b>
                </div>
            </div>
        </>
        
     );
}
 
export default Book;