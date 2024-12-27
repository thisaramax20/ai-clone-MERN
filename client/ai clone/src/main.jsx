import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./routes/homepage/Homepage.jsx";
import Dashboard from "./routes/dashboard/Dashboard.jsx";
import ChatPage from "./routes/chatPage/ChatPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  {
    path: "/dashboard",
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/chats/:id", element: <ChatPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
