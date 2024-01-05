import React, { Component } from "react";
import Header from "../Header/Header";
import Content1 from "./content1";
import Content2 from "./Content2";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content1 />
      </div>
    );
  }
}
export default Home;
