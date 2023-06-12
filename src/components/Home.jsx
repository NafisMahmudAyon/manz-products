import SingleProduct from "./SingleProduct";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Home() {
  const [order, setOrder] = useState("1");
  const [products, setProducts] = useState([]);

  const [colors, setColors] = useState([]);
  // const [back, setBack] = useState([]);
  useEffect(() => {
    getColor();
    getProduct();
  }, []);

  // console.log(back);
  // console.log("back");
  // console.log(order);
  function getColor() {
    axios.get("http://localhost:3000/color").then(function (response) {
      console.log(response.data);
      setColors(response.data);
    });
  }
  function getProduct() {
    axios.get("http://localhost:3000/products").then(function (response) {
      console.log(response.data);
      setProducts(response.data);
    });
  }

  console.log(order);
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

  return (
    <div className="bg-stone-800 min-h-screen pt-4">
      <Navbar />
      {/* <SingleProduct 
      messages={order} 
      /> */}
      <SingleProduct order={order} />
      <div>
        <div className="p-24 flex flex-wrap items-center justify-center">
          {Array.isArray(products)
            ? products.map((product, index) => {
                const color = colors[index % colors.length];
                const stock = product.in_stock;
                console.log(stock);
                return (
                  <div
                    key={index}
                    style={{ backgroundColor: color.color }}
                    className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-lg"
                  >
                    <div className="absolute top-2 left-2 z-50 ">
                      {stock === 1 ? (
                        // <p
                        //   className="absolute top-2 left-2 bg-gray-50 px-2 z-50 py-2 rounded-full"
                        //   title={product.status}
                        // ></p>
                        <div
                          className="iconDiv relative"
                          title={product.status}
                          tabIndex="0"
                        >
                          <div className="iconSVG ">
                            <p className="bg-white px-2  py-2 rounded-full"></p>
                          </div>
                        </div>
                      ) : (
                        // <p
                        //   className="absolute top-2 left-2 bg-red-900 px-2 z-50 py-2 rounded-full"
                        //   title={product.status}
                        // ></p>
                        <div
                          className="iconDiv relative"
                          title={product.status}
                          tabIndex="0"
                        >
                          <div className="iconSVG ">
                            <p className="bg-red-500 px-2  py-2 rounded-full"></p>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* <p className="absolute top-2 left-2 bg-indigo-400 px-2 py-2 text-sm text-white rounded-full">{product.in_stock}</p> */}
                    <SVGa className="absolute top-[100px]" />
                    <div className="relative pt-10 px-10 flex items-center justify-center z-10">
                      <div
                        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed"
                        // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
                      ></div>
                      <img
                        className="relative pt-4 w-40 h-[200px] object-cover"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                      <span className="block opacity-75 text-sm -mb-1">
                        {product.category}
                      </span>
                      <div className="flex justify-between">
                        <span className="block font-semibold text-xl">
                          {product.name}
                        </span>
                        <button
                          onClick={() => setOrder(product.id)}
                          className=" z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                        >
                          <span className="font-black text-[12px]">৳</span>{" "}
                          {product.price}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}

          {/* <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
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
                <button
                  onClick={() => setOrder("10")}
                  className=" z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                >
                  $36.00
                </button>
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
                <button
                  onClick={() => setOrder("30")}
                  className=" z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                >
                  $36.00
                </button>
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
                <button
                  onClick={() => setOrder("20")}
                  className=" z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                >
                  $36.00
                </button>
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
                src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                alt=""
              />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Peace Lily</span>
                <button
                  onClick={() => setOrder("10")}
                  className=" z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                >
                  $36.00
                </button>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
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
                <button
                  onClick={() => setOrder("30")}
                  className=" z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                >
                  $36.00
                </button>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
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
                <button
                  onClick={() => setOrder("20")}
                  className=" z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                >
                  $36.00
                </button>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
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
                <button
                  onClick={() => setOrder("10")}
                  className=" z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                >
                  $36.00
                </button>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
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
                <button
                  onClick={() => setOrder("30")}
                  className=" z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                >
                  $36.00
                </button>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
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
                <button
                  onClick={() => setOrder("20")}
                  className=" z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                >
                  $36.00
                </button>
              </div>
            </div>
          </div> */}

          {/* <div className="iconDiv relative" title="Load file" tabIndex="0">
            <div className="iconSVG ">
              <div className="absolute m-auto top-2 left-2 bg-red-500 px-2 z-50 py-2 rounded-full"></div>
            </div>
          </div> */}

          {/* asdasdasd */}
        </div>
      </div>
    </div>
  );
}

export default Home;
