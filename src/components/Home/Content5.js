import React, { Component } from "react";
import { Shoesnarian } from "../../assets/images/Portof";

class Content5 extends Component {
  render() {
    return (
      <div className="container mx-auto w-3/4 lg:w-4/5 mt-44 mb-24">
        <p className="text-center font-semibold text-2xl sm:text-4xl md:text-5xl text-warna2 fade-in-out">
          Contact Me
        </p>
        <p className="text-center mt-4 2xl:text-lg text-warna3 lg:px-28 xl:px-60 2xl:px-96 leading-relaxed">
          Thank you for visiting my portfolio, feel free to contact me through
          the provided contact information below. I look forward to the
          opportunity to discuss further!
        </p>

        <div class="grid text-center grid-cols-3 gap-4 mt-16 ">
          <div>
            <a
              href="https://wa.me/081285034617"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="bi bi-whatsapp text-4xl"
                style={{ color: "#25D366" }}
              ></i>
            </a>
            <p className="text-warna3 mt-2">+62 812-8503-4617</p>
          </div>
          <div>
            <a href="#">
              <i
                class="bi bi-envelope text-4xl"
                style={{ color: "#F4B400" }}
              ></i>
            </a>
            <p className="text-warna3 mt-2">audimasena@gmail.com</p>
          </div>
          <div>
            <a
              href="https://www.instagram.com/audima31/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="bi bi-instagram text-4xl"
                style={{ color: "#E1306C" }}
              ></i>
            </a>

            <p className="text-warna3 mt-2">@audima31</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content5;
