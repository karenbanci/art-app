import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
// import ScrollWrapper from "./elements/ScrollWrapper";
import "./App.scss";
import "./Artworks.scss";

// import styled from "styled-components";

function Artworks() {
  const [showModal, setShowModal] = useState(false);
  const [disapearingModal, setDisapearingModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const images = [
    "hands.jpeg",
    "eyes.jpeg",
    "colors.jpeg",
    "door.jpeg",
    "paint.jpeg",
  ];

  useEffect(() => {
    // Esta função é chamada quando o componente é montado
    setLoaded(true); // Define que as imagens foram "carregadas"
    return () => {
      setLoaded(false);
    };
  }, []);

  function handleClick(image) {
    setSelectedImage(image);
    setShowModal(true);
  }

  function handleClose() {
    setDisapearingModal(true);

    setTimeout(() => {
      setShowModal(false);
      setDisapearingModal(false);
    }, 1000);
  }

  return (
    <div
      className={`body ${inView ? "in-view" : ""}`}
      // className="body "
      inView={inView}
      ref={ref}
    >
      <div
        className={`modal ${showModal ? "modal-active" : ""} ${
          disapearingModal ? "modal-disapearing" : ""
        }`}
        show={showModal}
        onClick={handleClose}
      >
        <div className="modal-content">
          <button className="close" onClick={handleClose}>
            ×
          </button>
          <img src={selectedImage} alt="Enlarged art" />
        </div>
      </div>
      <div className="container">
        <div className="info">
          <h1 id="title">
            <span class="line">Some of our</span>
            <span class="line">fabulous artworks</span>
          </h1>
          <button type="button" className="button-dark">
            Show more...
          </button>
        </div>
        {images.map((image, index) => (
          <button
            className="card"
            key={index}
            onClick={() => handleClick(`./${image}`)}
          >
            {/* Aplica a animação somente quando a página é carregada pela primeira vez */}
            <img
              className={`art-card ${loaded ? "loaded" : ""} styled-art-card`}
              src={`./${image}`}
              alt={`art ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Artworks;
