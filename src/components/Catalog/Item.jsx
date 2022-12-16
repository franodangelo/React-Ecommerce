import { Link } from "react-router-dom";

export default function Item(props) {
    return (
        <main className="flex flex-col lg:flex-row lg:h-40 bg-white shadow-md rounded overflow-hidden hover:scale-105 ease-in-out duration-500">
            {
                props.stock !== 0 ?
                    <img className="w-full lg:w-1/3 object-cover" src={props.thumbnailCard} alt={`${props.name} thumbnail`} /> :
                    <img className="grayscale w-full lg:w-1/3 object-cover" src={props.thumbnailCard} alt={`${props.name} thumbnail`} />
            }
            <div className="flex flex-col w-full lg:w-2/3 p-4">
                <div className="flex justify-between items-center">
                    <span className="font-light text-xs uppercase">{props.category === "prostaff" ? "Pro Staff" : props.category}</span>
                    <div className="flex item-center md:gap-1">
                        {props.rate === 0 ?
                            <svg className="w-4 h-4 self-center fill-current text-stone-400" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg> :
                            <svg className="w-4 h-4 self-center fill-current text-rose-700" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                        }
                        <p className="text-sm text-center">{props.rate}</p>
                    </div>
                </div>
                <h1 className="text-stone-900 font-bold text-xl lg:text-lg truncate">{props.name}</h1>
                <section className="flex items-center justify-between mt-3">
                    {
                        props.stock !== 0 ?
                            <div className="flex flex-col md:flex-row md:gap-2">
                                <h2 className="font-medium text-xl lg:text-xl text-rose-700">
                                    ${props.discountPercentage != null ? ((100 - props.discountPercentage) * props.price / 100) : props.price.toFixed(2)}
                                </h2>
                                {props.discountPercentage ? <h2 className=" font-medium text-xs line-through">${props.price.toFixed(2)}</h2> : null}
                            </div> :
                            <button className="noStockBtn">Out of stock</button>
                    }
                </section>
                <Link to={`/${props.category}/${props.id}`}>
                    <button className="primaryBtn w-full mt-2">More details</button>
                </Link>
            </div>
        </main>
    )
}
