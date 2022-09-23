import React, { useContext } from "react";
import { BagContext } from "./BagContext";

export default function BagItem(props) {
    const context = useContext(BagContext);

    return (
        <main className="flex w-full max-h-40 justify-between items-center rounded shadow">
            <img className="w-80" src={props.thumbnailCard} alt="" />
            <section className="flex justify-start">
                <div className="flex gap-4">
                    <h2 className="">{props.quantity}x</h2>
                    <h1 className="font-bold">{props.name}</h1>
                </div>
                <h1>Total price: ${(props.price * props.quantity).toFixed(2)}</h1>
            </section>
            <button className="secondaryBtn mr-4"
                onClick={() => { context.removeItem(props.id) }}>
                Remove from bag
            </button>
        </main>
    )
}
