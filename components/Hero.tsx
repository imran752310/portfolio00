"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container  padding-center flex flex-col flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row">
      <span className=" max-container absolute top-64 lef-44 h-[144px] w-[777px] bg-blue-400 rounded-full shadow-lg blur-[7rem] -z-10"></span>
      {/*Left div */}
      <div className="relative z-20 flex flex-1 flex-col pt-16">
        <h4 className="bold-20">Hello,</h4>
        <h1 className="bold-48 lg: bold-64 relative">
          I'm Muhammad Imran Khan
        </h1>
        <h2 className="bold-28 lg:bold-32 text-[1.8rem] capitalize">
          A{" "}
          <span>
            <Typewriter
              words={[
                "Full Stack Developer",
                "React + Nextjs",
                "WordPress + PHP",
                "AI Agent",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="regular-16 max-w-[555px] my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem officia eveniet quos voluptatem labore cumque adipisci
          ipsam suscipit. Natus qui dolorum nisi repudiandae iure aut vero nobis
          doloribus vel eaque?
        </p>
        <div className="my-5 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  height={24}
                  width={24}
                />
              ))}
          </div>
          <p className="bold-18 lg:bold-20">
            1100+{" "}
            <span className="regular-16 lg:regular-20">Excellent Review</span>
          </p>
        </div>
        <div className=" flex gap-1 pt-6">
          <Button
            type="button"
            title="Download CV"
            icon="/download.svg"
            variant="btn-dark-rounded"
          />
          <Button
            type="button"
            title="Contact Me"
            icon="/arrow-right.svg"
            variant="btn_white_rounded"
          />
        </div>
      </div>

      {/*RIGHT*/}
      <div className="flex flex-1">
              <Image src={'/bg.png'} alt='bg' width={488} height={488} className="w-auto" />
      </div>
    </section>
  );
};

export default Hero;
