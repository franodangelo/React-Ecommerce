import React from 'react';
import ItemCount from './ItemCount';

export default function Item({ name, thumbnail, category, description, price, realStock }) {
    return (
        <main className='max-w-[400px] h-[400px] p-4 rounded-lg bg-emerald-600/50'>
            <div>
                <div className='flex'>
                    <img className='' src={thumbnail} alt="product img" />
                </div>
                <section className='flex flex-col'>
                    <h2 className='font-thin uppercase'>{category}</h2>
                    <div className='flex justify-between items-center'>
                        <h1 className='py-2 font-bold text-2xl'>{name}</h1>
                        <span className='font-semibold text-lg'>U$S {price}</span>
                    </div>
                    <p className='w-40 text-sm'>"{description}"</p>
                </section>
                <section className='mt-8 flex flex-col items-center gap-4'>
                    <h2 className='font-thin text-sm uppercase'>Units available: {realStock}</h2>
                    <ItemCount />
                </section>
            </div>
        </main>
    )
}
