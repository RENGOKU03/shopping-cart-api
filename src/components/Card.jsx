import React from "react";

const Card = ({ product }) => {
  console.log(product);
  function handleAddtoCart(id) {
    console.log(id);
  }
  return (
    <div className="div-card">
      <img src={product.image} alt="" />
      <span>{product.title}</span>
      <span>{`Price : $${product.price}`}</span>
      <span>{`${product.rating.rate}⭐`}</span>

      <button onClick={() => handleAddtoCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default Card;
