import React, { useState } from "react";

const Header = () => {
  const [isStarred, setIsStarred] = useState(false);
  const [stars, setStars] = useState(0);

  const toggleStar = () => {
    setStars(isStarred ? stars - 1 : stars + 1);
    setIsStarred(!isStarred);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#161b22] p-4 border-b border-gray-700 font-mono shadow-lg z-50">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:justify-between text-center md:text-left px-4 md:px-8 mx-auto">
        
        {/* Portfolio Name - Left on big screens, center on small screens */}
        <h1 className="text-lg md:text-xl font-bold text-gray-200">
          PRAMIT'S / PORTFOLIO
        </h1>

        {/* Buttons - Right on big screens, center on small screens */}
        <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-x-3 mt-3 md:mt-0 w-full md:w-auto">
          <button className="bg-[#238636] px-3 py-1 rounded text-sm text-white font-medium">
            Code
          </button>
          <button className="px-3 py-1 rounded text-sm border border-gray-600 text-gray-400 font-medium">
            Watch
          </button>
          <button
            onClick={toggleStar}
            className={`px-3 py-1 rounded text-sm border font-medium flex items-center ${
              isStarred
                ? "border-yellow-500 text-yellow-400"
                : "border-gray-600 text-gray-400"
            }`}
          >
            {isStarred ? "⭐ Unstar" : "☆ Star"} <span className="ml-1">{stars}</span>
          </button>
          <button
            onClick={() =>
              window.open("https://github.com/PRAMITKN/your-repo/fork", "_blank")
            }
            className="px-3 py-1 rounded text-sm border border-gray-600 text-gray-400 font-medium"
          >
            Fork
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
