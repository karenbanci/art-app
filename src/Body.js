import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";

function Body() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [loaded, setLoaded] = useState(false);

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
  }, []);

  const Body = styled.div`
    display: flex;
    justify-content: center;
    margin: 200px 30px 30px;

    .Container {
      display: grid;
      grid-template-columns: auto auto auto;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    #title {
      font-size: 3rem;
      margin: 20px;
    }

    .card {
      cursor: pointer;
      background-color: var(--white);
      border: none;
    }

    .art-card {
      width: 400px;
      height: 400px;
      margin: 5px;
      border-radius: 30px;
      /* animation: fadeIn 3s ease forwards; */
      /* animation: grow 2s ease-in forwards; */
    }
  `;

  const StyledArtCard = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 30px;
    opacity: 0; /* Inicia invisível */
    transform: scale(0); /* Inicia menor */
    animation: grow 2s ease-in forwards;
  `;

  const Modal = styled.div`
    display: ${({ show }) => (show ? "block" : "none")};
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    .modal-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 700px; /* Set width of modal */
      height: 700px; /* Set height of modal */
      max-width: 90%; /* Ensure it doesn't exceed the width of the screen */
      max-height: 90%; /* Ensure it doesn't exceed the height of the screen */
      overflow: auto; /* If the image is too big, it will scroll */
      padding: 20px;
      background: none;
      display: flex; /* Add flex display to center the image inside the modal */
      align-items: center; /* Align image vertically */
      justify-content: center; /* Align image horizontally */
    }

    img {
      border-radius: 30px;
      width: 100%; /* Set image width to fill the modal content */
      height: 100%; /* Set image height to fill the modal content */
      object-fit: cover; /* Ensure the aspect ratio is maintained without stretching */
    }
  `;

  function handleClick(image) {
    setSelectedImage(image);
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <Body>
      <Modal show={showModal} onClick={handleClose}>
        <div className="modal-content">
          <img src={selectedImage} alt="Enlarged art" />
        </div>
      </Modal>
      <div className="Container">
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
            <StyledArtCard
              className={`art-card ${loaded ? "loaded" : ""}`}
              src={`./${image}`}
              alt={`art ${index + 1}`}
            />
          </button>
          // <button
          //   className="card"
          //   key={index}
          //   onClick={() => handleClick(`./${image}`)}
          // >
          //   <img
          //     className="art-card"
          //     src={`./${image}`}
          //     alt={`art ${index + 1}`}
          //   />
          // </button>
        ))}
        {/* {images.map((image, index) => (
          <button className="card" onClick={handleClick}>
            <img
              className="art-card"
              key={index}
              src={`./${image}`}
              alt={`art ${index + 1}`}
            />
          </button>
        ))} */}
      </div>
    </Body>
  );
}

export default Body;
