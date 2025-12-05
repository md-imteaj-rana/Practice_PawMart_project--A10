import React from "react";

const WinterCareTips = () => {
  const tips = [
    {
      icon: "❄️",
      title: "Keep Your Pet Warm Indoors",
      desc: "As temperatures drop, ensure your pet stays cozy indoors. Provide soft blankets, warm bedding, and avoid exposing them to cold floors for long periods.",
    },
    {
      icon: "🐾",
      title: "Moisturize Paws Regularly",
      desc: "Cold weather can cause cracked paws. Apply pet-safe balms to keep them moisturized and prevent irritation from snow, salt, or ice.",
    },
    {
      icon: "🧥",
      title: "Limit Outdoor Time",
      desc: "Shorter walks during extreme cold will reduce the risk of hypothermia, frostbite, and discomfort in your pets. Stay alert to their body language.",
    },
    {
      icon: "💧",
      title: "Hydrate & Maintain Nutrition",
      desc: "Pets lose moisture faster in winter. Make sure water bowls stay full, and feed a balanced diet to support warmth and immunity.",
    },
  ];

  return (
    <div className="w-full py-16 px-6 md:px-20 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-indigo-600 mb-12 tracking-wide">
        Winter Care Tips for Pets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-3 leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
