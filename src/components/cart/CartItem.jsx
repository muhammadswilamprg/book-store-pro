const CartItem = ({ item }) => {
    const { image, title, author, quantity, price } = item;
    return ( 
        <div className="cart-item">
            <img src={`/books/${image}`} alt={title} className="cart-item-img" />
            <div className="cart-item-info">
                <div>
                    <div className="cart-item-book-title">
                        <b>Title: </b> {title}
                    </div>
                    <div className="cart-item-author">
                        <b>Author: </b> {author}
                    </div>
                </div>
                <div>
                    <div className="cart-item-quantity">
                        <button className='plus-btn'>
                            <i className="bi bi-plus-lg"></i>
                        </button>
                        <b>{quantity}</b>
                        <button className='dash-btn'>
                            <i className="bi bi-dash-lg"></i>
                        </button>
                    </div>
                    <div className="cart-item-price">
                        ${quantity * price}
                    </div>
                    <i className="bi bi-trash-fill"></i>
                </div>  
            </div>  
        </div>
    );
}
 
export default CartItem;