import './cart.css'
import { CART_INFO } from "../../data/cart";
import OrderSummary from '../../components/cart/OrderSummary';
import CartItem from '../../components/cart/CartItem';

const Cart = () => {
    return (<div className="cart">
        <div className="cart-title">Your Shopping Cart</div>
        <div className="cart-wrapper">
            <div className="cart-items">
                {CART_INFO.map(item =>
                    <CartItem key={item.id} item={item}/>
                )}
            </div>
            <OrderSummary />
        </div>
        
    </div> );
}
 
export default Cart;