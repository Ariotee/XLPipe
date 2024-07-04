import "./scss/all.scss";

import Header from "./components/header/Header";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <div className="pos-r">
        <Header />
      </div>
      <HomePage />
    </>
  );
}

export default App;
