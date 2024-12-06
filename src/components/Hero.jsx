import React from 'react'

function Hero() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Smarter Farming and
      <span className="bg-gradient-to-r from-blue-500 to-cyan-800 text-transparent bg-clip-text">
        {" "}
        Better Decisions
      </span>
    </h1>
    <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
       Boost productivity with tools for soil health, irrigation, and market insights. Real-time analytics streamline your operations, saving time and increasing profits sustainably.
    </p>
    <div className="flex justify-center my-10">
      <a
        href="#"
        className="bg-gradient-to-r from-blue-500 to-cyan-800 py-3 px-4 mx-3 rounded-md"
      >
        Start Your Journey
      </a>
      <a href="#" className="py-3 px-4 mx-3 rounded-md border">
        Features
      </a>
    </div>
    
  </div>
  )
}

export default Hero