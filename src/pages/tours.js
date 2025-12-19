import Header from '../components/core/Header';
import Footer from '@/components/core/Footer';
import TourCart from '@/components/core/TourCart';
import TourService from '@/components/utils/services/TourService';
import LocationFilter from '@/components/core/LocationFilter';
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";

const mockTours = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },

]

export default function Tours() {
    const router = useRouter()

    const [tours, setTours] = useState([]);

    const handleFilterChange = (selectedLocations) => {
        console.log("Selected locations:", selectedLocations);
        const params = {
            city: selectedLocations.city?.length ? selectedLocations.city.join(",") : undefined,
            category: selectedLocations.category?.length ? selectedLocations.category.join(",") : undefined
        };
        getTours(params);

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
    const getTours = async (params = {}) => {
        try {
            const response = await TourService.getTours(params);
            const content = response?.data?.content;

            setTours(content?.length ? content : mockTours);
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

                    <div className="lg:w-2/6 mx-5">
                        <div>
                            <LocationFilter onFilterChange={handleFilterChange} />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow lg:w-full">
                        <div className="mt-6 ">
                            <div className="grid gap-4 place-items-center sm:grid-cols-2 md:grid-cols-3">
                                <TourCart
                                    tours={tours}
                                    deleteTour={deleteTour}
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
