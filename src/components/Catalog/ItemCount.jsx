import React, { useEffect, useState } from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

export default function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(1);
    const [newStock, setNewStock] = useState(1);

    useEffect(() => {
        setCount(initial);
        setNewStock(stock);
    }, [initial, stock])

    function addUnit() {
        if (count < stock) setCount(count + 1);
    }

    function subtractUnit() {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <main className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <section className="flex w-full md:flex-col basis-1/4 items-center md:items-stretch gap-2">
                    <div className="flex w-full py-2 gap-2">
                        <HiOutlineMinusSm onClick={subtractUnit} className="text-rose-700 cursor-pointer" size={24} />
                        <p className="flex mx-auto items-center">{count > stock ? "Out of stock" : count}</p>
                        <HiOutlinePlusSm onClick={addUnit} className="text-rose-700 cursor-pointer" size={24} />
                    </div>
                    <p className="w-full text-xs text-center uppercase">Stock: {stock} rackets</p>
                </section>
                <button className="primaryBtn w-full basis-3/4" onClick={() => onAdd(newStock, count)}>
                    Add to bag
                </button>
            </div>
        </main>
    )
}
