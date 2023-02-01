import logo from "./logo.svg";
import "./App.css";
import Nav from "./nav";
import Main from "./main.jsx";
import Page1 from "./page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
import BrowserExt from "./browser_ext";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
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
    </div>
  );
}

export default App;
