import React, { useEffect, useState } from 'react';

export default function ItemCount({ stock, initial, cartItems }) {
    const [count, setCount] = useState(initial);
    // const [newStock, setNewStock] = useState(stock);
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
        <div className='flex flex-col w-full justify-between items-center gap-4'>
            <section className='flex gap-2'>
                <button className='h-8 w-8 justify-center rounded-full font-bold text-emerald-700 bg-emerald-200 border-2 border-emerald-700'
                    onClick={subtractUnit}>-
                </button>
                <h1 className='flex items-center mx-2 px-4 bg-white rounded'>{count}</h1>
                <button className='h-8 w-8 justify-center rounded-full font-bold text-emerald-700 bg-emerald-200 border-2 border-emerald-700'
                    onClick={addUnit}>+
                </button>
            </section>
            <button className='flex justify-center text-center items-center px-4 py-2 font-bold uppercase text-emerald-100 rounded-full bg-emerald-700'
                onClick={addToCart}>Add to cart
            </button>
        </div>
    )
}
