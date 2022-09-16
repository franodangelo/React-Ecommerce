import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
    const [itemCount, setItemCount] = useState(1);
    const [itemStock, setItemStock] = useState(1);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        setItemCount(1);
        setItemStock(item.stock);
    }, [item])

    function onAdd(stock, count) {
        alert()
        setItemStock(stock - count);
        setAdded(true);
    }

    console.log(added);

    return (
        <section className="overflow-hidden h-auto">
            <div className="flex flex-col container px-4 py-8 mx-auto gap-8">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img className="lg:w-1/2 w-full object-cover object-center rounded border border-stone-200"
                        src={item.thumbnailDetail}
                        alt="product"
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
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
                            <button className="w-8 h-8 rounded-full inline-flex items-center justify-center bg-stone-100 text-stone-400">
                                <svg fill="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex py-2 items-center">
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
                                    <p className="text-center text-rose-700">{item.rate > 0 ? item.rate : null}</p>
                                </div>
                                <p className="text-center text-stone-600">{item.ratings} {item.ratings > 1 ? "reviews" : "review"}</p>
                            </span>
                        </div>
                        <p className="tracking-tighter">{item.description}</p>
                        <div className="flex items-center border-b-2 border-stone-200">
                            <div className="py-4 flex items-center">
                                <span className="mr-4">Size</span>
                                <div className="relative">
                                    <select className="p-2 rounded-md border border-stone-400 focus:border-rose-500">
                                        <option>{item.size}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 gap-2">
                            <div className="flex items-center gap-2">
                                {item.discountPercentage ? <p className="font-bold text-2xl line-through">${item.price.toFixed(2)}</p> : null}
                                <p className="font-bold text-2xl text-rose-700">${item.discountPercentage != null ? ((100 - item.discountPercentage) * item.price / 100) : item.price}</p>
                                {item.discountPercentage ? <p className="text-stone-600">-{item.discountPercentage}% OFF</p> : null}
                            </div>
                            <p>{item.interestFreePayments} interest free payments of ${(item.price / item.interestFreePayments).toFixed(2)}</p>
                            {/* <button className='px-4 py-2 rounded font-bold uppercase text-rose-100 bg-rose-700'>Checkout</button> */}
                        </div>
                        {added === false ?
                            (<ItemCount stock={itemStock} initial={itemCount} onAdd={onAdd} />) :
                            (<Link to="/cart">
                                <button className='flex w-full justify-center text-center items-center px-4 py-2 font-bold uppercase text-rose-100 rounded bg-rose-700'>
                                    Go to Cart
                                </button>
                            </Link>
                            )
                        }
                    </div>
                </div>
                <section className="lg:w-4/5 mx-auto flex flex-col flex-wrap gap-4">
                    <h1 className="py-2 font-bold text-xl text-stone-900 uppercase">Specifications</h1>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className="text-lg">Head (sq in):</h2>
                        </div>
                        <h2 className="text-lg">Length (in):</h2>
                        <h2 className="text-lg">String Pattern:</h2>
                        <h2 className="text-lg">Strung Weight (grams):</h2>
                        <h2 className="text-lg">Strung balance (cm):</h2>
                    </div>
                </section>
            </div>
        </section>
    )
}
