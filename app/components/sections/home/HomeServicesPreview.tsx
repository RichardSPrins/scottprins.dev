import { Link } from "@remix-run/react";
import { FaArrowRight } from "react-icons/fa";
import { MdBusiness, MdMediation, MdAutoGraph } from "react-icons/md";

export default function HomeServicesPreview() {
  return (
    <div className="container mx-auto px-6 md:px-0">
      <p className="lg:text-center text-4xl lg:text-5xl font-bold w-full lg:w-3/4 mx-auto mt-4">
        Extending the possibilities of your business through creative software
        solutions
      </p>
      <div className="flex mt-20 justify-around flex-col md:flex-row items-center md:items-start w-full">
        <div className="md:max-w-xs my-8">
          <MdBusiness className="text-6xl mb-4 text-teal-500" />
          <p className="text-2xl font-bold">Some of my services</p>
          <p className="mt-4">
            Promising fast development and delivery time, I offer a full suite
            of software solutions for your business, including:
          </p>
          <ul className="list-disc pl-6 mt-4 font-bold">
            <li>Product Design/Prototyping</li>
            <li>Application Development</li>
            <li>Front End Development</li>
            <li>And more...!</li>
          </ul>
        </div>
        <div className="md:max-w-xs my-8">
          <MdMediation className="text-6xl mb-4 text-teal-500" />
          <p className="text-2xl font-bold">Some of the tools I use</p>
          <p className="mt-4">
            Just like your business, solutions to problems are unique in some
            ways. Finding the right tool for the job is essential.
          </p>
          <ul className="list-disc pl-6 mt-4 font-bold">
            <li>JavaScript Front End/Back End</li>
            <li>Python Scripting/Back End</li>
            <li>Webflow/WordPress Websites</li>
            <li>Shopify/Webflow Ecommerce</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="md:max-w-xs my-8">
          <MdAutoGraph className="text-6xl mb-4 text-teal-500" />
          <p className="text-2xl font-bold">What you can expect</p>
          <p className="mt-4">
            I do more than design products with slick interfaces that look good,
            rest assured that they perform efficiently and securely as well.
          </p>
          <ul className="list-disc pl-6 mt-4 font-bold">
            <li>Modern & Sleek User Interface</li>
            <li>Reliable Deployment/Hosting</li>
            <li>Lightning Fast Performace</li>
            <li>Secure Applications</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Link to="/services">
          <button className="my-4 h-16 bg-teal-500 text-white hover:shadow-lg transition-all ease-in-out duration-150 font-semibold py-2 px-4 rounded shadow">
            See More Services <FaArrowRight className="inline mb-1" />
          </button>
        </Link>
      </div>
    </div>
  );
}
