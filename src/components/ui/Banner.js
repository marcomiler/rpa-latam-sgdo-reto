import React from "react";
import "../../assets/css/banner.css";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="fondo bck-yellow">
      <Link to={"/"}>
        <img
          className="logo"
          src="https://cdna.elcomercio.pe/resources/dist/elcomercio/images/logo.png?d=1"
          alt=""
        />
      </Link>
    </div>
  );
}
