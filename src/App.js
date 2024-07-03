import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [languageState, setLanguageState] = useState(0);
  return (
    <div className="App">
      <Home languageState={languageState} setLanguageState={setLanguageState} />
    </div>
  );
}

export default App;
