import React from 'react';
import Item from './Item';

export default function ItemListContainer() {
    return (
        <div className='flex w-full h-screen p-12 gap-8 justify-center items-center'>
            <Item
                thumbnail={`https://cdnmedia.racquets4u.com/media/catalog/product/cache/6e8e24cc73e2eff11526e72b5f24c033/w/i/wilson-championship-3-tennis-balls.jpg`}
                name={"Tennis balls"}
                category={"sports"}
                description={"3-ball can recommended for all surfaces"}
                price={5.49}
                realStock={25}
            />
            <Item
                thumbnail='https://www.e-tennis.com/babolat-pure-aero-rafa-tennis-bag-x-12-751215.html'
                name={"Tennis bag"}
                category={"sports"}
                description={"9-racquets capacity"}
                price={59.99}
                realStock={10}
            />
        </div>
    )
}
