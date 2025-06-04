import React from 'react'
import { FaVrCardboard, FaCamera, FaPlane, FaBullhorn } from 'react-icons/fa'

const ServiceCard = ({ title, description, bgColor, icon: Icon }) => {
  return (
    <div className={`relative p-8 rounded-3xl shadow-lg group hover:shadow-xl transition-all duration-500 overflow-hidden ${bgColor}`}>
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/20 rounded-full blur-3xl 
        group-hover:translate-x-[200%] group-hover:translate-y-[200%] duration-1000 transition-transform"></div>
      
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform 
        group-hover:scale-125 group-hover:rotate-45 transition-transform duration-500"></div>
      
      <div className="relative z-10">
        <div className="text-white mb-6 transform group-hover:scale-110 group-hover:translate-y-[-10px] transition-transform duration-500">
          <Icon size={40} />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white transform group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
        <p className="text-white/90 leading-relaxed transform group-hover:translate-y-1 transition-transform duration-500">{description}</p>
      </div>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      title: 'Digital',
      description: 'We are the most promising agency that combines design expertise with technology and intelligence to revolutionize your business websites. Our teams consist of experts in UX, UI, web development.',
      bgColor: 'bg-amber-400',
      icon: FaVrCardboard
    },
    {
      title: 'Media',
      description: 'We at Eumaxindia are a team of experienced innovators and content creators who help you bring out the most influential AD campaign to create brand awareness. We are a one-stop solution for all your advertising.',
      bgColor: 'bg-cyan-400',
      icon: FaCamera
    },
    {
      title: 'Outdoor',
      description: 'Eumaxindia\'s creative team is a trendsetter in the industry. We create innovative and practical business advertising solutions through outdoor campaign activities like bus hoardings, railway station hoardings, auto.',
      bgColor: 'bg-orange-400',
      icon: FaPlane
    },
    {
      title: 'BTL Activities',
      description: 'At Eumaxindia, our BTL activities refer to marketing strategies not involving mass media advertising. Instead, it focuses on targeted, direct customer interactions through events, promotions, and other forms.',
      bgColor: 'bg-green-400',
      icon: FaBullhorn
    }
  ]
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
