import React from "react";
import DetailCard from "../components/DetailCard";

const Cart = () => {
  return (
    <div className="div-cart">
      <div className="div-summary">
        <span>Your Cart Summary</span>
        <span>Total Items : 3</span>
        <span>Total Amount : $ 209</span>
      </div>
      <div className="div-item">
        <DetailCard />
        <DetailCard />
        <DetailCard />
        <DetailCard />
        <DetailCard />
      </div>
    </div>
  );
};

export default Cart;
