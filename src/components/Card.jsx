import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Card({
  id,
  title,
  price,
  image,
  description,
  category,
}) {
  const maxTitleLength = 17;
  const maxDescriptionLength = 70;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="w-76 md:w-56 border p-4 shadow-md rounded-md bg-white">
      <div className="relative w-full flex justify-center">
        <img src={image} alt="" className="object-contain h-40 w-96" />
        <div className="absolute top-0 right-0 text-gray-400 p-2 text-xs">
          #{id}
        </div>
      </div>
      <div>
        <h2 className="font-bold py-2 text-sm">
          {truncateText(title, maxTitleLength)}
        </h2>
        <p className="italic capitalize font-medium text-xs text-slate-700">
          {category}
        </p>
        <p className="py-2 text-slate-700 text-xs">
          {truncateText(description, maxDescriptionLength)}
        </p>
        <div className="flex justify-between items-center pt-2">
          <p className="font-bold text-sm">${price}</p>
          <Link to={`/detailproduct/${id}`}>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
}
