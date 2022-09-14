import { Link } from "@remix-run/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function IdealClients() {
  return (
    <div className="container mx-auto px-8 md:px-0">
      <p className="lg:text-center text-4xl lg:text-5xl font-bold w-full lg:w-3/4 mx-auto mt-4">
        Who do I build websites for?
      </p>{" "}
      <p className="text-lg lg:text-center lg:w-3/4 mx-auto mt-4">
        If you are looking to build a unique online presence, expand your
        existing presence to cater to new crowds, and find yourself in this list
        of ideal clients, let's chat!
      </p>
      <div className="flex mt-12 justify-around flex-col md:flex-row items-center md:items-start w-full">
        <div className="md:max-w-xs my-8">
          <p className="text-2xl font-bold">Content Creators</p>
          <p className="mt-4">
            Whether you live stream, manage a personal blog, create amazing
            social media content, or are an influencer in your market, having a
            personal website and online presence beyond social media further
            solidifies your personal brand and offers unique ways to engage with
            your audience.
          </p>
          <Link to="/content-creators">
            <div className="cursor-pointer mt-4 text-teal-500 font-bold flex items-center gap-2">
              Learn More <FaArrowRight />
            </div>
          </Link>
        </div>
        <div className="md:max-w-xs my-8">
          <p className="text-2xl font-bold">Small Businesses</p>
          <p className="mt-4">
            Running a business is hard enough, without having to sweat all the
            technical nuances that come with operating in the modern world. Let
            me help lift that burden and build a website that speaks to your
            business's brand, and connect you with more customers.
          </p>
          <Link to="/small-businesses">
            <div className="cursor-pointer mt-4 text-teal-500 font-bold flex items-center gap-2">
              Learn More <FaArrowRight />
            </div>
          </Link>
        </div>
        <div className="md:max-w-xs my-8">
          <p className="text-2xl font-bold">Emerging Startups</p>
          <p className="mt-4">
            There has never been a better time than now to bring new ideas to
            life, especially in the form of software. If you are looking to
            build a marketing page or launch a new SaaS (Software-as-a-service)
            business, I can help get your idea off the ground and into the hands
            of your users.
          </p>
          <Link to="/startups">
            <div className="cursor-pointer mt-4 text-teal-500 font-bold flex items-center gap-2">
              Learn More <FaArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
