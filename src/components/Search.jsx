import { useState } from "react";
import "./search.css";
import { Link, useNavigate } from "react-router-dom";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#0ea5e9"
    stroke="white"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={3}
    className="feather feather-search"
    {...props}
  >
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.35-4.35" />
  </svg>
);


const Search = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };
  const handleSearch = () => {
    // Perform search logic here
    navigate(`order/${searchText}`);
  };
  console.log(searchText);

  return (
    <div className="w-[100%] h-[100dvh] bg-[#0E2954] flex justify-center items-center">
      <Link to="/" className="absolute top-6 left-1/2 -translate-x-1/2 ">
          <img src="/lg.png" alt="" className="cover w-48 sm:w-32 md:w-36" />
        </Link>
      <div className="Card w-[300px] sm:w-[380px] ">
        <div className="CardInner">
          <label className="text-white text-md">Enter Invoice No. </label>
          <div className="container gap-2">
            <div className="InputContainer">
              <input
                type="text"
                className="h-[100%] px-[10px]"
                placeholder="Enter search query"
                value={searchText}
                onChange={handleInputChange}
              />
            </div>
            <button
              className="Icon border"
              onClick={handleSearch}
              disabled={searchText.length !== 4}
              style={{
                cursor: searchText.length === 4 ? "pointer" : "not-allowed",
              }}
            >
              <SvgComponent />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
