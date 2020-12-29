import React, { useEffect } from "react";

function Navigation({ setDetails, page, setPage }) {
  const changePage = (e) => {
    setPage((current) => (current = parseInt(e.target.id)));
  };
  function switchDots(dotNumber) {
    const activeDot = document.querySelectorAll(".slide")[dotNumber - 1];
    document.querySelectorAll(".slide").forEach((slide) => {
      slide.classList.remove("active");
    });
    activeDot.classList.add("active");
  }

  useEffect(() => {
    switch (page) {
      case 1:
        setDetails(
          (current) =>
            (current = {
              name: "Elena Morel",
              prof: "Photographer",
              date: "02/08/2018",
              image: "photo",
            })
        );
        break;
      case 2:
        setDetails(
          (current) =>
            (current = {
              name: "Evelina Zhu",
              prof: "Pro Chef",
              date: "02/05/2015",
              image: "chef",
            })
        );
        break;
      case 3:
        setDetails(
          (current) =>
            (current = {
              name: "Daria Shevtsova",
              prof: "Guitarist",
              date: "06/04/2018",
              image: "guitar",
            })
        );
        break;
      default:
        setDetails((current) => ({ ...current }));
        break;
    }

    switchDots(page);
  }, [page, setDetails]);

  return (
    <div className="pages">
      <div className="page-1">
        <h3>01</h3>
        <svg
          onClick={changePage}
          className="slide active"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle id="1" cx="6" cy="6" r="6" fill="white" />
        </svg>
      </div>
      <div className="page-2">
        <h3>02</h3>
        <svg
          onClick={changePage}
          className="slide"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle id="2" cx="6" cy="6" r="6" fill="white" />
        </svg>
      </div>
      <div className="page-3">
        <h3>03</h3>
        <svg
          onClick={changePage}
          className="slide"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle id="3" cx="6" cy="6" r="6" fill="white" />
        </svg>
      </div>
    </div>
  );
}

export default Navigation;
