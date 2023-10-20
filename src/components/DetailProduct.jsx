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
        <div className="flex">
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
