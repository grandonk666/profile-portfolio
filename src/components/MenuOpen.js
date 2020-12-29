import React, { useState, useEffect, useRef } from "react";
import { TimelineMax } from "gsap/all";

function MenuOpen({ open }) {
  const [tl] = useState(new TimelineMax({ paused: true }));

  const navOpen = useRef(null);
  const contact = useRef(null);
  const social = useRef(null);

  useEffect(() => {
    tl.to(navOpen.current, 0.5, { y: 0 })
      .fromTo(
        contact.current,
        0.5,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0 },
        "-=0.2"
      )
      .fromTo(
        social.current,
        0.5,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0 },
        "-=0.5"
      )
      .reverse();
  }, [tl]);

  useEffect(() => {
    tl.reversed(!open);
  }, [open, tl]);

  return (
    <div ref={navOpen} className="nav-open">
      <div ref={contact} className="contact">
        <h3>Contact</h3>
        <p>02348-234-843</p>
      </div>
      <div ref={social} className="social">
        <h3>Social</h3>
        <div className="social-links">
          <img
            src={process.env.PUBLIC_URL + "/img/Facebook.svg"}
            alt="facebook"
          />
          <img
            src={process.env.PUBLIC_URL + "/img/Twitter.svg"}
            alt="twitter"
          />
          <img
            src={process.env.PUBLIC_URL + "/img/Instagram.svg"}
            alt="instagram"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuOpen;
