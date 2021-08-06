import axios from "axios";
import React, { useState, useEffect } from "react";
import Plan from "./Plan";

const Plans = () => {
  const [datos, guardarDatos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/subscription").then((res) => {
      guardarDatos(res.data);
    });
  }, []);
  return (
    <div className="bck-cielo" style={{ height: "93vh" }}>
      <div className="container d-flex justify-content-center align-items-center">
        {datos.length === 0 ? null : (
          <div className="row">
            {datos.map((suscription) => (
              <div className="col-lg-4">
                <Plan key={suscription.id} suscription={suscription} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plans;
