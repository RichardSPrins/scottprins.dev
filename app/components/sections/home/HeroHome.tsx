import * as React from "react";
import { Link } from "@remix-run/react";
import Typewriter from "typewriter-effect";
const CLIENT_TYPE_LIST = [
  "creators",
  "innovators",
  "startups",
  "entrepreneurs",
];

export default function HomeHero() {
  return (
    <div className="flex flex-wrap min-h-[calc(100vh - 112px)] items-center flex-col-reverse lg:flex-row container mx-auto px-6 md:px-0 mt-12 md:mt-0">
      <div className="w-full lg:w-1/2 xl:3/5 md:p-0">
        <h1 className="text-5xl md:text-6xl  font-semibold inline">
          I develop captivating websites and apps for{" "}
          <span className="inline w-full text-teal-500 m-0 p-0">
            <Typewriter
              options={{
                strings: CLIENT_TYPE_LIST,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <p className="text-xl mt-4">
          Hi, I'm Scott! I am a U.S. based software developer that builds
          exquisite websites, products, and applications for content creators,
          emerging startups, and small business.
        </p>
        <Link to="/contact">
          <button className="mt-10 mr-4 h-16 bg-teal-500 hover:shadow-lg text-white font-semibold py-2 px-4 rounded shadow">
            Book A Call
          </button>
        </Link>
        <a
          href="https://res.cloudinary.com/dpoanqywm/image/upload/v1641191855/Richard_s_Resume_kse7xh.pdf"
          target="_blank"
        >
          <button className="mt-4 h-16 bg-black text-white hover:bg-white hover:text-teal-500 transition-all ease-in-out duration-150 font-semibold py-2 px-4 border border-black hover:border-teal-500 rounded shadow">
            See My Resume
          </button>
        </a>
      </div>
      <div className="hidden lg:block w-full lg:w-1/2 xl:2/5 px-4 md:p-0">
        <img src="/me-hero.jpeg" className="h-full w-full" />
      </div>
    </div>
  );
}
