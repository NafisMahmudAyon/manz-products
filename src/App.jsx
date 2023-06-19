import { BrowserRouter, Route, Routes } from "react-router-dom";
// import OrderList from "./components/OrderList";
// import Home from "./components/Home";
import Invoice from "./components/Invoice";
// import OrderList from "./components/OrderList";
// import HomeMobile from "./components/HomeMobile";
import HomePage from "./components/HomePage";
// import Invoice from "./components/Invoice";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      {/* <nav>
        <div className=" flex flex-col items-center bg-gray-700 pt-10">
          <img src="/4x/lg.png" alt="" className="cover w-48 mb-10" />
        </div>
      </nav> */}

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="invoice/" element={<Search />} />
        <Route path="invoice/order/:id/" element={<Invoice />} />
      </Routes>
      <MessengerCustomerChat
        pageId="118142634620388"
        appId="1325514468346747"
      />
    </BrowserRouter>
  );
}

export default App;
