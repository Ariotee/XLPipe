import "./scss/all.scss";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <>
      <div className="pos-r">
        <Header />
      </div>
      <Intro />
    </>
  );
}

export default App;
