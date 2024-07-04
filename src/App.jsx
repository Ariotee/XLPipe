import { Route, Routes } from "react-router-dom";

import "./scss/all.scss";

import Header from "./components/header/Header";
import HomePage from "./pages/Home";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <>
      <div className="pos-r">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
}

export default App;
