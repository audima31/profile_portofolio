import React, { Component } from "react";
import foto from "../../assets/images/Untitled-233.png";
import {
  HTMLLogo,
  BootstrapLogo,
  CSSLogo,
  FirebaseLogo,
  GITLogo,
  JSLogo,
  MySQLLogo,
  ReactLogo,
  TailwindLogo,
  AgileMethodLogo,
  FigmaLogo,
} from "../../assets/images/Skill";
class Content3 extends Component {
  render() {
    return (
      <div className="container mx-auto w-3/4 lg:w-4/5  mt-36">
        <p className="text-center font-semibold text-3xl sm:text-5xl md:text-6xl text-warna2 fade-in-out">
          Skills
        </p>

        <div className="flex justify-center mt-14">
          <div class="grid gap-x-10 gap-y-10 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 text-white ">
            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img
                      className="mb-5"
                      src={HTMLLogo}
                      alt=""
                      style={{ width: "50%" }}
                    />
                    <p className="absolute bottom-5">HTML</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img
                      className="mb-5"
                      src={CSSLogo}
                      alt=""
                      style={{ width: "65%" }}
                    />
                    <p className="absolute bottom-5">CSS</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img
                      className="mb-5"
                      src={JSLogo}
                      alt=""
                      style={{ width: "60%" }}
                    />
                    <p className="absolute bottom-5">Javascript</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img
                      className="mb-5"
                      src={ReactLogo}
                      alt=""
                      style={{ width: "70%" }}
                    />
                    <p className="absolute bottom-5">ReactJS</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img
                      className="mb-5"
                      src={ReactLogo}
                      alt=""
                      style={{ width: "70%" }}
                    />
                    <p className="absolute bottom-5">React Native</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img
                      className="mb-5"
                      src={MySQLLogo}
                      alt=""
                      style={{ width: "80%" }}
                    />
                    <p className="absolute bottom-5">MySQL</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img
                      className="mb-5"
                      src={FirebaseLogo}
                      alt=""
                      style={{ width: "50%" }}
                    />
                    <p className="absolute bottom-5">Firebase</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img
                      className="mb-5"
                      src={BootstrapLogo}
                      alt=""
                      style={{ width: "70%" }}
                    />
                    <p className="absolute bottom-5">Bootstrap</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img
                      className="mb-5"
                      src={TailwindLogo}
                      alt=""
                      style={{ width: "70%" }}
                    />
                    <p className="absolute bottom-5">Tailwind CSS</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img
                      className="mb-5"
                      src={GITLogo}
                      alt=""
                      style={{ width: "70%" }}
                    />
                    <p className="absolute bottom-5">GitHub</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img
                      className="mb-5"
                      src={AgileMethodLogo}
                      alt=""
                      style={{ width: "80%" }}
                    />
                    <p className="absolute bottom-5">Agile Methodology</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="profilePhoto">
              <div class="content">
                <div class="back">
                  <div class="back-content">
                    <img
                      className="mb-5"
                      src={FigmaLogo}
                      alt=""
                      style={{ width: "45%" }}
                    />
                    <p className="absolute bottom-5">Figma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content3;
