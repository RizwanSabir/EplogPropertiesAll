import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const images = ["/2.png", "/3.png", "/4.png"];
  const [currentImage, setCurrentImage] = useState([images[0], 0]);

  const handleClick = (index) => {
    setCurrentImage([images[index], index]);
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={currentImage[1]}
          className="w-full h-screen"
          style={{
            backgroundImage: `url(${currentImage[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5, position: "absolute" }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute top-[40%] right-0 p-4">
            <div className="flex flex-col space-y-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`border border-white rounded-full w-[15px] h-[15px] cursor-pointer ${currentImage[1] === index ? 'bg-white' : ""} `}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
