
import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "@/pages/_app";
import { useSelector } from 'react-redux'
import { roleSelector } from '@/redux/slices/authSlice'
import { useEffect } from 'react'


export default function TourCart({ tours = [], isPopular = false, deleteTour, variant }) {
    const role = useSelector(roleSelector)
    const isTours = variant === "tours";
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");

        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        // Set initial value
        setIsMobile(mediaQuery.matches);

        // Listen for changes
        mediaQuery.addEventListener("change", handleResize);

        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    return (
        <>
            {tours.map((tour) => (
                <div
                    key={tour.id}
                    className={`flex  gap-3 ${isTours && !isMobile
                        ? "w-full flex-row border border-gray-200 p-2 rounded-xl"
                        : "flex-col group relative flex-shrink-0 xs:w-[300px] lg:w-[220px] rounded-xl"
                        }`}
                >

                    <div className={`flex   ${isTours && !isMobile
                        ? "h-[200px] w-[550px]"
                        : ""
                        }`}>
                        <img
                            src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt={tour.title}
                        />

                        {isPopular && <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            Popular
                        </span>}
                    </div>

                    <div className="flex flex-col ">

                        <div className="flex bg-white shadow-sm hover:shadow-xl transition-all duration-300 p-1 flex flex-col justify-between">
                            {/* Top Content */}
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 mb-1">
                                    {tour.title}
                                </h3>

                                <p className="text-10 text-gray-600 mb-2 leading-relaxed">
                                    {isTours
                                        ? tour.description
                                        : (tour.description.match(/.*?[.!?](\s|$)/)?.[0] || tour.description)}
                                </p>

                                <div className="grid grid-cols-2 gap-y-1 gap-x-3 text-xs mb-4">
                                    <div>
                                        {/* <span className="text-gray-400 block text-[10px]">City</span> */}
                                        <span className="font-medium text-gray-800">{tour.city}</span>
                                    </div>

                                    <div>

                                        <span className="font-medium text-gray-800">{tour.duration}</span>
                                    </div>

                                    {/* <div>
                                        <span className="text-gray-400 block text-[10px]">Category</span>
                                        <span className="font-medium text-gray-800">{tour.category}</span>
                                    </div> */}

                                    <div>
                                        {/* <span className="text-gray-400 block text-[10px]">Duration</span> */}
                                        <span className="font-medium text-gray-800">
                                            {tour.availableDates} Flexible Date
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="border-t border-gray-100 ">
                                <div className="text-[10px] text-gray-500">From</div>

                                <div className="flex items-end gap-1">
                                    <span className="text-lg font-bold text-teal-600">
                                        {tour.pricePerPerson}
                                    </span>
                                    <span className="text-xs text-gray-500 pb-1">/Person</span>
                                </div>

                                <div className="text-[10px] text-emerald-600 font-medium">
                                    10% off for groups of 5+
                                </div>
                            </div>
                            <div className={`flex flex-col ${isTours ? "items-start" : ""}`}>
                                {role !== "ADMIN" ? (
                                    <Link
                                        href={`/checkout/${tour.id}`}
                                        className={`bg-gradient-to-r mt-1 from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-center block
                                                   ${isTours
                                                ? "w-fit px-3 py-1 text-[10px]"
                                                : "w-full px-3 py-2 xl:px-5 xl:py-3 text-11"
                                            }`}
                                    >
                                        Order Now
                                    </Link>
                                ) : null}

                                {role === "ADMIN" ? (
                                    <Link href={`/tour/${tour.id}`}>
                                        <button
                                            className={`bg-gradient-to-r mb-1 from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-center block
                                                 ${isTours
                                                    ? "w-fit px-3 py-1 text-[10px]"
                                                    : "w-full px-3 py-2 xl:px-5 xl:py-3 text-11"
                                                }`}
                                        >
                                            Update Package
                                        </button>
                                    </Link>
                                ) : null}

                                {role === "ADMIN" ? (
                                    <button
                                        type="button"
                                        onClick={() => deleteTour(tour.id)}
                                        className={`bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-center block
                                       ${isTours
                                                ? "w-fit px-3 py-1 text-[10px]"
                                                : "w-full px-3 py-2 xl:px-5 xl:py-3 text-11"
                                            }`}
                                    >
                                        Delete Package
                                    </button>
                                ) : null}
                            </div>
                        </div>

                    </div>
                </div>
            ))}

        </>
    )
}


