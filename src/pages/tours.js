import Header from '../components/core/Header';
import Footer from '@/components/core/Footer';
import Link from "next/link";
import TourCart from '@/components/core/TourCart';
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
            setTours(response.data.content && response.data.content.length > 0
                ? response.data.content
                : mockTours
            );
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
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                                <TourCart
                                    showUpdate={true}
                                    showDelete={true}
                                    tours={tours}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
