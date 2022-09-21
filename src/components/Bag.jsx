import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsData from "../utils/itemsData";
import promise from "../utils/promise";
import { BagContext } from "./BagContext";

export default function Bag() {
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

    const context = useContext(BagContext);

    return (
        <main className="h-auto min-h-screen m-auto mb-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                context.bagList.length === 0
                    ?
                    <div>
                        <h1>There are no products in your bag</h1>
                        <h2>Why don't you navigate and add some rackets?</h2>
                        <p>We suggest you:</p>
                        { }
                    </div>
                    : null
            }
            {
                context.bagList.map(i =>
                    <p>{i.count}x {i.name}: ${i.price * i.count}
                        <button onClick={() => context.removeItem(i.id)}>Delete item</button></p>
                )
            }
            {
                context.bagList.length > 0 ? <button onClick={context.clearBag}>Clear bag</button> : null
            }
        </main>
    )
}
