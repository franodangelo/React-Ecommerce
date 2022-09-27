import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
    return (
        <main className="flex flex-col lg:flex-row lg:max-h-40 bg-white shadow-md rounded overflow-hidden hover:scale-105 ease-in-out duration-300">
            <img className="w-full lg:w-1/3 object-cover" src={props.thumbnailCard} alt="item thumbnail" />
            <div className="w-full lg:w-2/3 p-4">
                <h1 className="text-stone-900 font-bold text-xl lg:text-lg">{props.name}</h1>
                <div className="flex item-center mt-2 gap-1">
                    {props.rate === 0 ?
                        <svg className="w-5 h-5 self-center fill-current text-stone-400" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg> :
                        <svg className="w-5 h-5 self-center fill-current text-rose-700" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>}
                    <p className="text-center">{props.rate}</p>
                </div>
                <section className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                        {
                            props.discountPercentage ?
                                <h2 className="font-bold text-sm line-through">${props.price.toFixed(2)}</h2> :
                                null
                        }
                        <h2 className="font-bold text-xl lg:text-xl text-rose-700">
                            ${
                                props.discountPercentage != null ?
                                    ((100 - props.discountPercentage) * props.price / 100) :
                                    props.price.toFixed(2)
                            }
                        </h2>
                    </div>
                    <Link to={`/${props.category}/${props.id}`}>
                        <button className="px-3 py-2 bg-rose-700 text-white text-sm lg:text-xs font-bold uppercase rounded hover:bg-rose-50 hover:text-rose-800 ease-out duration-300">
                            More details
                        </button>
                    </Link>
                </section>
            </div>
        </main>
    )
}
