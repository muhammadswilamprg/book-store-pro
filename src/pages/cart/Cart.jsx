import './cart.css'
import OrderSummary from '../../components/cart/OrderSummary';
import CartItem from '../../components/cart/CartItem';
import { useContext } from 'react';
import CartContext from '../../context/cartContext';

const Cart = () => {
    const {cartItems,addToCart, removeFromCart} = useContext(CartContext)
    return (<div className="cart">
        <div className="cart-title">Your Shopping Cart</div>
        <div className="cart-wrapper">
            <div className="cart-items">
                {cartItems.map(item =>
                    <CartItem
                        key={item.id}
                        item={item}
                        removeFromCart={removeFromCart}
                        addToCart={addToCart}
                    />
                )}
            </div>
            <OrderSummary />
        </div>
        
    </div> );
}
 
export default Cart;