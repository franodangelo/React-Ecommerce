import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BagContext } from "./Bag/BagContext";
import BagWidget from "./Bag/BagWidget";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiMenuAlt2, HiX } from "react-icons/hi";

const navigation = [
    { name: 'All rackets', category: null, href: '#', current: true },
    { name: 'Pro Staff', category: 'prostaff', href: '#', current: false },
    { name: 'Blade', category: 'blade', href: '#', current: false },
    { name: 'Clash', category: 'clash', href: '#', current: false },
    { name: 'Ultra', category: 'ultra', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const context = useContext(BagContext);
    return (
        <Disclosure as="nav" className="bg-white px-2 sm:px-4 py-2 w-full z-20 top-0 left-0 shadow-lg">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-stone-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <HiX className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <HiMenuAlt2 className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 justify-center items-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to="/">
                                        <h1 className="block h-8 w-auto lg:hidden font-bold text-lg md:text-2xl text-rose-700 hover:text-rose-800 uppercase">Advantage.</h1>
                                    </Link>
                                    <Link to="/">
                                        <h1 className="hidden h-8 w-auto lg:block font-bold text-lg md:text-2xl text-rose-700 hover:text-rose-800 uppercase">Advantage.</h1>
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <ul class="flex items-center space-x-8 font-medium text-sm bg-white">
                                        <Link to="/prostaff">
                                            <li className="font-bold text-xs md:text-lg uppercase tracking-widest cursor-pointer hover:text-rose-700 hover:scale-105 ease-out duration-300">
                                                Pro Staff
                                            </li>
                                        </Link>
                                        <Link to="/blade">
                                            <li className="font-bold text-xs md:text-lg uppercase tracking-widest cursor-pointer hover:text-rose-700 hover:scale-105 ease-out duration-300">
                                                Blade
                                            </li>
                                        </Link>
                                        <Link to="/clash">
                                            <li className="font-bold text-xs md:text-lg uppercase tracking-widest cursor-pointer hover:text-rose-700 hover:scale-105 ease-out duration-300">
                                                Clash
                                            </li>
                                        </Link>
                                        <Link to="/ultra">
                                            <li className="font-bold text-xs md:text-lg uppercase tracking-widest cursor-pointer hover:text-rose-700 hover:scale-105 ease-out duration-300">
                                                Ultra
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <Link to="/bag">
                                <div className="flex items-center">
                                    <BagWidget />
                                    <span className="-ml-4 -mt-6 px-1 text-xs rounded border border-rose-700">
                                        {context.quantityBag()}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            <ul class="flex flex-col space-y-8 text-sm font-medium bg-white">
                                <Disclosure.Button key="prostaff"
                                    as="a"
                                    href="/prostaff"
                                >
                                    <li className="font-bold text-sm md:text-lg uppercase tracking-widest cursor-pointer hover:text-rose-700 ease-out duration-300">
                                        Pro Staff
                                    </li>
                                </Disclosure.Button>
                                <Disclosure.Button key="blade"
                                    as="a"
                                    href="/blade"
                                >
                                    <li className="font-bold text-sm md:text-lg uppercase tracking-widest cursor-pointer hover:text-rose-700 ease-out duration-300">
                                        Blade
                                    </li>
                                </Disclosure.Button>
                                <Disclosure.Button key="clash"
                                    as="a"
                                    href="/clash"
                                >
                                    <li className="font-bold text-sm md:text-lg uppercase tracking-widest cursor-pointer hover:text-rose-700 ease-out duration-300">
                                        Clash
                                    </li>
                                </Disclosure.Button>
                                <Disclosure.Button key="ultra"
                                    as="a"
                                    href="/ultra"
                                >
                                    <li className="font-bold text-sm md:text-lg uppercase tracking-widest cursor-pointer hover:text-rose-700 ease-out duration-300">
                                        Ultra
                                    </li>
                                </Disclosure.Button>
                            </ul>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
