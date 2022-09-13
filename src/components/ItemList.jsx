import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import itemsData from './utils/itemsData';
import promise from './utils/promise';

export default function ItemList() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        try {
            promise(itemsData).then(res => setItems(res));
        } catch (error) {
            console.log(error);
        }
    }, [id])

    console.log(items);

    return (
        <div className='grid grid-cols-3 m-auto gap-8'>
            {items.length > 0 ? items.map(i => {
                return <Item
                    thumbnailCard={i.thumbnailCard}
                    name={i.name}
                    category={i.category}
                    description={i.description}
                    rate={i.rate}
                    price={i.price}
                    realStock={i.stock}
                />
            }) : <p>Loading items...</p>}
        </div>
    )
}
