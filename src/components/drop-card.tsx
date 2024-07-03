"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {useState} from "react";
import Image from "next/image";

export function DropCard() {
  const [imgNumber, setImgNumber] = useState(1);
  return (
    <section>
      <div
        className="mb-9 h-[50vh] w-full bg-gradient-to-b from-[#77ffae] to-[#e5ffc8] flex items-end justify-center relative">
        <Image
          src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/652ee3b22cbf168cd6e17386_SpendingRate-p-500.png"
          alt="A smarthphone showing a graphic in the screen"
          width={234}
          height={343}
          className={"w-[60vw] absolute z-0"}
        />
        <Image
          src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/652ee3b22cbf168cd6e17386_SpendingRate-p-500.png"
          alt="A smarthphone showing a graphic in the screen"
          width={234}
          height={343}
          className={"w-[60vw] transition-opacity absolute z-30 " + (imgNumber === 1 ? "opacity-100" : "opacity-0")}
        />
        <Image
          src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/653aa76feabfc634afa0388b_Frame%201863190%20(1)-p-500.png"
          alt="A smarthphone showing a graphic in the screen"
          width={234}
          height={343}
          className={"w-[60vw] transition-opacity absolute z-20 " + (imgNumber === 2 ? "opacity-100" : "opacity-0")}
        />
        <Image
          src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/653aa6f811987f042d107d60_Frame%201863189%20(1)-p-500.png"
          alt="A smarthphone showing a graphic in the screen"
          width={234}
          height={343}
          className={"w-[60vw] transition-opacity absolute z-10 " + (imgNumber === 3 ? "opacity-100" : "opacity-0")}
        />
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem onClick={() => setImgNumber(1)} value="item-1">
          <AccordionTrigger
            className="ml-[12.25px] mt-1 trasition-opacity duration-200 hover:opacity-50 uppercase text-[11px] font-medium hover:no-underline">spending</AccordionTrigger>
          <AccordionContent className="ml-[12.25px] py-1">
            <h3 className="text-[26px] font-light mb-[10px]">Spending Monitor</h3>
            <p className="text-base font-light mb-4">
              Budget without needing a budget. We’ll monitor your spending and let you know when you’re over or under
              your normal spending.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem onClick={() => setImgNumber((prev) => prev === 2 ? 1 : 2)} value="item-2">
          <AccordionTrigger
            className="ml-[12.25px] mt-1 trasition-opacity duration-200 hover:opacity-50 uppercase text-[11px] font-medium hover:no-underline">shopping</AccordionTrigger>
          <AccordionContent className="ml-[12.25px] py-1 ">
            <h3 className="text-[26px] font-light mb-[10px]">Shopping Insight</h3>
            <p className="text-base font-light mb-4">
              Find the latest deals, perks, and rewards for the stores you shop at most. From free hemming to life-time
              money-back guarantees, Parthean AI will find you deals that save you money.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem onClick={() => setImgNumber((prev) => prev === 3 ? 1 : 3)} value="item-3">
          <AccordionTrigger
            className="ml-[12.25px] mt-1 trasition-opacity duration-200 hover:opacity-50 uppercase text-[11px] font-medium hover:no-underline">investment</AccordionTrigger>
          <AccordionContent className="ml-[12.25px] py-1">
            <h3 className="text-[26px] font-light mb-[10px]">Investment Insight</h3>
            <p className="text-base font-light mb-4">
              Build a closer relationship with your portfolio with an analyst in your pocket. We&apos;ll never make a
              decision for you or recommend a trade, but we&apos;ll keep you informed with custom research so you always know
              what&apos;s going on in the markets.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="border-t border-[#9ba0a5] mt-3"></div>
    </section>
  );
}