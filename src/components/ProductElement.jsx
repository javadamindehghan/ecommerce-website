import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import Card from "react-animated-3d-card";
const ProductElement = ({ id, title, image, rating, price, brandName }) => {
  const product = {
    id, title, image, rating, price, brandName, amount: 1
  };
  return (
    <Link to={`/shop/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
    <Card
    style={{
      width: "100%",
      height: "100%",
      cursor: "pointer",
     
    }}
  >
    <div className="max-w-2xl">
      <div className="shadow-md rounded-lg max-w-sm bg-base-100">
        <Link to={`/shop/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
          <img
            className="rounded-t-lg p-8"
            src={`https://${image}`}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5">
          <Link to={`/shop/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
            <h3 className="font-semibold text-xl tracking-tight mb-5 text-accent-content">
              {title}
            </h3>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-accent-content">  تومان {price}</span>
          </div>
        </div>
      </div>
    </div>
    </Card>
    </Link>
  );
};

export default ProductElement;
