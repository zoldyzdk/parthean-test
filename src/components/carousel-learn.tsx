import Image from "next/image";
import Link from "next/link";

export function CarouselLearn() {
  return (
    <div className="flex overflow-auto">
      <div className="min-w-[90%]">
        <Link href='/' className="border-[.4px] border-[#dadce0] mx-[10px] rounded-[26px] flex flex-col overflow-hidden items-stretch
            justify-start no-underline hover:opacity-50 cursor-pointer">
          <div className=" object-contain block">
            <Image
              src="https://cdn.prod.website-files.com/65652201e69b8c16df702d05/661dab36286cacbae3b26a73_get_out_debt2.png"
              alt="Hand holding a sort of credit cards"
              width={500}
              height={500}
              className="object-cover max-w-full align-middle"
            />
          </div>
          <div className="h-[150px] pb-2 mt-4 flex flex-col justify-start relative">
            <div className="h-[125px] pt-0 px-5 flex">
              <h4 className="text-2xl mt-0 mb-4 font-light font-[Georgia]">Automate Your Money to Get Out Debt</h4>
            </div>
            <div className="absolute top-auto bottom-[12%] left-auto right-[0%] pb-2 px-5">
              <div className="text-right uppercase text-[11px] font-bold">article</div>
              <div className="text-[#81868a] text-right uppercase text-[11px] font-bold">april 15, 2024</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="min-w-[90%]">
        <Link href='/' className="border-[.4px] border-[#dadce0] mx-[10px] rounded-[26px] flex flex-col overflow-hidden items-stretch
            justify-start no-underline hover:opacity-50 cursor-pointer min-w-[90%]">
          <div className=" object-contain block">
            <Image
              src="https://cdn.prod.website-files.com/65652201e69b8c16df702d05/66198e2feec50ce9743d7b0f_jakub-zerdzicki-LgE3whpa5VA-unsplash.jpg"
              alt="Hand holding a sort of credit cards"
              width={500}
              height={500}
              className="object-cover max-w-full align-middle"
            />
          </div>
          <div className="h-[150px] pb-2 mt-4 flex flex-col justify-start relative">
            <div className="h-[125px] pt-0 px-5 flex">
              <h4 className="text-2xl mt-0 mb-4 font-light font-[Georgia]">AI Might Actually Be the End of Bad Financial
                Advisors</h4>
            </div>
            <div className="absolute top-auto bottom-[12%] left-auto right-[0%] pb-2 px-5">
              <div className="text-right uppercase text-[11px] font-bold">article</div>
              <div className="text-[#81868a] text-right uppercase text-[11px] font-bold">march 28, 2024</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="min-w-[90%]">
        <Link href='/' className="border-[.4px] border-[#dadce0] mx-[10px] rounded-[26px] flex flex-col overflow-hidden items-stretch
          justify-start no-underline hover:opacity-50 cursor-pointer min-w-[90%]">
          <div className=" object-contain block">
            <Image
              src="https://cdn.prod.website-files.com/65652201e69b8c16df702d05/6619ac9d724e17da7f6b24ae_image%201495%20(1).png"
              alt="Hand holding a sort of credit cards"
              width={500}
              height={500}
              className="object-cover max-w-full align-middle"
            />
          </div>
          <div className="h-[150px] pb-2 mt-4 flex flex-col justify-start relative">
            <div className="h-[125px] pt-0 px-5 flex">
              <h4 className="text-2xl mt-0 mb-4 font-light font-[Georgia]">Rethinking Religion’s Role in Money</h4>
            </div>
            <div className="absolute top-auto bottom-[12%] left-auto right-[0%] pb-2 px-5">
              <div className="text-right uppercase text-[11px] font-bold">article</div>
              <div className="text-[#81868a] text-right uppercase text-[11px] font-bold">march 28, 2024</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

/*
<Image
  src="https://cdn.prod.website-files.com/65652201e69b8c16df702d05/661dab36286cacbae3b26a73_get_out_debt2.png"
  alt="Hand holding a sort of credit cards"
  fill
  className="object-contain"
/>*/
