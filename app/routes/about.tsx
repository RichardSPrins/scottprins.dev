import * as React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Spacer } from "~/components/Spacer";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-8 md:px-0">
      <Spacer size="xs" />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            Hi, I'm Scott, your friendly neighborhood web developer.
          </h1>
          <p className="my-4">
            I try to help make the world a better place through enabling
            creators and small businesses to thrive in the world of the modern
            web. I imagine a world where creative individuals can thrive while
            doing what they love, after all, creativity and art keep the world
            spinning and inspires us all.
          </p>
          <div className="mx-auto md:mx-0 mb-6 flex items-center justify-between h-12 bg-gradient-to-tr from-teal-600 to-teal-400 w-fit pr-1 pl-2 rounded-full mt-4 cursor-pointer shadow-lg">
            <p className="text-white font-semibold">
              Get to know more about me
            </p>
            <div className="h-10 bg-white rounded-full flex items-center justify-center px-4 ml-2">
              <FaArrowDown className="text-teal-500" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src="/personal-pic.jpeg" className="w-3/4" />
        </div>
      </div>
      <Spacer size="sm" />
    </div>
  );
}
