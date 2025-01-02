import { useEffect, useRef, useState } from "react";
import arrowIcon from "../../assets/arrow.png";
import Upload from "../upload/Upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/gemini";
import Markdown from "react-markdown";

const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [img, setImg] = useState({
    isLoading: false,
    err: "",
    dbData: {},
  });

  //select final message when rendering
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [question, answer, img]);

  const askGemini = async (question) => {
    const prompt = question;

    const result = await model.generateContent(prompt);
    setAnswer(result.response.text());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question) return;
    askGemini(question);
  };

  return (
    <>
      {img.isLoading && <p className="text-gray-500 text-center">Loading...</p>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width={200}
          className="mx-auto mb-6 rounded-lg shadow-lg"
        />
      )}

      <div className="bg-white shadow-xl rounded-lg p-6 flex items-center mt-8 max-w-4xl mx-auto">
        <div className="relative w-full">
          {/* Question Display */}
          {question && (
            <div className="text-lg text-gray-700 font-semibold mb-4">
              {question}
            </div>
          )}

          {/* Answer Display with Markdown */}
          {answer && (
            <div className="text-gray-800 mb-6">
              <Markdown>{answer}</Markdown>
            </div>
          )}

          {/* Invisible List Item for Scroll to End */}
          <li ref={endRef} className="flex justify-end"></li>

          {/* Form and Input Section */}
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <Upload setImg={setImg} />
            <input type="file" id="file" hidden />

            {/* Text Input Box */}
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type="text"
              placeholder="Ask me anything..."
              className="w-full pl-12 pr-12 p-4 text-lg text-gray-800 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out placeholder-gray-400"
            />

            {/* Submit Button with Arrow Icon */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300"
            >
              <img
                src={arrowIcon}
                alt="Send"
                className="w-6 h-6 object-contain"
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPrompt;
