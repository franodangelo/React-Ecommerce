import React from 'react'

export default function ItemListContainer(props) {
    return (
        <div className='flex w-full h-screen p-12 justify-center items-center'>
            <h1 className='font-bold text-2xl'>{props.greeting}</h1>
        </div>
    )
}
