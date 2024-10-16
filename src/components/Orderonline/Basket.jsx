import React, { useCallback, useMemo } from 'react';
import { FaTrashAlt, FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Basket = ({ basket, setBasket }) => {
  const navigate = useNavigate();

  const increaseQuantity = useCallback((index) => {
    const updatedBasket = [...basket];
    updatedBasket[index].quantity += 1;
    setBasket(updatedBasket);
  }, [basket, setBasket]);

  const decreaseQuantity = useCallback((index) => {
    const updatedBasket = [...basket];
    if (updatedBasket[index].quantity > 1) {
      updatedBasket[index].quantity -= 1;
    } else {
      removeItem(index);
    }
    setBasket(updatedBasket);
  }, [basket, setBasket]);

  const removeItem = useCallback((index) => {
    const updatedBasket = basket.filter((_, i) => i !== index);
    setBasket(updatedBasket);
  }, [basket, setBasket]);

  const handleOrderNow = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ basket }), 
      });

      if (!response.ok) {
        navigate('/complete');
        return;
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error during checkout:', error);
      navigate('/complete');
    }
  }, [basket, navigate]);

  //we are here Memoizing the total calculation
  const total = useMemo(() => {
    return basket.reduce((total, item) => {
      return total + (item.price * (1 - item.discount)) * item.quantity;
    }, 0).toFixed(2);
  }, [basket]);

  return (
    <section id="basket" className="mt-12 bg-white rounded-lg shadow-lg p-4 md:p-6">
      <h3 className="text-2xl font-bold mb-4 text-center">Your Order</h3>
      {basket.length === 0 ? (
        <p className="text-gray-600 text-center">Your basket is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {basket.map((item, index) => (
              <li key={index} className="flex flex-col md:flex-row justify-between items-center">
                <span className="text-lg font-medium">{item.name}</span>
                <div className="flex items-center space-x-4 mt-2 md:mt-0">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(index)}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition"
                  >
                    +
                  </button>
                  <span className="text-lg font-semibold">
                    ${(item.price * (1 - item.discount)).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-xl font-bold text-yellow-500">
              ${total}
            </span>
          </div>

          <button
            onClick={handleOrderNow}
            className="mt-6 bg-yellow-500 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 w-full flex justify-center items-center"
          >
            <FaCartPlus className="mr-2" /> Order Now
          </button>
        </>
      )}
    </section>
  );
};

export default React.memo(Basket);
