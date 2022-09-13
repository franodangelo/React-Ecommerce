import React from 'react';
import ItemList from './ItemList';

export default function ItemListContainer() {
    return (
        <div className='flex w-full p-8 gap-8 items-center'>
            <ItemList />
        </div>
    )
}
