import React, { useState, createContext } from "react";
export const Context = createContext();

export default function ContextProvider({ children }) {

    const [bagList, setBagList] = useState([]);

    function onBag(itemId) {
        const item = bagList.find(i => i.id === itemId);
        return item ? true : false;
    }

    function addItem(item, quantity) {
        if (onBag(item.id)) {
            setBagList(previousState => {
                return previousState.map(i => {
                    if (i.id === item.id) {
                        if (i.quantity + quantity > i.stock - 1) {
                            return {
                                ...i,
                                quantity: i.stock
                            }
                        } else {
                            return {
                                ...i,
                                quantity: i.quantity + quantity
                            }
                        }
                    } else {
                        return i;
                    }
                })
            })
        } else {
            let itemForBag = {
                ...item,
                quantity: quantity
            }
            setBagList(previousState => [...previousState, itemForBag]);
        }
    }

    function removeItem(itemId) {
        let newCartBag = bagList.filter(i => i.id !== itemId);
        setBagList(newCartBag);
    }

    function clearBag() {
        setBagList([]);
    }

    function bagPrice() {
        return Math.round(
            bagList.reduce((totalPrice, item) =>
                totalPrice + item.price * item.quantity, 0
            )
        )
    }

    function bagQuantity() {
        return Math.round(
            bagList.reduce((totalItems, item) =>
                totalItems + item.quantity,
                0
            )
        )
    }

    return (
        <div>
            <Context.Provider value={{ bagList, addItem, removeItem, clearBag, bagPrice, bagQuantity }}>
                {children}
            </Context.Provider>
        </div>
    )
}
