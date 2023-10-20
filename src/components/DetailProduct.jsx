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
          <div className="bg-red-300 w-1/2 h-96">
            <img src={image} alt="" />
            kiri
          </div>
          <div className="bg-blue-300 w-1/2 h-96">
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
  );
}
