import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ChatList from "../../components/chatList/ChatList";

const DashboardLayout = () => {
  //get authentication details from Clerk
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* <!-- Fixed Chat List with specific width --> */}
        <div className="h-full w-72 bg-white shadow-lg">
          <ChatList />
        </div>

        {/* <!-- Content (Outlet) with dynamic margin to account for fixed ChatList --> */}
        <div className="pl-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
