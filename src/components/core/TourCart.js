import Link from "next/link";
import { useSelector } from "react-redux";
import { roleSelector } from "@/redux/slices/authSlice";

export default function TourCart({
    tours = [],
    isPopular = false,
    deleteTour,
    variant,
}) {
    const role = useSelector(roleSelector);
    const isTours = variant === "tours";
    const shortDescription =
        tours.description?.length > 120
            ? tours.description.slice(0, 120) + "..."
            : tours.description; return (
                <>
                    {tours.map((tour) => (
                        <div
                            key={tour.id}
                            className={`
                        flex gap-3 rounded-xl
                        ${isTours
                                    ? "flex-col md:flex-row border border-gray-200 p-2 w-full"
                                    : "flex-col flex-shrink-0 xs:w-[300px] lg:w-[220px]"
                                }
                    `}
                        >
                            {/* IMAGE */}
                            <div
                                className={`
                            relative flex
                            ${isTours ? "h-full md:w-[550px]" : "w-full "}
                        `}
                            >
                                <img
                                    src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt={tour.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />

                                {isPopular && (
                                    <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        Popular
                                    </span>
                                )}
                            </div>

                            {/* CONTENT */}
                            <div className="flex flex-col w-full">
                                <div className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 p-3 rounded-lg flex flex-col justify-between h-full">

                                    {/* TOP */}
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                                            {tour.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                                            {isTours
                                                ? tour?.description || "No description available"
                                                : (tour?.description
                                                    ? tour.description.slice(0, 50) + (tour.description.length > 50 ? "..." : "")
                                                    : "No description available")}
                                        </p>
                                        {/* INFO GRID */}
                                        <div className="grid grid-cols-2 gap-y-1 gap-x-1 text-xs mb-4">
                                            <div className="font-medium text-gray-800">
                                                {/* {tour.city} */}
                                                Duration:
                                            </div>

                                            <div className="font-medium text-gray-800">
                                                {tour.duration}
                                            </div>

                                            <div className="font-medium text-gray-800">
                                                {tour.availableDates} Flexible Date
                                            </div>
                                        </div>
                                    </div>

                                    {/* PRICE */}
                                    <div className="border-t border-gray-100 pt-2">
                                        <div className="text-[10px] text-gray-500">From</div>

                                        <div className="flex items-end gap-1">
                                            <span className="text-lg font-bold text-teal-600">
                                                {tour.pricePerPerson}
                                            </span>
                                            <span className="text-xs text-gray-500 pb-1">
                                                /Person
                                            </span>
                                        </div>

                                        <div className="text-[10px] text-emerald-600 font-medium">
                                            10% off for groups of 5+
                                        </div>
                                    </div>

                                    {/* ACTIONS */}
                                    <div className="mt-2 flex flex-col gap-2">
                                        {role !== "ADMIN" ? (
                                            <Link
                                                href={`/checkout/${tour.id}`}
                                                className={`
                                            bg-gradient-to-r from-teal-600 to-teal-700
                                            hover:from-teal-700 hover:to-teal-800
                                            text-white font-semibold rounded-lg
                                            text-center shadow-md hover:shadow-lg transition
                                            ${isTours
                                                        ? "w-fit px-3 py-1 text-[10px]"
                                                        : "w-full px-3 py-2 text-sm"
                                                    }
                                        `}
                                            >
                                                Order Now
                                            </Link>
                                        ) : null}

                                        {role === "ADMIN" && (
                                            <>
                                                <Link href={`/tour/${tour.id}`}>
                                                    <button
                                                        className={`
                                                    bg-gradient-to-r from-teal-600 to-teal-700
                                                    hover:from-teal-700 hover:to-teal-800
                                                    text-white font-semibold rounded-lg
                                                    shadow-md hover:shadow-lg transition
                                                    ${isTours
                                                                ? "w-fit px-3 py-1 text-[10px]"
                                                                : "w-full px-3 py-2 text-sm"
                                                            }
                                                `}
                                                    >
                                                        Update Package
                                                    </button>
                                                </Link>

                                                <button
                                                    type="button"
                                                    onClick={() => deleteTour(tour.id)}
                                                    className={`
                                                bg-red-600 hover:bg-red-700
                                                text-white font-semibold rounded-lg
                                                shadow-md hover:shadow-lg transition
                                                ${isTours
                                                            ? "w-fit px-3 py-1 text-[10px]"
                                                            : "w-full px-3 py-2 text-sm"
                                                        }
                                            `}
                                                >
                                                    Delete Package
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            );
}