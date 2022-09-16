import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function Navbar({ cartItems }) {
    return (
        <nav className='flex w-full h-20 px-16 justify-between items-center bg-rose-300 shadow-lg'>
            <Link to="/">
                <h1 className='font-bold text-2xl uppercase'>Wlsn</h1>
            </Link>
            <section>
                <ul className='flex justify-between gap-10'>
                    <Link to="/category/1">
                        <li className='font-bold text-lg uppercase tracking-widest cursor-pointer hover:scale-105 ease-out duration-300'>
                            Pro Staff
                        </li>
                    </Link>
                    <Link to="/category/2">
                        <li className='font-bold text-lg uppercase tracking-widest cursor-pointer hover:scale-105 ease-out duration-300'>
                            Blade
                        </li>
                    </Link>
                    <Link to="/category/3">
                        <li className='font-bold text-lg uppercase tracking-widest cursor-pointer hover:scale-105 ease-out duration-300'>
                            Clash
                        </li>
                    </Link>
                    <Link to="/category/4">
                        <li className='font-bold text-lg uppercase tracking-widest cursor-pointer hover:scale-105 ease-out duration-300'>
                            Ultra
                        </li>
                    </Link>

                </ul>
            </section>
            <div className='flex items-center justify-between gap-4'>
                {/* <button className='px-4 py-2 rounded font-bold uppercase text-rose-700 bg-rose-100 border-2 border-rose-700'>Sign in</button>
                <button className='px-4 py-2 rounded font-bold uppercase text-rose-100 bg-rose-700'>Sign up</button> */}
                <div className='flex items-center'>
                    <CartWidget />
                    <span>{cartItems}</span>
                </div>
            </div>
        </nav>
    )
}
