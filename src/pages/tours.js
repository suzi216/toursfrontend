import Header from '../components/core/Header';
import Footer from '@/components/core/Footer';
import Link from "next/link";
import TourService from '@/components/utils/services/TourService';
import LocationFilter from '@/components/core/LocationFilter';
import { useState, useEffect } from 'react'


export default function Tours() {
    const [tours, setTours] = useState([]);

    const handleFilterChange = (selectedLocations) => {
        console.log("Selected locations:", selectedLocations);
    };

    const deleteTour = async (tourId) => {
        try {
            await TourService.deleteTour(tourId);
            alert("Tour deleted successfully");

            getTours();
        } catch (error) {
            console.error("Failed to delete tour:", error);
            alert("Failed to delete tour. Please try again.");
        }
    };
    const getTours = async () => {
        try {
            const response = await TourService.getTours();
            setTours(response.data.content);
        } catch (error) {
            console.error("Failed to fetch tours:", error);
            alert("Failed to load tours. Please try again.");
        }
    };

    useEffect(() => {
        getTours();
    }, []);


    return (
        <>
            < Header />
            <div>
                <div className="flex items-center justify-center mt-2 h-[15vh] bg-gradient-to-br from-teal-50 ">
                    <h1 className="lg:text-5xl text-3xl font-semibold text-gray-900 drop-shadow-lg">
                        Albania Touristic Package
                    </h1>
                </div>
                <div className='lg:flex lg:justify-between'>

                    <div className="lg:w-2/6">
                        <div>
                            <LocationFilter onFilterChange={handleFilterChange} />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow lg:w-full">
                        <div className="lg:mt-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                                {tours.map((tour) => (
                                    <div
                                        key={tour.id}
                                        className="p-4 flex flex-col"
                                    >
                                        <img
                                            src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=800"
                                            alt="Vineyard landscape"
                                            className="border rounded-lg "
                                        />
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {tour.title}
                                        </h2>

                                        <div className="p-2">
                                            <h2 className="text-1xl text-slate-900 leading-tight">
                                                {tour.description}<br />
                                                {tour.city}<br />
                                                {tour.tourType}
                                            </h2>

                                            <p className="text-slate-600 text-base leading-relaxed">
                                                {tour.startPoint}
                                                {tour.endPoint}
                                                {tour.pickupInfo}
                                                {tour.transportationType}
                                            </p>
                                           <p>{tour.availableDates}</p> 

                                        </div>

                                        <div className="mb-6">
                                            <div className="text-sm font-semibold text-slate-700 mb-2">Now</div>
                                            <div className="flex items-baseline gap-1 mb-2">
                                                <span className="text-4xl font-bold text-teal-600">{tour.pricePerPerson}</span>
                                                <span className="text-2xl font-semibold text-teal-600">NZD</span>
                                            </div>
                                            <div className="text-sm text-slate-600">
                                                Save {tour.discount} Per Adult
                                            </div>
                                        </div>
                                        <div>
                                            <Link href={"/checkout"}>
                                                <button className="w-full  bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg my-1">
                                                    More information
                                                </button>
                                            </Link>
                                            <Link href={`/tour/${tour.id}`}>
                                                <button
                                                    className="w-full  bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                                                    Update Package
                                                </button>
                                            </Link>
                                            <button
                                                className="w-full  bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg my-1"
                                                onClick={() => deleteTour(tour.id)}
                                            >
                                                Delete Package
                                            </button>
                                        </div>

                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">
                                {tours.title}
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                                {tours.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
