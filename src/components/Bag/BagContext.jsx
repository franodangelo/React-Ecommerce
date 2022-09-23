import React, { useState, createContext } from "react";
export const BagContext = createContext();

export default function BagContextProvider({ children }) {

    const [bagList, setBagList] = useState([]);

    function isOnCart(id) {
        const itemOnCart = bagList.find(i => i.id === id);
        return itemOnCart ? true : false;
    }

    const addItem = (item, qty) => {
        if (isOnCart(item.id)) {
            setBagList((prevState) => {
                return prevState.map(i => {
                    if (i.id === item.id) {
                        if (i.quantity + qty > i.stock - 1) {
                            alert(`Sorry, the maximum stock of this product is ${i.stock}`)
                            return {
                                ...i,
                                quantity: i.stock
                            }
                        } else {
                            return {
                                ...i,
                                quantity: i.quantity + qty
                            }
                        }
                    } else {
                        return i;
                    }
                })
            })
        } else {
            let itemForCart = {
                ...item,
                quantity: qty
            }
            setBagList((prevState) => [...prevState, itemForCart]);
        }
    }

    function removeItem(id) {
        let listWithoutItem = bagList.filter(i => i.id !== id);
        setBagList(listWithoutItem);
    }

    function clearBag() {
        setBagList([]);
    }

    function priceBag() {
        return Math.round(
            bagList.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0)
        )
    }

    function quantityBag() {
        return Math.round(
            bagList.reduce((totalItems, item) => totalItems + item.quantity, 0)
        )
    }

    return (
        <BagContext.Provider value={{ bagList, addItem, removeItem, clearBag, priceBag, quantityBag }}>
            {children}
        </BagContext.Provider>
    )
}
