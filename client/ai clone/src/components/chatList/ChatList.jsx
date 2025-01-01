import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const ChatList = () => {
  return (
    <aside className="w-72 bg-white p-6 rounded-lg shadow-lg space-y-8 border border-gray-200">
      {/* Dashboard Section */}
      <div>
        <span className="text-2xl font-semibold text-gray-800">DASHBOARD</span>
        <div className="mt-4 space-y-3">
          <Link
            to="/"
            className="block text-lg text-gray-600 hover:text-indigo-500 hover:underline transition duration-300"
          >
            Create a new Chat
          </Link>
          <Link
            to="/"
            className="block text-lg text-gray-600 hover:text-indigo-500 hover:underline transition duration-300"
          >
            Explore Talkify
          </Link>
          <Link
            to="/"
            className="block text-lg text-gray-600 hover:text-indigo-500 hover:underline transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Recent Chats Section */}
      <div>
        <span className="text-2xl font-semibold text-gray-800">
          RECENT CHATS
        </span>
        <div className="mt-4 space-y-3">
          <Link
            to="/dashboard/chats/:id"
            className="block text-lg text-gray-600 hover:text-indigo-500 hover:underline transition duration-300"
          >
            Chat 1
          </Link>
          <Link
            to="/chat"
            className="block text-lg text-gray-600 hover:text-indigo-500 hover:underline transition duration-300"
          >
            Chat 2
          </Link>
          <Link
            to="/chat"
            className="block text-lg text-gray-600 hover:text-indigo-500 hover:underline transition duration-300"
          >
            Chat 3
          </Link>
        </div>
      </div>

      {/* Upgrade Section */}
      <div className="flex items-center space-x-4 mt-8 p-4 bg-gradient-to-r from-teal-300 to-green-400 rounded-lg text-white">
        <img
          src={logo}
          alt="Upgrade Icon"
          className="w-12 h-12 object-contain rounded-full border-2 border-white"
        />
        <div>
          <span className="block text-xl font-semibold">
            Upgrade to Talkify Pro
          </span>
          <span className="block text-sm">
            Explore all of our premium features
          </span>
        </div>
      </div>
    </aside>
  );
};

export default ChatList;
