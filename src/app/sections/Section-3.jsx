import React from "react";

function Section3() {
  return (
    <div>
      <section className="bg-[#315D6E] h-[20vh] w-full relative flex">
        <div className="w-full flex justify-center items-center">
          <div className="flex space-x-[15vw]">
            <img src="pic-section-3/logo-1-section3.png" alt="" />
            <img src="pic-section-3/logo-2-section3.png" alt="" />
            <img src="pic-section-3/logo-3-section3.png" alt="" />
          </div>
          <img
            src="pic-section-3/logo-4-section3.png"
            alt=""
            className="absolute bottom-[60%] right-[10%] max-md:right-0 max-md:bottom-[70%] opacity-40"
          />
        </div>
      </section>
    </div>
  );
}

export default Section3;
