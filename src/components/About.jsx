import React from 'react';
import chef1 from '../assets/chef.jpg'
import chef2 from '../assets/chef2.jpg';
import chef3 from '../assets/chef3.jpg';
import chef6 from '../assets/femaleChef.jpg';

const About = () => {
  const chefs = [
    {
      name: 'Chef Mario Rossi',
      title: 'Head Chef',
      img: chef1,
      description: 'Chef Mario brings over 20 years of experience in Italian cuisine, known for his mastery of truffle-infused dishes.',
    },
    {
      name: 'Chef Ana Martinez',
      title: 'Pastry Chef',
      img: chef2,
      description: 'Ana is a renowned pastry chef, famous for her mouth-watering chocolate desserts and delicate pastries.',
    },
    {
      name: 'Chef John Doe',
      title: 'Sous Chef',
      img: chef3,
      description: 'John is our innovative sous chef, creating fusion dishes that blend international flavors with local ingredients.',
    },
    {
      name: 'Chef luka Doe',
      title: 'pizza Chef',
      img: chef3,
      description: 'luka is our innovative pizza chef, creating fusion dishes that blend international flavors with local ingredients.',
    },
    {
      name: 'Chef John lay',
      title: 'meat Chef',
      img: chef2,
      description: 'John is our innovative meat chef, creating fusion dishes that blend international flavors with meat, and sous.',
    },
    {
      name: 'Chef emily hay',
      title: 'desert Chef',
      img: chef6,
      description: 'emily is our innovative desert chef, creating elite dishes that blend international flavors with local ingredients.',
    },
  ];

  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          Welcome to Pickies Delights, where every meal is crafted with passion and precision. Our team of world-class chefs brings together
          a unique blend of culinary traditions, making every bite unforgettable.
        </p>

        {/* Chef Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {chefs.map((chef, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
              <img src={chef.img} alt={chef.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{chef.name}</h3>
              <h4 className="text-md text-yellow-500 mb-2">{chef.title}</h4>
              <p className="text-gray-600">{chef.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
