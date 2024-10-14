import React from 'react';
import profile1 from '../assets/review.jpg';
import profile2 from '../assets/review2.jpg';
import profile3 from '../assets/review3.jpg';
import profile4 from '../assets/review4.jpg';
import profile5 from '../assets/review5.jpg';
import profile6 from '../assets/review6.jpg';

const Reviews = () => {
  const reviews = [
    {
      name: 'John Doe',
      img: profile1,
      feedback: 'Amazing food and great service! Will definitely be coming back.',
    },
    {
      name: 'Jane Smith',
      img: profile2,
      feedback: 'The ambiance was perfect, and the dishes were absolutely delicious!',
    },
    {
      name: 'Emily Johnson',
      img: profile3,
      feedback: 'Hands down the best dining experience I’ve had in a long time. Highly recommend!',
    },
    {
      name: 'may lane',
      img: profile4,
      feedback: "It was such an extraordinary experience, it's one of my favourite places from now",
    },
    {
      name: 'nute owen',
      img: profile5,
      feedback: "good place, good service, good food, and i really enjoyed it",
    },
    {
      name: 'alex moray',
      img: profile6,
      feedback: "i never thought i would leave a review but this place deserves it, an extraordinary restaurant",
    },
  ];

  return (
    <section id="reviews" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={review.img}
                alt={review.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-600 italic">"{review.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
};

export default Reviews;
