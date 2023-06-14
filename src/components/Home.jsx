import SingleProduct from "./SingleProduct";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Home() {
  const [order, setOrder] = useState("1");
  // const [orders, setOrders] = useState("");
  const [products, setProducts] = useState([]);

  const [colors, setColors] = useState([]);
  // const [popupVisible, setPopupVisible] = useState(false);
  useEffect(() => {
    getColor();
    getProduct();
  }, []);

  function getColor() {
    axios
      // .get("https://manz-orders-server.onrender.com/color")
      // .get("https://manz.nafisbd.com/db.json")
      .get("../db.json")
      .then(function (response) {
        console.log(response.data.color);
        setColors(response.data.color);
      });
  }
  function getProduct() {
    // axios.get("https://manz-orders-server.onrender.com/products").then(function (response) {
    // axios.get("https://manz.nafisbd.com/db.json").then(function (response) {
    axios.get("/db.json").then(function (response) {
      console.log("Hello1");
      console.log(response.data.products);
      console.log("Hello2");
      setProducts(response.data.products);
    });
  }

  // const handleElementClick = () => {
  // const handleElementClick = (productId) => {
  //   setPopupVisible(true);
  //   setOrders(productId);
  //   setOrder(productId);
  // };

  // const handlePopupClose = () => {
  //   setPopupVisible(false);
  // };

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
    <div className="bg-[#0E2954] min-h-screen">
      <div className="sticky top-0 py-4 z-[1000] bg-[#0E2954] sm:hidden">
        <Navbar />
        <SingleProduct order={order} />
      </div>
      
      {/* {popupVisible && (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <div className="flex justify-end">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={handlePopupClose()}
              >
                &times;
              </button>
            </div>
            <SingleProductMobile orders={orders} />
            hello
          </div>
        </div>
      )} */}
      <div>
        {/* <div className="p-24 flex flex-wrap items-center justify-center overflow-auto overflow-x-hidden lg:hidden">
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
                    <button onClick={handleElementClick(product.id)}>
                      <div className="absolute top-2 left-2 z-50 ">
                        {stock === 1 ? (
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
                      <SVGa className="absolute top-[100px]" />
                      <div className="relative pt-10 px-10 flex items-center justify-center z-10">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed"></div>
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
                            
                            className=" z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
                          >
                            <span className="font-black text-[12px]">৳</span>{" "}
                            {product.price}
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })
            : null}
        </div> */}
        <div className="p-24 flex flex-wrap items-center justify-center overflow-auto overflow-x-hidden ">
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
                    {/* <button onClick={() => setOrder(product.id)}> */}
                    <button onClick={() => setOrder(product.id)}>
                      <div className="absolute top-2 left-2 z-50 ">
                        {stock === 1 ? (
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
                      <SVGa className="absolute top-[100px]" />
                      <div className="relative pt-10 px-10 flex items-center justify-center z-10">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 threed"></div>
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
                          <button className=" z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                            <span className="font-black text-[12px]">৳</span>{" "}
                            {product.price}
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
