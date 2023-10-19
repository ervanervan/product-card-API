import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const HomePage = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
    setProducts(dataProduct);
  };

  useEffect(() => {
    getDataProducts();
  });

  return (
    <>
      <section className="bg-slate-50">
        <div className="container mx-auto">
          <h1 className="font-bold text-2xl p-6 md:p-8">Product Cards</h1>
          <div className="px-6 pb-6 flex gap-3 flex-wrap items-start justify-center">
            {products.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
