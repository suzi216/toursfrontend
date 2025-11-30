import Footer from '@/components/core/Footer';
import Header from '@/components/core/Header'
import Input from '@/components/core/Input';
import SelectInput from '@/components/core/SelectInput';
import Section from '@/components/core/Section';
import { validate as isUuid } from 'uuid';

import { GiSave, GiCancel } from 'react-icons/gi';
import TourService from '@/components/utils/services/TourService';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react'

function CreateTour() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        tourType: '',
        city: '',
        starting_point: '',
        ending_point: '',
        duration: '',
        pricePerPerson: '',
        maxGroupSize: '20',
        minGroupSize: '1',
        coverImage: 'img',
        pickupInfo: '',
        transportationType: '',
        guideName: '',
        cancellationPolicy: '',
        status: 'draft',
        gallery: [""],
        // itinerary: [] 

    });

    const categoryOptions = [
        { value: 'Adventure', label: 'Adventure' },
        { value: 'Culture', label: 'Culture' },
        { value: 'Beach', label: 'Beach' },
        { value: 'Hiking', label: 'Hiking' },
        { value: 'Food', label: 'Food' },
        { value: 'Wildlife', label: 'Wildlife' },
        { value: 'Historical', label: 'Historical' },
        { value: 'Luxury', label: 'Luxury' },
    ]
    const tourTypeOptions = [
        { value: 'Private', label: 'Private' },
        { value: 'Group', label: 'Group' },
        { value: 'Custom', label: 'Custom' },
        { value: 'Self-guided', label: 'Self-guided' },
    ]
    const statusOptions = [
        { value: 'draft', label: 'Draft' },
        { value: 'active', label: 'Active' },
        { value: 'archived', label: 'Archived' },
    ]


    const [itinerary, setItinerary] = useState([{ day: 'Day 1', description: '' }]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { id: tourId } = router.query;

    const handleInputChange = (input) => {
        if (!input?.target) {
            const { name, value } = input || {}

            setFormData(prev => ({
                ...prev,
                [name]: value || ''
            }))
            return
        }

        const { name, value } = input.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }



    const addItem = (setter) => {
        setter(prev => [...prev, '']);
    };

    const removeItem = (setter, index) => {
        setter(prev => prev.filter((_, i) => i !== index));
    };

    const updateItem = (setter, index, value) => {
        setter(prev => prev.map((item, i) => (i === index ? value : item)));
    };

    const addItineraryDay = () => {
        setItinerary(prev => {
            const newItinerary = [...prev, { day: `Day ${prev.length + 1}`, description: '' }];
            setFormData(fd => ({ ...fd, itinerary: newItinerary }));
            return newItinerary;
        });
    };


    const updateItinerary = (index, field, value) => {
        setItinerary(prev => {
            const newItinerary = prev.map((item, i) => i === index ? { ...item, [field]: field === 'day' ? Number(value.replace(/\D/g, '')) : value } : item);
            setFormData(fd => ({ ...fd, itinerary: newItinerary }));
            return newItinerary;
        });
    };

    const removeItineraryDay = (index) => {
        setItinerary(prev => {
            const newItinerary = prev.filter((_, i) => i !== index).map((item, i) => ({ ...item, day: i + 1 }));
            setFormData(fd => ({ ...fd, itinerary: newItinerary }));
            return newItinerary;
        });
    };
    function validatePayload(payload) {
        const errors = [];

        const requiredTextFields = [
            { key: "title", label: "Title" },
            { key: "description", label: "Description" },
            { key: "city", label: "City" },
            { key: "coverImage", label: "Cover image" },
        ];

        requiredTextFields.forEach(({ key, label }) => {
            if (!payload[key]?.trim()) {
                errors.push(`${label} is required`);
            }
        });

        if (payload.duration == null || Number(payload.duration) <= 0) {
            errors.push("Duration must be a positive number");
        }

        if (payload.pricePerPerson == null || Number(payload.pricePerPerson) <= 0) {
            errors.push("Price per person must be a positive number");
        }

        return errors;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);

            const payload = { ...formData };


            const data = new FormData();
            Object.entries(payload).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    data.append(key, value);
                } else {
                    if (key === "itinerary") {
                        data.append(key, JSON.stringify(value));
                    }
                }
            });

            if (isUuid(tourId)) {
                await TourService.editTour(tourId, data);
                alert("Tour updated successfully");
            } else {
                const errors = validatePayload(payload);
                if (errors.length) {
                    alert(errors.join("\n"));
                    return;
                }
                await TourService.createTour(data);
                alert("Tour created successfully");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        if (!router.isReady) return;

        const { id: tourId } = router.query;
    }, [router.isReady]);

    console.log(formData)
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6">
                            <h1 className="text-3xl font-bold text-white">Create New Tour</h1>
                            <p className="text-teal-100 mt-2">Fill in the details to list your amazing tour experience</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-8">

                            <Section title="Basic Information">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        label="Tour Name"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Amazing Mountain Adventure"
                                    />
                                </div>

                                <TextArea
                                    label="Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="A brief overview..."
                                    rows={3}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <SelectInput
                                        label="Category"
                                        name="category"
                                        value={formData.category}
                                        selected={categoryOptions.find(
                                            opt => opt.value === formData.category
                                        )}
                                        onSelect={handleInputChange}
                                        options={categoryOptions}
                                    />
                                    <SelectInput
                                        label="Tour Type"
                                        name="tourType"
                                        value={formData.tourType}
                                        selected={tourTypeOptions.find(
                                            opt => opt.value === formData.tourType
                                        )}
                                        onSelect={handleInputChange}
                                        options={tourTypeOptions}
                                    />
                                </div>
                            </Section>

                            <Section title="Location Details">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <Input label="City" name="city" value={formData.city} onChange={handleInputChange} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input label="Starting Point" name="starting_point" value={formData.starting_point} onChange={handleInputChange} />
                                    <Input label="Ending Point" name="ending_point" value={formData.ending_point} onChange={handleInputChange} />
                                </div>
                            </Section>

                            <Section title="Pricing & Capacity">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <Input type="number" label="Price per Person ($)" name="pricePerPerson" value={formData.pricePerPerson} onChange={handleInputChange} />
                                    <Input type="number" label="Min Group Size" name="minGroupSize" value={formData.minGroupSize} onChange={handleInputChange} />
                                    <Input type="number" label="Max Group Size" name="maxGroupSize" value={formData.maxGroupSize} onChange={handleInputChange} />
                                </div>
                                <Input label="Duration" name="duration" value={formData.duration} onChange={handleInputChange} />
                            </Section>

                            <Section title="Media">
                                <Input
                                    label="Cover Image URL"
                                    name="coverImage"
                                    value={formData.coverImage}
                                    onChange={handleInputChange}
                                />
                                {/* <DynamicList
                                    label="Image Gallery URLs"
                                    items={formData.gallery || ['']}
                                    setItems={(newGallery) =>
                                        setFormData(prev => ({ ...prev, gallery: newGallery })) // <- correctly updates array
                                    } /> */}
                            </Section>

                            <Section title="Itinerary">
                                <div className="space-y-4">
                                    {itinerary.map((item, index) => (
                                        <div key={index} className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                                            <div className="flex-1 space-y-3">
                                                <input
                                                    type="text"
                                                    value={item.day}
                                                    onChange={(e) => updateItinerary(index, 'day', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                                />
                                                <textarea
                                                    value={item.description}
                                                    onChange={(e) => updateItinerary(index, 'description', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                                    rows={2}
                                                />
                                            </div>
                                            {itinerary.length > 1 && (
                                                <button type="button" onClick={() => removeItineraryDay(index)} className="p-2 text-red-500">
                                                    <GiCancel />
                                                </button>
                                            )}
                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        onClick={addItineraryDay}
                                        className="flex items-center gap-2 px-4 py-2 text-teal-600"
                                    >
                                        Add Day
                                    </button>
                                </div>
                            </Section>

                            <Section title="Logistics">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input label="Pickup Information" name="pickupInfo" value={formData.pickupInfo} onChange={handleInputChange} />
                                </div>
                                <Input label="Transportation Type" name="transportationType" value={formData.transportationType} onChange={handleInputChange} />
                            </Section>

                            <Section title="Guide Information">
                                <Input label="Guide Name" name="guideName" value={formData.guideName} onChange={handleInputChange} />
                            </Section>

                            <Section title="Policies & Requirements">
                                <TextArea label="Cancellation Policy" name="cancellationPolicy" value={formData.cancellationPolicy} onChange={handleInputChange} rows={3} />
                            </Section>

                            <Section title="Publication Status">
                                <SelectInput
                                    label="Status"
                                    name="status"
                                    value={formData.status}
                                    selected={statusOptions.find(opt => opt.value === formData.status)}
                                    onSelect={handleInputChange}
                                    options={statusOptions} />
                            </Section>

                            <div className="flex gap-4 pt-6 border-t border-gray-200">
                                <button type="submit" className="flex-1 flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg">
                                    <GiSave className="w-5 h-5" />
                                    Save Tour
                                </button>
                                <button type="button" className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg flex items-center gap-2">
                                    <GiCancel className="w-5 h-5" />
                                    Cancel
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}




function TextArea({ label, name, value, onChange, placeholder, rows = 3 }) {
    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg"
            />
        </div>
    );
}



export default CreateTour;
