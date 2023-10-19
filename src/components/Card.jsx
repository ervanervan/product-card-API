import React from "react";

export default function Card({
  id,
  title,
  price,
  image,
  description,
  category,
}) {
  const maxTitleLength = 20;
  const maxDescriptionLength = 70;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="w-72 border p-4 shadow-md rounded-md bg-white">
      <div className="relative w-full flex justify-center">
        <img src={image} alt="" className="object-contain h-48 w-96" />
        <div className="absolute top-0 right-0 text-gray-400 p-2">#{id}</div>
      </div>
      <div>
        <h2 className="font-bold text-lg py-2">
          {truncateText(title, maxTitleLength)}
        </h2>
        <p className="italic capitalize font-medium">{category}</p>
        <p className="py-2">
          {truncateText(description, maxDescriptionLength)}
        </p>
        <p className="font-bold mt-2">${price}</p>
      </div>
    </div>
  );
}
