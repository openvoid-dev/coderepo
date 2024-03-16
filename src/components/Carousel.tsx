"use client";

// components/Carousel.tsx
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icons } from "~/components/Icons";

const Carousel = () => {
  const settingsTopRow = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 8, // Number of slides per row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    rtl: true, // Right to left direction for top row
    centerPadding: "60px",
  };

  const settingsBottomRow = {
    ...settingsTopRow,
    rtl: false, // Left to right direction for bottom row
  };

  return (
    <div className="flex flex-col gap-16">
      <Slider {...settingsTopRow}>
        <Icons.react className="h-16 w-16 flex-auto opacity-70" />
        <Icons.svelte className="h-16 w-16 flex-auto opacity-70" />
        <Icons.nextjs className="h-16 w-16 flex-auto opacity-70" />
        <Icons.database className="h-16 w-16 flex-auto opacity-70" />
        <Icons.auth className="h-16 w-16 flex-auto opacity-70" />
        <Icons.typescript className="h-16 w-16 flex-auto opacity-70" />
        <Icons.php className="h-16 w-16 flex-auto opacity-70" />
        <Icons.golang className="h-16 w-16 flex-auto opacity-70" />
      </Slider>
      <Slider {...settingsBottomRow}>
        <Icons.react className="h-16 w-16 flex-auto opacity-70" />
        <Icons.svelte className="h-16 w-16 flex-auto opacity-70" />
        <Icons.nextjs className="h-16 w-16 flex-auto opacity-70" />
        <Icons.database className="h-16 w-16 flex-auto opacity-70" />
        <Icons.auth className="h-16 w-16 flex-auto opacity-70" />
        <Icons.typescript className="h-16 w-16 flex-auto opacity-70" />
        <Icons.php className="h-16 w-16 flex-auto opacity-70" />
        <Icons.golang className="h-16 w-16 flex-auto opacity-70" />
      </Slider>
    </div>
  );
};

export default Carousel;
