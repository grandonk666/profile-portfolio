import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Portfolio({ match }) {
  const [{ name, prof, image }, setProfiles] = useState({
    name: "Elena Morell",
    prof: "Photographer",
    image: "photo",
  });

  useEffect(() => {
    switch (match.params.name) {
      case "Elena Morell":
        setProfiles({
          name: "Elena Morel",
          prof: "Photographer",
          image: "photo",
        });
        break;
      case "Evelina Zhu":
        setProfiles({
          name: "Evelina Zhu",
          prof: "Pro Chef",
          image: "chef",
        });
        break;
      case "Daria Shevtsova":
        setProfiles({
          name: "Daria Shevtsova",
          prof: "Guitarist",
          image: "guitar",
        });
        break;
      default:
        setProfiles((current) => ({ ...current }));
        break;
    }
  }, [match.params.name]);

  return (
    <div>
      <div className="banner">
        <img src={`./img/${image}-bg.jpg`} alt="" />
        <div className="author">
          <h1>{name}</h1>
          <h3>{prof}</h3>
        </div>
      </div>
      <div className="story">
        <div className="story-description">
          <h3>My Story</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
          <p>
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="profile">
          <img src={`./img/${image}-profile.jpg`} alt="profile" />
        </div>
      </div>
      <div className="my-work">
        <div className="work-description">
          <h3>My Work</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="work-gallery">
          <img src={`./img/${image}-gallery-1.jpg`} alt="" />
          <img src={`./img/${image}-gallery-2.jpg`} alt="" />
          <img src={`./img/${image}-gallery-3.jpg`} alt="" />
          <img src={`./img/${image}-gallery-4.jpg`} alt="" />
          <img src={`./img/${image}-gallery-5.jpg`} alt="" />
          <img src={`./img/${image}-gallery-6.jpg`} alt="" />
        </div>
      </div>
      <Link to='/'>
      <div className="button-back">
        Go Back
      </div>
      </Link>
    </div>
  );
}

export default Portfolio;
