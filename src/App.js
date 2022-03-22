import { useEffect } from "react";
import "./App.css";
import OneSignal from "react-onesignal";
import logo from "./logo.png";

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "1f5f4be6-c0cb-4b06-9627-32b627ac8f80",
    });
  }, []);

  const onHandleTag = (tag) => {
    console.log("Tagging");
    OneSignal.sendTag("tech", tag).then(() => {
      console.log("Sent tag: " + tag);
    });
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="tags">
        <button className="btn btn--react" onClick={() => onHandleTag("react")}>
          ReactJS
        </button>
        <button
          className="btn btn--angular"
          onClick={() => onHandleTag("angular")}
        >
          Angular
        </button>
        <button className="btn btn--vue" onClick={() => onHandleTag("vue")}>
          Vue
        </button>
      </div>
    </div>
  );
}

export default App;
