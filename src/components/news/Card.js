import React from "react";

import "../../assets/css/cards.css";

function Card({ title, urlToImage, url, description }) {
  const retornaTitle = () => {
    if (title !== null || title === "") {
      if (title.length > 90) {
        return title.substring(0, 87) + "...";
      } else {
        return title;
      }
    }
  };

  const retornaImage = () => {
    if (urlToImage === null || urlToImage === "") {
      return "https://fpae.pt/backup/20181025/wp/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg";
    }
    return urlToImage;
  };

  const retornaDescription = () => {
    if (description !== null || description === "") {
      if (description.length > 90) {
        return description.substring(0, 87) + "...";
      } else {
        return description;
      }
    }
    return "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ";
  };

  return (
    <div
      className="card text-center bg-dark animate__animated animate__fadeInUp mb-2"
      style={{ height: "470px", width: "auto" }}>
      <div className="overflow" style={{ height: "250px" }}>
        <img
          src={retornaImage()}
          alt={title}
          className="card-img-top"
          loading="lazy"
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{retornaTitle()}</h4>
        <p className="card-text text-secondary description">
          {retornaDescription()}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank" // abre una pestaña nueva
          className="btn btn-outline-secondary border-0" //estilo gris sin bordes
          rel="noreferrer">
          Ir al Artículo
        </a>
      </div>
    </div>
  );
}

export default Card;
