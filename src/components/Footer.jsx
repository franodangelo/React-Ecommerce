import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='flex flex-col md:flex-row w-full h-[120px] mt-10 px-8 py-4 justify-between items-center bg-rose-700'>
            <section className="flex items-center gap-8">
                <Link to="/">
                    <h1 className='font-bold text-lg text-white uppercase'>Wlsn</h1>
                </Link>
                <ul className='flex justify-between gap-4'>
                    <Link to="/category/1">
                        <li className='font-bold text-xs uppercase cursor-pointer'>
                            Pro Staff
                        </li>
                    </Link>
                    <Link to="/category/2">
                        <li className='font-bold text-xs uppercase cursor-pointer'>
                            Blade
                        </li>
                    </Link>
                    <Link to="/category/3">
                        <li className='font-bold text-xs uppercase cursor-pointer'>
                            Clash
                        </li>
                    </Link>
                    <Link to="/category/4">
                        <li className='font-bold text-xs uppercase cursor-pointer'>
                            Ultra
                        </li>
                    </Link>
                </ul>
            </section>
            <section className="flex flex-row md:flex-col items-center gap-4 md:gap-0 md:items-start">
                <h1 className="text-white">All rights reserved</h1>
                <p className="font-bold text-xs md:text-sm text-white">Franco D'Angelo - 2022</p>
            </section>
        </footer>
    )
}
