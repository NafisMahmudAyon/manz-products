// import Home from "./Home"
import HomeMobile from "./HomeMobile"
import MessengerCustomerChat from 'react-messenger-customer-chat';

const HomePage = () => {
  return (
    <div>
        {/* <div className="sm:hidden md:hidden lg:block xl:block 2xl:block"><Home /> </div> */}
        {/* <div className="sm:block md:block lg:hidden xl:hidden 2xl:hidden "><HomeMobile /> </div> */}
        <div className="sm:block md:block "><HomeMobile /> </div>
        <MessengerCustomerChat
    pageId="118142634620388"
    appId="1325514468346747"
    htmlRef="<REF_STRING>"
  />
  118142634620388
    </div>
  )
}

export default HomePage