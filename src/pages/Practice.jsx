import { useState } from "react";
import Navbar from "../components/Navbar";
import questions from "../data/questions";

function Practice() {

  const [practiceQuestion, setPracticeQuestion] = useState("");

  const generatePracticeQuestion = () => {

    const randomQuestion =
      questions[
        Math.floor(Math.random() * questions.length)
      ];

    setPracticeQuestion(randomQuestion.question);
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white">

      <Navbar />

      <div className="flex flex-col items-center p-10">

        {/* Heading */}
        <h1 className="text-6xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">

          Practice Mode

        </h1>

        {/* Description */}
        <p className="text-gray-300 text-xl mb-10 text-center max-w-2xl">

          Practice random interview questions and improve
          your technical preparation with an interactive
          learning experience.

        </p>

        {/* Generate Button */}
        <button
          onClick={generatePracticeQuestion}
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-2xl text-xl font-bold hover:scale-110 transition duration-300 shadow-2xl"
        >
          🚀 Start Practice
        </button>

        {/* Question Card */}
        <div className="mt-12 backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl w-[700px] text-center shadow-2xl hover:scale-105 transition duration-500">

          <h2 className="text-3xl font-semibold leading-relaxed">

            {practiceQuestion ||
              "Your practice question will appear here"}

          </h2>

        </div>

        {/* Tips Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 shadow-xl">

            <h3 className="text-2xl font-bold mb-3 text-blue-400">

              💡 Tip 1

            </h3>

            <p className="text-gray-300">

              Try solving questions without looking at notes.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 shadow-xl">

            <h3 className="text-2xl font-bold mb-3 text-purple-400">

              ⚡ Tip 2

            </h3>

            <p className="text-gray-300">

              Focus on explaining your approach clearly.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 shadow-xl">

            <h3 className="text-2xl font-bold mb-3 text-pink-400">

              🎯 Tip 3

            </h3>

            <p className="text-gray-300">

              Practice daily to improve confidence and speed.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Practice;