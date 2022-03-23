import { useEffect } from "react";
import "./App.css";
import OneSignal from "react-onesignal";
import logo from "./logo.png";

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "96c1718d-c4a1-4ce7-8583-59d39cabeaee",
    });
  }, []);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="tags">
        <button className="btn btn--react">
          ReactJS
        </button>
        <button
          className="btn btn--angular"
        >
          Angular
        </button>
        <button className="btn btn--vue">
          Vue
        </button>
      </div>
    </div>
  );
}

export default App;
