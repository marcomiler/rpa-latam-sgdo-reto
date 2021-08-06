import React from "react";
import "../assets/css/navBar.css";
import Banner from "../components/ui/Banner";
import NavBar from "../components/ui/NavBar";
import Cards from "../components/news/Cards";

export default function Home() {
  return (
    <header className="bg-dark">
      <NavBar />
      <Banner />
      <Cards />
    </header>
  );
}
