import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Deciphering from "./pages/Deciphering/Deciphering";
import ForecastPage from "./pages/ForecastPage/ForecastPage";
import Recomendation from "./pages/Recomendation/Recomendation";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/forecast" element={<ForecastPage />} />
          <Route path="/deciphering" element={<Deciphering />} />
          <Route path="/recomendation" element={<Recomendation />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
