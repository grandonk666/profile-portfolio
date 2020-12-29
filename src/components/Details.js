import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap/all";

function Details({ name, prof, date }) {
  const details = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(details.current, 1, { opacity: 0 }, { opacity: 1 });
  }, [name]);

  return (
    <div ref={details} className="details">
      <h1>{name}</h1>
      <h2>{prof}</h2>
      <p>{date}</p>
    </div>
  );
}

export default Details;
