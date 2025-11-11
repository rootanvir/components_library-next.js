"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-900 relative group/card border border-black/[0.1] dark:border-white/[0.2] rounded-xl p-6 w-auto sm:w-[30rem] h-auto">
        <CardItem translateZ={50} className="text-xl font-bold text-white">
          Make things float in air & many more things
        </CardItem>
        <CardItem as="p" translateZ={60} className="text-gray-200 text-sm max-w-sm mt-2">
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ={100} className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3"
            height={1000}
            width={1000}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem translateZ={20} as="a" href="#" target="_blank" className="px-4 py-2 rounded-xl text-xs font-normal text-white">
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
