import { useEffect } from "react";
import "./App.css";
import OneSignal from "react-onesignal";
import logo from "./logo.png";
import { useState } from "react";

function App() {
  const [externalUserId, setExternalUserId] = useState("")

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

      <form>
        <label htmlFor="externalUserId">External User ID</label>
        <input
          type="text"
          id="externalUserId"
          name="externalUserId"
          onChange={e => setExternalUserId(e.target.value)}
        />
        <input
          type="submit"
          value="Register External User Id"
          onClick={(e) => {
            e.preventDefault()
            console.log(externalUserId)
            OneSignal.setExternalUserId(externalUserId)
          }
          }
        />
      </form>

      <button onClick={() => OneSignal.removeExternalUserId()}>Remove Exter User Id</button>
    </div>
  );
}

export default App;
