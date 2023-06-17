import { FacebookProvider, CustomerChat } from "react-facebook";

const MessengerChat = () => {
  return (
    <FacebookProvider appId="YOUR_APP_ID">
      <CustomerChat
        pageId="118142634620388"
        appId="1325514468346747"
        themeColor="#0084ff"
        loggedInGreeting="Hello there! How can we assist you today?"
        loggedOutGreeting="Please log in to chat with us."
      />
    </FacebookProvider>
  );
};

export default MessengerChat;
