import React, { Component } from "react";
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
  ExpressLogo,
  MidtransLogo,
} from "../../assets/images/Skill";
import {
  ComingSoon,
  Mayastik,
  Oktashoes,
  PortofolioWeb,
  Shoesnarian,
  SMPBPS,
} from "../../assets/images/Portof";

class Content4 extends Component {
  render() {
    return (
      <div className="mt-60">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators -bottom-16">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            {/* <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button> */}
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div>
                {/* items-center */}
                <div class="grid  grid-flow-col gap-y-7 gap-x-6 flex justify-center">
                  {/* max-w-md lg:max-w-lg*/}
                  <div class="row-span-3 flex justify-center">
                    {/* Card */}
                    <div>
                      <div>
                        <h1 className="text-warna2 md:text-2xl lg:text-4xl xl:text-5xl font-bold fade-in-out">
                          My
                        </h1>
                        <h1 className="text-warna1 md:text-3xl lg:text-5xl xl:text-6xl font-bold underline fade-in-out">
                          Projects<label className="text-warna2">.</label>
                        </h1>
                      </div>

                      <div class="cardPortof rounded-2xl overflow-hidden -bottom-24">
                        <a
                          href="https://shoesnarian.vercel.app/"
                          target="_blank" // Menambahkan properti target="_blank"
                          rel="noopener noreferrer" // Menambahkan rel="noopener noreferrer" untuk keamanan
                        >
                          <img
                            class="w-lg"
                            src={Shoesnarian}
                            alt="Sunset in the mountains"
                          />
                          <div class="captionPortof pt-32">
                            <p class="text-warna1 textCaption text-lg font-medium">
                              <label className="font-normal text-warna2 ">
                                |
                              </label>{" "}
                              Shoesnarian.
                            </p>
                            <p class="text-warna3 textCaption2 text-sm">
                              E-Commerce Web App
                            </p>
                            <img
                              className="techStack"
                              src={BootstrapLogo}
                              alt="ReactJS "
                              style={{ width: "8%" }}
                            />
                            <img
                              className="techStack2"
                              src={ReactLogo}
                              alt="Bootstrap"
                              style={{ width: "7%" }}
                            />
                            <img
                              className="techStack3"
                              src={ExpressLogo}
                              alt="Express.js"
                              style={{ width: "6.5%" }}
                            />
                            <img
                              className="techStack4"
                              src={MySQLLogo}
                              alt="MySQL"
                              style={{ width: "12%" }}
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  {/* max-w-md lg:max-w-lg*/}
                  <div class="col-span-2 flex justify-end ">
                    {/* Card */}
                    <div class="cardPortof rounded-xl overflow-hidden">
                      <a
                        href="https://admin-edupaysmkm.netlify.app/login"
                        target="_blank" // Menambahkan properti target="_blank"
                        rel="noopener noreferrer" // Menambahkan rel="noopener noreferrer" untuk keamanan
                      >
                        <img
                          class="w-full"
                          src={SMPBPS}
                          alt="Sunset in the mountains"
                        />
                        <div class="captionPortof pt-32">
                          <p class="text-warna1 textCaption text-sm font-medium">
                            <label className="font-normal text-warna2 ">
                              |
                            </label>{" "}
                            Pembayaran SPP SMK Muhammadiyah Cilegon
                          </p>
                          <p class="text-warna3 textCaption2 text-sm">
                            Invoice Management Web App & Mobile App
                          </p>
                          <img
                            className="techStack"
                            src={BootstrapLogo}
                            alt="Bootstrap "
                            style={{ width: "8%" }}
                          />
                          <img
                            className="techStack2"
                            src={ReactLogo}
                            alt="React JS, React Native"
                            style={{ width: "7%" }}
                          />
                          <img
                            className="techStack3"
                            src={FirebaseLogo}
                            alt="Firebase"
                            style={{ width: "5.3%" }}
                          />
                          <img
                            className="techStack5"
                            src={MidtransLogo}
                            alt="Midtrans"
                            style={{ width: "15%" }}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* max-w-md lg:max-w-lg*/}
                  <div class="row-span-2 col-span-2 flex justify-center ">
                    {/* Card */}
                    <div class="cardPortof rounded-2xl overflow-hidden">
                      <a
                        href="https://mayastik-restaurant.netlify.app/"
                        target="_blank" // Menambahkan properti target="_blank"
                        rel="noopener noreferrer" // Menambahkan rel="noopener noreferrer" untuk keamanan
                      >
                        <img
                          class="w-full"
                          src={Mayastik}
                          alt="Sunset in the mountains"
                        />
                        <div class="captionPortof pt-32">
                          <p class="text-warna1 textCaption text-lg font-medium">
                            <label className="font-normal text-warna2 ">
                              |
                            </label>{" "}
                            Mayastik
                          </p>
                          <p class="text-warna3 textCaption2 text-sm">
                            Restaurant Web App
                          </p>
                          <img
                            className="techStack"
                            src={BootstrapLogo}
                            alt="Bootstrap "
                            style={{ width: "8%" }}
                          />
                          <img
                            className="techStack2"
                            src={ReactLogo}
                            alt="React"
                            style={{ width: "7%" }}
                          />
                          <img
                            className="techStack3"
                            src={FirebaseLogo}
                            alt="Firebase"
                            style={{ width: "5.3%" }}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COL SEBELAH */}
            <div class="carousel-item">
              <div>
                {/* items-center */}
                <div class="grid grid-flow-col gap-y-7 gap-x-6 flex justify-center">
                  {/* max-w-md lg:max-w-lg*/}
                  <div class="col-span-2 flex justify-center ">
                    {/* Card */}
                    <div class="cardPortof rounded-xl overflow-hidden">
                      <a
                        href="https://mayastik-restaurant.netlify.app/"
                        target="_blank" // Menambahkan properti target="_blank"
                        rel="noopener noreferrer" // Menambahkan rel="noopener noreferrer" untuk keamanan
                      >
                        <img
                          class="w-full"
                          src={PortofolioWeb}
                          alt="Sunset in the mountains"
                        />
                        <div class="captionPortof pt-32">
                          <p class="text-warna1 textCaption text-lg font-medium">
                            <label className="font-normal text-warna2 ">
                              |
                            </label>{" "}
                            Personal Portfolio
                          </p>
                          <p class="text-warna3 textCaption2 text-sm">
                            Portfolio Web App
                          </p>
                          <img
                            className="techStack6"
                            src={TailwindLogo}
                            alt="Bootstrap "
                            style={{ width: "8%" }}
                          />
                          <img
                            className="techStack2"
                            src={ReactLogo}
                            alt="React"
                            style={{ width: "7%" }}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* max-w-md lg:max-w-lg*/}
                  <div class="row-span-2 col-span-2 flex justify-center ">
                    {/* Card */}
                    <div class="cardPortof rounded-2xl overflow-hidden">
                      <a
                        href="https://oktashoes-react.netlify.app/"
                        target="_blank" // Menambahkan properti target="_blank"
                        rel="noopener noreferrer" // Menambahkan rel="noopener noreferrer" untuk keamanan
                      >
                        <img
                          class="w-full"
                          src={Oktashoes}
                          alt="Sunset in the mountains"
                        />
                        <div class="captionPortof pt-32">
                          <p class="text-warna1 textCaption text-lg font-medium">
                            <label className="font-normal text-warna2 ">
                              |
                            </label>{" "}
                            Oktashoes.
                          </p>
                          <p class="text-warna3 textCaption2 text-sm">
                            E-Commerce Web App
                          </p>
                          <img
                            className="techStack"
                            src={BootstrapLogo}
                            alt="Bootstrap "
                            style={{ width: "8%" }}
                          />
                          <img
                            className="techStack2"
                            src={ReactLogo}
                            alt="React"
                            style={{ width: "7%" }}
                          />
                          <img
                            className="techStack3"
                            src={FirebaseLogo}
                            alt="Firebase"
                            style={{ width: "5.3%" }}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* max-w-md lg:max-w-lg*/}
                  <div class="row-span-3 flex justify-center">
                    {/* Card */}
                    <div>
                      <div className="text-right fade-in-out">
                        <h1 className="text-warna2 md:text-2xl lg:text-4xl xl:text-5xl font-bold">
                          My
                        </h1>
                        <h1 className="text-warna1 md:text-3xl lg:text-5xl xl:text-6xl font-bold underline">
                          Projects<label className="text-warna2">.</label>
                        </h1>
                      </div>

                      <div class="cardPortof rounded-2xl overflow-hidden -bottom-24">
                        <div class="w-lg inProcessCard flex justify-center items-center">
                          <p className="text-lg">Coming Soon!</p>
                        </div>
                        <div class="captionPortof  pt-32">
                          <p class="textCaption font-medium text-2xl text-sky-400">
                            Project in Process
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="carousel-item">
              <img src={HTMLLogo} class="d-block w-25" alt="..." />
            </div> */}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
          </button>
          <button
            class="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default Content4;
