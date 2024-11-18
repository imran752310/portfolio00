import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="max-container m-auto py-20  relative  padding-center">
     
      <span className="max-container absolute top-64 lef-44 h-[144px] w-[777px] bg-red-400 rounded-full shadow-lg blur-[7rem] -z-10"></span>
      <h1 className="text-center bold-32">About</h1>
      <div className="flexCenter gap-10 ">
          <p className="text-lg w-full px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis nato
            quia nonummy nibh id elit. Donec ut libero sed nulla porta malesuada.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis nato
            quia nonummy nibh id elit. Donec ut libero sed nulla porta malesuada.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis nato
            quia nonummy nibh id elit. Donec ut libero sed nulla porta malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis nato
            quia nonummy nibh id elit. Donec ut libero sed nulla porta malesuada.
            </p>
        <div>
          <Image src={'/about.png'} alt="about" height={300} width={300}/>
        </div>
      </div>
    </div>
  );
};

export default About;
