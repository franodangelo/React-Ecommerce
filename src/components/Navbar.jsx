import React from 'react';
import CartWidget from './CartWidget';

export default function Navbar({cartItems}) {
    return (
        <nav className='flex w-full h-20 px-8 justify-between items-center bg-emerald-300'>
            <h1 className='font-bold text-xl text-emerald-900'>My e-commerce.</h1>
            <section>
                <ul className='flex justify-between gap-8 text-emerald-900'>
                    <li className='font-semibold text-sm uppercase'>Rackets</li>
                    <li className='font-semibold text-sm uppercase'>Strings</li>
                    <li className='font-semibold text-sm uppercase'>Bags</li>
                    <li className='font-semibold text-sm uppercase'>Balls & Accesories</li>
                    <li className='font-semibold text-sm uppercase'>Shoes & Clothes</li>
                </ul>
            </section>
            <div className='flex items-center justify-between gap-4'>
                <button className='px-4 py-2 font-bold uppercase text-emerald-700 rounded-full bg-emerald-100 border-2 border-emerald-700'>Sign in</button>
                <button className='px-4 py-2 font-bold uppercase text-emerald-100 rounded-full bg-emerald-700'>Sign up</button>
                <div className='flex items-center'>
                    <CartWidget />
                    <span>{cartItems}</span>
                </div>
            </div>
        </nav>
    )
}
