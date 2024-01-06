import React, { Component } from "react";

class Content2 extends Component {
  render() {
    return (
      <div className="container mx-auto mt-16 w-3/4 lg:w-3/5 ">
        <div>
          <p className="lg:text-text-sm xl:text-md 2xl:text-lg text-warna3 text-justify font-light leading-loose">
            A graduate with a Bachelor's degree in Information Technology from
            Brawijaya University. I have a strong interest in launching my
            career in Information Technology, particularly in Front-End
            Developer. Throughout my academic years, I actively participated in
            campus organizations, volunteered, and attended various training
            sessions, including the Independent Certified Study under the Kampus
            Merdeka program. Additionally, I successfully completed my studies
            in 8 semesters and maintained a GPA above 3.68 with a rating of Very
            Satisfactory.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <button class="scrollBottom text-xs font-normal">DOWNLOAD CV</button>
        </div>

        {/* Scema No 2 */}
        {/* <div className="flex gap-10">
          <div className="w-1/3">
            <p className="text-warna2 font-semibold mb-3 text-xs lg:text-sm xl:text-base 2xl:text-lg ">
              My Interest
            </p>
            <div className="text-warna1 text-left md:text-base lg:text-lg xl:text-2xl 2xl:text-3xl font-semibold leading-loose">
              <p className="mb-1">Front-End Developer,</p>
              <p className="mb-1">Back-End Developer,</p>
              <p className="mb-1">Product Manager</p>
            </div>
          </div>
          <div className="w-2/3">
            <p className="lg:text-text-sm xl:text-md 2xl:text-lg text-warna3 text-justify font-light leading-loose">
              A graduate with a Bachelor's degree in Information Technology from
              Brawijaya University. I have a strong interest in launching my
              career in Information Technology, particularly in Front-End
              Development. Throughout my academic years, I actively participated
              in campus organizations, volunteered, and attended various
              training sessions, including the Independent Certified Study under
              the Kampus Merdeka program. Additionally, I successfully completed
              my studies in 8 semesters and maintained a GPA above 3.68 with a
              rating of Very Satisfactory.
            </p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Content2;
