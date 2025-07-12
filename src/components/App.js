import React, { useState } from "react";
import './../styles/App.css';



function App() {
  const [showPara, setShowPara] = useState(false);

  const handleClick = () => {
    setShowPara(true);
  };

  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Show Paragraph
      </button>

      <p
        id="para"
        className={showPara ? "show" : "hide"}
      >
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
    </div>
  );
}

export default App;