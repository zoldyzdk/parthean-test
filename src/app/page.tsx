import {BetaTag} from "@/components/beta-tag";
import Image from "next/image";
import { DropCard } from "@/components/drop-card";
import React from "react";

export default function Home() {
  return (
    <main className="mx-4">
      <section className="mt-[60px] text-center lg:mt-5">
        <Image
          width={400}
          height={400}
          src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/652ebdf3befbcffd62e997ec_Money%20Automated.svg"
          alt="Money Automated"
          className="w-full"
        />
        <div className="mt-[10px] mb-12 text-base font-extralight">
          Automate your financial life with AI agents.
        </div>
        <div className="relative h-[90svw] mt-[32svw]">
          <div
            className="w-auto h-3/4 z-20 -mx-4 bg-gradient-to-b [background:linear-gradient(transparent_76%,rgba(255,255,255,.25)_83%,rgba(255,255,255,.49)_89%,#fff)] absolute top-auto bottom-0 left-0 right-0"/>
          <Image
            src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/65aacb62f6450dd44e8093e2_LandingImage-Money-Automated%201-p-800.png"
            alt="A hand holding a smartphone"
            width={358}
            height={479}
            className="w-[475px] sm:w-auto z-10 object-cover object-center overflow-visible top-auto bottom-0 mx-auto absolute"
          />
          <div
            className="h-4/5 mt-[175px] -mx-4 bg-gradient-to-b from-[#9ea7a2] via-[#c7c8c3] via-55% to-white z-0 rounded-t-[26px] absolute top-auto bottom-0 left-0 right-0"/>
        </div>
      </section>
      <section className="mt-[120px] flex flex-col items-center">
        <div className="flex items-center gap-2">
          <Image
            src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/652de41428965971af08d4d7_Chapter.svg"
            width={30}
            height={20}
            alt="A square and a arrow inside to two lines, all black"
          />
          <div className="uppercase text-[11px]">move money</div>
        </div>
        <h2 className="capitalize text-[46px] mt-4 mb-[42px]">a time saver</h2>
        <div className="mx-4 mb-24">Automation across your all your accounts</div>
        <div className="flex flex-col w-full gap-4">
          <div
            className="h-[50vh] flex flex-col items-center justify-between rounded-[10px] bg-gradient-to-b from-[#c0aafe] to-[#f7cdfe] relative">
            <div
              className="self-end mr-4 mt-3 py-1 px-3 rounded-[20px] text-[10px] [background:linear-gradient(rgba(0,0,0,.04),_rgba(0,0,0,.04))]">
              <div className="opacity-50">MM001</div>
            </div>
            <Image
              src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/65af3460de982dbc40497c73_Frame%20187869-p-800.png"
              width={275}
              height={343}
              alt="A smartphone screen"
              className="w-[60vw]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-3 items-center">
                <div className="capitalize text-[26px] font-light">
                  worry-free finances
                </div>
                <BetaTag/>
              </div>
              <div className="text-base font-normal">
                Automatically save and pay off debt every day, week, or month without
                causing overdrafts or missing rent.
              </div>
              <div className="bg-[#9ba0a5] h-[0.4px] w-full mt-[76px] mb-px"></div>
            </div>
            <div className="flex flex-col gap-4">
              <div
                className="relative bg-gradient-to-b from-[#f7cdfe] to-[#f7cdfe] h-[80vw] rounded-[10px] flex items-center justify-center">
                <Image
                  src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/653a9862a2c38db93a3afd16_Group%20187826%20(1).png"
                  width={260}
                  height={94}
                  alt="Two dropbox, showing a transfer from one account to another"
                />
                <div
                  className="absolute right-4 top-3 py-1 px-3 rounded-[20px] text-[10px] [background:linear-gradient(rgba(0,0,0,.04),_rgba(0,0,0,.04))]">
                  <div className="opacity-50">MM002</div>
                </div>
              </div>
              <div>
                <div className="flex gap-2 mb-3 items-center">
                  <h3 className="capitalize text-[26px] font-light">easy transfers</h3>
                  <BetaTag/>
                </div>
                <div className="text-base font-normal">
                  Easily move money between any two of your accounts. Save, pay off debts and pay your bills -- all
                  in one app.
                </div>
                <div className="bg-[#9ba0a5] h-[0.4px] w-full mt-[76px] mb-px"></div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-[500px] w-full bg-gradient-to-b from-[#dab4ff] to-[#dab4ff] rounded-[10px]"></div>
              <div className="flex gap-2 mb-3 items-center">
                <h3 className="capitalize text-[26px] font-light">fun saving</h3>
                <BetaTag/>
              </div>
              <div className="text-base font-normal">
                The best way to build a habit is to tie an action to the things you already do.
              </div>
              <div className="bg-[#9ba0a5] h-[0.4px] w-full mt-[76px] mb-px"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[118px]">
        <div className="">
          <div className="flex gap-1.5 justify-center">
            <Image
              src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/652e8fd8878288ffe93e55e4_Insights.svg"
              alt="A icon of a light bulb"
              width={30}
              height={20}
            />
            <div className="uppercase">smarter money</div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <h2 className="text-4xl mt-4 mb-[42px]">Real-time Insights.</h2>
            <p className="mb-24 w-[326px] text-center">Be informed on your spending, investing, and credit.</p>
          </div>
        </div>
        <DropCard />
      </section>
    </main>
  );
}
