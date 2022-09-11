import React from 'react';
import Item from './Item';
import items from './utils/items';

export default function ItemList() {



    return (
        <div>
            {items.map(i => {
                return <Item
                    thumbnail={i.thumbnail}
                    name={i.name}
                    category={i.category}
                    description={i.description}
                    rate={i.rate}
                    price={i.price}
                    realStock={i.stock}
                />
            })}
        </div>
    )
}
