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
            {
                stock != 0 ?
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        <section className="flex w-full md:flex-col basis-1/4 items-center md:items-stretch gap-2">
                            <div className="flex w-full py-2 gap-2">
                                {
                                    count != 1 ?
                                        <HiOutlineMinusSm onClick={subtractUnit} className="text-rose-700 cursor-pointer" size={24} /> :
                                        <HiOutlineMinusSm onClick={subtractUnit} className="text-stone-700 cursor-not-allowed" size={24} />
                                }
                                <p className="flex mx-auto items-center">{count}</p>
                                {
                                    count === stock ?
                                        <HiOutlinePlusSm onClick={addUnit} className="text-stone-700 cursor-not-allowed" size={24} /> :
                                        <HiOutlinePlusSm onClick={addUnit} className="text-rose-700 cursor-pointer" size={24} />
                                }
                            </div>
                            <p className="w-full text-xs text-center uppercase">Stock: {stock} rackets</p>
                        </section>
                        <button className="primaryBtn w-full basis-3/4" onClick={() => onAdd(newStock, count)}>
                            Add to bag
                        </button>
                    </div> :
                    <button className="noStockBtn w-full basis-3/4">
                        Out of stock
                    </button>
            }
        </main>
    )
}
