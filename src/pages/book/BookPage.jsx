import "./book-page.css";

import { useParams } from "react-router-dom";
import { BOOKS } from "../../data/books"
import Book from "../../components/book/Book";

const BookPage = () => {
    const {id} = useParams()
    
    const data = BOOKS.find(item => item.id === +id);
    return (
        <div className="book">
            <Book book={data} />
        </div>
    );
}
 
export default BookPage;