import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BagContext } from "../Bag/BagContext";
import ItemCount from "./ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ItemDetail({ item }) {
    const context = useContext(BagContext);
    const [itemCount, setItemCount] = useState(0);
    const [itemStock, setItemStock] = useState(1); 
    const [added, setAdded] = useState(false);

    function bagCharged() {
        toast.info(
            `Your bag was charged!`,
            {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            }
        )
    }

    useEffect(() => {
        setItemCount(item.quantity);
        setItemStock(item.stock);
    }, [item])

    function onAdd(stock, count) {
        setItemCount(count);
        setItemStock(stock - count);
        setAdded(true);
        context.addItem(item, count);
        bagCharged();
    }

    return (
        <section className="overflow-hidden h-auto">
            <div className="flex flex-col container p-4 mx-auto gap-8">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img className="lg:w-1/2 w-full object-cover object-center rounded border border-stone-200"
                        src={item.thumbnailDetail}
                        alt={`${item.name} thumbnail`}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-8 lg:py-2 mt-6 lg:mt-0">
                        <h2 className="text-sm text-stone-500 tracking-widest">
                            Rackets / {
                                item.category === 1 ? "Pro Staff" :
                                    item.category === 2 ? "Blade" :
                                        item.category === 3 ? "Clash" :
                                            "Ultra"
                            }
                        </h2>
                        <div className="flex justify-between items-center">
                            <h1 className="py-2 font-bold text-3xl uppercase text-stone-900">{item.name}</h1>
                        </div>
                        <div className="flex items-center">
                            <span className="flex items-center gap-4">
                                <div className="flex gap-1 items-center">
                                    {item.rate === 0 ?
                                        <svg className="w-4 h-4 self-center fill-current text-stone-400"
                                            viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg> :
                                        <svg className="w-6 h-6 self-center fill-current text-rose-700"
                                            viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>}
                                    <p className="text-center text-rose-700">
                                        {item.rate > 0 ? item.rate : <p className="text-stone-400">0</p>}
                                    </p>
                                </div>
                                <p className="text-center text-stone-600">
                                    {
                                        item.ratings === 0 ? "No reviews" :
                                            item.ratings > 1 ? <p>{item.ratings} reviews</p> :
                                                <p>{item.ratings} review</p>
                                    }
                                </p>
                            </span>
                        </div>
                        <p className="py-2 tracking-tighter">{item.description}</p>
                        <div className="flex items-center border-b-2 border-stone-200">
                            <div className="py-4 flex items-center">
                                <span className="mr-4">Size</span>
                                <div className="relative">
                                    <select className="p-2 rounded-md border border-stone-400">
                                        <option>{item.size}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/*Price section */}
                        <div className="flex flex-col py-4 gap-2">
                            <div className="flex items-center gap-2">
                                {item.discountPercentage != null ? // if item has disc, render the original price w/linethrough
                                    <p className="font-bold text-2xl line-through">${item.price.toFixed(2)}</p> :
                                    null
                                }
                                <p className="font-bold text-2xl text-rose-700">
                                    ${item.discountPercentage != null ? // if item has disc, render the new price applying it. If not, render the original price
                                        ((100 - item.discountPercentage) * (item.price.toFixed(2)) / 100) :
                                        (item.price.toFixed(2))
                                    }
                                </p>
                                {item.discountPercentage != null ? // if item has disc, render the discPercentage
                                    <p className="text-stone-600">-{item.discountPercentage}% OFF!</p> :
                                    null
                                }
                            </div>
                            <p>
                                {item.interestFreePayments} interest free payments of
                                ${(item.price / item.interestFreePayments).toFixed(2) // amount of each payment
                                }
                            </p>
                        </div>
                        {/* Buttons section */}
                        {added === false ?
                            (<ItemCount stock={itemStock} initial={itemCount} onAdd={onAdd} />) :
                            (<Link to="/bag">
                                <button className="primaryBtn w-full">
                                    Go to bag
                                </button>
                            </Link>
                            )
                        }
                    </div>
                </div>
                {/* Specifications section */}
                <section className="w-full lg:w-4/5 mx-auto flex flex-col flex-wrap gap-4">
                    <h1 className="py-2 font-bold text-lg md:text-xl text-stone-900 uppercase">Specifications</h1>
                    <ul className="flex flex-col gap-2 divide-y-2 divide-stone-200">
                        <li className="md:text-lg">Head: {item.head} sq in</li>
                        <li className="md:text-lg">Length: {item.length} in</li>
                        <li className="md:text-lg">String pattern: {item.stringPattern}</li>
                        <li className="md:text-lg">Strung weight: {item.strungWeight}g</li>
                        <li className="md:text-lg">Strung balance: {item.strungBalance}cm</li>
                    </ul>
                </section>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    )
}
