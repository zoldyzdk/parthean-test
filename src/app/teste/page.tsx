import React from 'react';
import CarouselCard from "@/components/carousel-card";
import {DropCard} from "@/components/drop-card";

function Page() {
  return (
    <div className="h-svh w-svw flex items-center justify-center">
      {/*<CarouselCard >
        <div className="flex items-center justify-center w-full h-full">item 1</div>
        <div>item 2</div>
      </CarouselCard>*/}
      <DropCard />
    </div>
  );
}

export default Page;