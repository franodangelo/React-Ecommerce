import { useContext } from "react";
import { BagContext } from "./BagContext";

export default function BagItem(props) {
    const context = useContext(BagContext);

    return (
        <main className="flex flex-col md:flex-row w-full max-h-40 justify-between md:items-center rounded shadow">
            <div className="flex items-center">
                <img className="w-56 md:w-60 lg:w-80" src={props.thumbnailCard} alt={`${props.name} thumbnail`} />
                <section className="flex flex-col ml-4 gap-2">
                    <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
                        <span className="text-xs lg:text-sm">{props.quantity}x</span>
                        <h1 className="font-bold lg:text-xl">{props.name}</h1>
                    </div>
                    <p className="text-sm lg:text-base">Total: <strong className="text-rose-700">${(props.price * props.quantity).toFixed(2)}</strong></p>
                </section>
            </div>
            <button className="secondaryBtn my-4 mx-2 lg:mr-4" onClick={() => { context.removeItem(props.id) }}>
                Remove from bag
            </button>
        </main>
    )
}
