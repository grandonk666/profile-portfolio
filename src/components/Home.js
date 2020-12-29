import React, { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import Pages from "./Pages";
import { TweenMax } from "gsap/all";

function Home() {
  const [backgroundColor, setBackgroundColor] = useState(
    "radial-gradient(#2B3760, #0B1023)"
  );

  useEffect(() => {
    TweenMax.to(background.current, 0.3, { backgroundImage: backgroundColor });
  }, [backgroundColor]);

  const background = useRef(null);

  return (
    <div ref={background} className="home">
      <Menu />
      <Pages setBackgroundColor={setBackgroundColor} />
    </div>
  );
}

export default Home;
