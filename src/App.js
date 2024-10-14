import React, { useEffect, useState, useRef } from "react";
import "./css/navbar.css";
import "./css/hero.css";
import "./css/intro.css";

function App() {
  const sentence = "Welcome";
  const targetDiv = useRef(null);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const scrollToDiv = () => {
    if (targetDiv.current) {
      targetDiv.current.scrollIntoView();
    }
  };

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
              <a href="/" className="navbarlink" onClick={scrollToDiv}>
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
      <div className="introcontainer" ref={targetDiv}>
        <div className="introdiv1">
          <h1 className="introheading">Who am I?</h1>
          <a className="introtext1">My name is Aman Taak, I am a Graduate </a>
        </div>
        <div className="introdiv2">
          <h1 className="">My name is aman</h1>
          <a className="">Hello there</a>
        </div>
      </div>
    </div>
  );
}

export default App;
