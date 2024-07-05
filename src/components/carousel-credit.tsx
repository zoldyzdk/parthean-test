"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {type CarouselApi} from "@/components/ui/carousel"
import React, {ReactNode, useEffect, useState} from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import {ProgressBar} from "@/components/progress-bar";

export function CarouselCredit() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const titles = ['points', 'credit score'];

  useEffect(() => {
    if (!api) {
      return
    }
    api.on("slidesInView", () => {
      setCurrentSlide(api.selectedScrollSnap());
    })
  }, [api])

  return (
    <div
      className="relative rounded-[20px] h-[500px] mt-4 w-full flex flex-col items-center justify-center">
      <div
        className="absolute right-4 top-3 py-1 px-3 rounded-[20px] text-[10px] [background:linear-gradient(rgba(0,0,0,.04),_rgba(0,0,0,.04))]">
        <div className="opacity-50">SM004</div>
      </div>

      <div className="self-start ml-4 mb-[120px]">
        {
          titles.map((title, index) => (
            <div className="flex gap-1 items-center" key={index}>
              <div
                className={"size-1.5 rounded-full bg-black opacity-0 transition-all duration-500 ease-out " + (index === currentSlide ? "opacity-100" : "opacity-0")}></div>
              <div
                className={"uppercase text-[11px] transition-all duration-300 ease-in " + (index === currentSlide ? "font-bold" : "font-extralight")}>{title}</div>
            </div>
          ))
        }
      </div>
      <Carousel plugins={[
        Autoplay({
          delay: 4000,
        }),
        Fade(),
      ]} setApi={setApi} className=" flex items-center justify-center">
        <CarouselContent className='w-full ml-0'>
          <CarouselItem className="w-full flex flex-col items-center justify-between gap-16">
            <div className="">
              <Image
                src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/653009867ab5113f3e464757_Group%20187846.png"
                alt="A box with news about Microsoft stock and United Airlines stock"
                width={500}
                height={400}
                className="w-[179px]"
              />
            </div>
            <div className='flex flex-col items-center'>
              <p className="font-normal text-sm max-w-[300px] text-center">
                Earn more points with our credit-card coach.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="w-full flex flex-col items-center justify-between gap-10">
            <div className="">
              <Image
                src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/6532bfee03a0e8d4e0c20dfc_Frame%20187854%20(2).png"
                alt="A box with news about Microsoft stock and United Airlines stock"
                width={500}
                height={400}
                className="w-[179px]"
              />
            </div>
            <div className='flex flex-col items-center'>
              <p className="font-normal text-sm max-w-[300px] text-center">
                Build credit with zero effort with our credit-building coach.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <ProgressBar/>
    </div>
  )
}