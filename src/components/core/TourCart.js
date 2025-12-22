
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
                    className="group relative flex-shrink-0 xs:w-[230px] lg:w-[220px] xl:w-[270px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
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
                    <div className="p-2 flex flex-col justify-between ">

                        <div>
                            <h3 className="text-14 font-bold text-gray-800 mb-1">
                                {tour.title}
                            </h3>
                            <p className="text-12 text-gray-600 mb:2 xl:mb-3">
                                {tour.description}{" "}
                            </p>
                            <ul className="text-10 xl:text-16 ">
                                <li className="text-gray-700"><span className="font-semibold">Type:</span> {tour.tourType}</li>
                                <li className="text-gray-700"><span className="font-semibold">Category:</span> {tour.category}</li>
                                <li className="text-gray-700"><span className="font-semibold">Duration:</span> {tour.duration}</li>

                            </ul>

                        </div>

                        {/* Price */}
                        <div className="my-3">
                            <div className="text-xs text-gray-500">From</div>
                            <div className="flex items-end gap-1">
                                <span className="text-16 font-bold text-teal-600">{tour.pricePerPerson}</span>
                                <span className="text-8 xl:text-sm text-gray-500 pb-1">NZD</span>
                            </div>
                            <div className="text-10 text-emerald-600 mt-1">
                                Save $50 per adult
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <Link href={"/checkout"}>
                                <button className="w-full text-11 bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-2 px-3 xl:py-4 xl:px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg my-1">
                                    Buy Now
                                </button>
                            </Link>
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


