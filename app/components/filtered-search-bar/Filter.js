import { useEffect } from "react";
import React from "react";

function Filter({ resources, setActiveOption, setFiltered, activeOption }) {
  useEffect(() => {
    if (activeOption === "all") {
      setFiltered(resources);
      return;
    }
    const filtered = resources.filter((card) => card.genre === activeOption);
    setFiltered(filtered);
  }, [activeOption, resources]);

  return (
    <div className="text-white flex mb-5 md:mt-16 align-center">
      <h1 className="text-white text-lg ml-2 md:text-3xl md:mt-3 font-bold ">
        Filter
      </h1>
      <div className="flex flex-wrap flex-col sm:flex-row	">
        <button
          onClick={() => setActiveOption("all")}
          className={`${activeOption === "all" ? "bg-slate-300 text-black" : ""} px-8 md:px-14 md:py-3 ml-5 mb-2 lg:ml-10 rounded-full border border-gray-300 dark:border-gray-800`}
        >
          All
        </button>
        <button
          onClick={() => setActiveOption("github")}
          className={`${activeOption === "github" ? "bg-slate-300 text-black" : ""} bg-red px-8 md:px-14 md:py-3 ml-5 mb-2 sm:ml-10 rounded-full border border-gray-300 dark:border-gray-800`}
        >
          GitHub
        </button>
        <button
          onClick={() => setActiveOption("twitter")}
          className={`${activeOption === "twitter" ? "bg-slate-300 text-black" : ""} bg-red px-8 md:px-14 md:py-3 ml-5 mb-2 sm:ml-10 rounded-full border border-gray-300 dark:border-gray-800`}
        >
          Twitter
        </button>
        <button
          onClick={() => setActiveOption("projects")}
          className={`${activeOption === "projects" ? "bg-slate-300 text-black" : ""} bg-red px-8 md:px-14 md:py-3 ml-5 mb-2 sm:ml-10 rounded-full border border-gray-300 dark:border-gray-800`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveOption("resources")}
          className={`${activeOption === "resources" ? "bg-slate-300 text-black" : ""} bg-red px-8 md:px-14 md:py-3 ml-5 mb-2 sm:ml-10 rounded-full border border-gray-300 dark:border-gray-800`}
        >
          Resources
        </button>
      </div>
    </div>
  );
}

export default Filter;

