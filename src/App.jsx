import "./scss/all.scss";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
  return (
    <>
      <div className="pos-r">
        <Header />
      </div>
      <Intro />
      <div>
        <AboutUs />
      </div>
    </>
  );
}

export default App;
