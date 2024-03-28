import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.scss";
import "./Blog.scss";

function Blog() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const [activeImage, setActiveImage] = useState({ column: null, index: null });

  const handleMouseEnter = (column, index) => () => {
    setActiveImage({ column, index });
  };

  const handleMouseLeave = () => {
    setActiveImage({ column: null, index: null });
  };

  // const handleMouseEnter = (index) => () => {
  //   setIsHovered(true);
  //   setActiveId(index);
  //   console.log("mouse enter", index);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  //   setActiveId(null);
  //   console.log("mouse leave");
  // };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    // Esta função é chamada quando o componente é montado
    setLoaded(true); // Define que as imagens foram "carregadas"
    return () => {
      setLoaded(false);
    };
  }, []);

  const imagesLeft = ["blog-beach.jpeg", "blog-bridge.jpeg", "blog-cars.jpeg"];

  const imagesRight = [
    "blog-dinamarca.jpeg",
    "blog-food.jpeg",
    "blog-person.jpeg",
  ];

  return (
    <div
      // className="blog-container"
      className={`blog-container ${inView ? "in-view" : ""}`}
      inView={inView}
      ref={ref}
    >
      <div className="top">
        <h1 id="tittle">Blog</h1>
        <div className="navbar">
          <button type="button" className="button-navbar">
            All
          </button>
          <button type="button" className="button-navbar">
            Design
          </button>
          <button type="button" className="button-navbar">
            Product
          </button>
          <button type="button" className="button-navbar">
            Leadership
          </button>
          <button type="button" className="button-navbar">
            Managment
          </button>
        </div>
      </div>
      <div className="description">
        <p id="top">Discover and read the latest post and articles</p>
        <p id="bottom">about designm art and etc...</p>
      </div>
      <div className="card-container">
        <div className="images-left">
          {imagesLeft.map((image, index) => (
            <img
              onMouseEnter={handleMouseEnter("left", index)}
              onMouseLeave={handleMouseLeave}
              key={image}
              className={`blog-card ${
                activeImage.column === "left" && activeImage.index === index
                  ? "active"
                  : ""
              }`}
              src={`./${image}`}
              alt={`left side art ${index + 1}`}
            />
          ))}
        </div>
        <div className="images-right">
          {imagesRight.map((image, index) => (
            <img
              onMouseEnter={handleMouseEnter("right", index)}
              onMouseLeave={handleMouseLeave}
              key={image}
              className={`blog-card ${
                activeImage.column === "right" && activeImage.index === index
                  ? "active"
                  : ""
              } ${
                activeImage.column && index > activeImage.index
                  ? "card-hovered"
                  : ""
              }`}
              src={`./${image}`}
              alt={`right side art ${index + 1}`}
            />
          ))}
        </div>
        {/* {imagesLeft.map((image, index) => (
          <img
            onMouseEnter={handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={image}
            className={`blog-card ${
              isHovered && activeId === index ? "active" : ""
            }`}
            src={`./${image}`}
            alt={`art ${index + 1}`}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Blog;
