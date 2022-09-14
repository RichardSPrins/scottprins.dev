import * as React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { LoaderFunction } from "@remix-run/node";
import invariant from "tiny-invariant";
import { Spacer } from "~/components/Spacer";
import { services } from "~/utils/services";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "No slug path was provided at params.slug");
  const service = services.find((service: any) => service.slug === params.slug);

  return { service };
};

export default function ServiceDetailsPage() {
  const [quantity, setQuantity] = React.useState(1);
  const { service } = useLoaderData();
  console.log(service);
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="container mx-auto px-8 md:px-0">
      <div className="flex flex-col md:flex-row mt-12">
        <div className="w-full md:w-2/5">
          <img src={service.image} className="w-full" />
        </div>
        <div className="w-full md:w-3/5 p-0 md:p-8 md:pt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-4 md:mt-0 font-bold">
            {service.name}
          </h1>
          <p>{service.description}</p>
          <div className="flex gap-8 items-center">
            <p className="my-4 font-semibold text-gray-600 text-2xl">
              ${service.price / 100}
            </p>
            <div className="flex h-8">
              <div
                onClick={decreaseQuantity}
                className="h-full w-8 flex items-center justify-center bg-gray-200 hover:bg-teal-500 hover:text-white"
              >
                <FaMinus />
              </div>
              <div className="h-full w-8 flex items-center justify-center">
                {quantity}
              </div>
              <div
                onClick={increaseQuantity}
                className="h-full w-8 flex items-center justify-center bg-gray-200 hover:bg-teal-500 hover:text-white"
              >
                <FaPlus />
              </div>
            </div>
          </div>
          <button className="mt-4 bg-teal-500 text-white hover:shadow-lg font-semibold py-2 px-4 rounded shadow w-full md:w-fit">
            Add To Cart
          </button>
        </div>
      </div>
      <Spacer size="base" />
    </div>
  );
}
