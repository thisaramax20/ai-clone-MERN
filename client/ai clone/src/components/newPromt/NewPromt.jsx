import { useState } from "react";
import arrowIcon from "../../assets/arrow.png";
import Upload from "../upload/Upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/gemini";

const NewPrompt = () => {
  const [img, setImg] = useState({
    isLoading: false,
    err: "",
    dbData: {},
  });

  const askGemini = async () => {
    const prompt = "Explain how AI works";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  };

  return (
    <>
      {img.isLoading && <p>Loading...</p>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width={200}
        />
      )}
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center mt-8">
        <div className="relative w-full">
          {/* <!-- File icon inside the text box --> */}

          <Upload setImg={setImg} />
          <input type="file" id="file" hidden />

          {/* <!-- Text input box --> */}
          <input
            type="text"
            placeholder="Ask me anything..."
            className="w-full pl-12 pr-12 p-4 text-lg text-gray-800 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
          />

          {/* <!-- Arrow icon inside the text box --> */}
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">
            <img
              src={arrowIcon}
              alt="Send"
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default NewPrompt;
