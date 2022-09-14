import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ItemDetail({ item }) {

    const [itemCount, setItemCount] = useState(1);
    const [itemStock, setItemStock] = useState(1);

    useEffect(() => {
        setItemCount(1);
        setItemStock(item.stock);
    }, [item])

    return (
        <section class="overflow-hidden h-auto">
            <div class="container px-4 py-8 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img class="lg:w-1/2 w-full object-cover object-center rounded border border-stone-200"
                        src={item.thumbnailDetail}
                        alt="product"
                    />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm text-stone-500 tracking-widest">{item.category}{" / "} {item.subCategory}</h2>
                        <div className="flex justify-between items-center">
                            <h1 class="py-2 font-bold text-3xl text-stone-900">{item.name}</h1>
                            <button class="w-8 h-8 rounded-full inline-flex items-center justify-center bg-stone-100 text-stone-400">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="flex">
                            <span class="flex items-center gap-2">
                                {item.rate === 0 ?
                                    <svg className="w-4 h-4 self-center fill-current text-stone-400" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg> :
                                    <svg className="w-6 h-6 self-center fill-current text-rose-700"
                                        viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg>}
                                <p class="text-center text-stone-600">{item.ratings} Reviews</p>
                            </span>
                        </div>
                        <p class="tracking-tighter">{item.description}</p>
                        <div class="flex items-center border-b-2 border-stone-200">
                            <div class="py-4 flex items-center">
                                <span class="mr-4">Size</span>
                                <div class="relative">
                                    <select class="p-2 rounded-md border border-stone-400 focus:border-rose-500">
                                        <option>{item.size}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="flex py-4 items-center justify-between">
                            <p class="font-medium text-center text-2xl text-stone-900">${item.price}.00</p>
                            <button class="px-4 py-2 rounded-full font-bold uppercase text-rose-100 bg-rose-700">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
