import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
const TemporaryMessage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md mt-4">
        {/* Celebration Icon */}
        <FaCheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-green-600 mb-2">
          Thank you for ordering with us!
        </h1>
        <p className="text-gray-600">
          You will be redirected to the home page shortly.
        </p>
      </div>
    </div>
  );
};

export default TemporaryMessage;
