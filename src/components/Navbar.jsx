import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-48 flex w-full my-4 justify-between items-center">
      <div className="h-full">
        <Link to="/">
          <img src="/lg.png" alt="" className="cover w-48 sm:w-32 md:w-36" />
        </Link>
      </div>
      <div className="my-auto text-white px-6 py-2 bg-sky-500 rounded-full text-lg font-semibold">
        <Link to="/invoice">Invoice List</Link>
      </div>
    </div>
  );
};

export default Navbar;
