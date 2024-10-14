import React, { useState } from 'react';
import OrderOnline from './Orderonline';
import Basket from './Basket';


export default function RestaurantPage() {
  const [basket, setBasket] = useState([]);

  return (
    <div>
      <OrderOnline basket={basket} setBasket={setBasket} />
      <Basket basket={basket} setBasket={setBasket}/>
    </div>
  );
}