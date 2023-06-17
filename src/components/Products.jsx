import { useState } from "react";
import "../App.css";
// import SingleProduct from "./SingleProduct";

const Products = () => {
  const SingleProduct = () => {
    return (
      <div>
        <p>Selected Button: xvcxxc sdf sd</p>
      </div>
    );
  };
  const [order, setOrder] = useState("1");
  console.log(order);
  
//   const handleClicked = (value) => {
//     setOrder(value);
//   };
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
  function Button({ value, className }) {
    const handleClick = () => {
      onClick(value);
    };

    return (
      <button className={className} onClick={handleClick}>
        {value}
      </button>
    );
  }

  return (
    <div>
      <SingleProduct />
      <div className="p-24 flex flex-wrap items-center justify-center">
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
          <SVGa className="absolute top-[100px]" />
          <div className="relative pt-10 px-10 flex items-center justify-center z-10">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed"
              // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Indoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Peace Lily</span>
              <Button
                className={`bg`}
                onClick={() => setOrder("10")}
                value="36.00"
              />
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
          <SVGa className="absolute top-[100px]" />
          <div className="relative pt-10 px-10 flex items-center justify-center z-10">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed"
              // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Monstera</span>
              <span className=" bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $45.00
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
          <SVGa className="absolute top-[100px]" />
          <div className="relative pt-10 px-10 flex items-center justify-center z-10">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed "
              // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Oak Tree</span>
              <span className=" bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $68.50
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
          <SVGa className="absolute top-[100px]" />
          <div className="relative pt-10 px-10 flex items-center justify-center z-10">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed "
              // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Oak Tree</span>
              <span className=" bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $68.50
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
          <SVGa className="absolute top-[100px]" />
          <div className="relative pt-10 px-10 flex items-center justify-center z-10">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed "
              // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Oak Tree</span>
              <span className=" bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $68.50
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
          <SVGa className="absolute top-[100px]" />
          <div className="relative pt-10 px-10 flex items-center justify-center z-10">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed "
              // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Oak Tree</span>
              <span className=" bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $68.50
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
          <SVGa className="absolute top-[100px]" />
          <div className="relative pt-10 px-10 flex items-center justify-center z-10">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed "
              // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Oak Tree</span>
              <span className=" bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $68.50
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
          <SVGa className="absolute top-[100px]" />
          <div className="relative pt-10 px-10 flex items-center justify-center z-10">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed "
              // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Oak Tree</span>
              <span className=" bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $68.50
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
          <SVGa className="absolute top-[100px]" />
          <div className="relative pt-10 px-10 flex items-center justify-center z-10">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed "
              // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Oak Tree</span>
              <span className=" bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $68.50
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
          <SVGa className="absolute top-[100px]" />
          <div className="relative pt-10 px-10 flex items-center justify-center z-10">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed "
              // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Oak Tree</span>
              <span className=" bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $68.50
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
          <SVGa className="absolute top-[100px]" />
          <div className="relative pt-10 px-10 flex items-center justify-center z-10">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed "
              // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
            ></div>
            <img
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">Oak Tree</span>
              <span className=" bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $68.50
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
