import { Link } from "@remix-run/react";

export default function LargeCTA({ title, sell, buttonText }: any) {
  return (
    <div className="w-full px-12 py-20 shadow-lg rounded-lg flex flex-col items-center justify-center mb-12">
      <p className="text-3xl md:text-4xl font-bold text-center">{title}</p>
      <p className="text-xl md:text-2xl text-center my-4">{sell}</p>
      <Link to="/contact">
        <button className="my-4 h-16 bg-teal-500 text-white hover:shadow-lg transition-all ease-in-out duration-150 font-semibold py-2 px-4 rounded shadow">
          {buttonText}
        </button>
      </Link>
    </div>
  );
}
