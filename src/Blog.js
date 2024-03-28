import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.scss";
import "./Blog.scss";

function Blog() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const handleMouseEnter = (index) => () => {
    setIsHovered(true);
    setActiveId(index);
    console.log("mouse enter", index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setActiveId(null);
    console.log("mouse leave");
  };

  const images = [
    "blog-beach.jpeg",
    "blog-bridge.jpeg",
    "blog-cars.jpeg",
    "blog-dinamarca.jpeg",
    "blog-food.jpeg",
    "blog-person.jpeg",
  ];

  return (
    <div
      className="blog-container"
      // className={`blog-container ${inView ? "in-view" : ""}`}
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
        <p>Discover and read the latest post and articles</p>
        <p>about designm art and etc...</p>
      </div>
      <div className="card-container">
        {images.map((image, index) => (
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
        ))}
      </div>
    </div>
  );
}

export default Blog;
