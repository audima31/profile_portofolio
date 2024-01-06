import React, { Component } from "react";
import foto from "../../assets/images/Untitled-233.png";

class Content1 extends Component {
  render() {
    return (
      <div className="container mx-auto mt-5">
        <div className="text-warna1 text-center">
          <p>Who am i</p>
        </div>

        <div className="flex justify-center mt-16">
          <div className="grid grid-4 grid-flow-col gap-16">
            <div>
              <div className="text-left text-warna1">
                <p>Audima Oktasena</p>
                <p>Front-End Web Developer</p>

                <p>Hello everyone, my name is Audima Oktasena</p>
              </div>
            </div>

            {/*  */}
            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img src={foto} alt="" style={{ width: "74%" }} />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    );
  }
}

export default Content1;
