import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:justify-center md:gap-8">
      {cart.length > 0 && (
        <div className="flex flex-col items-center gap-2 border border-red-800 rounded-lg p-4 md:mt-16 md:order-2">
          <span className="text-2xl font-bold text-red-800">
            Your Cart Summary
          </span>
          <span className="text-xl font-semibold">{`Total Items: ${cart.length}`}</span>
          <span className="text-xl font-semibold text-red-800">{`Total Amount: $${totalCart.toFixed(
            2
          )}`}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:order-1 w-full">
        {cart.map((cartItem, index) => (
          <Card product={cartItem} key={index} />
        ))}
      </div>

      {cart.length === 0 && (
        <div className="flex justify-center items-center h-40 w-full text-center">
          <span className="text-3xl md:text-5xl font-bold text-red-800">
            Cart is Empty
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
