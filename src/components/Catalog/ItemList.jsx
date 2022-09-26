import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fbFetch } from "../../utils/fbConfig.js";
import Item from "./Item";

export default function ItemList() {
    const [items, setItems] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            fbFetch(category).then(res => setItems(res));
        } else {
            fbFetch().then(res => setItems(res));
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
