
import Header from '../../components/core/Header'
import { GiPadlock, GiShield, GiCheckMark, GiPayMoney } from 'react-icons/gi';
import { useRouter } from 'next/router';
import Footer from '../../components/core/Footer';
import { useState, useEffect } from 'react'
import TourService from '@/components/utils/services/TourService';
import { validate as isUuid } from 'uuid';

function Checkout({ params }) {
  const router = useRouter();
  const { id: tourId } = router.query;

  const [tours, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    people: '',
    specialRequests: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardName: '',
    promoCode: '',
    agreeTerms: false
  });

  const [paymentMethod, setPaymentMethod] = useState('card');


const people = Number(formData.people || 0);
const pricePerPerson = Number(tours?.pricePerPerson || 0);

const baseTotal = pricePerPerson * people;
const discount = people >= 5 ? baseTotal * 0.1 : 0;

const totalAmount = baseTotal - discount;

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
  };

  const getTour = async (tourId) => {
    try {
      if (isUuid(tourId)) {

        const response = await TourService.getTour(tourId);
        console.log(response)
        setTour(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch tour:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (!router.isReady) return;
    getTour(tourId);

  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 py-0 xl:py-2 xl:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto ">
          <div className="text-center mb-3 xl:mb-8">
            <h1 className=" text-2xl xl:text-4xl font-bold text-gray-800 mb-1">Complete Your Booking </h1>
            <p className="text-gray-600 text-12 xl:text-16">Just a few more steps to confirm your adventure</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {/* Customer Information */}
              <div className="bg-white rounded-2xl shadow-lg xs:p-4 p-2 xl:p-4 border border-teal-100">
                <h2 className=" text-lg xl:text-2xl font-bold text-gray-800 xl:mb-6 mb-2 flex items-center">
                  <span className="bg-gradient-to-r from-teal-500 to-teal-600 text-white xs:w-8 xs:h-8 w-6 h-6 xl:w-8 xl:h-8 rounded-full flex items-center justify-center mr-3 text-12 xl:text-sm">1</span>
                  Customer Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-12 xl:text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-5/6 xs:w-full xl:w-full px-1 pb-1 xs:px-4  xl:px-4 xl:py-3 placeholder:text-11 xl:placeholder:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-12 xl:text-sm font-semibold text-gray-700 mb-2">
                      Number of People *
                    </label>
                    <input
                      type="number"
                      name="people"
                      value={formData.people}
                      onChange={handleInputChange}
                      className="w-5/6 xs:w-full xl:w-full px-1 pb-1 xs:px-4 xl:px-4 xl:py-3 placeholder:text-11 xl:placeholder:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                      placeholder="4"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-12 xl:text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-5/6 xs:w-full xl:w-full px-1 pb-1 xs:px-4   xl:px-4 xl:py-3 placeholder:text-11 xl:placeholder:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-12 xl:text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-5/6 xs:w-full xl:w-full px-1 pb-1 xs:px-4 xl:px-4 xl:py-3 placeholder:text-11 xl:placeholder:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-12 xl:text-sm font-semibold text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-5/6 xs:w-full xl:w-full px-1 pb-1 xs:px-4 xl:px-4 xl:py-3 placeholder:text-11 xl:placeholder:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                      placeholder="123 Main St, City, State"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="bg-white rounded-2xl shadow-lg p-2 xl:p-8 border border-teal-100">
                <h2 className="text-lg xl:text-4xl font-bold text-gray-800 mb-2 xl:mb-6 flex items-center">
                  <span className="bg-gradient-to-r from-teal-500 to-teal-600 text-white w-6 h-6 xl:w-8 xl:h-8 rounded-full flex items-center justify-center mr-3 text-12 xl:text-sm">2</span>
                  Payment Details
                </h2>

                <div className="mb-2 xl:mb-6">
                  <div className="grid grid-cols-2 place-items-center">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`xl:p-4 h-10 w-5/6 border-2 rounded-lg flex items-center justify-center transition text-11 xl:text-14 ${paymentMethod === 'card'
                        ? 'border-teal-600 bg-teal-50 text-teal-700'
                        : 'border-gray-300 text-gray-700 hover:border-teal-300'
                        }`}
                    >
                      Credit Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cash')}
                      className={`xl:p-4 h-10 w-5/6 border-2 rounded-lg flex items-center justify-center transition text-11 xl:text-14 ${paymentMethod === 'cash'
                        ? 'border-teal-600 bg-teal-50 text-teal-700'
                        : 'border-gray-300 text-gray-700 hover:border-teal-300'
                        }`}
                    >
                      <GiPayMoney className="w-5 h-5 mr-2" />
                      Cash
                    </button>

                  </div>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-1 xl:space-y-6">
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="block text-12 xl:text-sm font-semibold text-gray-700 mb-2">Card Number *</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-5/6 xs:w-full xl:w-full px-1 pb-1 xs:px-4 xl:px-4 xl:py-3 placeholder:text-11 xl:placeholder:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-12 xl:text-sm font-semibold text-gray-700 mb-2">Expiry Date *</label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          className="w-5/6 xs:w-full xl:w-full px-1 pb-1 xs:px-4 xl:px-4 xl:py-3 placeholder:text-11 xl:placeholder:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                          placeholder="MM/YY"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-12 xl:text-sm font-semibold text-gray-700 mb-2">Cardholder Name *</label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="w-5/6 xs:w-full xl:w-full px-1 pb-1 xs:px-4 xl:px-4 xl:py-3 placeholder:text-11 xl:placeholder:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-12 xl:text-sm font-semibold text-gray-700 mb-2">CVC *</label>
                        <input
                          type="text"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleInputChange}
                          className="w-5/6 xs:w-full xl:w-full px-1 pb-1 xs:px-4 xl:px-4 xl:py-3 placeholder:text-11 xl:placeholder:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                          placeholder="123"
                          maxLength={3}
                          required
                        />
                      </div>

                    </div>
                  </div>
                )}

                {paymentMethod === 'cash' && (
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
                    <p className="text-gray-700 mb-4">You can pay in cash before the tour begins. Please present your receipt to the tour guide prior to departure.</p>
                  </div>
                )}

                <div className="mt-3 xl:mt-4 flex items-center gap-3 p-2 xl:p-4 bg-teal-50 rounded-lg border border-teal-200">
                  <GiPadlock className="w-4 h-4 xl:w-5 xl:h-5 text-teal-600" />
                  <p className="text-11 xl:text-sm text-gray-700">
                    <span className="font-semibold">Secure Payment:</span> Your payment information is encrypted and secure
                  </p>
                </div>
              </div>

              {/* Terms */}
              <div className="bg-white rounded-2xl shadow-lg p-3 xl:p-8 border border-teal-100">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-3 h-3 xl:w-5 xl:h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    required
                  />
                  <span className="ml-2 xl:ml-3 text-10 xl:text-sm text-gray-700">
                    I agree to the{' '}
                    <a href="#" className="text-teal-600 font-semibold hover:underline">
                      Terms & Conditions
                    </a>
                    {' '}and{' '}
                    <a href="#" className="text-teal-600 font-semibold hover:underline">
                      Privacy Policy
                    </a>
                    . I understand the{' '}
                    <a href="#" className="text-teal-600 font-semibold hover:underline">
                      Refund Policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={!formData.agreeTerms}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-14 xl:text-lg py-2 xl:py-4 rounded-xl shadow-lg hover:shadow-xl hover:from-teal-600 hover:to-teal-700 transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Confirm & Pay ${totalAmount.toFixed(2)}
              </button>

              <p className="text-center text-12 xl:text-sm text-gray-600">
                You will be charged ${totalAmount.toFixed(2)} upon confirmation
              </p>

              <div className="flex items-center justify-center gap-3 pt-0 xl:pt-4 pb-2">
                <GiShield className="w-5 h-5 xl:w-6 xl:h-6 text-gray-400" />
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <GiPadlock className="xl:w-4 xl:h-4" />
                  <span>256-bit SSL Encrypted</span>
                </div>
                <GiCheckMark className="w-5 h-5 xl:w-6 xl:h-6 text-teal-600" />
              </div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-4 xl:p-8 border border-teal-100 sticky top-8 ">
                <h2 className="text-lg xl:text-2xl font-bold text-gray-800 mb-1 xl:mb-6">Booking Summary</h2>

                <div className="space-y-4 mb-3 xl:mb-6">
                  <div>
                    <h3 className="font-bold text-13 xl:text-lg text-gray-800 mb-1"> {tours.title}</h3>
                    <p className="text-12 xl:text-sm text-gray-600"> {tours.availableDates}/{tours.duration} </p>
                  </div>

                  <div className="flex text-13 xl:text-16 items-center justify-between py-1 xl:py-3 border-t border-gray-200">
                    <span className="text-gray-700">Guests</span>
                    <span className="font-semibold text-gray-800"> {formData.people} people</span>
                  </div>
                </div>

                <div className="border-t text-13 xl:text-16 border-gray-200 pt-2 xl:pt-4 space-y-3 mb-2 xl:mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Base Price</span>
                    <span>
                      ${baseTotal}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span>Discount</span>
                    <span>
                      -${discount}
                    </span>
                  </div>
                </div>

                <div className="border-t-2 border-teal-600 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg xl:text-xl font-bold text-gray-800">Total Amount</span>
                    <span className="text-2xl xl:text-3xl font-bold bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-3 xl:mt-6 bg-teal-50 rounded-lg p-2 xl:p-4 border border-teal-200">
                  <p className="text-12 xl:text-sm text-gray-700">
                    <span className="font-semibold">Free cancellation</span> up to 24 hours before the tour starts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
