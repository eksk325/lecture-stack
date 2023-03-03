import { useEffect, useState } from "react";
import Main from "./Main";
import Initial from "./Initial";
import data from "./data/data.json";

function App() {
  const [initial, setInitial] = useState(null);

  useEffect(() => {
    // Check if there is user data
    if (JSON.stringify(data) === "{}") {
      setInitial(true);
    } else {
      setInitial(false);
    }
  });
  return (
    <div className="App">
      {initial == null ? null : <div>{initial ? <Initial /> : <Main />}</div>}
    </div>
  );
}

export default App;
