import React, { useEffect, useState, useRef, useCallback } from "react";
import Details from "./Details";
import Hero from "./Hero";
import Navigation from "./Navigation";

function Pages({ setBackgroundColor }) {
  const [{ name, prof, date, image }, setDetails] = useState({
    name: "Elena Morell",
    prof: "Photographer",
    date: "02/08/2015",
    image: "photo",
  });

  let [page, setPage] = useState(1);

  function scrollChange(e) {
    if (e.deltaY > 0) {
      setPage((current) => {
        if (current === 3) {
          return (current = 1);
        }
        return current + 1;
      });
    } else {
      setPage((current) => {
        if (current === 1) {
          return (current = 3);
        }
        return current - 1;
      });
    }
  }

  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  useEffect(() => {
    const throttledPage = throttle(throttle(scrollChange, 1000));
    window.addEventListener("wheel", throttledPage);
    return () => window.removeEventListener("wheel", throttledPage);
  }, []);

  useEffect(() => {
    switch (name) {
      case "Elena Morell":
        setBackgroundColor(
          (current) => (current = "radial-gradient(#3C436B, #0B0C23)")
        );
        break;
      case "Evelina Zhu":
        setBackgroundColor(
          (current) => (current = "radial-gradient(#495E71, #111B24)")
        );
        break;
      case "Daria Shevtsova":
        setBackgroundColor(
          (current) => (current = "radial-gradient(#703D5B, #1A0715)")
        );
        break;
      default:
        setBackgroundColor(
          (current) => (current = "radial-gradient(#3C436B, #0B0C23)")
        );
        break;
    }
  }, [name, setBackgroundColor]);

  return (
    <section className="page">
      <Details name={name} prof={prof} date={date} />
      <Hero name={name} image={image} />
      <Navigation page={page} setPage={setPage} setDetails={setDetails} />
    </section>
  );
}

export default Pages;
