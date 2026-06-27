import { useState } from "react";

// const API = "http://localhost:8080";
const API = "https://tours-ff09.onrender.com";


export default function ImageSlider({ images, tourTitle, isPopular }) {
    const [index, setIndex] = useState(0);

    const safeImages = Array.isArray(images) ? images : [];

    const getImageUrl = (img) => {
        if (!img) return `${API}/images/byrek.jpg`;
        return `${API}/images/${img}`;
    };

    // If no images → fallback image
    if (safeImages.length === 0) {
        return (
            <div className="relative w-full h-full">
                <img
                    src={`${API}/images/byrek.jpg`}
                    alt={tourTitle}
                    className="w-full h-full object-cover rounded-lg"
                />

                {isPopular && (
                    <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Popular
                    </span>
                )}
            </div>
        );
    }

    // previous image
    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? safeImages.length - 1 : prev - 1
        );
    };

    // next image
    const next = () => {
        setIndex((prev) =>
            prev === safeImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="relative w-full h-full group">
            {/* IMAGE */}
            <img
                src={getImageUrl(safeImages[index])}
                alt={tourTitle}
                className="w-full h-full object-cover rounded-lg transition-all duration-500"
            />

            {/* POPULAR BADGE */}
            {isPopular && (
                <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                    Popular
                </span>
            )}

            {/* LEFT BUTTON */}
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
                ‹
            </button>

            {/* RIGHT BUTTON */}
            <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
                ›
            </button>

            {/* DOTS */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {safeImages.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                            i === index ? "bg-white" : "bg-white/40"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}