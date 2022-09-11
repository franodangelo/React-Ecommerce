import React from 'react';
import ItemCount from './ItemCount';

export default function Item({ name, thumbnail, category, description, rate, price, stock }) {
    return (
        <div class="w-full max-w-sm rounded-lg shadow-md bg-emerald-900">
            <img class="p-8 rounded-t-lg" src={thumbnail} alt="product img" />
            <div class="px-5 pb-5">
                <div className='flex justify-between'>
                    <h5 class="text-xl font-semibold text-white">{name}</h5>
                    <div className='flex'>
                        <span class="flex items-center bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded">
                            <svg aria-hidden="true" class="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            {rate}
                        </span>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-2.5 mb-5">
                    <h1 className='text-white'>Units available: {stock}</h1>
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                </div>
                <div class="flex justify-between items-center">
                    <ItemCount stock={stock} initial={0} />
                </div>
            </div>
        </div>

    )
}
