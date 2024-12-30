import ChatList from "../../components/chatList/ChatList";
import chatIcon from "../../assets/chat.png";
import codeIcon from "../../assets/code.png";
import imageIcon from "../../assets/image.png";
import arrowIcon from "../../assets/arrow.png";

const Dashboard = () => {
  return (
    <div className="flex space-x-8 p-6">
      {/* ChatList - Sidebar */}
      <ChatList /> {/* This renders the ChatList component */}
      {/* Main Content Section */}
      <div className="flex-1 space-y-8">
        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 cursor-pointer">
            <img
              src={chatIcon}
              alt="Create a new Chat"
              className="w-12 h-12 object-contain mr-4"
            />
            <span className="text-lg font-medium text-gray-800">
              Create a new Chat
            </span>
          </div>
          <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 cursor-pointer">
            <img
              src={imageIcon}
              alt="Analyze Images"
              className="w-12 h-12 object-contain mr-4"
            />
            <span className="text-lg font-medium text-gray-800">
              Analyze Images
            </span>
          </div>
          <div className="flex items-center justify-center bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 cursor-pointer">
            <img
              src={codeIcon}
              alt="Help me with my code"
              className="w-12 h-12 object-contain mr-4"
            />
            <span className="text-lg font-medium text-gray-800">
              Help me with my code
            </span>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="w-full p-4 text-lg text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12" // Added padding-right for button space
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-white hover:scale-105 transition duration-300">
              <img src={arrowIcon} alt="Send" className="object-contain" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
