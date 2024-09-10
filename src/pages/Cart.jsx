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
    <div className="div-cart">
      {cart.length > 0 && (
        <div className="div-summary">
          <span>Your Cart Summary</span>
          <span>{`Total Items : ${cart.length}`}</span>
          <span>{`Total Amount : $ ${totalCart}`}</span>
        </div>
      )}
      <div className="div-item">
        {cart.map((cartItem, index) => (
          <Card product={cartItem} key={index} />
        ))}
      </div>
      {cart.length === 0 ? (
        <div className="div-empty-cart">
          <span>Cart is Empty</span>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
