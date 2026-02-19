
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/pages/_app";
import { useSelector } from 'react-redux'
import { roleSelector } from '@/redux/slices/authSlice'
import { useEffect } from 'react'


export default function TourCart({ tours = [], isPopular = false, deleteTour }) {
    const role = useSelector(roleSelector)

    useEffect(() => {
    }, []);
    return (
        <>
            {tours.map((tour) => (
                <div
                    key={tour.id}
                    className="group relative flex-shrink-0 xs:w-[300px] lg:w-[220px] xl:w-[270px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >

                    {/* Image */}
                    <div className="relative xs:h-[150px] lg:h-[140px] xl:h-[160px] overflow-hidden">
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
                    <div className="flex flex-col justify-between ">

                        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-2 border border-gray-100 flex flex-col justify-between">
                            {/* Top Content */}
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 mb-1">
                                    {tour.title}
                                </h3>

                                <p className="text-xs text-gray-600 mb-1 leading-relaxed">
                                    {tour.description}
                                </p>

                                <div className="grid grid-cols-2 gap-y-1 gap-x-3 text-xs mb-4">
                                    <div>
                                        <span className="text-gray-400 block text-[10px]">City</span>
                                        <span className="font-medium text-gray-800">{tour.city}</span>
                                    </div>

                                    <div>
                                        <span className="text-gray-400 block text-[10px]">Type</span>
                                        <span className="font-medium text-gray-800">{tour.tourType}</span>
                                    </div>

                                    <div>
                                        <span className="text-gray-400 block text-[10px]">Category</span>
                                        <span className="font-medium text-gray-800">{tour.category}</span>
                                    </div>

                                    <div>
                                        <span className="text-gray-400 block text-[10px]">Duration</span>
                                        <span className="font-medium text-gray-800">{tour.duration}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="border-t border-gray-100 pt-1">
                                <div className="text-[10px] text-gray-500">From</div>

                                <div className="flex items-end gap-1">
                                    <span className="text-lg font-bold text-teal-600">
                                        {tour.pricePerPerson}
                                    </span>
                                    <span className="text-xs text-gray-500 pb-1">/Person</span>
                                </div>

                                <div className="text-[10px] text-emerald-600 font-medium">
                                    €15 off for groups of 5+
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            {role !== "ADMIN" ? (
                                <Link href={"/checkout"}>
                                    <button className="w-full text-11 bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-2 px-3 xl:py-4 xl:px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg my-1">
                                        Buy Now
                                    </button>
                                </Link>
                            ) : null}

                            {role === "ADMIN" ? (
                                <Link href={`/tour/${tour.id}`}>
                                    <button className="w-full text-11 bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-2 px-5 xl:py-4 xl:px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                                        Update Package
                                    </button>
                                </Link>
                            ) : null}

                            {role === "ADMIN" ? (
                                <button
                                    type="button"
                                    className="w-full text-11 bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-2 px-5 xl:py-4 xl:px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg my-1"
                                    onClick={() => deleteTour(tour.id)}
                                >
                                    Delete Package
                                </button>
                            ) : null}

                        </div>

                    </div>
                </div>
            ))}

        </>
    )
}


