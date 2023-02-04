import logo from "./logo.svg";
import "./App.css";
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
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init();
  return (
    <div className="App">
      <Nav />
      {/* <Fade direction="up"> */}
      <Landing />
      {/* </Fade> */}
      {/* <Fade direction="up"> */}
      <BrowserExt />
      {/* </Fade> */}
      {/* <Fade direction="up"> */}
      <Page1 />
      {/* </Fade> */}
      {/* <Fade direction="up"> */}
      <Page2 />
      {/* </Fade> */}
      {/* <Fade direction="up"> */}
      <Page3 />
      {/* </Fade> */}
      {/* <Fade direction="up"> */}
      <Page4 />
      {/* </Fade> */}
      {/* <Fade direction="up"> */}
      <Page5 />
      {/* </Fade> */}
      {/* <Fade direction="up"> */}
      <Page6 />
      {/* </Fade> */}
      {/* <Fade direction="up"> */}
      <Page7 />
      {/* </Fade> */}
      {/* <Fade direction="up"> */}
      <Page8 />
      {/* </Fade> */}
      {/* <Fade direction="up"> */}
      <Page9 />
      {/* </Fade> */}
      {/* <Fade direction="up"> */}
      <Footer />
      {/* </Fade> */}
    </div>
  );
}

export default App;
