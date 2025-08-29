import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import ME from "../Assets/me.jpeg";

const Header = () => {
  const fullText = "Data Analyst and ML Enthusiastic";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  // 🔽 Scroll listener to check position
  useEffect(() => {
    const handleScroll = () => {
       const scrollPos = window.scrollY;
       const windowHeight = window.innerHeight;
       const docHeight = document.documentElement.scrollHeight;

       setAtTop(scrollPos <= 10); // near top → disable ⬆️
       setAtBottom(scrollPos + windowHeight >= docHeight - 10); // near bottom → disable ⬇️
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔽 Function to scroll to the next section
  const scrollToNextSection = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY;

    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      if (sec.offsetTop > scrollPos + 10) {
        sec.scrollIntoView({ behavior: "smooth" });
        break;
      }
    }
  };

  // 🔼 Function to scroll to previous section
  const scrollToPrevSection = () => {
    const sections = document.querySelectorAll("section[id], header[id]");
    const scrollPos = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = sections[i];
      if (sec.offsetTop < scrollPos - 10) {
        sec.scrollIntoView({ behavior: "smooth" });
        break;
      }
    }
  };

  useEffect(() => {
    let speed = isDeleting ? 50 : 150;

    // add hold time when finished typing
    if (!isDeleting && index === fullText.length) {
      speed = 1500; // hold 1s
    }
    if (isDeleting && index === 0) {
      speed = 500; // small pause before typing again
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === fullText.length) setIsDeleting(true);
      } else {
        setDisplayText(fullText.substring(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1 className="name">Ishan Majumder</h1>
        <h5 className="text-light">
          {displayText}
          <span className="cursor">|</span>
        </h5>
        <CTA />
        <HeaderSocials />

        {/* <div className="me">
                    <img src={ME} alt="me" />
                </div> */}
        <a
          className={`scroll_up ${atTop ? "disabled" : ""}`}
          onClick={!atTop ? scrollToPrevSection : null}
        >
          <FaAngleDoubleUp />
        </a>
        <a
          className={`scroll_down ${atBottom ? "disabled" : ""}`}
          onClick={!atBottom ? scrollToNextSection : null}
        >
          <FaAngleDoubleDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
