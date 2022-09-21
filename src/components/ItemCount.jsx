import React, { useEffect, useState } from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

export default function ItemCount({ stock, initial, cartItems, onAdd }) {
    const [count, setCount] = useState(initial);
    const [newBagItems, setNewBagItems] = useState(cartItems);

    useEffect(() => {
        setCount(initial);
    }, [initial])

    function addUnit() {
        if (count < stock) setCount(count + 1);
    }

    function subtractUnit() {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    function addToBag() {
        if (count === 1) {
            alert(`You added 1 item to the bag`);
        } else if (count > initial && count < stock) {
            alert(`You added ${count} items to the bag`);
        }
        setNewBagItems(newBagItems + count);
    }

    return (
        <div className="flex flex-col w-full">
            <section className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="flex w-full md:flex-col basis-1/4 items-center md:items-stretch gap-2">
                    <div className="flex w-full py-2 gap-2">
                        <button className="text-rose-700"
                            onClick={subtractUnit}><HiOutlineMinusSm size={24} />
                        </button>
                        <h1 className="flex mx-auto items-center">{count}</h1>
                        <button className="text-rose-700"
                            onClick={addUnit}><HiOutlinePlusSm size={24} />
                        </button>
                    </div>
                    <p className="w-full text-xs text-center uppercase">Stock: {stock} rackets</p>
                </div>
                <button className="flex w-full basis-3/4 justify-center text-center items-center px-4 py-2 font-bold uppercase text-rose-100 rounded bg-rose-700"
                    onClick={() => onAdd(stock, count)}>Add to bag
                </button>
            </section>
        </div>
    )
}
