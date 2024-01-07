import React, { Component } from "react";
import { Shoesnarian } from "../../assets/images/Portof";

class Content5 extends Component {
  render() {
    return (
      <div className="mt-36 mb-64">
        <div className="z-20 relative left-52">
          <h1 className="text-warna2 md:text-2xl lg:text-4xl xl:text-5xl font-bold">
            My
          </h1>
          <h1 className="text-warna1 md:text-3xl lg:text-5xl xl:text-6xl font-bold">
            Projects<label className="text-warna2">.</label>
          </h1>
        </div>
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
                <div class="grid  grid-flow-col gap-y-4 gap-x-4 flex justify-center">
                  {/* max-w-md lg:max-w-lg*/}
                  <div class="row-span-3 flex justify-center">
                    {/* Card */}
                    <div class="cardPortof rounded-2xl overflow-hidden -bottom-24">
                      <img
                        class="w-lg"
                        src={Shoesnarian}
                        alt="Sunset in the mountains"
                      />
                      <div class="captionPortof  pt-32">
                        <p class="text-warna2 textCaption">Haii nama saya</p>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  {/* max-w-md lg:max-w-lg*/}
                  <div class="col-span-2 flex justify-center ">
                    {/* Card */}
                    <div class="cardPortof rounded-xl overflow-hidden">
                      <img
                        class="w-full"
                        src={Shoesnarian}
                        alt="Sunset in the mountains"
                      />
                      <div class="captionPortof  pt-32">
                        <p class="text-warna2 textCaption">Haii nama saya</p>
                      </div>
                    </div>
                  </div>
                  {/* max-w-md lg:max-w-lg*/}
                  <div class="row-span-2 col-span-2 flex justify-center ">
                    {/* Card */}
                    <div class="cardPortof rounded-2xl overflow-hidden">
                      <img
                        class="w-full"
                        src={Shoesnarian}
                        alt="Sunset in the mountains"
                      />
                      <div class="captionPortof  pt-32">
                        <p class="text-warna2 textCaption">Haii nama saya</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="grid grid-rows-2 grid-cols-2">
                <div class="bg-blue-500 p-4">1</div>
                <div class="bg-green-500 p-4">2</div>
                <div class="bg-red-500 p-4">3</div>
                <div class="bg-yellow-500 p-4">4</div>
                <div class="bg-purple-500 p-4">5</div>
                <div class="bg-orange-500 p-4">6</div>
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

export default Content5;
