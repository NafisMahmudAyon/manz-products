/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductList = (props) => {
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState({});
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getOrder();
  }, []);

  useEffect(() => {
    getObjectById(id);
  }, [id]);

  function getOrder() {
    axios.get(`/db.json`).then(function (response) {
      setDetails(response.data.dashboard);
    });
  }

  const findObjectById = (id) => {
    return details.find((item) => item.id === id);
  };

  const getObjectById = (id) => {
    const object = findObjectById(id);
    setDetail(object);
    if (object) {
      setProducts(object.products);
    }
    console.log('Object:', object);
  };

  useEffect(() => {
    getObjectById(id);
  }, [id, details]);












  // function getProducts() {
  //   // axios.get(`https://manz-orders-server.onrender.com/products-${id}`).then(function (response) {
  //   // axios.get(`https://manz.nafisbd.com/db.json`).then(function (response) {
  //   axios.get(`/db.json`).then(function (response) {
  //     setProducts(response.data.dashboard[`${id}`].products);
  //     console.log("hell");
  //     console.log(response.data.dashboard[`${id}`].products);
  //   });
  // }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-h-[400px] sm:min-h-[330px] text-sm text-left text-gray-400 border-2 border-solid border-gray-300">
        <thead className="text-sm  uppercase  bg-gray-900 border-gray-900 border-2 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              SL.
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Qty.
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="">
          {Array.isArray(products)
            ? products.map((prod) => {
                return (
                  <tr key={prod.id} className="h-14 border-b-2 border-gray-300 ">
                    <td className="px-6 py-3">{prod.id}</td>
                    <td className="px-6 py-3">
                      <img src={prod.image} alt="" className="w-10" />
                    </td>
                    <td className="px-6 py-3">{prod.name}</td>
                    <td className="px-6 py-3">{prod.price}</td>
                    <td className="px-6 py-3">{prod.quantity}</td>
                    <td className="px-6 py-3">Total</td>
                  </tr>
                );
              })
            : null}
            <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;