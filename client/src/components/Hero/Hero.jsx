import React from 'react'

const Hero = () => {
  return (    <div className="relative h-screen">
      {/* Banner Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/banner.gif")' }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-5xl font-bold mb-4 text-center">Eumax India Private Limited</h1>
        <p className="text-2xl text-center max-w-3xl">Empowering Businesses with Innovative Solutions</p>
      </div>
    </div>
  )
}

export default Hero
