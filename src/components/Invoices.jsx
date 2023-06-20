/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen.jsx";
import Invoice from "./Invoice.jsx";

const invoices = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds (you can adjust this time as needed)
  }, []);
  return <div>{isLoading ? <LoadingScreen /> : <Invoice />}</div>;
};

export default invoices;
