import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/Cart-slice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const inCart = cart.some((item) => item.id === product.id);

  const handleClick = () => {
    inCart
      ? dispatch(removeFromCart(product.id))
      : dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-col items-center gap-4 border border-red-800 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="w-full aspect-[1/1.2] object-contain"
      />
      <span className="text-xl font-semibold text-red-800 text-center line-clamp-1">
        {product.title}
      </span>
      <span className="text-2xl font-bold">{`Price: $${product.price}`}</span>
      <span className="text-lg font-medium text-gray-700">{`${product.rating.rate} ⭐`}</span>
      <button
        onClick={handleClick}
        className={`px-6 py-2 font-semibold rounded-lg border transition-all duration-300 ${
          inCart
            ? "bg-black text-white border-black hover:bg-red-800"
            : "bg-red-800 text-white border-red-800 hover:bg-black"
        }`}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Card;
