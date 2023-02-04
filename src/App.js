import logo from "./logo.svg";
import "./App.css";
import Nav from "./pages/Nav";
import Landing from "./pages/Landing.jsx";
import Page1 from "./pages/page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Footer from "./pages/Footer";
import BrowserExt from "./pages/Browser_ext";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init();
  return (
    <div className="App">
      <Nav />

      <Landing />

      <BrowserExt />

      <Page1 />

      <Page2 />

      <Page3 />

      <Page4 />

      <Page5 />

      <Page6 />

      <Page7 />

      <Page8 />

      <Page9 />

      <Footer />
    </div>
  );
}

export default App;
