import React, { useState, useRef } from "react";
import MenuOpen from "./MenuOpen";

function Menu() {
  const [open, setOpen] = useState(false);
  const [stroke, setStroke] = useState("white");

  const logoText = useRef(null);

  const toggle = () => {
    setOpen(!open);

    if (!open) {
      setStroke((current) => (current = "black"));
      logoText.current.style.color = "black";
    } else {
      setStroke((current) => (current = "white"));
      logoText.current.style.color = "white";
    }
  };

  return (
    <header>
      <nav>
        <h3 ref={logoText} className="logo">
          Grandonk
        </h3>
        <svg
          onClick={toggle}
          className="menu"
          width="43"
          height="23"
          viewBox="0 0 43 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1.5" x2="43" y2="1.5" stroke={stroke} strokeWidth="3" />
          <line y1="11.5" x2="28" y2="11.5" stroke={stroke} strokeWidth="3" />
          <line y1="21.5" x2="16" y2="21.5" stroke={stroke} strokeWidth="3" />
        </svg>
        <MenuOpen open={open} />
      </nav>
    </header>
  );
}

export default Menu;
