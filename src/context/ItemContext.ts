import * as React from 'react';

type ItemContextType = {
    items: ItemType[],
    setItems: React.Dispatch<React.SetStateAction<ItemType[]>>
};

const ItemContext = React.createContext<ItemContextType>({} as ItemContextType);

export default ItemContext;
