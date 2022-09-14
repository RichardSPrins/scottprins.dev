import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "@remix-run/react";
import { Spacer } from "~/components/Spacer";
import { services } from "~/utils/services";
import { cartStore } from "~/lib/cartStore";

export default function Services() {
  const addToCart = cartStore((state) => state.addToCart);
  return (
    <div className="container mx-auto px-4">
      <div className="my-12">
        <h1 className="text-5xl lg:text-6xl font-bold">Services I Offer</h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 pt-8 lg:pt-0">
          <p className="text-4xl font-bold mb-4">
            Website Design & Development
          </p>
          <p>
            This is ideal for businesses and startups looking to get their idea
            out to the public, or increase their web presence. Using the latest
            web design trends and tools, I can get your website live and ranking
            high on Google fast. No matter if you need an e-commerce solution,
            website, blog, or NFT Project, hire me to extend the possibilities
            of your business. Here is what you should expect to receive:
          </p>
          <ul className="list-disc my-4">
            <li className="ml-6">
              Beautiful website built with modern tools like WordPress, Webflow,
              Shopify, or custom code.
            </li>
            <li className="ml-6">
              Fast, secure website that are free of risk from vulnerabilities or
              attacks.
            </li>
            <li className="ml-6">
              Robust integrations with any tools necessary to engage with your
              users.
            </li>
            <li className="ml-6">
              Support Packages available for any continued support and
              maintenance.
            </li>
          </ul>
          <Link to="/contact">
            <button className="my-4 h-16 bg-teal-500 text-white hover:shadow-lg transition-all ease-in-out duration-150 font-semibold py-2 px-4 rounded shadow">
              Get A Quote{" "}
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 rounded-lg">
          <img className="lg:ml-8 rounded-lg" src="/webflow-1.jpeg" />
        </div>
      </div>
      <Spacer size="sm" />
      <div className="flex flex-col lg:flex-row relative">
        <div className="w-full lg:w-1/2 rounded-lg lg:mr-8">
          <img className="rounded-lg" src="/devices-app.jpg" />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="sticky top-8 pt-8 lg:pt-0">
            <p className="text-4xl font-bold mb-4">Application Development</p>
            <p>
              This is ideal for startups looking to get their idea off the
              ground. Let's breathe life into your ideas together and launch
              your next product with a modern tech stack and a beautiful and
              engaging user interface. No matter if you need an internal
              software solution, web, or mobile application, I can take your
              ideas from prototyped to launched. Here is what you should expect
              to receive:
            </p>
            <ul className="list-disc my-4">
              <li className="ml-6">
                Modern application built with the latest tools and integrations.
              </li>
              <li className="ml-6">
                Fast, secure application that are free of risk from
                vulnerabilities or attacks.
              </li>
              <li className="ml-6">
                Sleek User Interface your users will love to engage with.
              </li>
              <li className="ml-6">
                Support Packages available for any continued support and
                maintenance.
              </li>
            </ul>
            <Link to="/contact">
              <button className="my-4 h-16 bg-teal-500 text-white hover:shadow-lg transition-all ease-in-out duration-150 font-semibold py-2 px-4 rounded shadow">
                Get A Quote{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Spacer size="base" />
      <div>
        <p className="text-4xl font-bold mb-12">Additional Services</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 gap-x-8 auto-rows-auto">
          {services.map((serv: any) => {
            return (
              <div className="h-full">
                <div className="h-full card shadow-xl bg-accent text-accent-content rounded-lg flex flex-col">
                  <figure>
                    <img src={serv.image} className="w-full rounded-t-lg" />
                  </figure>
                  <div className="card-body p-4 flex flex-col grow">
                    <h2 className="text-xl font-semibold mb-4">{serv.name}</h2>
                    <p>{serv.summary}</p>
                    <p className="my-4 font-semibold text-gray-600 text-2xl">
                      ${serv.price / 100}
                    </p>
                    <div className="card-actions flex justify-between items-center mt-auto">
                      <button
                        onClick={() => addToCart({ ...serv, quantity: 1 })}
                        className="mt-4 bg-teal-500 text-white hover:shadow-lg font-semibold py-2 px-4 rounded shadow"
                      >
                        Add To Cart
                      </button>
                      <Link to={`/services/${serv.slug}`}>
                        <span className="mt-4 font-semibold text-teal-500 cursor-pointer flex items-center gap-2">
                          Learn More
                          <FaArrowRight />
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Spacer size="base" />
    </div>
  );
}
