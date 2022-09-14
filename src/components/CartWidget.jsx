import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

export default function CartWidget() {
    return (
        <div className='p-4 items-center'>
            <HiShoppingCart className='text-rose-900' size={20} />
        </div>
    )
}
