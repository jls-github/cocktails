import "./App.css";
import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassMartiniAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/logo.jpg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import FormCom from "./components/FormCom";
import About from "./components/About";
import Contact from "./components/Contact";
import NavRouter from "./components/NavRouter";
import Layout from "./components/Card";
import Card from "./components/Card";
import { render } from "@testing-library/react";

const axios = require("axios");

// initializing Axios Instance
const api = axios.create({
  baseURL: "https://www.thecocktaildb.com",
});

class App extends Component {
  constructor() {
    super();
    this.state = []; // initialize your data with an empty array, not an object. You are not expecting an object back from your api call
  }

  //   // The componentDidMount() method runs after the component output has been rendered to the DOM.
  componentDidMount() {
    api.get("/api/json/v1/1/search.php?s=").then((res) => {
      const drinks = res.data.drinks;
      console.log(res.data);
      console.log(drinks);
      // this.setState({ drinks }); TODO: make sure you know what this is
    });
  }

  render() {
    const { drinks } = this.state;
    return (
      <div>
        <NavRouter />
        <FormCom />
        <Layout />
        {/* <Card drinks={drinks} /> TODO: uncomment this once you are sure what your data is like */}
      </div>
    );
  }
}

export default App;
