import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const isExist = prevItems.find(book => book.id === item.id);
            if (isExist) {
                return prevItems.map(cartItem => 
                    cartItem.id === item.id ? item : cartItem
                );
            } else {
                return [...prevItems, item];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(el => el.id !== id));
    };

    return ( 
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            cartItemsLength: cartItems.length
        }}> 
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;