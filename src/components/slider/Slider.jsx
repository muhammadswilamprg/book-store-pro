import { useState } from "react";
import "./slider.css";
import book1Img from "../../images/book1.png";
import book2Img from "../../images/book2.png"; 
import book3Img from "../../images/book3.png"; 

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (dir) => {
        if (dir === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex <2 ? slideIndex + 1 : 0);
        }
    }
    return ( 
        <div className="slider-container">
            <i
                onClick={() => handleClick("left")}
                className="bi bi-chevron-double-left arrow-left"
            ></i> 
            <div style={{transform: `translateX(${slideIndex * - 100}vw)`}} className="slider-wrapper">
                <div className="slide first-slide">
                    <div className="slide-img-wrapper">
                        <img src={book1Img} alt="book one" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">Book Store</h1>
                        <p className="slide-info-desc">
                            It's not just reading. It's all about adventure
                        </p>
                    </div>
                </div>
                <div className="slide second-slide">
                    <div className="slide-img-wrapper">
                        <img src={book2Img} alt="book two" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">Books For All</h1>
                        <p className="slide-info-desc">
                            Reading is not optional. Read
                        </p>
                    </div>
                </div>
                <div className="slide third-slide">
                    <div className="slide-img-wrapper">
                        <img src={book3Img} alt="book three" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">Check Out New Books</h1>
                        <p className="slide-info-desc">
                            We send you the book you want to your home.
                        </p>
                    </div>
                </div>
            </div>
            <i
                onClick={() => handleClick("right")}
                className="bi bi-chevron-double-right arrow-right"
            ></i>
        </div>
    );
}
 
export default Slider;

