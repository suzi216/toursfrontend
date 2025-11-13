import { GiBookmark } from 'react-icons/gi';
import Header from '../components/core/Header';
import Footer from '@/components/core/Footer';
import LocationFilter from '@/components/core/LocationFilter';

const tour = [{
    name: "Theth National Park",
    description:
        "Nestled in the Albanian Alps, Theth National Park is a breathtaking destination known for its dramatic mountains, crystal-clear rivers, and traditional stone houses. Perfect for hikers, photographers, and nature lovers seeking tranquility and authentic Albanian charm.",
    image_url:
        "https://images.unsplash.com/photo-1601379329541-6e3b1a6dc00e?auto=format&fit=crop&w=800&q=80",
    featured: true,
},
{
    name: "Theth National Park",
    description:
        "Nestled in the Albanian Alps, Theth National Park is a breathtaking destination known for its dramatic mountains, crystal-clear rivers, and traditional stone houses. Perfect for hikers, photographers, and nature lovers seeking tranquility and authentic Albanian charm.",
    image_url:
        "https://images.unsplash.com/photo-1601379329541-6e3b1a6dc00e?auto=format&fit=crop&w=800&q=80",
    featured: true,

},
{
    name: "Theth National Park",
    description:
        "Nestled in the Albanian Alps, Theth National Park is a breathtaking destination known for its dramatic mountains, crystal-clear rivers, and traditional stone houses. Perfect for hikers, photographers, and nature lovers seeking tranquility and authentic Albanian charm.",
    image_url:
        "https://images.unsplash.com/photo-1601379329541-6e3b1a6dc00e?auto=format&fit=crop&w=800&q=80",
    featured: true,

},
{
    name: "Theth National Park",
    description:
        "Nestled in the Albanian Alps, Theth National Park is a breathtaking destination known for its dramatic mountains, crystal-clear rivers, and traditional stone houses. Perfect for hikers, photographers, and nature lovers seeking tranquility and authentic Albanian charm.",
    image_url:
        "https://images.unsplash.com/photo-1601379329541-6e3b1a6dc00e?auto=format&fit=crop&w=800&q=80",
    featured: true,

}
];


export default function Tours() {

    const handleFilterChange = (selectedLocations) => {
        console.log("Selected locations:", selectedLocations);
    };


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
                                {tour.map((tour) => (
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
                                            {tour.name}                    </h2>

                                        <div className="p-2">
                                            <h2 className="text-1xl font-bold text-slate-900 leading-tight">
                                                Queenstown Deal<br />
                                                Luxury Long Weekend<br />
                                                Escape
                                            </h2>

                                            <p className="text-slate-600 text-base leading-relaxed">
                                                Includes: Luxury accommodation Rental car, daily breakfast, Massage, Wine Tour & more
                                            </p>
                                        </div>


                                        <div className="mb-6">
                                            <div className="text-sm font-semibold text-slate-700 mb-2">Now</div>
                                            <div className="flex items-baseline gap-1 mb-2">
                                                <span className="text-4xl font-bold text-teal-600">$2599</span>
                                                <span className="text-2xl font-semibold text-teal-600">NZD</span>
                                            </div>
                                            <div className="text-sm text-slate-600">
                                                Save $400 Per Adult
                                            </div>
                                        </div>
                                        <button className="w-full  bg-gradient-to-r from-teal-600 to-teal-700 hover:bg-emerald-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                                            More information
                                        </button>

                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">
                                {tour.name}
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                                {tour.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
