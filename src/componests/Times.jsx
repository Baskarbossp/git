import React from "react";
import { Clock4, Baseline} from "lucide-react";
import { Link } from "react-router-dom";
const Times = () => {
  return (
    <>
      <div className="columns-6 h-100 items-center justify-center  font-bold gap-105 mx-65 my-15 ">
        <div className="flex flex-row rounded-full border-purple-500 w-80 items-center gap-2 text-base font-semibold overflow-hidden p-3 text-purple-100 border border-opacity-30">
          <Clock4 size={17} className="flex items-center text-purple-300" />
          <span className="text-white font-medium">Time:</span>
          <div>
            <Link to="/" className="bg-transparent text-purple-300 px-4 py-1 rounded-full text-sm font-semibold hover:bg-purple-600 hover:text-white transition-colors">15s</Link>
            <Link to="/" className="bg-transparent text-purple-300 px-4 py-1 rounded-full text-sm font-semibold hover:bg-purple-600 hover:text-white transition-colors">30s</Link>
            <Link to="/" className="bg-transparent text-purple-300 px-4 py-1 rounded-full text-sm font-semibold hover:bg-purple-600 hover:text-white transition-colors">60s</Link>
            <Link to="/" className="bg-transparent text-purple-300 px-4 py-1 rounded-full text-sm font-semibold hover:bg-purple-600 hover:text-white transition-colors">120s</Link>
          </div>
        </div>
        <div className="flex flex-row rounded-full bg-purple-950 border-purple-500 w-100 items-center  font-semibold overflow-hidden p-3 text-purple-100 border">
          <Baseline size={17} className="flex items-center text-purple-300 " />
          <span >Mode:</span>
          <div className="md:flex items-center justify-between gap-8 mx-2 text-purple-300">
            <Link to="/" className="bg-transparent text-purple-300 px-4 py-1 rounded-full text-sm font-semibold hover:bg-purple-600 hover:text-white transition-colors">Words</Link>
            <Link to="/" className="bg-transparent text-purple-300 px-4 py-1 rounded-full text-sm font-semibold hover:bg-purple-600 hover:text-white transition-colors">Sentences</Link>
            <Link to="/"className="bg-transparent text-purple-300 px-4 py-1 rounded-full text-sm font-semibold hover:bg-purple-600 hover:text-white transition-colors">Code</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Times;
