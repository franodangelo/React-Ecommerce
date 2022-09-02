import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

export default function CartWidget() {
    return (
        <div className='p-4 items-center'>
            <HiShoppingCart className='text-emerald-900' size={20} />
        </div>
    )
}
