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
        <div className="flex flex-col w-full">
            <section className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="flex w-full md:flex-col basis-1/4 items-center md:items-stretch gap-2">
                    <div className="flex w-full py-2 gap-2">
                        <button className="text-rose-700"
                            onClick={subtractUnit}><HiOutlineMinusSm size={24} />
                        </button>
                        <h1 className="flex mx-auto items-center">{count > stock ? "Out of stock" : count}</h1>
                        <button className="text-rose-700"
                            onClick={addUnit}><HiOutlinePlusSm size={24} />
                        </button>
                    </div>
                    <p className="w-full text-xs text-center uppercase">Stock: {stock} rackets</p>
                </div>
                <button className="flex w-full basis-3/4 justify-center text-center items-center px-4 py-2 font-bold uppercase text-rose-100 rounded bg-rose-700"
                    onClick={() => onAdd(newStock, count)}>Add to bag
                </button>
            </section>
        </div>
    )
}
