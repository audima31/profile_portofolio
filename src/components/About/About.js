import React, { Component } from "react";
import Content1 from "./Content1";
import Header from "../Header/Header";
import Content2 from "./Content2";

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content1 />
        <Content2 />
      </div>
    );
  }
}

export default About;
