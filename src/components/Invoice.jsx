/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ProductList from "./ProductList";
import NotFound from "./NotFound";
import LoadingScreen from "./LoadingScreen.Jsx";


const Invoice = () => {
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  // const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds (you can adjust this time as needed)
  }, []);

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
    console.log('Object:', object);

  };

  useEffect(() => {
    getObjectById(id);
  }, [id, details]);

  //Render the component based on the presence of detail object
  // if (!detail) {
  //   return <div><LoadingScreen /> </div>; // Display a loading indicator if detail is not available yet
  // }

  // Render the specific page when item is not found
  if (!detail?.id) {
    return <div><NotFound /> </div>; // Display a message or custom component for the specific page
  }
  else {

    return (
      <div className="w-[100%] min-h-[100vh] bg-[#0E2954] flex justify-center ">
        {isLoading ? (<LoadingScreen />) : 
        <div className="w-[80%] sm:w-[90%] md:w-[90%] my-14 sm:my-8 border sm:border-none py-10 sm:py-2 max-h-[80%] relative">
          {/* <div className="absolute top-6 left-6 sm:top-2 sm:left-2">
            {" "}
            <Link
              to="/invoice"
              className="flex gap-3 items-center px-5 py-2 relative text-lg font-semibold hover:text-white hover:bg-sky-600 transition-all duration-300  bg-sky-500 rounded-full "
            >
              {" "}
              <img src="/back.png" alt="" className="w-8" />{" "}
              <span className="sm:hidden">Back</span>
            </Link>{" "}
          </div> */}
          <div className=" flex flex-col items-center">
            <Link to="/">
              <img
                src="/lg.png"
                alt=""
                className="cover mb-10 w-48 sm:w-32 md:w-36"
              />
            </Link>
          </div>
          <div className=" bg-sky-500 w-[100%] text-white h-8 flex justify-end sm:justify-center ">
            <h1 className="uppercase h-8 text-2xl  text-black bg-white font-bold text-right px-8  inline-block mr-8 sm:mr-0">
              Invoice
            </h1>
          </div>
          <div className="px-20 mt-6 sm:px-3 md:px-6  !text-white">
            <div className="flex sm:flex-col  justify-between items-start">
              <div>
                <h3 className=" text-xl font-bold text-white">Invoice to:</h3>
                <h4 className=" text-lg py-2 font-semibold text-white">
                  {detail?.customerName}
                </h4>
                <address className="w-3/4 flex gap-2 sm:w-full py-2 font-medium text-white">
                  <span>🏠: </span> <span className=" text-white">{detail?.address}</span>
                </address>
                <p className="font-medium flex gap-2  text-white sm:w-full ">
                  <span>📞: </span> {detail?.phone}
                </p>
              </div>
              <div className="flex w-[180px] sm:w-full  flex-col">
                <div className="flex justify-between sm:justify-start items-center pt-4">
                  <div className=" text-lg font-semibold sm:pr-3  text-white">Invoice:</div>
                  <div className="font-medium  text-white">{detail?.invoiceNo}</div>
                </div>
                <div className="flex justify-between sm:justify-start items-center ">
                  <div className=" text-lg font-semibold sm:pr-3  text-white">Date:</div>
                  <div className="font-medium  text-white">{detail?.orderDate}</div>
                </div>
                <div className="  py-1 mt-6 text-black text-xl font-semibold ">
                  <div className="px-6 text-white py-2 rounded-lg bg-sky-500 text-center">
                    Track Your Order
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center pt-10">
              <div className="w-[90%] sm:w-full">
                <ProductList id={id} />
              </div>
            </div>
            {/* after product details  */}
          </div>
          <div className="w-full px-20 sm:px-0 md:px-6 flex sm:flex-col-reverse justify-between items-start text-white pt-6">
            {/* <div className="w-[80%]"> */}
            <div className="sm:px-3">
              {/* <div className="text-lg font-semibold pt-3 text-yellow-400  sm:hidden md:hidden lg:block xl:block">
                Thanks for Order.
              </div> */}
              <div className="text-base">
                <p className="text-lg font-semibold  text-white">Payment Info:</p>
                <p className=" text-white">
                  Method: <span className=" text-white">{detail?.payMethod}</span>
                </p>
                <p className=" text-white">number: {detail?.payPhone}</p>
                <p className=" text-white">Transaction ID: {detail?.transactionID}</p>
              </div>
              <div className="text-lg font-semibold py-3  text-white bg-sky-500 sm:block md:block lg:hidden xl:hidden">
                Thanks for Order.
              </div>
            </div>
            <div className="w-[40%] text- flex flex-col sm:w-full justify-center">
              <div className="flex items-center sm:gap-2 justify-between sm:justify-start px-4 sm:px-3">
                <div className="pr-20 font-medium sm:pr-0  text-white">Sub Total:</div>
                <div className=" text-white">{detail?.subTotal}</div>
              </div>
              <div className="flex items-center sm:gap-2 justify-between sm:justify-start px-4 sm:px-3">
                <div className="pr-20  font-medium sm:pr-0  text-white">Tax:</div>
                <div className=" text-white">{detail?.tax}</div>
              </div>
  
              <div className="flex items-center bg-sky-500 py-1 mt-6 text-black text-xl font-semibold justify-between sm:justify-start sm:gap-2 px-4 sm:px-3 sm:mb-6">
                <div className=" text-white">Total:</div>
                <div className=" text-white">{detail?.total}</div>
              </div>
              {/* <div className="flex items-center  py-1 mt-6 text-black text-xl font-semibold justify-center">
                <div className="px-6 py-2 rounded-lg bg-yellow-400 text-center">
                  Track Your Order
                </div>
              </div> */}
              {/* <div className="flex items-center bg-yellow-400 py-1 mt-6 text-black text-lg pr-36 justify-end">
                <div className="">Expected Delivery on 05/05/2023 </div>
              </div> */}
            </div>
            {/* </div> */}
          </div>
          <footer className="w-full text-white border-t bg-sky-500 mt-20 sm:mt-6 md:mt-10">
            <div className="flex sm:flex-col py-4 pl-36 sm:pl-0 md:pl-10">
              <div className="px-2  text-white">
                <span>📞</span> 017X-XXXXXXX
              </div>
              <div className="px-2 bg-sky-500 font-semibold sm:hidden">|</div>
              <div className="px-2 text-white">
                <span>🏬</span> Dhaka, Bangladesh
              </div>
              <div className="px-2 bg-sky-500 font-semibold sm:hidden">|</div>
              <div className="px-2 text-white">
                <span>🌐</span>
                <a
                  href="https://www.facebook.com/manzfashionview"
                  className="hover:bg-sky-500 hover:underline font-semibold"
                >
                  {" "}
                  FB Page
                </a>
              </div>
            </div>
          </footer>
        </div>}
      </div>
            
    );
  }

};

export default Invoice;
