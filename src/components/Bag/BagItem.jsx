import React, { useContext } from "react";
import { BagContext } from "./BagContext";

export default function BagItem(props) {
    const context = useContext(BagContext);

    return (
        <main className="flex w-full max-h-40 rounded bg-rose-400 justify-between items-center">
            <img className="w-80" src={props.thumbnailCard} alt="" />
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
            <h1>{props.count}</h1>
            <button onClick={context.removeItem}>Remove from bag</button>
        </main>
    )
}
