import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function DetailProduct() {
  const [data, setData] = useState();
  const { id } = useParams();

  const navigation = useNavigate();
  const handleHome = () => {
    navigation("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl p-6 md:p-8">Detail Product</h1>
        <button
          className="flex gap-1 md:gap-2 px-6 text-base md:text-lg text-gray-700 items-center py-4 rounded-md"
          onClick={handleHome}
        >
          <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
          <p>kembali</p>
        </button>

        {data && (
          <div className="flex justify-center items-center px-6 lg:px-10 flex-col md:flex-row">
            <div className="flex justify-center rounded-md flex-1 p-5">
              <img
                src={data.image}
                alt="product image"
                className="h-60 lg:h-[25rem]"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-6 flex-1">
              <h2 className="font-bold text-xl lg:text-3xl text-slate-900">
                {data.title}
              </h2>
              <p className="italic capitalize text-base lg:text-xl text-gray-700">
                {data.category}
              </p>
              <p className="text-base lg:text-lg text-gray-700">
                {data.description}
              </p>
              <p className="text-lg lg:text-2xl font-bold text-slate-900">
                ${data.price}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
