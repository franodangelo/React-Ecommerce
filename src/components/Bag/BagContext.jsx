import React, { useState, createContext } from "react";
export const BagContext = createContext();

export default function BagContextProvider({ children }) {

    const [bagList, setBagList] = useState([]);

    function addItem(item, count) {
        let itemForCart = { ...item, count };
        setBagList([...bagList, itemForCart]);
    }

    function removeItem(id) {
        let listWithoutItem = bagList.filter(i => i.id !== id);
        setBagList(listWithoutItem);
    }

    function clearBag() {
        setBagList([]);
    }

    return (
        <BagContext.Provider value={{ bagList, addItem, removeItem, clearBag }}>
            {children}
        </BagContext.Provider>
    )
}
