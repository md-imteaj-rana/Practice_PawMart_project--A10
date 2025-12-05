import React from "react";

const MeetOurVets = () => {
  const vets = [
    {
      name: "Dr. Alicia Snow",
      specialty: "Winter Dermatology & Paw Care",
      exp: "8 Years Exp.",
      img: "https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg",
    },
    {
      name: "Dr. Kevin Frost",
      specialty: "Cold Weather Nutrition",
      exp: "6 Years Exp.",
      img: "https://images.pexels.com/photos/5327914/pexels-photo-5327914.jpeg",
    },
    {
      name: "Dr. Scarlett Pine",
      specialty: "Pet Allergies & Dry Skin",
      exp: "5 Years Exp.",
      img: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
    },
  ];

  return (
    <div className="w-full py-36 px-6 md:px-20 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-12 tracking-wide">
        Meet Our Expert Vets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {vets.map((vet, index) => (
          <div key={index} className="rounded-xl shadow-md border p-5 bg-white">
            <div className="w-full h-60 overflow-hidden rounded-lg mb-5">
              <img
                src={vet.img}
                alt={vet.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {vet.name}
            </h3>
            <p className="text-gray-700 mb-1">{vet.specialty}</p>
            <p className="text-sm text-gray-500 mb-4">{vet.exp}</p>

            <button className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-600 transition">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurVets;
