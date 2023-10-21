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
          className="flex gap-2 px-6 text-lg text-gray-700 items-center"
          onClick={handleHome}
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          <p>kembali</p>
        </button>

        {data && (
          <div className="flex gap-10 justify-center items-center px-10">
            <div className="flex justify-center rounded-md flex-1">
              <img src={data.image} alt="product image" className="h-[28rem]" />
            </div>
            <div className="flex flex-col gap-6 flex-1">
              <h2 className="font-bold text-3xl">{data.title}</h2>
              <p className="italic capitalize text-xl text-gray-500">
                {data.category}
              </p>
              <p className="text-xl text-gray-500">{data.description}</p>
              <p className="text-2xl font-bold">${data.price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
