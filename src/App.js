import { useEffect } from "react";
import "./App.css";
import OneSignal from "react-onesignal";
import { useState } from "react";
import gtag from "./gtag";

function App() {
  const [externalUserId, setExternalUserId] = useState("")
  const [key, setKey] = useState("")
  const [val, setVal] = useState("")

  useEffect(() => {
    OneSignal.init({
      appId: "96c1718d-c4a1-4ce7-8583-59d39cabeaee",
    });
  }, []);

  return (
    <div className="App">
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

      <button onClick={() => OneSignal.removeExternalUserId()}>Remove External User Id</button>

      <form>
        <label htmlFor="usertag">User Property</label>
        <input
          type="text"
          id="usertag"
          name="Key"
          placeholder="key"
          onChange={e => setKey(e.target.value)}
        />
        <input
          type="text"
          id="usertagvalue"
          name="Value"
          placeholder="value"
          onChange={e => setVal(e.target.value)}
        />
        <input
          type="submit"
          value="Set user property"
          onClick={(e) => {
            e.preventDefault()
            let obj = {}
            obj[key] = val
            console.log(obj)
            gtag("set", "user_properties", obj)
          }
          }
        />
      </form>
    </div>
  );
}

export default App;
