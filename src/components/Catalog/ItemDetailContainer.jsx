import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fbFetchSingularDoc } from "../../utils/fbConfig";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fbFetchSingularDoc(id)
        .then(res => setData(res));
    }, [id])

    return (
        <>
            {data.name ? <ItemDetail item={data} /> : <p>Loading...</p>}
        </>
    )
}
