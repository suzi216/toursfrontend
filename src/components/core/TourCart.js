
import Link from "next/link";

import { useEffect } from 'react'


export default function TourCart({ showUpdate = false, showDelete = false, tours = [], isPopular = false, deleteTour }) {

    useEffect(() => {
    }, []);
    return (
        <>
            {tours.map((tour) => (
                <div
                    key={tour.id}
                    className="group relative flex-shrink-0 w-[320px] h-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >

                    {/* Image */}
                    <div className="relative h-[200px] overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt={tour.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {isPopular && <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            Popular
                        </span>}
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col justify-between ">

                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-1">
                                {tour.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Luxury stay • Car rental • Daily breakfast • Guided tour
                            </p>
                        </div>

                        {/* Price */}
                        <div className="my-4">
                            <div className="text-xs text-gray-500 mb-1">From</div>
                            <div className="flex items-end gap-1">
                                <span className="text-3xl font-bold text-teal-600">$2599</span>
                                <span className="text-sm text-gray-500 pb-1">NZD</span>
                            </div>
                            <div className="text-xs text-emerald-600 mt-1">
                                Save $400 per adult
                            </div>
                        </div>
                        <div>
                            <Link href={"/checkout"}>
                                <button className="w-full  bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg my-1">
                                    More information
                                </button>
                            </Link>
                            {showUpdate && (
                                <Link href={`/tour/${tour.id}`}>
                                    <button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                                        Update Package
                                    </button>
                                </Link>
                            )}
                            {showDelete && (
                                <button
                                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg my-1"
                                    onClick={() => deleteTour(tour.id)}
                                >
                                    Delete Package
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            ))}

        </>
    )
}


