import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import itemsData from "../utils/itemsData";
import promise from "../utils/promise";
import Item from "./Item";

export default function ItemList() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        try {
            if (id) {
                promise(itemsData.filter(i => i.category === parseInt(id)), 500)
                    .then(res => setItems(res))
            } else {
                promise(itemsData, 500)
                    .then(res => setItems(res));
            }
        } catch (error) {
            console.log(error);
        }
    }, [id])

    return (
        <div className="h-auto min-h-screen m-auto mb-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.length > 0 ? items.map(i => {
                return <Item
                    key={i.id}
                    id={i.id}
                    thumbnailCard={i.thumbnailCard}
                    name={i.name}
                    rate={i.rate}
                    price={i.price}
                    discountPercentage={i.discountPercentage}
                />
            }) : <p>Loading items...</p>}
        </div>
    )
}
