import Footer from '@/components/core/Footer';
import Header from '@/components/core/Header'

import { useState } from 'react';
import { GiSave, GiCancel, GiPlus, GiTrash, GiScenery } from 'react-icons/gi';

function CreateTour() {
    const [formData, setFormData] = useState({
        tour_name: '',
        slug: '',
        short_description: '',
        full_description: '',
        category: 'Adventure',
        tour_type: 'Group',
        country: '',
        region: '',
        city: '',
        starting_point: '',
        ending_point: '',
        duration: '',
        price_per_person: '',
        max_group_size: '20',
        min_group_size: '1',
        cover_image: '',
        pickup_info: '',
        dropoff_info: '',
        transportation_type: '',
        guide_name: '',
        cancellation_policy: '',
        requirements: '',
        status: 'draft'
    });

    const [inclusions, setInclusions] = useState(['']);
    const [exclusions, setExclusions] = useState(['']);
    const [imageGallery, setImageGallery] = useState(['']);
    const [guideLanguages, setGuideLanguages] = useState(['']);
    const [itinerary, setItinerary] = useState([{ day: 'Day 1', description: '' }]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'tour_name' && !formData.slug) {
            const slugValue = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            setFormData(prev => ({ ...prev, slug: slugValue }));
        }
    };

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
        setItinerary(prev => [...prev, { day: `Day ${prev.length + 1}`, description: '' }]);
    };

    const removeItineraryDay = (index) => {
        setItinerary(prev => prev.filter((_, i) => i !== index));
    };

    const updateItinerary = (index, field, value) => {
        setItinerary(prev =>
            prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Tour data:', {
            ...formData,
            inclusions: inclusions.filter(i => i.trim()),
            exclusions: exclusions.filter(e => e.trim()),
            image_gallery: imageGallery.filter(img => img.trim()),
            guide_languages: guideLanguages.filter(lang => lang.trim()),
            itinerary: itinerary.filter(it => it.description.trim())
        });
    };

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
                                        name="tour_name"
                                        value={formData.tour_name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Amazing Mountain Adventure"
                                    />
                                    <Input
                                        label="URL Slug"
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="amazing-mountain-adventure"
                                    />
                                </div>

                                <TextArea
                                    label="Short Description"
                                    name="short_description"
                                    value={formData.short_description}
                                    onChange={handleInputChange}
                                    placeholder="A brief overview..."
                                    rows={2}
                                />

                                <TextArea
                                    label="Full Description"
                                    name="full_description"
                                    value={formData.full_description}
                                    onChange={handleInputChange}
                                    placeholder="Detailed description..."
                                    rows={4}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Select
                                        label="Category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        options={['Adventure', 'Culture', 'Beach', 'Hiking', 'Food', 'Wildlife', 'Historical', 'Luxury']}
                                    />
                                    <Select
                                        label="Tour Type"
                                        name="tour_type"
                                        value={formData.tour_type}
                                        onChange={handleInputChange}
                                        options={['Private', 'Group', 'Custom', 'Self-guided']}
                                    />
                                </div>
                            </Section>

                            <Section title="Location Details">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <Input label="Country" name="country" value={formData.country} onChange={handleInputChange} />
                                    <Input label="Region/State" name="region" value={formData.region} onChange={handleInputChange} />
                                    <Input label="City" name="city" value={formData.city} onChange={handleInputChange} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input label="Starting Point" name="starting_point" value={formData.starting_point} onChange={handleInputChange} />
                                    <Input label="Ending Point" name="ending_point" value={formData.ending_point} onChange={handleInputChange} />
                                </div>
                            </Section>

                            <Section title="Pricing & Capacity">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <Input type="number" label="Price per Person ($)" name="price_per_person" value={formData.price_per_person} onChange={handleInputChange} />
                                    <Input type="number" label="Min Group Size" name="min_group_size" value={formData.min_group_size} onChange={handleInputChange} />
                                    <Input type="number" label="Max Group Size" name="max_group_size" value={formData.max_group_size} onChange={handleInputChange} />
                                </div>

                                <Input label="Duration" name="duration" value={formData.duration} onChange={handleInputChange} />
                            </Section>

                            <Section title="Inclusions & Exclusions">
                                <DynamicList label="What's Included" items={inclusions} setItems={setInclusions} />
                                <DynamicList label="What's Excluded" items={exclusions} setItems={setExclusions} />
                            </Section>

                            <Section title="Media">
                                <Input
                                    label="Cover Image URL"
                                    name="cover_image"
                                    value={formData.cover_image}
                                    onChange={handleInputChange}
                                />
                                <DynamicList label="Image Gallery URLs" items={imageGallery} setItems={setImageGallery} />
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
                                                    <GiTrash className="w-5 h-5" />
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
                                    <Input label="Pickup Information" name="pickup_info" value={formData.pickup_info} onChange={handleInputChange} />
                                    <Input label="Drop-off Information" name="dropoff_info" value={formData.dropoff_info} onChange={handleInputChange} />
                                </div>
                                <Input label="Transportation Type" name="transportation_type" value={formData.transportation_type} onChange={handleInputChange} />
                            </Section>

                            <Section title="Guide Information">
                                <Input label="Guide Name" name="guide_name" value={formData.guide_name} onChange={handleInputChange} />
                                <DynamicList label="Languages Spoken" items={guideLanguages} setItems={setGuideLanguages} />
                            </Section>

                            <Section title="Policies & Requirements">
                                <TextArea label="Cancellation Policy" name="cancellation_policy" value={formData.cancellation_policy} onChange={handleInputChange} rows={3} />
                                <TextArea label="Age/Fitness Requirements" name="requirements" value={formData.requirements} onChange={handleInputChange} rows={2} />
                            </Section>

                            <Section title="Publication Status">
                                <Select label="Status" name="status" value={formData.status} onChange={handleInputChange} options={['draft', 'active', 'archived']} />
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

function Section({ title, children }) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-teal-600 pb-2">{title}</h2>
            {children}
        </div>
    );
}

function Input({ label, name, type = 'text', value, onChange, placeholder, required, icon }) {
    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
            <div className="relative">
                {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>}
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    className={`w-full ${icon ? 'pl-10' : 'px-4'} py-2.5 border border-gray-300 rounded-lg`}
                />
            </div>
        </div>
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

function Select({ label, name, value, onChange, options }) {
    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white"
            >
                {options.map(option => (
                    <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
}

function DynamicList({ label, items, setItems, placeholder }) {
    const addItem = () => setItems(prev => [...prev, '']);
    const removeItem = (index) => setItems(prev => prev.filter((_, i) => i !== index));
    const updateItem = (index, value) => setItems(prev => prev.map((item, i) => (i === index ? value : item)));

    return (
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex gap-3">
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => updateItem(index, e.target.value)}
                            placeholder={placeholder}
                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg"
                        />
                        {items.length > 1 && (
                            <button type="button" onClick={() => removeItem(index)} className="p-2 text-red-500">
                                <GiTrash className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                ))}
                <button type="button" onClick={addItem} className="flex items-center gap-2 px-4 py-2 text-teal-600">
                    Add Item
                </button>
            </div>
        </div>
    );
}

export default CreateTour;
