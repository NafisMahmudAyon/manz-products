import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function OrderList() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getOrder();
  }, []);

  // function getProduct() {
  //   axios.get(`../db.json`).then(function (response) {
  //     console.log(response.data.products);
  //     setProducts(response.data.products[`${id}`]);
  //   });
  // }

  function getOrder() {
    // .get("https://manz-orders-server.onrender.com/dashboard")
    // axios.get(`https://manz.nafisbd.com/db.json`).then(function (response) {
    axios.get(`/db.json`).then(function (response) {
      console.log("hello");
      const datas = response.data.dashboard;
      const sortDetails = datas.sort((a,b) => b.id - a.id);
      console.log(sortDetails);
      setDetails(sortDetails);
    });
  }
  console.log(details);
  
  return (
    <div className="bg-[#0E2954] min-h-screen overflow-hidden">
      {/* <div className="mx-auto pt-10">
        <img
          src="/lg.png"
          alt=""
          className="cover w-48 sm:w-32 md:w-36  mb-10"
        />
      </div> */}
      <div className="z-[1000] sm:block md:block sm:static sticky top-0 py-4  bg-[#0E2954]">
        <Navbar />
      </div>
      <div className=" w-[100%]  flex flex-col items-center justify-center py-3 ">
        <div className="overflow-x-auto ">
          <table className="w-full sm:hidden md:hidden lg:block xl:block 2xl:block table-auto block text-sm mx-auto text-left text-gray-500 ">
            <thead className="text-xs  uppercase  bg-gray-900 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order No.
                </th>
                <th colSpan="2" scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Expected Delivery
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Details</span>
                </th>
              </tr>
            </thead>

            <tbody className="">
              {Array.isArray(details)
                ? details.map((detail, index) => {
                    return (
                      <tr className="bg-white border-b h-5" key={index}>
                        <td className="">
                          <Link
                            to={`order/${detail.id}/`}
                            style={{ marginRight: "10px" }}
                            className="hover:text-yellow-400 px-6 py-4 font-medium whitespace-nowrap "
                          >
                            {detail.orderNo}
                          </Link>
                        </td>
                        <td colSpan="2" className="px-6 py-4">
                          {detail.customerName}
                        </td>
                        <td className="px-6 py-4">{detail.orderDate}</td>
                        <td className="px-6 py-4">{detail.expectedDate} </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-md uppercase text-red-500 font-bold bg-red-300 block">
                            {detail.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded-md uppercase text-emerald-700 font-bold bg-emerald-300">
                            {detail.payment}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-gray-600 hover:text-gray-900 font-bold">
                          <Link
                            to={`order/${detail.id}/`}
                            style={{ marginRight: "10px" }}
                            className="px-6 py-4 text-right text-gray-600 hover:text-yellow-400 font-bold"
                          >
                            Details
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
        <div className=" flex w-[100%] justify-center flex-col my-4 sm:block md:block lg:hidden xl:hidden 2xl:hidden">
          {Array.isArray(details)
            ? details.map((detail) => {
                return (
                  <div
                    key={detail.id}
                    className="text-black w-[80%] mx-auto py-4 px-4 bg-white mb-6 rounded-lg shadow-md-custom"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-3xl">{detail.orderNo}</h3>
                      <div className="flex flex-col">
                        <div className="flex items-center py-1 gap-4">
                          {detail.statusCode === 1 ? (
                            <>
                              <span className="w-4 h-4 rounded-full bg-emerald-500"></span>
                              <p className="text-sm text-gray-400">
                                {detail.status}
                              </p>
                            </>
                          ) : null}
                          {detail.statusCode === 2 ? (
                            <>
                              <span className="w-4 h-4 rounded-full bg-emerald-500"></span>
                              <p className="text-sm text-gray-400">
                                {detail.status}
                              </p>
                            </>
                          ) : null}
                          {detail.statusCode === 3 ? (
                            <>
                              <span className="w-4 h-4 rounded-full bg-red-400"></span>
                              <p className="text-sm text-gray-400">
                                {detail.status}
                              </p>
                            </>
                          ) : null}
                          {/* <span className="w-4 h-4 rounded-full bg-red-400"></span><p className="text-sm text-gray-400">{detail.status}</p> */}
                        </div>
                        <div className="flex items-center py-1 gap-4">
                          {detail.paymentCode === 1 ? (
                            <>
                              <span className="w-4 h-4 rounded-full bg-orange-500"></span>
                              <p className="text-sm text-gray-400">
                                {detail.payment}
                              </p>
                            </>
                          ) : null}
                          {detail.paymentCode === 2 ? (
                            <>
                              <span className="w-4 h-4 rounded-full bg-emerald-500"></span>
                              <p className="text-sm text-gray-400">
                                {detail.payment}
                              </p>
                            </>
                          ) : null}
                          {/* <span className="w-4 h-4 rounded-full bg-red-400"></span><p className="text-sm text-gray-400">{detail.payment}</p> */}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl">{detail.customerName}</h3>
                    <div className="flex justify-between py-5">
                      <div className="relative">
                        <p className="text-lg">{detail.orderDate}</p>
                        <span className="absolute block top-5 text-sm text-gray-400 left-1/2 -translate-x-1/2 w-full">
                          Order Date
                        </span>
                      </div>
                      <div className="relative">
                        <p className="text-lg block">{detail.expectedDate}</p>
                        <span className="absolute block top-5 text-sm text-gray-400 left-1/2 -translate-x-1/2 w-full">
                          Expected Date
                        </span>
                      </div>
                    </div>
                    <Link to={`order/${detail.id}/`}>
                      <button className="w-full text-center py-2 border-2 border-black rounded-lg">
                        Details
                      </button>
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default OrderList;
