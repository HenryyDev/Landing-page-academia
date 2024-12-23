import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./Components/Navbar";
import Section01 from "./Components/Section01";
import Section02 from "./Components/Section02";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Section01 />
        <Section02 />
      </div>
    </>
  );
}

export default App;
