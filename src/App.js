import React, { useEffect } from "react";
import store from "./store/store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Suscription from "./pages/Suscription";
import Business from "./components/news/Business";
import General from "./components/news/General";
import Entertainment from "./components/news/Entertainment";
import Health from "./components/news/Health";
import Science from "./components/news/Science";
import Sports from "./components/news/Sports";
import Technology from "./components/news/Technology";
import Checkout from "./components/suscriptions/Checkout";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

// REDUX
import { Provider } from "react-redux";

function App() {
  useEffect(() => {
    const urlBase = "https://api-sandbox.elcomercio.pe";

    const urlSDK =
      "https://arc-subs-sdk.s3.amazonaws.com/prod/sdk-identity.min.js";
    const sdkIdentity = document.createElement("script");
    sdkIdentity.src = urlSDK;

    sdkIdentity.onload = function () {
      window.Identity.apiOrigin = urlBase;
    };

    document.body.appendChild(sdkIdentity);
  }, []);

  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/nueva-cuenta" component={Register} />
          <Route exact path="/suscription" component={Suscription} />
          <Route exact path="/general" component={General} />
          <Route exact path="/business" component={Business} />
          <Route exact path="/entertainment" component={Entertainment} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/science" component={Science} />
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/technology" component={Technology} />

          <Route exact path="/checkout" component={Checkout} />

          <Redirect to="/" />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
