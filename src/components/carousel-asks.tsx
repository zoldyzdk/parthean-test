"use client"
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Image from "next/image";
import {useEffect, useState} from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {Progress} from "@/components/ui/progress";
import {ProgressBar} from "@/components/progress-bar";

function CarouselAsks() {
  const [state, setState] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setState(prevState => prevState === 2 ? 0 : prevState + 1);
    }, 4000);

    let timerProgress = setInterval(() => {
      setProgress(prevProgress => prevProgress + 25);
    }, 1000);

    // Clear the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setProgress(0);
    }
  }, [progress]);

  let card1, card2, card3;
  let transform1, transform2, transform3;

  switch (state) {
    case 0:
      card1 = 3;
      card2 = 2;
      card3 = 1;
      transform1 = "translate3d(6px, 0px, 1px)";
      transform2 = "translate3d(12px, 6px, 0px)";
      transform3 = "translate3d(0px, 12px, 0px)";
      break;
    case 1:
      card1 = 1;
      card2 = 3;
      card3 = 2;
      transform1 = "translate3d(0px, 12px, 0px)";
      transform2 = "translate3d(6px, 0px, 1px)";
      transform3 = "translate3d(12px, 6px, 0px)";
      break;
    case 2:
      card1 = 2;
      card2 = 1;
      card3 = 3;
      transform1 = "translate3d(12px, 6px, 0px)";
      transform2 = "translate3d(0px, 12px, 0px)";
      transform3 = "translate3d(6px, 0px, 1px)";
      break
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-[348px] h-[185px] flex justify-center items-center -mb-10">
        <div className=" h-[92px] w-full mx-6 relative ">
          <Image
            src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/6532fde92ca75b8c394cdbf5_Group%20187815-p-500.png"
            width={500}
            height={200}
            alt="A sticker"
            style={{
              position: "absolute",
              zIndex: card1,
              display: "block",
              transformStyle: "preserve-3d",
              transform: `${transform1} scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transition: "all 0.5s ease-in-out",
            }}
          />
          <Image
            src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/6532ffa9635e3d8fbce05076_Group%20187815-1-p-500.png"
            width={500}
            height={200}
            alt="A sticker"
            style={{
              position: "absolute",
              zIndex: card2,
              display: "block",
              transformStyle: "preserve-3d",
              transform: `${transform2} scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transition: "all 0.5s ease-in-out",
            }}
          />
          <Image
            src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/65330030635e3d8fbce0b7e4_Group%20187815-2-p-500.png"
            width={500}
            height={200}
            quality={100}
            alt="A sticker"
            className=""
            style={{
              position: "absolute",
              zIndex: card3,
              display: "block",
              transformStyle: "preserve-3d",
              transform: `${transform3} scale3d(1, 1, 2) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transition: "all 0.5s ease-in-out",
            }}
          />
        </div>
      </div>
      <ProgressBar/>
    </div>
  )
}

export default CarouselAsks;