import React, { useState } from "react";
// import { FirebaseAuth } from "react-firebaseui";
// import { auth } from "./firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import WorldMap from "./pages/WorldMap";
import SignIn from "./pages/SignIn";
import Header from './components/Header';
import './App.css';



function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user-dashboard" component={UserDashboard} />
        <Route path="/world-map" component={WorldMap} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;

