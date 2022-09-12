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
            promise(itemsData.filter(i => i.id === parseInt(id))).then(res => setItems(res));
        } catch (error) {
            console.log(error);
        }
    }, [id])

    console.log(items);

    return (
        <div>
            {items.length > 0 ? items.map(i => {
                return <Item
                    thumbnail={i.thumbnail}
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
