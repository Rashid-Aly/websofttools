import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatIcons from "../../../data/HomePage/Stats.json";
import StatsCard from "../StatsCard/StatsCard";

function ClientsSection() {
  const [slidesToShow, setSlidesToShow] = useState(6.4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 476) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 640) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(6.4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    slidesToScroll: false,
    slidesToShow: slidesToShow,
  };

  return (
    <div className="px-16 py-12">
      <div className="container text-center">
        <h2 className="text-h6 text-Primary">
          Trusted by the world`s leading brands
        </h2>
        <Slider
          {...settings}
          className="mt-[26px] inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          {StatIcons.map((item, index) => (
            <div key={index} className="slide">
              <StatsCard logo={item.logo} className="p-4 opacity-90" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ClientsSection;
