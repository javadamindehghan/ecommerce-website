import React, { useEffect } from "react";
import "../styles/Landing.css";
import { Hero, ProductElement, Stats } from "../components";
import { useLoaderData, useNavigate } from "react-router-dom";

import dbJson from "../data/db.json"



const Landing = () => {

  
 


  return (
    <main>
      <Hero />
      <Stats />

      <div className="selected-products">
        <h2 className="text-6xl text-center my-12 max-md:text-4xl text-accent-content">
         محصولات پر بازدید
        </h2>
        
  
      <div className="selected-products-grid max-w-7xl mx-auto ">
          {dbJson.products.map((product) => (
            <ProductElement
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.imageUrl}
              rating={product.rating}
              price={product.price.current.value}
            />
          ))}
            </div>
        
      
      </div>
    </main>
  );
};

export default Landing;
