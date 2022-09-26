import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import itemsData from "../../utils/itemsData";
import promise from "../../utils/promise";
import Item from "./Item";

export default function ItemList() {
    const [items, setItems] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        try {
            if (category) {
                promise(itemsData.filter(i => i.category === category), 500)
                    .then(res => setItems(res))
            } else {
                promise(itemsData, 500)
                    .then(res => setItems(res));
            }
        } catch (error) {
            console.log(error);
        }
    }, [category])

    return (
        <main className="h-auto min-h-screen m-auto mb-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.length > 0 ? items.map(i => {
                return <Item
                    key={i.id}
                    id={i.id}
                    category={i.category}
                    thumbnailCard={i.thumbnailCard}
                    name={i.name}
                    rate={i.rate}
                    price={i.price}
                    discountPercentage={i.discountPercentage}
                />
            }) : <p>Loading items...</p>}
        </main>
    )
}
