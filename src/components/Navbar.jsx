import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function Navbar({ cartItems }) {
    return (
        <nav className='flex w-full h-20 px-8 justify-between items-center bg-rose-300'>
            <Link to="/">
                <h1 className='font-bold text-xl text-rose-900 uppercase'>Wlsn</h1>
            </Link>
            <section>
                <ul className='flex justify-between gap-8 text-rose-900'>
                    <Link to="/rackets/prostaff">
                        <li className='font-semibold text-sm uppercase cursor-pointer hover:font-bold'>
                            Pro Staff
                        </li>
                    </Link>
                    <Link to="/rackets/blade">
                        <li className='font-semibold text-sm uppercase cursor-pointer hover:font-bold'>
                            Blade
                        </li>
                    </Link>
                    <Link to="/rackets/clash">
                        <li className='font-semibold text-sm uppercase cursor-pointer hover:font-bold'>
                            Clash
                        </li>
                    </Link>
                    <Link to="/rackets/ultra">
                        <li className='font-semibold text-sm uppercase cursor-pointer hover:font-bold'>
                            Ultra
                        </li>
                    </Link>

                </ul>
            </section>
            <div className='flex items-center justify-between gap-4'>
                <button className='px-4 py-2 rounded-full font-bold uppercase text-rose-700 bg-rose-100 border-2 border-rose-700'>Sign in</button>
                <button className='px-4 py-2 rounded-full font-bold uppercase text-rose-100 bg-rose-700'>Sign up</button>
                <div className='flex items-center'>
                    <CartWidget />
                    <span>{cartItems}</span>
                </div>
            </div>
        </nav>
    )
}
