import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import itemsData from "../../utils/itemsData";
import promise from "../../utils/promise";
import Loader from "../Loader";
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

    const sortedItems = items.sort(function (a, b) {
        if (a.stock > b.stock) return -1;
        if (a.stock < b.stock) return 1;
        return 0;
    })

    return (
        <>
            {items.length > 0 ?
                <main className="grid grid-cols-1 h-auto min-h-screen m-auto mb-auto gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {sortedItems.map(i => {
                        return <Item
                            key={i.id}
                            id={i.id}
                            category={i.category}
                            thumbnailCard={i.thumbnailCard}
                            name={i.name}
                            rate={i.rate}
                            price={i.price}
                            stock={i.stock}
                            discountPercentage={i.discountPercentage}
                        />
                    })}
                </main> :
                <Loader/>
            }
        </>
    )
}
