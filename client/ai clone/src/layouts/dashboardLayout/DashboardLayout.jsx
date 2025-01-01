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
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <ChatList />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
