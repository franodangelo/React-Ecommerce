import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import promise from "../../utils/promise";
import itemsData from "../../utils/itemsData";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        promise(itemsData.find(i => i.id === parseInt(id)), 0)
            .then(res => setData(res));
    }, [id])

    return (
        <div>
            {data.name ? <ItemDetail item={data} /> : <p>Loading...</p>}
        </div>
    )
}
