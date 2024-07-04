import {BetaTag} from "@/components/beta-tag";
import Image from "next/image";
import {DropCard} from "@/components/drop-card";
import React from "react";
import CarouselAsks from "@/components/carousel-asks";
import {CarouselDeeper} from "@/components/carousel-deeper";
import {CarouselLearn} from "@/components/carousel-learn";
import Link from "next/link";
import {AccordionAnswers} from "@/components/accordion-answers";
import {CarouselSaving} from "@/components/carousel-saving";
import {CarouselCredit} from "@/components/carousel-credit";


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
              <div className="h-[500px] w-full bg-gradient-to-b from-[#dab4ff] to-[#dab4ff] rounded-[10px]">
                <CarouselSaving />
              </div>
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
        <DropCard/>
        <div className="flex flex-col gap-9">
          <div className="relative h-[500px] rounded-[20px] mt-4 w-full bg-[#e5ffc8] ">
            {/*<div className="absolute right-4 top-3 py-1 px-3 rounded-[20px] text-[10px] [background:linear-gradient(rgba(0,0,0,.04),_rgba(0,0,0,.04))]">*/}
              <CarouselCredit />
              <div className="opacity-50">SM004</div>
            {/*</div>*/}
          </div>
          <div>
            <div className="flex gap-2 mb-3 items-center">
              <h3 className="capitalize text-[26px] font-light">Credit Optimized</h3>
              <BetaTag/>
            </div>
            <div className="text-base font-normal">
              Stop worrying about whether or not you’re optimizing your points.
              Parthean will help you optimize your credit card utilization to build your credit and get the most points!
            </div>
            <div className="bg-[#9ba0a5] h-[0.4px] w-full mt-[76px] mb-px"></div>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <div className="relative rounded-[10px] h-[500px] mt-4 w-full bg-[#77ffae] flex items-center justify-center">
            <div
              className="absolute right-4 top-3 py-1 px-3 rounded-[20px] text-[10px] [background:linear-gradient(rgba(0,0,0,.04),_rgba(0,0,0,.04))]">
              <div className="opacity-50">SM005</div>
            </div>
            <Image
              src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/6530099685379136218372a1_Frame%203759-p-500.png"
              alt="A box with news about Microsoft stock and United Airlines stock"
              width={260}
              height={215}
              className=""
            />
          </div>
          <div>
            <div className="flex gap-2 mb-3 items-center">
              <h3 className="capitalize text-[26px] font-light">Your Newsletter</h3>
              <BetaTag/>
            </div>
            <div className="text-base font-normal">
              Sent to your phone daily. A newsletter about <em>your</em> finances.
            </div>
            <div className="bg-[#9ba0a5] h-[0.4px] w-full mt-[76px] mb-px"></div>
          </div>
        </div>
      </section>
      <section className="mt-[118px]">
        <div className="">
          <div className="flex gap-1.5 justify-center">
            <Image
              src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/652e8fe2b7b888907625940c_Typing.svg"
              alt="Two dots and a vertical line, side by side, inside a rectangule box"
              width={30}
              height={20}
            />
            <div className="uppercase">ai chat</div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <h2 className="text-4xl mt-4 mb-[42px]">Talk to Your Money.</h2>
            <p className="mb-24 w-[326px] text-center">
              Ask questions, get financial plans, and more through
              conversation.
            </p>
          </div>
          <div>
            <div
              className="relative rounded-[10px] h-[50vh] mt-4 w-full bg-gradient-to-b from-[#ffe872] to-[#fbf9ed] flex items-end justify-center">
              <div
                className="absolute right-4 top-3 py-1 px-3 rounded-[20px] text-[10px] [background:linear-gradient(rgba(0,0,0,.04),_rgba(0,0,0,.04))]">
                <div className="opacity-50">TM001</div>
              </div>
              <Image
                src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/653020bf35cc1ec728498111_fsddfdsfs%201-p-500.png"
                alt="A box with news about Microsoft stock and United Airlines stock"
                width={260}
                height={215}
                className=""
              />
            </div>
            <div className="flex gap-2 mb-3 items-center">
              <h3 className="capitalize text-[26px] font-light">Financial Assistant</h3>
              <BetaTag/>
            </div>
            <div className="text-base font-normal">
              No more combing through Google to piece together articles — Parthean AI has the full picture, so its
              answers are totally custom to you. We&apos;ve integrated the most cutting-edge AI tools with your personal
              financial information.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[14px] items-center mt-[74px] mb-[56px]">
          <p className="text-xs">Ask things like</p>
          <CarouselAsks/>
        </div>
        <div className="flex flex-col gap-9">
          <div className="relative rounded-[10px] h-[500px] mt-4 w-full bg-[#fff3b1] flex items-center justify-center">
            <div
              className="absolute right-4 top-3 py-1 px-3 rounded-[20px] text-[10px] [background:linear-gradient(rgba(0,0,0,.04),_rgba(0,0,0,.04))]">
              <div className="opacity-50">SM005</div>
            </div>
            <Image
              src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/6532c646b3397a8f9feadb1b_Frame%201863194-p-500.png"
              alt="A box with news about Microsoft stock and United Airlines stock"
              width={260}
              height={215}
              className=""
            />
          </div>
          <div>
            <div className="flex gap-2 mb-3 items-center">
              <h3 className="capitalize text-[26px] font-light">Personalized plans</h3>
            </div>
            <div className="text-base font-normal">
              Whether you’re paying off student loan debt, getting married, having a child, or just want to go on a trip
              with friends, Parthean AI will help you build a plan that stays within your budget.
            </div>
            <div className="bg-[#9ba0a5] h-[0.4px] w-full mt-[76px] mb-px"></div>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <CarouselDeeper/>
          <div>
            <div className="flex gap-2 mb-3 items-center">
              <h3 className="capitalize text-[26px] font-light">Dig Deeper</h3>
            </div>
            <div className="text-base font-normal">
              Most of the time, you just want an answer. But sometimes, you want a bit more. AI shouldn’t be a black
              box, so Parthean AI explains its answers to you with citations and graphs.
            </div>
            <div className="bg-[#9ba0a5] h-[0.4px] w-full mt-[76px] mb-px"></div>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f5f8] pt-[100px] pb-[60px] flex flex-col items-center justify-center -mx-4">
        <p className="uppercase text-[11px]">unparalled security</p>
        <h2 className="text-[30px] max-w-[80vw] font-[Georgia] text-center">
          We operate at the intersection of finance and AI, and take our responsibility in this area very seriously.
          Our aim is to be the world’s most trusted company in both sectors.
        </h2>
        <div>
          <div className="p-5 ">
            <Image
              src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/6581edb96286a45f3e8a411c_PARTEHAN_ABOUT_US_SECURITY-p-1080.png"
              width={500}
              height={500}
              alt="A figure with a sort of elements of a city"
              className="px-[17.5px]"
            />
            <div className="flex flex-col gap-10 leading-8">
              <div>
                <div className="flex justify-center gap-5 ">
                  <div className="size-8 rounded-full bg-[#ffb0ff] text-[10px] flex items-center justify-center">01
                  </div>
                  <div className="max-w-[250px]">
                    <div className="text-[11px]">BANK-LEVEL SECURITY</div>
                    <div className="text-base font-light">We use the highest standards of encryption to protect sensitive financial
                      data.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center gap-5 ">
                  <div className="size-8 rounded-full bg-[#ffb0ff] text-[10px] flex items-center justify-center">01
                  </div>
                  <div className="max-w-[250px]">
                    <div className="text-[11px]">WE NEVER SELL YOUR DATA</div>
                    <div className="text-base font-light">Your data is for you and you only. We will never sell your data.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center gap-5 ">
                  <div className="size-8 rounded-full bg-[#ffb0ff] text-[10px] flex items-center justify-center">01
                  </div>
                  <div className="max-w-[250px]">
                    <div className="text-[11px]">ANONYMIZED DATA</div>
                    <div className="text-base font-light">All data is processed by our algorithms in an anonymized form. Personally
                      identifiable information is not processed by the AI algorithms.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[140px]">
        <p className="text-[11px] font-light uppercase">articles, stories and more</p>
        <h2 className="text-5xl font-[Georgia] my-4 mb-9 tracking-[-3.5px]">Learn.</h2>
        <CarouselLearn />
        <div>
          <Link href="/" className="py-[10px] px-[18px] text-[14px] rounded-[64px] text-center text-sm bg-white
            border border-[#dadce0] w-[120px] mx-auto hover:opacity-50 block transition-opacity duration-200 ease-in" >
            View more
          </Link>
        </div>
      </section>
      <section className="mt-[140px]">
        <div className="uppercase text-[11px] mb-3">faq</div>
        <h2 className="text-5xl tracking-[-3.5px] mb-20">Answers</h2>
        <AccordionAnswers />
      </section>
      <section className="px-5 -mx-4 bg-[#1e1e1e] flex flex-col">
        <div className="mt-[100px] ml-[60px] mr-5 mb-[140px] max-w-[688px]"></div>
      </section>
    </main>
  );
}
