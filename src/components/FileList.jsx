import React from "react";
import { FaFolder, FaFile } from "react-icons/fa";

const FileList = () => {
  const folders = ["src", "public"];
  const files = ["README.md", "index.html", "package.json"];

  return (
    <div className="px-4 py-2 w-full max-w-4xl text-gray-200 font-mono">
      {/* Branch Info */}
      <div className="bg-[#161b22] p-3 rounded-md border border-[#30363d] text-sm">
      <p className="text-gray-400">
  Welcome to my portfolio! Explore my latest work and projects here. <span className="text-blue-400 font-bold">🚀</span>
</p>

      </div>
      {/* File List */}
   
    </div>
  );
};

export default FileList;
