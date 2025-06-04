import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      await submitContactForm(formData)
      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left Column - Contact Form */}
          <div>
            <div className="mb-4">
              <h3 className="text-green-500 text-lg font-semibold mb-2">CONTACT US</h3>
              <h2 className="text-4xl font-bold mb-2">Get a Quote</h2>
            </div>            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-full focus:outline-none focus:border-green-500 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-full focus:outline-none focus:border-green-500 text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="4"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-3xl focus:outline-none focus:border-green-500 text-white placeholder-gray-400 resize-none"
                  required
                ></textarea>
              </div>
              {status.message && (
                <div className={`text-${status.type === 'success' ? 'green' : 'red'}-500 text-center`}>
                  {status.message}
                </div>
              )}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-40 bg-green-500 text-white py-4 px-8 rounded-full hover:bg-green-600 transition-colors font-semibold 
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div className="flex flex-col justify-between relative">            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-green-500 text-lg font-semibold mb-2">CONNECT US</h3>
                <h2 className="text-4xl font-bold mb-8">Call or Email</h2>
                <div className="space-y-6">
                  <a href="tel:+919840486666" className="flex items-center text-xl hover:text-green-500 transition-colors">
                    <FaPhone className="mr-4 text-green-500" />
                    +91 98404 86666
                  </a>
                  <a href="mailto:enquiry@eumaxindia.com" className="flex items-center text-xl hover:text-green-500 transition-colors">
                    <FaEnvelope className="mr-4 text-green-500" />
                    enquiry@eumaxindia.com
                  </a>
                  <div className="flex items-center space-x-6 pt-4">
                    <a 
                      href="https://www.facebook.com/eumaxindiaprivatelimited" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      <FaFacebookF size={24} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/eumaxindia-pvt-limited/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      <FaLinkedinIn size={24} />
                    </a>
                    <a 
                      href="https://www.instagram.com/eumaxindia/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-green-500 text-lg font-semibold mb-2">VISIT US</h3>
                <h2 className="text-4xl font-bold mb-8">Head Office</h2>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mr-4 text-2xl mt-1 text-green-500" />
                  <p className="text-xl leading-relaxed">
                    18, PLN Complex,<br />
                    3rd floor,<br />
                    Conron Smith Road,<br />
                    Gopalapuram,<br />
                    Chennai-600 086.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
