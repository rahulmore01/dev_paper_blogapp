import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-[#181818] text-white h-screen w-full">
        <div className="hero  monu_ex_reg">
          <div className="hero_text">
            <div className="hero_text_title monu_ex_reg">I'm Rahul</div>
            <div className="hero_text_subtitle  ">
              I develop creative web applications
            </div>
          </div>
          {/* cta */}
          <div className="hero_cta">
            <div className="hero_cta_main">Let's talk</div>
            <div className="hero_cta_next">View work</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
