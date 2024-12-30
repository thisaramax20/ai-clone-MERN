import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";

//clerk authentication
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div>
        <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md">
          {/* Logo and App Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            <span className="text-3xl font-bold text-white hover:text-yellow-400 transition duration-300">
              Talkify
            </span>
          </Link>

          {/* User Button (Signed In) */}
          <div className="flex items-center">
            <SignedIn>
              <UserButton className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300" />
            </SignedIn>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
