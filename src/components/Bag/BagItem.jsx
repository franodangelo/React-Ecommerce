import React, { useContext } from "react";
import { BagContext } from "./BagContext";

export default function BagItem(props) {
    const context = useContext(BagContext);

    return (
        <main className="flex w-full max-h-40 justify-between items-center rounded shadow">
            <div className="flex items-center">
                <img className="w-80" src={props.thumbnailCard} alt="item thumbnail" />
                <section className="flex flex-col ml-4 gap-2">
                    <div className="flex gap-4 items-center">
                        <span className="text-sm">{props.quantity}x</span>
                        <h1 className="font-bold text-xl">{props.name}</h1>
                    </div>
                    <p>Total: <strong className="text-rose-700">${(props.price * props.quantity).toFixed(2)}</strong></p>
                </section>
            </div>
            <button className="secondaryBtn mr-4" onClick={() => { context.removeItem(props.id) }}>
                Remove from bag
            </button>
        </main>
    )
}
