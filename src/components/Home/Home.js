import React, { Component } from "react";
import Header from "../Header/Header";
import Content1 from "./content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Content5 from "./Content5";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        {/* <Content5 /> */}
      </div>
    );
  }
}
export default Home;
