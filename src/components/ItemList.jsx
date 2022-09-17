import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import itemsData from './utils/itemsData';
import promise from './utils/promise';
import Item from './Item';

export default function ItemList() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        try {
            if (id) {
                promise(itemsData.filter(i => i.category === parseInt(id)), 1000).then(res => setItems(res))
            } else {
                promise(itemsData, 1000).then(res => setItems(res));
            }
        } catch (error) {
            console.log(error);
        }
    }, [id])

    return (
        <div className='grid grid-cols-3 m-auto gap-8'>
            {items.length > 0 ? items.map(i => {
                return <Item
                    key={i.id}
                    thumbnailCard={i.thumbnailCard}
                    id={i.id}
                    name={i.name}
                    category={i.category}
                    description={i.description}
                    rate={i.rate}
                    price={i.price}
                    stock={i.stock}
                />
            }) : <p>Loading items...</p>}
        </div>
    )
}
