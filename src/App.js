import React, { useEffect, useState } from "react";
import "../src/css/navbar.css";
import "../src/css/hero.css";

function App() {
  const sentence = "Welcome";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < sentence.length) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + sentence[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearInterval(typingInterval);
    }
  }, [index, sentence]);

  return (
    <div>
      <nav className="navbar">
        <div className="navbarlogo">
          <a href="/" className="navbarlogo">
            Aman Taak
          </a>
        </div>
        <div>
          <ul className="navbarlinks">
            <li>
              <a href="/" className="navbarlink">
                Intro
              </a>
            </li>
            <li>
              <a href="/" className="navbarlink">
                Projects
              </a>
            </li>
            <li>
              <a href="/" className="navbarlink">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="herocontainer">
        <h1 className="heroheading">{displayedText}</h1>
      </div>
      <div></div>
    </div>
  );
}

export default App;
