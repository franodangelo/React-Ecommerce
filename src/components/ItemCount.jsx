import React, { useState } from 'react';

export default function ItemCount({ stock, initial }) {

    const [count, setCount] = useState(initial);
    const [newStock, setNewStock] = useState(stock);

    const addUnit = () => {
        if (count === newStock) setCount(newStock);
        setCount(newCount => newCount++);
    }

    const subtractUnit = () => {
        if (count === initial) setCount(1);
        if (count > newStock) setCount(0);
        setCount(newCount => newCount--);
    }

    const addToCart = () => {
        if (newStock >= count) {
            alert(`You added ${count} items to your shopping cart!`);
            setNewStock(newStock => newStock - count);
            setCount(0);
        } else {
            alert(`You're trying to add more items than the real stock`)
            setCount(0);
        }
    }

    return (
        <div className='flex flex-col w-full justify-between items-center gap-4'>
            <section className='flex gap-8'>
                <button className='h-8 w-8 justify-center rounded-full font-bold text-emerald-700 bg-emerald-200 border-2 border-emerald-700' onClick={addUnit}>-</button>
                <h1 className='flex items-center mx-2 px-4'>{count}</h1>
                <button className='h-8 w-8 justify-center rounded-full font-bold text-emerald-700 bg-emerald-200 border-2 border-emerald-700' onClick={subtractUnit}>+</button>
            </section>
            <button className='flex justify-center text-center items-center px-4 py-2 font-bold uppercase text-emerald-100 rounded-full bg-emerald-700' onClick={addToCart}>Add to cart</button>
        </div>
    )
}
