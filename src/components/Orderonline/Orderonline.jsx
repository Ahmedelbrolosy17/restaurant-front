import React, { useCallback, useMemo } from 'react';
import pasta from '../../assets/dish1.jpg';
import salmon from '../../assets/dish2.jpg';
import chocolate from '../../assets/dish3.jpg';
import meat from '../../assets/meat.jpg';
import chicken from '../../assets/chicken.jpg';
import pizza from '../../assets/pizza.jpg';

const foodItems = [
  {
    id: 1,
    name: 'Truffle Pasta',
    description: 'Delicious pasta with fresh truffles and a rich creamy sauce.',
    price: 15.99,
    discount: 0.10,
    img: pasta,
  },
  {
    id: 2,
    name: 'Grilled Salmon',
    description: 'Freshly grilled salmon with a lemon herb dressing.',
    price: 18.99,
    discount: 0.15,
    img: salmon,
  },
  {
    id: 3,
    name: 'smoken meat',
    description: 'Delicious meat with fresh sous and a combination of rich flavours.',
    price: 25.99,
    discount: 0.05,
    img: meat,
  },
  {
    id: 4,
    name: 'Chocolate Fondant',
    description: 'Rich molten chocolate cake served with vanilla ice cream.',
    price: 8.99,
    discount: 0.05,
    img: chocolate,
  },
  {
    id: 5,
    name: 'Juicy Chicken',
    description: 'Fresh chicken served with rice and vegetables.',
    price: 20.99,
    discount: 0.09,
    img: chicken,
  },
  {
    id: 6,
    name: 'Italian Pizza',
    description: 'Original Italian pizza with a mix of meat and vegetables.',
    price: 15.99,
    discount: 0.10,
    img: pizza,
  },
];

const OrderOnline = ({ basket, setBasket }) => {
  // Memoizing the basket addition logic
  const addToBasket = useCallback((item) => {
    if (typeof setBasket !== 'function') {
      console.error('setBasket is not a function:', setBasket);
      return;
    }

    if (!Array.isArray(basket)) {
      console.error('Basket is not an array:', basket);
      setBasket([{ ...item, quantity: 1 }]);
      return;
    }

    const existingItem = basket.find((basketItem) => basketItem.name === item.name);

    if (existingItem) {
      const updatedBasket = basket.map((basketItem) =>
        basketItem.name === item.name
          ? { ...basketItem, quantity: basketItem.quantity + 1 }
          : basketItem
      );
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, { ...item, quantity: 1 }]);
    }
  }, [basket, setBasket]);

  // Memoizing the food items with their discounted prices
  const memoizedFoodItems = useMemo(() => {
    return foodItems.map((item) => ({
      ...item,
      discountedPrice: (item.price * (1 - item.discount)).toFixed(2),
    }));
  }, []);

  return (
    <section id="order-online" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Order Online</h2>

        {/* Food items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoizedFoodItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>

              {/* Price and discount */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-800">${item.discountedPrice}</span>
                {item.discount > 0 && (
                  <span className="text-sm text-red-500 line-through">${item.price.toFixed(2)}</span>
                )}
              </div>

              {/* Add to basket button */}
              <button
                onClick={() => addToBasket(item)}
                className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 w-full"
              >
                Add to Basket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Wrapping with React.memo to prevent unnecessary re-renders
export default React.memo(OrderOnline);
