import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-48 sm:px-4 flex my-4 justify-between items-center">
      <div className="h-full">
        <Link to="/">
          <img src="/lg.png" alt="" className="cover w-48 sm:w-32 md:w-36" />
        </Link>
      </div>
      <div className="my-auto text-white px-6 py-2 bg-[#1F6E8C] rounded-full text-lg font-semibold">
        <Link to="/invoice">Search Invoice</Link>
      </div>
    </div>
  );
};

export default Navbar;
