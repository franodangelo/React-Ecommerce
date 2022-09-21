import React from "react";
import { Link } from "react-router-dom";
import BagWidget from "./BagWidget";

export default function Navbar({ bagItems }) {
    return (
        <nav className="flex w-full h-20 mb-10 px-8 justify-between items-center shadow-lg">
            <Link to="/">
                <h1 className="font-bold text-lg md:text-2xl text-rose-700 uppercase">
                    Wlsn
                </h1>
            </Link>
            <section>
                <ul className="flex justify-between items-center gap-2 md:gap-8">
                    <Link to="/category/1">
                        <li className="font-bold text-xs md:text-lg uppercase tracking-widest cursor-pointer hover:text-rose-700 hover:scale-105 ease-out duration-300">
                            Pro Staff
                        </li>
                    </Link>
                    <Link to="/category/2">
                        <li className="font-bold text-xs md:text-lg uppercase tracking-widest cursor-pointer hover:text-rose-700 hover:scale-105 ease-out duration-300">
                            Blade
                        </li>
                    </Link>
                    <Link to="/category/3">
                        <li className="font-bold text-xs md:text-lg uppercase tracking-widest cursor-pointer hover:text-rose-700 hover:scale-105 ease-out duration-300">
                            Clash
                        </li>
                    </Link>
                    <Link to="/category/4">
                        <li className="font-bold text-xs md:text-lg uppercase tracking-widest cursor-pointer hover:text-rose-700 hover:scale-105 ease-out duration-300">
                            Ultra
                        </li>
                    </Link>
                </ul>
            </section>
            <div className="flex items-center">
                <Link to="/bag"><BagWidget /></Link>
                <span className="-ml-4 -mt-6 px-1 text-xs border border-rose-700 rounded">{bagItems}</span>
            </div>
        </nav>
    )
}
