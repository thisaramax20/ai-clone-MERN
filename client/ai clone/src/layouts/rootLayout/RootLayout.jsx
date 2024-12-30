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
        <header>
          <Link to="/">
            <img src={logo} alt="" />
            <span>Talkify</span>
          </Link>
          <div>
            <SignedIn>
              <UserButton />
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
