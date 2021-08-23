import { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";
export default function Intro() {
  const txtRef = useRef();
  useEffect(() => {
    init(txtRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Content Creator", "Software Engineer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there I'm</h2>
          <h1>Ahmed</h1>
          <h3>
            Freelance <span ref={txtRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
