import { Link } from "react-router-dom";
import homeIcon from "../../assets/home.jpg";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  return (
    <div className="font-sans bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-screen">
      {/* Header */}
      <header className="py-8 px-6 text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          Talkify
        </h1>
        <nav className="mt-4">
          <Link
            to="/dashboard"
            className="px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex items-center justify-between py-16 px-8 sm:px-16 md:px-24 lg:px-32">
        {/* Left Section */}
        <div className="max-w-lg space-y-6">
          <h2 className="text-3xl font-semibold">
            Connect instantly with AI and unlock endless possibilities.
          </h2>
          <h3 className="text-xl text-gray-200">
            Your personal assistant for learning, entertainment, and more.
          </h3>
          <div className="mt-6">
            <TypeAnimation
              sequence={[
                "Hello! I'm your AI assistant.",
                1000,
                "How can I assist you today?",
                1000,
                "I can help with your questions.",
                1000,
                "Ready for a great conversation!",
                1000,
              ]}
              wrapper="span"
              omitDeletionAnimation={true}
              cursor={true}
              repeat={Infinity}
              className="text-2xl font-semibold text-white bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500"
            />
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="max-w-sm">
          <img
            src={homeIcon}
            alt="home-icon"
            className="w-full h-auto object-contain shadow-lg rounded-xl transition-transform transform hover:scale-105 duration-300"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-500 to-teal-500 py-8 mt-16">
        <div className="container mx-auto text-white flex flex-col items-center md:flex-row justify-between px-6">
          {/* Left Section: About and Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-semibold">Talkify</h3>
            <p className="text-lg text-gray-200">
              Your friendly AI assistant for a smarter, more connected world.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <a
                href="/about"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                About Us
              </a>
              <a
                href="/privacy"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/contact"
                className="text-gray-200 hover:text-white transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right Section: Social Icons */}
          <div className="flex justify-center space-x-6 mt-6 md:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-2xl hover:text-white transition duration-300"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook text-2xl hover:text-white transition duration-300"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-2xl hover:text-white transition duration-300"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-2xl hover:text-white transition duration-300"></i>
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-gray-200 text-sm mt-6">
          <p>© 2024 Talkify. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
