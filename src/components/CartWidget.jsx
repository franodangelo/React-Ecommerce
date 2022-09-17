import React from 'react';
import { HiShoppingBag } from 'react-icons/hi';

export default function CartWidget() {
    return (
        <div className='p-4 items-center'>
            <HiShoppingBag className='text-rose-700' size={24} />
        </div>
    )
}
