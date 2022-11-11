import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsData from "../../utils/itemsData";
import promise from "../../utils/promise";
import { BagContext } from "./BagContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Item from "../Catalog/Item";
import BagItem from "./BagItem";

// import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
// import { db, fbFetch } from "../../utils/fbConfig";

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

    // function createPurchaseOrder() {
    //     let itemsForFb = context.bagList.map(item => ({
    //         id: item.id,
    //         title: item.name,
    //         price: item.price,
    //         quantity: item.quantity
    //     }))
        // let purchaseOrder = {
        //     buyer: {
        //         name: "",
        //         email: "",
        //         phone: 12345678
        //     },
        //     date: serverTimestamp(),
        //     items: itemsForFb,
        //     total: context.priceBag()
        // }
        // async function createFbOrder() {
        //     const newOrderRef = doc(collection(db, "orders"));
        //     await setDoc(newOrderRef, purchaseOrder);
        //     return newOrderRef;
        // }
        // createFbOrder()
        //     .then(res => {
        //         alert(`Thanks for your purchase! Order #${res.id}`)
        //         context.bagList.forEach(async (item) => {
        //             const itemRef = doc(db, "item", item.id)
        //             await updateDoc(itemRef, {
        //                 stock: increment(-item.quantity)
        //             })
        //         })
        //     })
        //     .catch(err => console.log(err));
    //     context.clearBag();
    // }

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
        <main className="flex flex-col h-auto min-h-screen m-auto mb-auto px-8 gap-8">
            {
                context.bagList.length === 0
                    ?
                    <section className="flex flex-col w-full items-center">
                        <h1 className="py-2 font-bold text-3xl text-center md:text-start uppercase text-stone-900">There are no products in your bag</h1>
                        <h2 className="py-2 text-center md:text-start text-stone-500 tracking-widest">Why don't you navigate and add some rackets?</h2>
                        <p className="py-2">We suggest you:</p>
                        <div className="flex flex-col h-auto min-h-screen m-auto mb-auto p-8 gap-8">
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
                                    <div role="status">
                                        <svg class="inline mr-2 w-20 h-20 text-stone-200 animate-spin dark:text-stone-400 fill-rose-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                            }
                        </div>
                    </section>
                    : <div className="flex flex-col gap-8">
                        <h1 className="py-2 font-bold text-3xl text-center lg:text-left uppercase text-stone-900 border-b-2">Shopping bag</h1>
                        <button className="secondaryBtn self-center lg:self-end w-[80%] lg:w-auto" onClick={() => { context.clearBag(); bagCleared() }}>Clear bag</button>
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
                            <p className="font-bold uppercase">Total: ${(context.priceBag()).toFixed(2)}</p>
                            {/* <button className="primaryBtn" onClick={createPurchaseOrder}>Checkout</button> */}
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
