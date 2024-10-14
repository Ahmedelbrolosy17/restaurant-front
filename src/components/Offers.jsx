import React from 'react';
import { useNavigate } from 'react-router-dom';
import offer1 from '../assets/vege.jpg';
import offer2 from '../assets/dish3.jpg';
import offer3 from '../assets/drinks.jpg';

const Offers = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const offers = [
    {
      title: '50% Off on Starters',
      img: offer1,
      description: 'Enjoy half-price starters during our grand opening week! Available for all dine-in guests.',
    },
    {
      title: 'Free Dessert with Every Main Course',
      img: offer2,
      description: 'Order any main course and get a delicious dessert for free! Available all week long.',
    },
    {
      title: 'Buy 1 Get 1 Free on Drinks',
      img: offer3,
      description: 'Celebrate with us! Buy one drink and get another one absolutely free. Offer valid for cocktails and soft drinks.',
    },
  ];

  const handleOrderNow = () => {
    navigate('/order'); // Navigate to the order page
  };

  const handleReservation = () => {
    navigate('/reservation'); // Navigate to the reservation page (change the route as needed)
  };

  return (
    <section id="offers" className="bg-yellow-100 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Special Offers for the Grand Opening</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 md:p-6">
              <img src={offer.img} alt={offer.title} className="w-full h-40 md:h-48 object-cover rounded-md mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          ))}
        </div>
        
        {/* Buttons for Reservation and Order Now */}
        <div className="mt-8 text-center flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={handleReservation}
            className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Make a Reservation
          </button>
          <span className="md:py-2 font-bold">or</span>
          <button
            onClick={handleOrderNow}
            className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
  
};

export default Offers;
