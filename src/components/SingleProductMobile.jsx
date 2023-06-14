/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";

const SingleProductMobile = ({ orders }) => {
  const [products, setProducts] = useState([]);

  const id = orders - 1;
  const [colors, setColors] = useState([]);
  // const [value, setValue] = useState('2');
  // setValue(orders);
  // console.log(props.orders);

  useEffect(() => {
    getColor();
    getProduct();
  }, [id]);

  function getColor() {
    axios
      // .get("https://manz-orders-server.onrender.com/color")
      // .get("https://manz.nafisbd.com/db.json")
      .get("../db.json")
      .then(function (response) {
        console.log(response.data.colors);
        setColors(response.data.colors);
      });
  }

  const handleButtonClick = () => {
    const url = "https://m.me/manzfashionview"; // Replace with the desired URL
    window.open(url, "_blank");
  };

  function getProduct() {
    // axios.get(`https://manz.nafisbd.com/db.json`).then(function (response) {
    axios.get(`/db.json`).then(function (response) {
      setProducts(response.data.products[`${id}`]);
    });
  }
  const SVGa = (props) => (
    <svg
      fill="none"
      style={{
        transform: "scale(1.5)",
        opacity: 0.1,
      }}
      viewBox="0 0 375 283"
      {...props}
    >
      <rect
        width={152}
        height={152}
        x={159.52}
        y={175}
        fill="#fff"
        rx={8}
        transform="rotate(-45 159.52 175)"
      />
      <rect
        width={152}
        height={152}
        y={107.48}
        fill="#fff"
        rx={8}
        transform="rotate(-45 0 107.48)"
      />
    </svg>
  );

  const colored = colors?.[id];
  console.log("color");
  console.log(colored);

  return (
    <div className="flex w-[100%] justify-center">
      <div className=" px-24 sm:px-4 mt-24 flex  sm:flex-col max-w-[1024px] min-h-[300px] ">
        <div
          className="h-full w-1/2 sm:w-full relative overflow-hidden  drop-shadow-md drop-shadow-sky-700 rounded-l-lg sm:rounded-tr-lg sm:rounded-bl-none sm:rounded-tl-lg "
          style={{ backgroundColor: colored?.color }}
        >
          <SVGa className="absolute top-[100px]" />
          <h1 className="text-7xl sm:text-3xl text-slate-800 absolute top-5 left-5 font-bold opacity-60">
            {products.name}
          </h1>
          <div className="w-full flex justify-center items-center">
            <img
              src={products.image}
              alt=""
              className="w-3/4  pt-16 sm:pt-10 sm:pb-4 mb-4 z-20"
            />
          </div>
        </div>
        <div
          className="pl-7 pr-5 sm:px-5 py-5 w-1/2 sm:w-full   grid grid-cols-1 h-[100%] content-between rounded-r-lg sm:rounded-bl-lg sm:rounded-br-lg sm:rounded-r-none"
          style={{ backgroundColor: colored?.backColor }}
        >
          <h1 className="text-4xl font-extrabold text-slate-800">
            {" "}
            {products.name}{" "}
          </h1>
          <h3 className="text-lg font-semibold text-slate-500">
            {" "}
            {products.category}{" "}
          </h3>
          <p className="text-sm text-slate-800 font-normal">
            {" "}
            {products.description} Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quisquam, et accusantium. Temporibus sint velit
            asperiores cupiditate ducimus, similique nostrum quae praesentium
            provident, quia veritatis earum reprehenderit consequatur at iure
            harum!{" "}
          </p>
          {products.in_stock === 1 ? (
            <p className="text-lg text-slate-800 sm:py-2 font-semibold ">
              {" "}
              {products.status}{" "}
            </p>
          ) : (
            <p className="text-lg text-red-500 font-semibold">
              {" "}
              {products.status}{" "}
            </p>
          )}

          <div className="flex justify-between pr-6">
            <p className="text-3xl text-slate-400 font-bold">
              {" "}
              <span className="font-black text-xl">৳</span> {products.price}{" "}
            </p>
            <div
              className="p-[2px] border-2  rounded-full"
              style={{ borderColor: colored?.color }}
            >
              <button
                onClick={handleButtonClick}
                className="px-5 py-2 relative text-lg font-semibold hover:text-white hover:bg-sky-600 transition-all duration-300   rounded-full "
                style={{ backgroundColor: colored?.color }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductMobile;
