import './cart.css'
import { CART_INFO } from "../../data/cart";

const Cart = () => {
    return (<div className="cart">
        <div className="cart-title">Your Shopping Cart</div>
        <div className="cart-wrapper">
            <div className="cart-items">
                {CART_INFO.map(item =>
                    <div key={item.id} className="cart-item">
                        <img src={`/books/${item.image}`} alt={item.title} className="cart-item-img" />
                        <div className="cart-item-info">
                            <div>
                                <div className="cart-item-book-title">
                                    <b>Title: </b> {item.title}
                                </div>
                                <div className="cart-item-author">
                                    <b>Author: </b> {item.author}
                                </div>
                            </div>
                            <div>
                                <div className="cart-item-quantity">
                                    <button>
                                        <i className="bi bi-plus-lg"></i>
                                    </button>
                                    <b>{item.quantity}</b>
                                    <button>
                                        <i className="bi bi-dash-lg"></i>
                                    </button>
                                </div>
                                <div className="cart-item-price">
                                    ${item.quantity * item.price}
                                </div>
                                <i className="bi bi-trash-fill"></i>
                            </div>  
                        </div>  
                    </div>
                )}
            </div>
            <div className="cart-order-summary">
                <div className="order-summary-title">
                    Order Summary
                </div>
                <div className="order-summary-item">
                    <span>SubTotal</span>
                    <span>${CART_INFO.reduce((acc, cur) => acc + cur.price * cur.quantity, 0 )}</span>
                </div>
                <div className="order-summary-item">
                    <span>Shopping Cost</span>
                    <span>0</span>
                </div>
                <div className="order-summary-item">
                    <span>Discount</span>
                    <span>0</span>
                </div>
                <div className="order-summary-item">
                    <span>Total</span>
                    <span>${CART_INFO.reduce((acc, cur) => acc + cur.price * cur.quantity, 0 )}</span>
                </div>
            </div>
        </div>
        
    </div> );
}
 
export default Cart;