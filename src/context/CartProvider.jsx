import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ({ children }) => {
    const [cartItems, setCarItems] = useState([]);
    //add to cart
    const addToCart = (item) => {
        console.log(item)
        setCarItems(prev => [...prev, item])
    }

    //Remove form cart

    const removeFromCart = (id) => {
        const cart = cartItems.filter(el => el.id !== id);
        setCarItems(cart)
    }

    return ( 
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            cartItemsLength : cartItems.length
        }}> 
            {children}
        </CartContext.Provider>
    );
}
 
export default CartProvider
;