import React, { Component } from "react";
import foto2 from "../../assets/images/Untitled-1.png";

class Content2 extends Component {
  componentDidMount() {
    // Disable scrolling when the component mounts
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    // Enable scrolling when the component is about to unmount
    document.body.style.overflow = "visible";
  }
  render() {
    return (
      <div>
        <div className="flex justify-center ">
          <div>
            <p className="font-semibold text-3xl sm:text-5xl text-warna1 fade-in-out">
              Hey Welcome! I'm
            </p>
            <p className="font-semibold text-3xl sm:text-5xl md:text-7xl text-warna2 fade-in-out">
              Audima Oktasena
            </p>
          </div>
          <div className="hidden sm:block">
            <div className="flex justify-center mt-2 ">
              <div className="z-10">
                <img src={foto2} alt="" />
              </div>
            </div>
          </div>
          <div>test</div>
        </div>

        {/* Gede */}
      </div>
    );
  }
}

export default Content2;
