import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import promise from "./utils/promise";
import itemsData from "./utils/itemsData";

export default function ItemDetailContainer() {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        promise(itemsData.find(i => i.id === parseInt(id))).then(res => setData(res));
    }, [id])

    return (
        <div>
            <ItemDetail item={data} />
        </div>
    )
}
