import * as React from 'react';

type CartContextType = {
    cart: ItemType[],
    setCartItems: React.Dispatch<React.SetStateAction<ItemType[]>>
};

const CartContext = React.createContext<CartContextType>({} as CartContextType);

export default CartContext;
