import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Practice from "./pages/Practice";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/practice"
          element={<Practice />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;