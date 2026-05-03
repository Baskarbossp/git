import { Keyboard, Menu, User, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isAuthenticated = false;
  return (
    <nav className="sticky top-0 w-full bg-linear-65 from-[#18112e] to-[#3d145e] shadow-md z-50 border-b border-purple-400 ">
      <div className= "max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-purple-100"
        >
          <Keyboard size={40} className="flex items-center" />
          <span>Type Master</span>
        </Link>
        <div className="hidden md:flex items-center justify-between gap-10 text-purple-300 ">
          <Link className="hover:text-white transition font-semibold" to="/">
            Home
          </Link>
          <Link
            className="hover:text-white transition font-semibold"
            to="/practice"
          >
            Practice
          </Link>
          <Link
            className="hover:text-white transition font-semibold"
            to="/leaderboard"
          >
            Leaderboard
          </Link>
          <Link
            className="hover:text-white transition font-semibold"
            to="/stats"
          >
            Stats
          </Link>

          {/* Sign In  Not working */}
          {!isAuthenticated && (
            <Link
              to="/signIn"
              className="hidden sm:flex justify-start gap-2 items-center bg-linear-65 from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-white transition"
            >
              <User size={18} />
              Sign In
            </Link>
          )}

          {/* Homburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100 translate-y-0": "max-h-0 opacity-0 -translate-y-2"}`}>
        <div className="flex flex-col gap-4">
          <Link className="hover:text-white transition font-semibold" to="/">
            Home
          </Link>
          <Link
            className="hover:text-white transition font-semibold"
            to="/practice"
          >
            Practice
          </Link>
          <Link
            className="hover:text-white transition font-semibold"
            to="/leaderboard"
          >
            Leaderboard
          </Link>
          <Link
            className="hover:text-white transition font-semibold"
            to="/stats"
          >
            Stats
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
