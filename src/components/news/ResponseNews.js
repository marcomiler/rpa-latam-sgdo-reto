import React from "react";
import NavBar from "../ui/NavBar";
import Banner from "../ui/Banner";
import Cards from "./Cards";
import { useDispatch } from "react-redux";
import { obtenerNoticiasAction } from "../../actions/noticesActions";

const ResponseNews = ({ filtro }) => {
  const dispatch = useDispatch();
  // CONSULTAR LA API
  dispatch(obtenerNoticiasAction("", filtro, ""));

  return (
    <header className="bg-dark">
      <NavBar />
      <Banner />
      <Cards />
    </header>
  );
};

export default ResponseNews;
