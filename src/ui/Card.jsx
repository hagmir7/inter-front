import React from 'react';
import { Link } from 'react-router';

function Card(props) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <Link className="relative mx-3 mt-3 flex overflow-hidden rounded-xl max-h-96 image-wrapper" to={`/products/${props.slug}`}>
                <img className="lazy-image object-contain w-full bg-gray-200 min-h-52 loaded" src={`https://intercocina.com/storage/public/${props.image}`} />
            </Link>
            <div className="mt-4 px-5 pb-5">
                <Link to={`/products/${props.slug}`}>
                    <h3 className="text-lg font-semibold leading-tight text-gray-900 hover:underline">{props.name}</h3>
                </Link>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-md font-bold text-slate-900">{props.price} (MAD)</span>
                    </p>
                </div>
                <Link to={`/products/${props.slug}`} className="flex items-center justify-center rounded-md bg-red-500 px-5 py-2.5 text-center text-sm font-bold text-white hover:bg-red-400">
                    Découvrez
                </Link>
            </div>
        </div>
    )
}

export default Card