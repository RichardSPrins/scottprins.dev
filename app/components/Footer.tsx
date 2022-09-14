import { Link } from "@remix-run/react";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-8">
        <p className="text-3xl lg:text-5xl font-bold">
          Ready to create something awesome?
        </p>
        <p className=" mt-4 text-2xl lg:text-4xl font-bold">
          Schedule a call today!
        </p>
        <div className="flex mt-12 justify-between flex-wrap">
          <div className="w-full lg:w-1/2">
            <p className="text-2xl">Scott Prins</p>
            <p>Freelance Software Developer</p>
            <p className="mt-4">Follow me on social media!</p>
            <div className="flex text-4xl">
              <a
                href="https://twitter.com/scott_prins"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialTwitterCircular className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/richard-prins-jr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialLinkedinCircular className="cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/scottprins.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiSocialInstagramCircular className="cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex">
              <div className="mr-24 flex flex-col">
                <p className="underline">Helpful Links</p>
                <Link to="/about">
                  <span className="hover:text-teal-500">About</span>
                </Link>
                <a
                  className="hover:text-teal-500"
                  href="https://scottprins.hashnode.dev/"
                >
                  Blog
                </a>
                <Link to="/services">
                  <span className="hover:text-teal-500">Services</span>
                </Link>
                <Link to="/contact">
                  <span className="hover:text-teal-500">Hire me!</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4">
          All rights reserved © Scott Prins {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
