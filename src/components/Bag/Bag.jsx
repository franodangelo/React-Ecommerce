import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsData from "../../utils/itemsData";
import promise from "../../utils/promise";
import { BagContext } from "./BagContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Item from "../Catalog/Item";
import BagItem from "./BagItem";
import Loader from "../Loader";

export default function Bag() {
    const context = useContext(BagContext);
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        try {
            promise(itemsData).then(res => setItems(res.filter(i => i.rate > 3.5)));
        } catch (error) {
            console.log(error);
        }
    }, [id])

    function bagCleared() {
        toast.success(
            `The bag was cleared!`,
            {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            }
        )
    }

    return (
        <main className="flex flex-col h-auto min-h-screen m-auto mb-auto px-2 sm:px-6 lg:px-8 gap-8">
            {
                context.bagList.length === 0
                    ?
                    <section className="flex flex-col w-full pt-10 items-center lg:items-start">
                        <h1 className="pb-2 font-bold text-xl sm:text-2xl md:text-3xl text-center md:text-start uppercase">There are no products in your bag</h1>
                        <h2 className="text-center md:text-start text-stone-500 tracking-wide">{`Why don't you navigate and add some rackets?`}</h2>
                        <p className="pt-2">We suggest you:</p>
                        <div className="grid sm:grid-cols-2 h-auto pt-8 gap-8">
                            {
                                items.length > 0 ?
                                    items.map(i => {
                                        return <Item
                                            key={i.id}
                                            id={i.id}
                                            category={i.category}
                                            thumbnailCard={i.thumbnailCard}
                                            name={i.name}
                                            rate={i.rate}
                                            price={i.price}
                                            discountPercentage={i.discountPercentage}
                                        />
                                    }) :
                                    <Loader />
                            }
                        </div>
                    </section>
                    : <section className="flex flex-col w-full pt-10 items-center lg:items-start gap-8">
                        <div className="flex w-full justify-between items-center">
                            <h1 className="py-2 font-bold text-xl sm:text-2xl md:text-3xl text-center lg:text-left uppercase text-stone-900">Shopping bag</h1>
                            <button className="secondaryBtn w-auto" onClick={() => { context.clearBag(); bagCleared() }}>Clear bag</button>
                        </div>
                        <div className="flex flex-col w-full gap-4">
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
                        </div>
                        <div className="flex self-end items-center gap-4">
                            <p className="font-bold uppercase">Total: ${(context.priceBag()).toFixed(2)}</p>
                            <button className="primaryBtn">Checkout</button>
                        </div>
                    </section>
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
