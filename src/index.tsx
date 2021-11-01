import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENT
import NavBar from "./components/NavBar";

// PAGES
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/home" component={Home} />
          <Route />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
