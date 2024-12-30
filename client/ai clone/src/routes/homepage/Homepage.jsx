import { Link } from "react-router-dom";
import homeIcon from "../../assets/home.jpg";

const Homepage = () => {
  return (
    <div className="flex items-center justify-between min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-8">
      {/* Left Section: Text */}
      <div className="max-w-xl text-white space-y-6 ml-10">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500">
          Talkify
        </h1>
        <h2 className="text-3xl font-semibold">
          Connect instantly with AI and unlock endless possibilities.
        </h2>
        <h3 className="text-xl text-gray-200">
          A smart chat assistant designed to help, entertain, and educate.
        </h3>
        <div className="mt-6">
          <Link
            to="/dashboard"
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-700 rounded-full shadow-md hover:bg-blue-800 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="max-w-sm mr-10">
        <img
          src={homeIcon}
          alt="home-icon"
          className="w-full h-auto object-contain shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default Homepage;
