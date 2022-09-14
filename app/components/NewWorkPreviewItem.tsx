import { Link } from "@remix-run/react";
import * as React from "react";

export default function NewWorkPreviewItem({
  slug,
  index,
  featuredImage,
  title,
}: any) {
  return (
    // <Link to={`/portfolio/${slug}`}>
    <div className="cursor-pointer mb-4 relative w-[33%]">
      {/* <img src={featuredImage} /> */}
      <figure
        className={`relative w-full mb-3 sm:mb-0 mr-6 rounded-lg transform group-hover:translate-x-0 group-hover:shadow group-hover:translate-y-0 transition duration-700 ease-out overflow-hidden`}
      >
        <div className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-700 ease-out cursor-pointer">
          <img
            className="rounded-lg contrast-115 object-cover h-fill"
            // layout="fill"
            src={featuredImage}
          />
        </div>
      </figure>

      <h4 className="text-black-1 font-semibold text-2xl leading-normal mt-2">
        <Link to={`/portfolio/${slug}`}>
          <a>{title}</a>
        </Link>
      </h4>
    </div>
    // </Link>
  );
}
