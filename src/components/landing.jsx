import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Reservation from './reservation/booking';
import chef from '../assets/chef.jpg'
import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';
import dish4 from '../assets/meat.jpg';
import dish5 from '../assets/food.jpg';
import dish6 from '../assets/chicken.jpg';
import About from './About';
import Offers from './Offers';
import Reviews from './Reviews';
import Contact from './Contact';
import PolicyAndConditions from './Conditions';
import Layout from './Layout';
import Sidebar from './Sidebar';
import RestaurantPage from './Orderonline/Restaurantpage';
import Completion from './Orderonline/Completion'

const Home = () => (
  <div className="min-h-screen bg-gray-100">

    {/* Hero Section with Image Overlay */}
    <section id='hero' className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img src={chef} alt="Restaurant ambiance" className="absolute inset-0 w-full h-full object-cover" />
      <Sidebar/>
      <div className="relative z-20 text-center text-white px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Pickies Delights</h2>
        <p className="text-lg md:text-xl mb-8">Experience culinary excellence in every bite</p>
        <Link to="/reservation" className="bg-yellow-500 text-gray-800 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 text-md md:text-lg">
          Reserve a Table
        </Link>
      </div>
    </section>

    {/* Menu Highlights */}
    <section id="menu" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Signature Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { name: 'Truffle Pasta', img: dish1 },
            { name: 'Grilled Salmon', img: dish2 },
            { name: 'Chocolate Fondant', img: dish3 },
            { name: 'Smoked Meat', img: dish4 },
            { name: 'Chinese Food', img: dish5 },
            { name: 'Regular Chicken', img: dish6 },
          ].map((dish, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 md:p-6 cursor-pointer">
              <img src={dish.img} alt={dish.name} className="w-full h-40 md:h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Reviews Section */}
    <Reviews/>

    {/* Contact Section */}
    <Contact/>
</div>

);

const RestaurantLandingPage = () => {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order" element={<RestaurantPage />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/policy&Conditions' element={<PolicyAndConditions/>}/>
          <Route path='/complete' element={<Completion/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default RestaurantLandingPage;