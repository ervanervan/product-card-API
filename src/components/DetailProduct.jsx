import React from "react";

export default function DetailProduct({
  title,
  price,
  image,
  description,
  category,
}) {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl p-6 md:p-8">Detail Product</h1>
        <div className="flex gap-10 justify-center items-center">
          <div className="rounded-md shadow-md">
            <img src={image} alt="" />
          </div>
          <div className="flex gap-4">
            <h2 className="font-bold text-2xl">{title}</h2>
            <p className="italic text-lg">{category}</p>
            <p className="text-base font-medium">{description}</p>
            <p className="text-2xl font-bold">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
