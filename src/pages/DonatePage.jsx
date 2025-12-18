import React, { useState } from 'react';
import { FaHeart, FaHandHoldingHeart, FaUsers, FaShieldAlt, FaCheckCircle, FaCreditCard, FaMobileAlt, FaUniversity, FaQrcode } from 'react-icons/fa';

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('onetime');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    panNumber: '',
    address: ''
  });

  const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const impactData = [
    { amount: 500, impact: 'Provides hygiene kits for 5 girls' },
    { amount: 1000, impact: 'Feeds 20 people for a day' },
    { amount: 2500, impact: 'Supports a woman entrepreneur' },
    { amount: 5000, impact: 'Educates a child for a month' },
    { amount: 10000, impact: 'Medical aid for 10 families' },
    { amount: 25000, impact: 'Community development program' }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = selectedAmount || customAmount;
    if (!amount || amount < 100) {
      alert('Please enter a valid donation amount (minimum ₹100)');
      return;
    }
    console.log('Donation submitted:', { ...formData, amount, donationType, paymentMethod });
    alert('Thank you for your generous donation! Redirecting to payment gateway...');
  };

  const getCurrentAmount = () => selectedAmount || customAmount || 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-800 via-pink-900 to-pink-950 text-white py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <FaHeart className="text-yellow-400" />
            <span className="text-sm font-semibold">Make a Difference Today</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Donation Changes Lives
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Support our mission to empower communities, provide healthcare, education, and create lasting change in Bihar and beyond.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              
              {/* Donation Type Toggle */}
              <div className="mb-8">
                <label className="block text-gray-800 font-bold text-lg mb-4">Select Donation Type</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setDonationType('onetime')}
                    className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      donationType === 'onetime'
                        ? 'bg-pink-800 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      donationType === 'monthly'
                        ? 'bg-pink-800 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-gray-800 font-bold text-lg mb-4">Choose Amount</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'bg-pink-800 text-white shadow-lg scale-105'
                          : 'bg-pink-50 text-pink-800 hover:bg-pink-100 border-2 border-pink-200'
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                
                {/* Custom Amount */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-semibold text-lg">₹</span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmount}
                    placeholder="Enter custom amount"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none text-lg"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">Minimum donation: ₹100</p>
              </div>

              {/* Impact Display */}
              {getCurrentAmount() > 0 && (
                <div className="mb-8 p-6 bg-gradient-to-r from-yellow-50 to-pink-50 rounded-xl border-2 border-yellow-200">
                  <div className="flex items-start gap-3">
                    <FaHandHoldingHeart className="text-pink-600 text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Your Impact</h3>
                      <p className="text-gray-700">
                        {getCurrentAmount() >= 25000
                          ? 'Your generous donation will support comprehensive community development programs!'
                          : impactData.find(item => getCurrentAmount() >= item.amount)?.impact || 
                            'Every contribution helps us create positive change!'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Donor Information */}
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label className="block text-gray-800 font-bold text-lg mb-4">Donor Information</label>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name *"
                      required
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address *"
                      required
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      name="panNumber"
                      value={formData.panNumber}
                      onChange={handleInputChange}
                      placeholder="PAN Number (for 80G certificate)"
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                    />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Address (Optional)"
                      rows="2"
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                  <label className="block text-gray-800 font-bold text-lg mb-4">Payment Method</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`py-4 px-4 rounded-xl font-semibold transition-all duration-300 flex flex-col items-center gap-2 ${
                        paymentMethod === 'card'
                          ? 'bg-pink-800 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <FaCreditCard className="text-xl" />
                      <span className="text-sm">Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`py-4 px-4 rounded-xl font-semibold transition-all duration-300 flex flex-col items-center gap-2 ${
                        paymentMethod === 'upi'
                          ? 'bg-pink-800 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <FaMobileAlt className="text-xl" />
                      <span className="text-sm">UPI</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('netbanking')}
                      className={`py-4 px-4 rounded-xl font-semibold transition-all duration-300 flex flex-col items-center gap-2 ${
                        paymentMethod === 'netbanking'
                          ? 'bg-pink-800 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <FaUniversity className="text-xl" />
                      <span className="text-sm">Net Banking</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('qr')}
                      className={`py-4 px-4 rounded-xl font-semibold transition-all duration-300 flex flex-col items-center gap-2 ${
                        paymentMethod === 'qr'
                          ? 'bg-pink-800 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <FaQrcode className="text-xl" />
                      <span className="text-sm">QR Code</span>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-5 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
                >
                  <FaHeart />
                  Donate ₹{getCurrentAmount() ? getCurrentAmount().toLocaleString() : '0'}
                </button>
              </form>

            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            
            {/* Tax Benefits */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="text-green-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">80G Tax Benefits</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Get 50% tax deduction under Section 80G. We'll send you a certificate for your donation.
              </p>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-green-800 font-semibold">
                  Donate ₹10,000 → Save ₹5,000 in taxes
                </p>
              </div>
            </div>

            {/* Why Donate */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                  <FaUsers className="text-pink-700 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Why Donate?</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Direct impact on communities in Bihar</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Transparent use of funds with regular reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">10+ years of trusted service</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Multiple award-winning initiatives</span>
                </li>
              </ul>
            </div>

            {/* Contact Support */}
            <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Have questions about donations? We're here to help!
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">📞 +91 9234291600</p>
                <p className="text-gray-300">📧 navastitvafoundation@gmail.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-pink-800 mb-2">10,000+</div>
            <p className="text-gray-600">Lives Impacted</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-pink-800 mb-2">98%</div>
            <p className="text-gray-600">Funds to Programs</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-pink-800 mb-2">100%</div>
            <p className="text-gray-600">Transparency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;