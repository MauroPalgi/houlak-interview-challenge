import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

// COMPONENT
import  NavBar  from "./components/NavBar";

// PAGES
import  Home  from "./pages/Home";
import  NotFound  from "./pages/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <NavBar />
        <Route exact path="/" component={App} />
        <Route exact path="/home" component={Home} />
        <Route component={NotFound} />        
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


