import React, { Component } from "react";
import foto from "../../assets/images/Group 12.png";
class Content3 extends Component {
  render() {
    return (
      <div className="overflow-hidden-y">
        <div className="flex justify-center ">
          <div>
            <h1 className="text-center font-semibold text-3xl sm:text-7xl text-warna1 fade-in-out">
              Audima Oktasena,
            </h1>
            <p className="text-center font-semibold text-3xl sm:text-7xl md:text-7xl text-warna2 fade-in-out">
              Front-End Web Developer
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-2 ">
          <div className="z-10 grid grid-rows-4 ">
            <img src={foto} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Content3;
