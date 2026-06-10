import React, { useRef, useState } from "react";
import { getMovieRecommendations } from "../utils/gemini";

const GptSearch = () => {
  const [result, setResult] = useState();
  
  const searchText = useRef();
  const apiResult = () =>{
  const data =  getMovieRecommendations(searchText.current.value);
  setResult(data)
  }
  console.log(result)
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />
      </div>

      {/* Search Section */}
      <div className="flex flex-col items-center pt-40 px-4">
        
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          NetflixGPT
        </h1>

        <p className="text-gray-400 mb-10 text-center max-w-xl">
          Discover movies using AI. Describe what you want to watch and let AI find it for you.
        </p>

        {/* Search Container */}
        <div className="w-full max-w-4xl">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-3 shadow-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row gap-3">
              <input
                ref={searchText}
                type="text"
                placeholder="What would you like to watch today?"
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  px-6
                  py-4
                  text-white
                  placeholder-gray-500
                  text-lg
                "
              />

              <button
                onClick={apiResult}
                className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-linear-to-r
                  from-red-600
                  to-red-700
                  font-semibold
                  hover:from-red-700
                  hover:to-red-800
                  active:scale-95
                  transition-all
                  duration-200
                  shadow-lg
                  hover:shadow-red-600/30
                "
              >
                AI Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pb-10">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl min-h-125 p-8">
          
          <h2 className="text-2xl font-semibold mb-6">
            Search Results
          </h2>

          <div className="flex items-center justify-center h-87.5">
            <p className="text-gray-500 text-lg">
              AI recommendations will appear here...
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GptSearch;