import React, { useEffect, useState } from "react";
import Card from "./Card";

import Spinner from "../utils/Spinner";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { obtenerNoticiasAction } from "../../actions/noticesActions";

function Cards() {
  const dispatch = useDispatch();

  // obtener el state
  const noticias = useSelector((state) => state.noticias.noticias);

  const [retrasocarga, guardarCarga] = useState(true);

  useEffect(() => {
    // CONSULTAR LA API
    if (noticias.length === 0) {
      dispatch(obtenerNoticiasAction("", "general", ""));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  setTimeout(() => {
    guardarCarga(false);
  }, 1000);

  return (
    <div>
      {retrasocarga ? (
        <Spinner />
      ) : noticias.length !== 0 ? (
        <div className="container d-flex justify-content-center align-items-center h-100 mt-3">
          <div className="row">
            {noticias.map((article) => (
              <div className="col-md-4">
                <Card key={article.url} {...article} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-light">No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default Cards;
