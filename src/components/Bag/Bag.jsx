import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsData from "../../utils/itemsData";
import promise from "../../utils/promise";
import { BagContext } from "./BagContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Item from "../Catalog/Item";
import BagItem from "./BagItem";

export default function Bag() {
    const context = useContext(BagContext);
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        try {
            promise(itemsData.filter(i => i.price > 270), 500)
                .then(res => setItems(res));
        } catch (error) {
            console.log(error);
        }
    }, [id])

    return (
        <main className="flex flex-col h-auto min-h-screen m-auto mb-auto px-8 gap-8">
            {
                context.bagList.length === 0
                    ?
                    <div className="flex flex-col w-full items-center">
                        <h1 className="py-2 font-bold text-3xl uppercase text-stone-900">There are no products in your bag</h1>
                        <h2 className="py-2 text-stone-500 tracking-widest">Why don't you navigate and add some rackets?</h2>
                        <p className="py-2">We suggest you:</p>
                        <div className="flex flex-col h-auto min-h-screen m-auto mb-auto p-8 gap-8">
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
                    </div>
                    : <div className="flex flex-col gap-8">
                        <h1 className="py-2 font-bold text-3xl uppercase text-stone-900 border-b-2">Shopping bag</h1>
                        <button className="secondaryBtn self-end" onClick={context.clearBag}>Clear bag</button>
                        {
                            context.bagList.map(i =>
                                <BagItem
                                    key={i.id}
                                    id={i.id}
                                    thumbnailCard={i.thumbnailCard}
                                    name={i.name}
                                    price={i.price}
                                    quantity={i.quantity}
                                />
                            )
                        }
                        <section className="flex w-fit self-end items-center gap-4">
                            <h1 className="font-bold uppercase">Total: ${(context.priceBag()).toFixed(2)}</h1>
                            <button className="primaryBtn">Checkout</button>
                        </section>
                    </div>
            }
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </main>
    )
}
