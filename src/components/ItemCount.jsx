import React, { useEffect, useState } from 'react';

export default function ItemCount({ stock, initial, cartItems, onAdd }) {
    const [count, setCount] = useState(initial);
    const [newCartItems, setNewCartItems] = useState(cartItems);

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

    function addToCart() {
        if (count === 1) {
            alert(`You added 1 item to the cart`);
        } else if (count > initial && count < stock) {
            alert(`You added ${count} items to the cart`);
        }
        setNewCartItems(newCartItems + count);
    }

    return (
        <div className='flex w-full justify-between items-center gap-2'>
            <section className='flex basis-1/4 gap-2'>
                <button className='h-8 w-8 justify-center font-bold text-rose-700 rounded bg-rose-200 border-2 border-rose-700'
                    onClick={subtractUnit}>-
                </button>
                <h1 className='flex items-center mx-auto px-4 bg-white rounded'>{count}</h1>
                <button className='h-8 w-8 justify-center font-bold text-rose-700 rounded bg-rose-200 border-2 border-rose-700'
                    onClick={addUnit}>+
                </button>
            </section>
            <button className='flex basis-3/4 justify-center text-center items-center px-4 py-2 font-bold uppercase text-rose-100 rounded bg-rose-700'
                onClick={() => {onAdd(stock, count)}}>Add to cart
            </button>
        </div>
    )
}
