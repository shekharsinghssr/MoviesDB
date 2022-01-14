import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Searchform from "./searchform";
import Movie from "./movie";
//20f7303a0ece002a3a4493ddc51666ba

function App() {
  return (
    <>
      <h1 className="heading"> MOVIES</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Searchform />} />
          <Route path="/:movieid" element={<Movie />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
