import { useEffect, useRef } from "react";
import NewPrompt from "../../components/newPromt/NewPromt";

const ChatPage = () => {
  //select final message when rendering
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ul className="space-y-4">
        {/* AI and User messages as above */}
        <div className="max-w-4xl mx-auto p-4">
          <ul className="space-y-4">
            {/* <!-- AI Message --> */}
            <li className="flex justify-start">
              <div className="bg-blue-500 text-white p-4 rounded-lg max-w-xs">
                Text message from AI
              </div>
            </li>

            {/* <!-- User Message --> */}
            <li className="flex justify-end">
              <div className="bg-gray-200 text-gray-800 p-4 rounded-lg max-w-xs">
                Text message from user
              </div>
            </li>

            {/* <!-- AI Message --> */}
            <li className="flex justify-start">
              <div className="bg-blue-500 text-white p-4 rounded-lg max-w-xs">
                Text message from AI
              </div>
            </li>

            {/* <!-- User Message --> */}
            <li className="flex justify-end">
              <div className="bg-gray-200 text-gray-800 p-4 rounded-lg max-w-xs">
                Text message from user
              </div>
            </li>

            {/* <!-- AI Message --> */}
            <li className="flex justify-start">
              <div className="bg-blue-500 text-white p-4 rounded-lg max-w-xs">
                Text message from AI
              </div>
            </li>

            {/* <!-- User Message --> */}
            <li className="flex justify-end">
              <div className="bg-gray-200 text-gray-800 p-4 rounded-lg max-w-xs">
                Text message from user
              </div>
            </li>

            <NewPrompt />

            {/* <!-- Final Message --> */}
            <li ref={endRef} className="flex justify-end"></li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default ChatPage;
