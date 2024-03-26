import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.scss";
import "./Blog.scss";

function Blog() {
  const [loaded, setLoaded] = useState(false);
  // const [openImage, setOpenImage] = useState(false);
  // const [selectedImage, setSelectedImage] = useState("");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const images = [
    "blog-beach.jpeg",
    "blog-bridge.jpeg",
    "blog-cars.jpeg",
    "blog-dinamarca.jpeg",
    "blog-food.jpeg",
    "blog-person.jpeg",
  ];

  useEffect(() => {
    setLoaded(true);
    return () => {
      setLoaded(false);
    };
  }, []);

  // function handleClick(image) {
  //   setSelectedImage(image);
  //   setShowModal(true);
  // }

  // function handleClose() {
  //   setDisapearingModal(true);

  //   setTimeout(() => {
  //     setShowModal(false);
  //     setDisapearingModal(false);
  //   }, 1000);
  // }

  return (
    <div
      // className="blog-container"
      className={`blog-container ${inView ? "in-view" : ""}`}
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
            // onClick={() => handleClick(`./${image}`)}
            key={index}
            className={`blog-card ${loaded ? "loaded" : ""} styled-blog-card`}
            src={`./${image}`}
            alt={`art ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
