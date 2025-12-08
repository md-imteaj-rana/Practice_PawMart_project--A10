import React from 'react'
import { Heart, PawPrint, ShieldCheck, Users } from 'lucide-react'

const WhyPawMart = () => {
  return (
    <div className="w-full bg-gradient-to-br from-pink-100 to-orange-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 flex items-center justify-center gap-2 mb-4">
          🐾 Why Adopt from <span className="text-orange-600">PawMart?</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Choosing to adopt means giving a loving home to a pet in need. At PawMart, every adoption helps reduce homelessness, supports rescue missions, and brings joy to both pets and humans.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <PawPrint className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Save a Life</h3>
            <p className="text-gray-600 text-sm">
              Thousands of animals need homes. Your adoption gives them a second chance at life.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ethical Choice</h3>
            <p className="text-gray-600 text-sm">
              Adoption helps reduce unethical breeding practices and supports humane rescue efforts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Join a Caring Community</h3>
            <p className="text-gray-600 text-sm">
              Become part of a loving network of adopters and rescue supporters across the country.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WhyPawMart
