//<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from "react";
import UseCallbackComp from "./UseCallbackComp";

function App() {
  return (
    <div className="App">
      <UseCallbackComp />
    </div>
  );
}

export default App;


