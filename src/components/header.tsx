import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
 return (
  <header className="h-[76px] flex items-center justify-between pt-4 pb-[18px] px-4">
   <Link href="/">
    <Image
     src="https://cdn.prod.website-files.com/652dbebd0c8e37e771b32d9c/652ddafb178c90f84e21cb60_Group%204.svg"
      width={140}
      height={35}
     alt="Parthean Logo"
    />
   </Link>
   <Link
    href="https://apps.apple.com/us/app/parthean/id1585842493"
    className="text-xs font-normal lg:text-sm lg:font-bold px-[18px] lg:px-5 py-[10px] lg:py-3 rounded-[60px] bg-[#3898ec]
                bg-gradient-to-b from-[#c0aafe] to-[#f7cdfe] hover:opacity-50 
                transition-opacity ease-in"
   >
    Download
   </Link>
  </header>
 );
}
