import React from 'react';
import CartWidget from './CartWidget';

export default function Navbar({ cartItems }) {
    return (
        <nav className='flex w-full h-20 px-8 justify-between items-center bg-emerald-300'>
            <h1 className='font-bold text-xl text-emerald-900 uppercase'>Wlsn</h1>
            <section>
                <ul className='flex justify-between gap-8 text-emerald-900'>
                    <li className='font-semibold text-sm uppercase cursor-pointer hover:font-bold'>Pro Staff</li>
                    <li className='font-semibold text-sm uppercase cursor-pointer hover:font-bold'>Blade</li>
                    <li className='font-semibold text-sm uppercase cursor-pointer hover:font-bold'>Clash</li>
                    <li className='font-semibold text-sm uppercase cursor-pointer hover:font-bold'>Ultra</li>
                </ul>
            </section>
            <div className='flex items-center justify-between gap-4'>
                <button className='px-4 py-2 rounded-full font-bold uppercase text-emerald-700 bg-emerald-100 border-2 border-emerald-700'>Sign in</button>
                <button className='px-4 py-2 rounded-full font-bold uppercase text-emerald-100 bg-emerald-700'>Sign up</button>
                <div className='flex items-center'>
                    <CartWidget />
                    <span>{cartItems}</span>
                </div>
            </div>
        </nav>
    )
}
