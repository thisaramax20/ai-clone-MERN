import chatIcon from "../../assets/chat.png";
import codeIcon from "../../assets/code.png";
import imageIcon from "../../assets/image.png";
import arrowIcon from "../../assets/arrow.png";

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row p-6 space-y-8 sm:space-y-0 sm:space-x-8">
      <div className="flex-1 space-y-8">
        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl rounded-lg p-6 hover:scale-105 transform transition duration-300 cursor-pointer">
            <img
              src={chatIcon}
              alt="Create a new Chat"
              className="w-14 h-14 object-contain mr-4"
            />
            <span className="text-xl font-semibold text-white">
              Create a new Chat
            </span>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-teal-400 shadow-xl rounded-lg p-6 hover:scale-105 transform transition duration-300 cursor-pointer">
            <img
              src={imageIcon}
              alt="Analyze Images"
              className="w-14 h-14 object-contain mr-4"
            />
            <span className="text-xl font-semibold text-white">
              Analyze Images
            </span>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 shadow-xl rounded-lg p-6 hover:scale-105 transform transition duration-300 cursor-pointer">
            <img
              src={codeIcon}
              alt="Help me with my code"
              className="w-14 h-14 object-contain mr-4"
            />
            <span className="text-xl font-semibold text-white">
              Help me with my code
            </span>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6 mt-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="w-full p-4 text-lg text-gray-800 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">
              <img
                src={arrowIcon}
                alt="Send"
                className="w-6 h-6 object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
