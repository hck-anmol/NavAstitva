import React, { useState } from 'react';
import { FaBriefcase, FaUserTie, FaHandsHelping, FaLightbulb, FaUsers, FaHeart, FaCheckCircle, FaUpload, FaTimes, FaFileAlt } from 'react-icons/fa';

const CareerPage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    qualification: '',
    experience: '',
    currentOrganization: '',
    linkedIn: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    preferredLocation: '',
    availableFrom: '',
    expectedStipend: '',
    motivation: '',
    skills: '',
    languages: ''
  });

  const roleCategories = [
    {
      id: 'intern',
      title: 'Internship',
      icon: FaLightbulb,
      color: 'blue',
      description: 'Gain hands-on experience in social sector',
      benefits: ['Certificate', 'Stipend', 'Learning', 'Mentorship']
    },
    {
      id: 'volunteer',
      title: 'Volunteer',
      icon: FaHandsHelping,
      color: 'green',
      description: 'Make a difference in your community',
      benefits: ['Flexible Hours', 'Social Impact', 'Network', 'Experience']
    },
    {
      id: 'employee',
      title: 'Full-Time Job',
      icon: FaBriefcase,
      color: 'purple',
      description: 'Build your career with purpose',
      benefits: ['Salary', 'Benefits', 'Growth', 'Impact']
    },
    {
      id: 'partner',
      title: 'Partnership',
      icon: FaUsers,
      color: 'orange',
      description: 'Collaborate on impactful projects',
      benefits: ['Collaboration', 'Resources', 'Network', 'Scale']
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      if (type === 'resume') {
        setResume(file);
      } else {
        setCoverLetter(file);
      }
    }
  };

  const removeFile = (type) => {
    if (type === 'resume') {
      setResume(null);
    } else {
      setCoverLetter(null);
    }
  };

  const handleSubmit = () => {
    if (!selectedRole) {
      alert('Please select a role/opportunity type');
      return;
    }
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }
    if (!resume) {
      alert('Please upload your resume');
      return;
    }
    
    console.log('Application submitted:', { ...formData, selectedRole, resume, coverLetter });
    alert('Thank you for your application! We will review it and get back to you soon.');
    
    // Reset form
    setFormData({
      fullName: '', email: '', phone: '', dateOfBirth: '', gender: '',
      qualification: '', experience: '', currentOrganization: '', linkedIn: '',
      address: '', city: '', state: '', pincode: '', preferredLocation: '',
      availableFrom: '', expectedStipend: '', motivation: '', skills: '', languages: ''
    });
    setSelectedRole('');
    setResume(null);
    setCoverLetter(null);
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-700', hover: 'hover:bg-blue-200', border: 'border-blue-300', selected: 'bg-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-700', hover: 'hover:bg-green-200', border: 'border-green-300', selected: 'bg-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-700', hover: 'hover:bg-purple-200', border: 'border-purple-300', selected: 'bg-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-700', hover: 'hover:bg-orange-200', border: 'border-orange-300', selected: 'bg-orange-600' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-800 via-pink-900 to-pink-950 text-white py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <FaHeart className="text-yellow-400" />
            <span className="text-sm font-semibold">Join Our Mission</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build Your Career with Purpose
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join Nav Astitva Foundation and be part of meaningful change. Whether you're looking to intern, volunteer, or build a career in social impact, we have opportunities for you.
          </p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">Why Join NAF?</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeart className="text-pink-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Meaningful Impact</h3>
            <p className="text-gray-600">Work on projects that directly improve lives in communities across Bihar</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUserTie className="text-pink-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Growth</h3>
            <p className="text-gray-600">Learn from experienced professionals and develop skills in the social sector</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="text-pink-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Collaborative Culture</h3>
            <p className="text-gray-600">Join a passionate team committed to creating positive social change</p>
          </div>
        </div>

        {/* Role Selection */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-8 text-center">Choose Your Path</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roleCategories.map((role) => {
              const colors = getColorClasses(role.color);
              const Icon = role.icon;
              const isSelected = selectedRole === role.id;

              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? `${colors.selected} text-white shadow-xl scale-105`
                      : `${colors.bg} ${colors.border} ${colors.hover} ${colors.text}`
                  }`}
                >
                  <Icon className={`text-3xl mb-4 ${isSelected ? 'text-white' : ''}`} />
                  <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                  <p className={`text-sm mb-4 ${isSelected ? 'text-white/90' : 'opacity-80'}`}>
                    {role.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {role.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-white/50'
                        }`}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Application Form */}
        {selectedRole && (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-pink-800 mb-8">Application Form</h2>

            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name *"
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address *"
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number *"
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  placeholder="Date of Birth"
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
                <input
                  type="text"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                  placeholder="LinkedIn Profile URL"
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Address Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Address Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className="md:col-span-2 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="Pincode"
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleInputChange}
                  placeholder="Preferred Work Location"
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Educational & Professional Background */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Educational & Professional Background</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  placeholder="Highest Qualification *"
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Years of Experience"
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="currentOrganization"
                  value={formData.currentOrganization}
                  onChange={handleInputChange}
                  placeholder="Current Organization (if any)"
                  className="md:col-span-2 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="Key Skills (comma separated)"
                  className="md:col-span-2 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="languages"
                  value={formData.languages}
                  onChange={handleInputChange}
                  placeholder="Languages Known (comma separated)"
                  className="md:col-span-2 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Availability & Expectations */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Availability & Expectations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="availableFrom"
                  value={formData.availableFrom}
                  onChange={handleInputChange}
                  placeholder="Available From"
                  className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                />
                {(selectedRole === 'intern' || selectedRole === 'employee') && (
                  <input
                    type="text"
                    name="expectedStipend"
                    value={formData.expectedStipend}
                    onChange={handleInputChange}
                    placeholder={selectedRole === 'intern' ? 'Expected Stipend' : 'Expected Salary'}
                    className="px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none"
                  />
                )}
              </div>
            </div>

            {/* Motivation */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Tell Us About Yourself</h3>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                placeholder="Why do you want to join Nav Astitva Foundation? What motivates you to work in the social sector?"
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none resize-none"
              />
            </div>

            {/* File Uploads */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Documents</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Resume Upload */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Resume/CV *</label>
                  {!resume ? (
                    <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-pink-500 hover:bg-pink-50 transition-all duration-300">
                      <FaUpload className="text-4xl text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600">Click to upload resume</span>
                      <span className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</span>
                      <input
                        type="file"
                        onChange={(e) => handleFileUpload(e, 'resume')}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-4 bg-green-50 border-2 border-green-300 rounded-xl">
                      <div className="flex items-center gap-3">
                        <FaFileAlt className="text-green-600 text-2xl" />
                        <div>
                          <p className="font-semibold text-gray-800">{resume.name}</p>
                          <p className="text-xs text-gray-600">{(resume.size / 1024).toFixed(2)} KB</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile('resume')}
                        className="p-2 hover:bg-red-100 rounded-full transition-colors duration-300"
                      >
                        <FaTimes className="text-red-600" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Cover Letter Upload */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Cover Letter (Optional)</label>
                  {!coverLetter ? (
                    <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-pink-500 hover:bg-pink-50 transition-all duration-300">
                      <FaUpload className="text-4xl text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600">Click to upload cover letter</span>
                      <span className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</span>
                      <input
                        type="file"
                        onChange={(e) => handleFileUpload(e, 'coverLetter')}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-4 bg-green-50 border-2 border-green-300 rounded-xl">
                      <div className="flex items-center gap-3">
                        <FaFileAlt className="text-green-600 text-2xl" />
                        <div>
                          <p className="font-semibold text-gray-800">{coverLetter.name}</p>
                          <p className="text-xs text-gray-600">{(coverLetter.size / 1024).toFixed(2)} KB</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile('coverLetter')}
                        className="p-2 hover:bg-red-100 rounded-full transition-colors duration-300"
                      >
                        <FaTimes className="text-red-600" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-5 rounded-xl font-bold text-lg hover:from-pink-700 hover:to-pink-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaCheckCircle />
              Submit Application
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              By submitting this application, you agree to our terms and conditions
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-pink-800 mb-4">Have Questions?</h3>
          <p className="text-gray-700 mb-6">
            We're here to help! Reach out to us for any queries about opportunities at NAF.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-pink-600">📞</span>
              <span>+91 9234291600</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-600">📧</span>
              <span>navastitvafoundation@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;