"use client";

import React from "react";
import Image from "next/image";
import { photos } from "@/constants";

const Travel = () => {
  return (
    <>
      <div className="flex flex-col justify-center sm:mx-24 border-b border-gray-200 pb-24 mt-28">
        <q className="text-center text-dark-gray text-md sm:text-3xl font-medium">
          Life isn&apos;t a matter of milestones, but of moments.
        </q>
        <p className="text-center text-dark-gray text-xs sm:text-lg">
          - Rose Kennedy
        </p>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4 mt-4">
          {[...photos]?.reverse()?.map((item, idx) => (
            <div
              key={idx}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md bg-white relative"
            >
              <Image
                src={item.url}
                alt={item.location}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute bottom-2 left-2 bg-white/30 backdrop-blur-sm text-white text-xs sm:text-sm px-2 py-1 rounded shadow">
                <span>📍 {item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Travel;
