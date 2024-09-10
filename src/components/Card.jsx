import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/Cart-slice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  function handleAddtoCart() {
    dispatch(addToCart(product));
  }
  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }
  return (
    <div className="div-card">
      <img src={product.image} alt="" />
      <span>{product.title}</span>
      <span>{`Price : $${product.price}`}</span>
      <span>{`${product.rating.rate}⭐`}</span>

      <button
        onClick={
          cart.some((item) => item.id === product.id)
            ? handleRemoveFromCart
            : handleAddtoCart
        }
      >
        {cart.some((item) => item.id === product.id)
          ? "Remove from Cart"
          : "Add to Cart"}
      </button>
    </div>
  );
};

export default Card;
