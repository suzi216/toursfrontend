
import Header from '../components/core/Header'
import { useState } from 'react';
import { GiPadlock, GiShield, GiCheckMark, GiPayMoney } from 'react-icons/gi';
import Footer from '../components/core/Footer';

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    specialRequests: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardName: '',
    promoCode: '',
    agreeTerms: false
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  const bookingDetails = {
    tourName: 'Mountain Adventure Trek',
    dates: 'May 15-20, 2025',
    guests: 2,
    basePrice: 899.0,
    taxes: 89.9,
    discount: 0
  };

  const totalAmount = bookingDetails.basePrice + bookingDetails.taxes - bookingDetails.discount;

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

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Complete Your Booking</h1>
          <p className="text-gray-600">Just a few more steps to confirm your adventure</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-teal-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-gradient-to-r from-teal-500 to-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                Customer Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                    placeholder="123 Main St, City, State"
                  />
                </div>

                {/* Special Requests */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests or Notes</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none text-gray-700"
                    placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                  />
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-teal-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-gradient-to-r from-teal-500 to-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                Payment Details
              </h2>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 border-2 rounded-lg flex items-center justify-center transition ${
                      paymentMethod === 'card'
                        ? 'border-teal-600 bg-teal-50 text-teal-700'
                        : 'border-gray-300 text-gray-700 hover:border-teal-300'
                    }`}
                  >
                    <GiPayMoney className="w-5 h-5 mr-2" />
                    Credit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-4 border-2 rounded-lg flex items-center justify-center transition ${
                      paymentMethod === 'paypal'
                        ? 'border-teal-600 bg-teal-50 text-teal-700'
                        : 'border-gray-300 text-gray-700 hover:border-teal-300'
                    }`}
                  >
                    PayPal
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number *</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date *</label>
                      <input
                        type="text"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">CVC *</label>
                      <input
                        type="text"
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                        placeholder="123"
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cardholder Name *</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
                  <p className="text-gray-700 mb-4">You will be redirected to PayPal to complete your payment securely.</p>
                  <div className="text-4xl font-bold text-blue-600">PayPal</div>
                </div>
              )}

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition text-gray-700"
                    placeholder="Enter promo code"
                  />
                  <button className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition">
                    Apply
                  </button>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 p-4 bg-teal-50 rounded-lg border border-teal-200">
                <GiPadlock className="w-5 h-5 text-teal-600" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Secure Payment:</span> Your payment information is encrypted and secure
                </p>
              </div>
            </div>

            {/* Terms */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-teal-100">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  required
                />
                <span className="ml-3 text-sm text-gray-700">
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
              className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:from-teal-600 hover:to-teal-700 transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Confirm & Pay ${totalAmount.toFixed(2)}
            </button>

            <p className="text-center text-sm text-gray-600">
              You will be charged ${totalAmount.toFixed(2)} upon confirmation
            </p>

            <div className="flex items-center justify-center gap-6 pt-4">
              <GiShield className="w-6 h-6 text-gray-400" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <GiPadlock className="w-4 h-4" />
                <span>256-bit SSL Encrypted</span>
              </div>
              <GiCheckMark className="w-6 h-6 text-teal-600" />
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-teal-100 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Booking Summary</h2>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{bookingDetails.tourName}</h3>
                  <p className="text-sm text-gray-600">{bookingDetails.dates}</p>
                </div>

                <div className="flex items-center justify-between py-3 border-t border-gray-200">
                  <span className="text-gray-700">Guests</span>
                  <span className="font-semibold text-gray-800">{bookingDetails.guests} people</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Base Price</span>
                  <span>${bookingDetails.basePrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Taxes & Fees</span>
                  <span>${bookingDetails.taxes.toFixed(2)}</span>
                </div>

                {bookingDetails.discount > 0 && (
                  <div className="flex justify-between text-teal-600">
                    <span>Discount</span>
                    <span>-${bookingDetails.discount.toFixed(2)}</span>
                  </div>
                )}
              </div>

              <div className="border-t-2 border-teal-600 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Total Amount</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-6 bg-teal-50 rounded-lg p-4 border border-teal-200">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Free cancellation</span> up to 48 hours before the tour starts
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
