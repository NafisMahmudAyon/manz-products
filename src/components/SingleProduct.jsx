/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import ImageCarousel from "./ImageCarousel";

const SingleProduct = ({ order }) => {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [sizes, setSizes] = useState([]);
  // const value = 0;
  const [sizesId, setSizesId] = useState(0);
  console.log("sizeId" + sizesId);

  const [sizesDetails, setSizesDetails] = useState([]);
  const id = order - 1;
  const [colors, setColors] = useState([]);
  // const [value, setValue] = useState('2');
  // setValue(orders);
  // console.log(props.orders);

  useEffect(() => {
    getColor();
    getProduct();
    getImages();
    getSizes();
    getSizesDetails();
  }, [id, sizesId]);

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

  const handleSize = (ids) => {
    setSizesId(ids);
  };

  function getProduct() {
    // axios.get(`https://manz.nafisbd.com/db.json`).then(function (response) {
    axios.get(`/db.json`).then(function (response) {
      setProducts(response.data.products[`${id}`]);
    });
  }
  function getImages() {
    // axios.get(`https://manz.nafisbd.com/db.json`).then(function (response) {
    axios.get(`/db.json`).then(function (response) {
      setImages(response.data.products[`${id}`].images);
      console.log(response.data.products[`${id}`].images);
    });
  }
  function getSizes() {
    // axios.get(`https://manz.nafisbd.com/db.json`).then(function (response) {
    axios.get(`/db.json`).then(function (response) {
      setSizes(response.data.products[`${id}`].sizes);
      console.log(response.data.products[`${id}`].sizes);
    });
  }
  function getSizesDetails() {
    // axios.get(`https://manz.nafisbd.com/db.json`).then(function (response) {
    axios.get(`/db.json`).then(function (response) {
      setSizesDetails(response.data.products[`${id}`].sizes[`${sizesId}`]);
      console.log(response.data.products[`${id}`].sizes[`${sizesId}`]);
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
  const colored = colors[id % colors.length];
  // const images = [products.images];
  // console.log("product" + products);
  // console.log("iamge" + images);
  const detailsStatus = sizesDetails.status;
  const detailsStock = sizesDetails.in_stock;
  const detailsPrice = sizesDetails.price;
  const detailsColor = sizesDetails.colors;
  console.log("sizedetails" + sizesDetails.status);

  return (
    <div className="flex w-[100%] justify-center ">
      {}
      <div className=" px-24 sm:px-4 mt-4 flex  sm:flex-col max-w-[1024px] min-h-[300px]  ">
        <div
          className="h-full w-1/2 sm:w-full relative overflow-hidden  drop-shadow-md drop-shadow-sky-700 rounded-l-lg sm:rounded-tr-lg sm:rounded-bl-none sm:rounded-tl-lg "
          style={{ backgroundColor: colored?.color }}
        >
          <SVGa className="absolute top-[100px]" />
          <h1 className="text-7xl sm:text-3xl text-slate-800 absolute top-5 left-5 font-bold opacity-60">
            {products.name}
          </h1>
          <div className="w-full flex justify-center items-center">
            <ImageCarousel images={images} />
          </div>
        </div>
        <div
          className="pl-7 pr-5 sm:px-5 py-5 pb-7 w-1/2 sm:w-full  flex flex-col justify-between gap-3  h-[100%] content-between rounded-r-lg sm:rounded-bl-lg sm:rounded-br-lg sm:rounded-r-none"
          style={{ backgroundColor: colored?.backColor }}
        >
          <div>
            <h1 className="text-4xl py-4 font-extrabold text-slate-800">
              {" "}
              {products.name}{" "}
            </h1>
            <h3 className="text-lg font-semibold text-slate-500">
              {" "}
              {products.category}{" "}
            </h3>
          </div>
          <p className="text-sm text-slate-800 py-3 font-normal">
            {" "}
            {products.description} Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quisquam, et accusantium. Temporibus sint velit
            asperiores cupiditate ducimus, similique nostrum quae praesentium
            provident, quia veritatis earum reprehenderit consequatur at iure
            harum!{" "}
          </p>
          <div>
            <div className="flex gap-6 py-5">
              {Array.isArray(sizes)
                ? sizes.map((size) => {
                    return (
                      <div
                        key={size.id}
                        className="border-2 rounded-md p-3 cursor-pointer"
                        style={{ borderColor: colored?.color }}
                        onClick={handleSize.bind(null, size.id - 1)}
                      >
                        {size.sizeTitle}
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="flex gap-4 py-3 pb-5">
              {Array.isArray(detailsColor)
                ? detailsColor.map((color) => {
                    return (
                      <div
                        key={color.id}
                        className="p-4 rounded-full"
                        style={{ backgroundColor: color?.color }}
                      ></div>
                    );
                  })
                : null}
            </div>
            <div>
              {detailsStock === 1 ? (
                <p className="text-lg text-slate-800 sm:py-2 font-semibold ">
                  {" "}
                  {detailsStatus}{" "}
                </p>
              ) : (
                <p className="text-lg text-red-500 font-semibold">
                  {" "}
                  {detailsStatus}{" "}
                </p>
              )}

              <div className="flex justify-between pr-6">
                <p className="text-5xl text-slate-400 font-bold"
                style={{ color: colored?.color }}
                >
                  {" "}
                  <span className="font-black text-2xl">৳</span> {detailsPrice}{" "}
                </p>
                <div
                  className="p-[2px] border-2  rounded-full"
                  style={{ borderColor: colored?.color }}
                >
                  <button
                    onClick={handleButtonClick}
                    className="px-5 py-2 relative text-lg font-semibold hover:text-white hover:bg-sky-600 transition-all duration-300  rounded-full "
                    style={{ backgroundColor: colored?.color }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              {/* {detailsStatus}
            {detailsStock}
            {detailsPrice} */}
            </div>
          </div>

          {/* {products.in_stock === 1 ? (
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
            <p className="text-5xl text-slate-400 font-bold">
              {" "}
              <span className="font-black text-2xl">৳</span> {products.price}{" "}
            </p>
            <div
              className="p-[2px] border-2  rounded-full"
              style={{ borderColor: colored?.color }}
            >
              <button
                onClick={handleButtonClick}
                className="px-5 py-2 relative text-lg font-semibold hover:text-white hover:bg-sky-600 transition-all duration-300  rounded-full "
                style={{ backgroundColor: colored?.color }}
              >
                Buy Now
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
