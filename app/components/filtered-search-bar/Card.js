import React from "react";
import { motion } from "framer-motion";

function Card({ name, value, info, type }) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div layout className="flex sm:min-w-96 min-h-96">
      <div className="relative max-w-sm align-center w-[23rem] h-96 overflow-hidden shadow-lg rounded-lg border dark:border-gray-500">
        <div className="px-6 py-4">
          <div className="font-bold mb-2 text-white text-3xl tracking-tight">{name}</div>
          <p className="text-gray-600 text-lg absolute top-24">
            {info}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 absolute bottom-20">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{type}</span>
        </div>
        <div className="flex justify-center">
          <div className=" absolute bottom-6 grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">
                  <span className="text-gray-100" onClick={() => openInNewTab(value)} >Read More &rarr;</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
