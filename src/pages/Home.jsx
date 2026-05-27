import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import questions from "../data/questions";

function Home() {

  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [searchTerm, setSearchTerm] = useState("");

  // Timer Logic
  useEffect(() => {

    if (
      !currentQuestion ||
      currentQuestion === "No questions found" ||
      currentQuestion === "Please select subject and difficulty"
    ) {
      return;
    }

    if (timeLeft === 0) {
      generateQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);

  }, [timeLeft, currentQuestion]);

  // Generate Question
  const generateQuestion = () => {

    if (!selectedSubject || !selectedDifficulty) {

      setCurrentQuestion(
        "Please select subject and difficulty"
      );

      return;
    }

    const filteredQuestions = questions.filter(
      (q) =>
        q.subject === selectedSubject &&
        q.difficulty === selectedDifficulty &&
        q.question
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

    if (filteredQuestions.length > 0) {

      const randomQuestion =
        filteredQuestions[
          Math.floor(
            Math.random() * filteredQuestions.length
          )
        ];

      setCurrentQuestion(randomQuestion.question);

      setTimeLeft(30);

    } else {

      setCurrentQuestion("No questions found");
    }
  };

  // Save Favorite
  const saveFavorite = () => {

    if (
      !currentQuestion ||
      currentQuestion === "No questions found"
    ) {
      return;
    }

    const storedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (storedFavorites.includes(currentQuestion)) {
      return;
    }

    const updatedFavorites = [
      ...storedFavorites,
      currentQuestion
    ];

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">

      <Navbar />

      <div className="flex flex-col items-center p-10">

        {/* Heading */}
        <h1 className="text-6xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">

          Interview Randomizer

        </h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Questions..."
          className="p-4 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder-gray-300 mb-8 w-[350px] outline-none shadow-lg focus:scale-105 focus:border-blue-400 transition duration-300"
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

        {/* Dropdowns */}
        <div className="flex gap-6 mb-8">

          {/* Subject Dropdown */}
          <select
            value={selectedSubject}
            onChange={(e) =>
              setSelectedSubject(e.target.value)
            }
            className="p-4 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 text-white w-[220px] outline-none hover:scale-105 transition duration-300"
          >

            <option value="" className="text-black">
              Select Subject
            </option>

            <option value="DSA" className="text-black">
              DSA
            </option>

            <option value="OS" className="text-black">
              OS
            </option>

            <option value="DBMS" className="text-black">
              DBMS
            </option>

            <option value="CN" className="text-black">
              CN
            </option>

          </select>

          {/* Difficulty Dropdown */}
          <select
            value={selectedDifficulty}
            onChange={(e) =>
              setSelectedDifficulty(e.target.value)
            }
            className="p-4 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 text-white w-[220px] outline-none hover:scale-105 transition duration-300"
          >

            <option value="" className="text-black">
              Select Difficulty
            </option>

            <option value="Easy" className="text-black">
              Easy
            </option>

            <option value="Medium" className="text-black">
              Medium
            </option>

            <option value="Hard" className="text-black">
              Hard
            </option>

          </select>

        </div>

        {/* Generate Button */}
        <button
          onClick={generateQuestion}
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-2xl text-xl font-bold hover:scale-110 transition duration-300 shadow-2xl"
        >
          Generate Question
        </button>

        {/* Timer */}
        {currentQuestion &&
          currentQuestion !== "No questions found" &&
          currentQuestion !==
            "Please select subject and difficulty" && (

          <h2 className="text-3xl mt-8 font-bold animate-pulse">

            ⏱ Time Left: {timeLeft}s

          </h2>
        )}

        {/* Question Card */}
        <div className="mt-10 backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl w-[650px] text-center shadow-2xl hover:scale-105 transition duration-500">

          <h2 className="text-3xl font-semibold leading-relaxed">

            {currentQuestion ||
              "Your question will appear here"}

          </h2>

        </div>

        {/* Save Favorite Button */}
        {currentQuestion &&
          currentQuestion !== "No questions found" &&
          currentQuestion !==
            "Please select subject and difficulty" && (

          <button
            onClick={saveFavorite}
            className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold hover:bg-yellow-300 hover:scale-110 transition duration-300 shadow-xl"
          >
            ⭐ Save Favorite
          </button>
        )}

      </div>

    </div>
  );
}

export default Home;