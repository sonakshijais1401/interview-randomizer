import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Favorites() {

  const [favorites, setFavorites] = useState([]);

  // Load favorites
  useEffect(() => {

    const storedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(storedFavorites);

  }, []);

  // Remove Favorite
  const removeFavorite = (questionToRemove) => {

    const updatedFavorites = favorites.filter(
      (fav) => fav !== questionToRemove
    );

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">

      <Navbar />

      <div className="p-10">

        {/* Heading */}
        <h1 className="text-6xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
          Favorite Questions
         </h1>

        {/* Empty State */}
        {favorites.length === 0 ? (

          <div className="flex flex-col items-center justify-center mt-32">

            <h2 className="text-3xl text-gray-300 mb-4">
              No favorite questions yet
            </h2>

            <p className="text-gray-500 text-lg">
              Save questions from Home page ⭐
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {favorites.map((fav, index) => (

              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 hover:border-pink-400 transition duration-300"
              >

                {/* Question Number */}
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Question {index + 1}
                 </h2>

                {/* Question Text */}
                <p className="text-2xl leading-relaxed mb-6">

                  {fav}

                </p>

                {/* Remove Button */}
                <button
                  onClick={() => removeFavorite(fav)}
                  className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition duration-300 shadow-xl"
                >
                  ❌ Remove
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Favorites;