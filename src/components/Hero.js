import React, { useEffect, useRef, useState } from "react";
import { TimelineMax } from "gsap/all";
import { Link } from "react-router-dom";

function Hero({ image, name }) {
  const [tl] = useState(new TimelineMax());

  const left = useRef(null);
  const right = useRef(null);

  useEffect(() => {
    tl.fromTo(
      left.current,
      0.3,
      { y: "-100%", opacity: 0 },
      { y: "-10%", opacity: 1 },
      "+=0.3"
    )
      .fromTo(
        right.current,
        0.3,
        { y: "-100%", opacity: 0 },
        { y: "10%", opacity: 1 },
        "-=0.2"
      )
      .set(left.current, { clearProps: "all" })
      .set(right.current, { clearProps: "all" });
  }, [image, tl]);

  return (
    <div className="hero">
      <Link to={`/${name}`}>
        <img
          ref={left}
          className="model-left"
          src={`${process.env.PUBLIC_URL}/img/${image}-left.jpg`}
          alt="model"
        />
        <img
          ref={right}
          className="model-right"
          src={`${process.env.PUBLIC_URL}/img/${image}-right.jpg`}
          alt="model"
        />
      </Link>
    </div>
  );
}

export default Hero;
