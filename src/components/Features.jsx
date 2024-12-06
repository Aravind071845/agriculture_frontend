import React from 'react'
import { BotMessageSquare,Fingerprint,ShieldHalf } from 'lucide-react';

const features = [
    {
      icon: <BotMessageSquare />,
      text: "Soil Health and crop suitability",
      description:
        "Monitor soil quality effortlessly, ensuring optimal growth conditions.Get tailored recommendations for healthier and sustainable crops.Boost yield potential.",
    },
    {
      icon: <Fingerprint />,
      text: "Smart Irrigation Planner",
      description:
      "Optimize water usage based on weather predictions.Ensure efficient irrigation to save resources and maximize growth.Adapt to changing conditions with real-time updates.",
    },
    {
      icon: <ShieldHalf />,
      text: "Market Price Monitor",
      description:
        "Stay informed on current market trends and prices.Make profitable decisions with accurate analytics.Plan your sales for maximum returns with confidence.",
    }
  ];

function Features() {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[400px]">
    <div className="text-center">
     
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
        Empowering Farming{" "}
        <span className="bg-gradient-to-r from-blue-500 to-gray-800 text-transparent bg-clip-text">
           Through Insights
        </span>
      </h2>
    </div>
    <div className="flex flex-wrap mt-10 lg:mt-20">
      {features.map((feature, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
              {feature.icon}
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Features