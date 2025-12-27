import Header from '../components/core/Header';
import Footer from '@/components/core/Footer';
import { GiEnvelope, GiPhone, GiPositionMarker, GiPaperPlane } from "react-icons/gi";
import { useState } from 'react';
import ContactService from '@/components/utils/services/ContactService';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
        const response = await ContactService.createEmail(formData);

        setSubmitSuccess(true);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        setTimeout(() => setSubmitSuccess(false), 3000);

    } catch (error) {
        console.error("Failed to create Email Contact:", error);
        alert("Please try again.");
    } finally {
        setIsSubmitting(false);
    }
};


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            < Header />
            <div className="min-h-screen bg-gradient-to-br from-gray-500 via-teal-600 to-gray-600 mt-2 xl:mt-5">
                <div className="container mx-auto pt-3  py-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-5 xl:mb-12">
                            <h1 className="text-xl xl:text-4xl font-bold text-white mb-1 xl:mb-2">Get In Touch</h1>
                            <p className="text-teal-100 text-12 xl:text-lg">
                                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-16 xs:gap-5 xl:gap-10 mb-5 xs:mx-10 mx-24 xl:mx-2">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl py-2 xl:p-8 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                                <div className="inline-flex items-center justify-center w-8 h-8 xl:w-16 xl:h-16 bg-white rounded-full mb-4">
                                    <GiEnvelope className="w-4 h-4 xl:w-8 xl:h-8 text-teal-600" />
                                </div>
                                <h3 className="text-13 xl:text-xl font-semibold text-white mb-1">Email</h3>
                                <p className="text-12 xl:text-16 text-teal-100">contact@discover-albania.com</p>
                                {/* <p className="text-teal-100">support@example.com</p> */}
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl py-2 xl:p-8 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                                <div className="inline-flex items-center justify-center w-8 h-8 xl:w-16 xl:h-16 bg-white rounded-full mb-4">
                                    <GiPhone className="w-4 h-4 xl:w-8 xl:h-8 text-teal-600" />
                                </div>
                                <h3 className="text-13 xl:text-xl font-semibold text-white mb-2">Phone</h3>
                                <p className=" text-12 xl:text-16 text-teal-100">+355 (555) 123-4567</p>
                                <p className="text-12 xl:text-16 text-teal-100">Mon-Fri 9am-6pm</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl py-2 xl:p-8 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                                <div className="inline-flex items-center justify-center w-8 h-8 xl:w-16 xl:h-16 bg-white rounded-full mb-4">
                                    <GiPositionMarker className="w-4 h-4 xl:w-8 xl:h-8 text-teal-600" />
                                </div>
                                <h3 className="text-13 xl:text-xl font-semibold text-white mb-2">Location</h3>
                                <p className="text-12 xl:text-16 text-teal-100">Sulejman Pasha Street</p>
                                <p className="text-12 xl:text-16 text-teal-100">Tirana, Albania</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl p-6  xl:p-12 xl:mx-0 mx-10 xs:mx-3 ">
                            <h2 className="text-lg xl:text-3xl font-bold text-gray-700 mb-2 xl:mb-8">Send us a Message</h2>

                            {submitSuccess && (
                                <div className="mb-6 p-4 bg-teal-50 border border-teal-200 rounded-lg text-teal-700 animate-fade-in">
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            )}

<form onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 text-14 xl:text-base font-semibold mb-1 xl:mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-5/6 p-2 xl:p-4 text-12 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 text-14 xl:text-base font-semibold mb-1  xl:mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-5/6 p-2 xl:p-4 text-12 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-gray-700 text-14 xl:text-base font-semibold mb-1  xl:mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-5/6 p-2 xl:p-4 text-12 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 text-14 xl:text-base font-semibold mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 text-12 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all duration-300 resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto p-3 xl:p-4 text-12 xl:text-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <GiPaperPlane className="w-3 h-3 xl:w-5 xl:h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

