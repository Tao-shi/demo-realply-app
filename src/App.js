import logo from "./logo.svg";
import "./App.css";
import Zoom from "react-reveal/Zoom";
import Nav from "./Nav";
import Landing from "./Landing.jsx";
import Page1 from "./page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
import Footer from "./Footer";
import BrowserExt from "./Browser_ext";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      {/* <Zoom bottom> */}
      <Nav />
      <BrowserExt />
      {/* </Zoom> */}
      {/* <Zoom bottom> */}
      <Page1 />
      {/* </Zoom> */}
      {/* <Zoom bottom> */}
      <Page2 />
      {/* </Zoom> */}
      {/* <Zoom bottom> */}
      <Page3 />
      {/* </Zoom> */}
      {/* <Zoom bottom> */}
      <Page4 />
      {/* </Zoom> */}
      {/* <Zoom bottom></Zoom> */}
      <Page5 />
      {/* <Zoom bottom> */}
      <Page6 />
      {/* </Zoom> */}
      {/* <Zoom bottom> */}
      <Page7 />
      {/* </Zoom> */}
      {/* <Zoom bottom> */}
      <Page8 />
      {/* </Zoom> */}
      {/* <Zoom bottom /> */}
      <Page9 />
      {/* </Zoom> */}
      {/* <Zoom bottom> */}
      <Footer />
      {/* </Zoom> */}
    </div>
  );
}

export default App;
