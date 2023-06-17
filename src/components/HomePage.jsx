// import Home from "./Home"
import HomeMobile from "./HomeMobile"

const HomePage = () => {
  return (
    <div>
        {/* <div className="sm:hidden md:hidden lg:block xl:block 2xl:block"><Home /> </div> */}
        {/* <div className="sm:block md:block lg:hidden xl:hidden 2xl:hidden "><HomeMobile /> </div> */}
        <div className="sm:block md:block "><HomeMobile /> </div>
    </div>
  )
}

export default HomePage