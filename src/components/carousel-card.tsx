"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import {ReactNode, useCallback, useEffect, useState} from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {Children} from "react";

function CarouselCard(props: {children?: ReactNode}) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const titles = ['round-up', 'fitness'];

  const renderItems = () => {
    return Children.map(props.children, (child, index) => {
      return (
        <CarouselItem key={index} className="size-24 bg-amber-300">
          {child}
        </CarouselItem>
      );
    });
  }

  useEffect(() => {
    if (!api) {
      return
    }
    api.on("slidesInView", () => {
      setCurrentSlide(api.slidesInView()[0]);
    })
  }, [api])

  return (
    <div className="border border-black">
      <div className="mb-[140px]">
        {
          titles.map((title, index) => (
            <div className="flex gap-1 items-center" key={index}>
              <div className={"size-1.5 rounded-full bg-black " + (index === currentSlide ? "visible" : "invisible")}></div>
              <div className={index === currentSlide ? "font-bold" : "font-extralight"}>{title}</div>
            </div>
          ))
        }
      </div>
      <Carousel plugins={[
        Autoplay({
          delay: 3000,
        }),
        Fade(),
      ]} setApi={setApi} className="size-44 flex items-center justify-center">
        <CarouselContent className="">
          {renderItems()}
          {/*<CarouselItem className="size-24 bg-amber-300">item 1</CarouselItem>
          <CarouselItem className="size-24 bg-amber-300">item 2</CarouselItem>*/}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CarouselCard;