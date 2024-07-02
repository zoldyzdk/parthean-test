import Image from "next/image";

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
     <div className="w-auto h-3/4 z-20 -mx-4 bg-gradient-to-b [background:linear-gradient(transparent_76%,rgba(255,255,255,.25)_83%,rgba(255,255,255,.49)_89%,#fff)] absolute top-auto bottom-0 left-0 right-0" />
     <Image
      src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/65aacb62f6450dd44e8093e2_LandingImage-Money-Automated%201-p-800.png"
      alt="A hand holding a smartphone"
      width={358}
      height={479}
      //  fill
      className="w-[475px] sm:w-auto z-10 object-cover object-center overflow-visible top-auto bottom-0 mx-auto absolute"
     />
     <div className="h-4/5 mt-[175px] -mx-4 bg-gradient-to-b from-[#9ea7a2] via-[#c7c8c3] via-55% to-white z-0 rounded-t-[26px] absolute top-auto bottom-0 left-0 right-0" />
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
     <div className="h-[50vh] flex flex-col items-center justify-between rounded-[10px] bg-gradient-to-b from-[#c0aafe] to-[#f7cdfe] relative">
      <div className="self-end mr-4 mt-3 py-1 px-3 rounded-[20px] text-[10px] [background:linear-gradient(rgba(0,0,0,.04),_rgba(0,0,0,.04))]">
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
     <div></div>
    </div>
    <div className=""></div>
    <div className=""></div>
   </section>
  </main>
 );
}
