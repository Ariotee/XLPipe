import "./scss/all.scss";

import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import ComparFloor from "./components/compar-floor/ComparFloor";
// import AboutUs from "./components/aboutUs/AboutUs";

function App() {
  return (
    <>
      <div className="pos-r">
        <Header />
      </div>
      <Intro />

      <ComparFloor />
      {/* <AboutUs /> */}
    </>
  );
}

export default App;
