import { CART_INFO } from "../../data/cart";
const OrderSummary = () => {
    const totalPrice = CART_INFO.reduce((acc, cur) => acc + cur.price * cur.quantity, 0 )
    return ( 
        <div className="cart-order-summary">
            <div className="order-summary-title">
                Order Summary
            </div>
            <div className="order-summary-item">
                <span>SubTotal</span>
                <span>${totalPrice}</span>
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
                <span>${totalPrice}</span>
            </div>
        </div>

    );
}
 
export default OrderSummary;