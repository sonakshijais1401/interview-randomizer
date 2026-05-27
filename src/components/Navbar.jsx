import {
  FaMoon,
  FaHome,
  FaHeart,
  FaPlayCircle
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="flex justify-between items-center px-10 py-5 backdrop-blur-md bg-white/10 border-b border-white/10 sticky top-0 z-50 text-white">

      <h1 className="text-3xl font-bold">
        Interview Randomizer
      </h1>

      <div className="flex gap-8 text-lg">

        <Link
          to="/"
          className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
        >
          <FaHome />
          Home
        </Link>

        <Link
          to="/favorites"
          className="flex items-center gap-2 hover:text-yellow-400 transition duration-300"
        >
          <FaHeart />
          Favorites
        </Link>

        <Link
          to="/practice"
          className="flex items-center gap-2 hover:text-green-400 transition duration-300"
        >
          <FaPlayCircle />
          Practice
        </Link>

        <button className="hover:text-purple-400">
          <FaMoon />
        </button>

      </div>

    </nav>
  );
}

export default Navbar;