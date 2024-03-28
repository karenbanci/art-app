import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./App.scss";
import "./Blog.scss";

function Blog() {
  const [loaded, setLoaded] = useState(false);
  const [activeImage, setActiveImage] = useState({ column: null, index: null });

  const handleMouseEnter = (column, index) => () => {
    setActiveImage({ column, index });
  };

  const handleMouseLeave = () => {
    setActiveImage({ column: null, index: null });
  };

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

  const navbar = ["All", "Design", "Product", "Leadership", "Managment"];

  const blogPostsLeft = [
    {
      image: "blog-beach.jpeg",
      url: "/beach-post",
      alt: "A relaxing beach scene",
      title: "Beach Adventure",
    },
    {
      image: "blog-bridge.jpeg",
      url: "/bridge-post",
      alt: "A stunning bridge at sunset",
      title: "Bridge at Sunset",
    },
    {
      image: "blog-cars.jpeg",
      url: "/cars-post",
      alt: "Busy city streets with cars",
      title: "City Life",
    },
  ];

  const blogPostRight = [
    {
      image: "blog-dinamarca.jpeg",
      url: "/denmark-post",
      alt: "Colorful buildings in Denmark",
      title: "Colorful Denmark",
    },
    {
      image: "blog-food.jpeg",
      url: "/food-post",
      alt: "Delicious food spread on a table",
      title: "Gourmet Feast",
    },
    {
      image: "blog-person.jpeg",
      url: "/dance-post",
      alt: "A person dancing on the street",
      title: "Street Dance",
    },
  ];

  return (
    <div
      className={`blog-container ${inView ? "in-view" : ""}`}
      inView={inView}
      ref={ref}
    >
      <div className="top">
        <h1 id="title">Blog</h1>
        <div className="navbar">
          {navbar.map((item) => (
            <button type="button" className="button-navbar">
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="description-container">
        <div className="description">
          <p id="top">Discover and read the latest post and articles</p>
          <p id="bottom">about designm art and etc...</p>
        </div>
        <div className="empty"></div>
      </div>
      <div className="card-container">
        <div className="images-left">
          {blogPostsLeft.map((post, index) => (
            <a href={post.url} key={post.image} className="blog-card-link">
              <h4 className="blog-card-title">{post.title}</h4>

              <img
                onMouseEnter={handleMouseEnter("left", index)}
                onMouseLeave={handleMouseLeave}
                className={`blog-card ${
                  activeImage.column === "left" && activeImage.index === index
                    ? "active"
                    : ""
                }`}
                src={`./${post.image}`}
                alt={post.alt}
              />
            </a>
          ))}
        </div>
        <div className="images-right">
          {blogPostRight.map((post, index) => (
            <a href={post.url} key={post.image} className="blog-card-link">
              <h4 className="blog-card-title">{post.title}</h4>
              <img
                onMouseEnter={handleMouseEnter("right", index)}
                onMouseLeave={handleMouseLeave}
                className={`blog-card ${
                  activeImage.column === "right" && activeImage.index === index
                    ? "active"
                    : ""
                }`}
                src={`./${post.image}`}
                alt={post.alt}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
