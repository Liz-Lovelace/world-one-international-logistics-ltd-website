import React, { useState } from 'react'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    companyName: '',
    address: '',
    temperatureRange: '',
    powerOutput: '',
    existingProducts: '',
    application1: '',
    application2: '',
    application3: ''
  })

  const [showSummary, setShowSummary] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSummary(true)
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-brand mb-8">
        Get a Quote
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Required Fields */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Surname:</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">E-mail Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
              rows="3"
            />
          </div>

          <div>
            <label className="block mb-1">Temperature Range:</label>
            <input
              type="text"
              name="temperatureRange"
              value={formData.temperatureRange}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Power Output:</label>
            <input
              type="text"
              name="powerOutput"
              value={formData.powerOutput}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Optional Fields */}
        <div className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold">Optional Information</h2>
          
          <div>
            <label className="block mb-1">Existing Products from Other Suppliers:</label>
            <textarea
              name="existingProducts"
              value={formData.existingProducts}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>

          <div>
            <label className="block mb-1">Application Type:</label>
            <select
              name="application1"
              value={formData.application1}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select...</option>
              <option value="Industrial">Industrial</option>
              <option value="Commercial">Commercial</option>
              <option value="Residential">Residential</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Environment:</label>
            <select
              name="application2"
              value={formData.application2}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select...</option>
              <option value="Hazardous">Hazardous</option>
              <option value="Ordinary">Ordinary</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Location:</label>
            <select
              name="application3"
              value={formData.application3}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select...</option>
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-brand text-white py-2 px-4 rounded hover:bg-brand/90 transition-colors"
        >
          Submit Quote Request
        </button>
      </form>

      {showSummary && (
        <div className="mt-8 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Quote Request Summary</h2>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify({
              ...formData,
              application1: formData.application1 || 'Not specified',
              application2: formData.application2 || 'Not specified',
              application3: formData.application3 || 'Not specified',
            }, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
} 