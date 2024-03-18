/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

import { Icons } from "~/components/Icons";
import React, { useRef } from "react";

const TechnologyCards = () => {
  const pluginAutoPlay = useRef(
    Autoplay({ delay: 0, stopOnInteraction: true }),
  );
  const pluginAutoScroll = useRef(AutoScroll({ startDelay: 0 }));
  const pluginAutoScrollReverse = useRef(
    AutoScroll({ startDelay: 0, direction: "backward" }),
  );

  return (
    <div className="pointer-events-none flex touch-none flex-col gap-16">
      <Carousel
        plugins={[pluginAutoScroll.current, pluginAutoPlay.current]}
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          <CarouselItem className="lg:basis-1/ md:basis-1/6">
            <Icons.react className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.svelte className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.nextjs className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.database className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.auth className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.typescript className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.php className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.golang className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <Carousel
        plugins={[pluginAutoScrollReverse.current, pluginAutoPlay.current]}
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.react className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.svelte className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.nextjs className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.database className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.auth className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.typescript className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.php className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/6">
            <Icons.golang className="mx-auto h-16 w-16 flex-auto opacity-70" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TechnologyCards;
