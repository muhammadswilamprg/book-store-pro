import { useContext, useState } from "react";
import "./book-slider.css";
import Rating from "./Rating";
import Modal from "../modal/Modal";
import CartContext from "../../context/cartContext";

const BookSlider = ({ data }) => {
    const { addToCart }= useContext(CartContext)
    const [bookSlideId, setBookSlideId] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [bookData, setBookData] = useState(null)

    const handleClickSlide = direction => {
        if (direction === "left") {
            setBookSlideId(bookSlideId - 1);
        } else {
            setBookSlideId(bookSlideId + 1)
        }
    }
    const handleModal = (book) => {
        setOpenModal(true);
        setBookData(book);
        console.log(book);
    }

    return (
        <div className="book-slider-container">
            {bookSlideId >= 0  && <i
                onClick={() => handleClickSlide('left')}
                className="bi bi-chevron-left book-slider-arrow-left"
            ></i>}
            <div style={{transform: `translateX(${bookSlideId * -350}px)`}} className="book-slider-wrapper">
                {data.map((item) => (
                    <div key={item.id} className="book-slide-item">
                        <img src={`/books/${item.image}`} alt={item.title} className="book-slide-item-img" />
                        <h2 className="book-slide-item-title">{item.title}</h2>
                        <Rating rating={item.rating} reviews={item.reviews} />
                        <div className="book-slide-item-price">${item.price}</div>
                        <div className="book-slider-icon-wrapper">
                            <i onClick={()=> {handleModal(item)}} className="bi bi-eye-fill"></i>
                            <i onClick={()=> addToCart({...item, quantity: 1})} className="bi bi-cart-plus"></i>
                        </div>
                    </div>
                ))}
            </div>
            {bookSlideId <= data.length && <i
                onClick={() => handleClickSlide('right')}
                className="bi bi-chevron-right book-slider-arrow-right"
            ></i>}
            {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
        </div>
    );
}
 
export default BookSlider;