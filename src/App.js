import logo from "./logo.svg";
import "./App.css";
import FunctionalComponent from "./nav";
import FunctionalComponent2 from "./main.jsx";
import Page1 from "./page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <FunctionalComponent2 />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </div>
  );
}

export default App;
