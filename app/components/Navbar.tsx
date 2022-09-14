import { Link } from "@remix-run/react";
import * as React from "react";
import { FaArrowRight, FaBars } from "react-icons/fa";
import { cartStore } from "~/lib/cartStore";
import { HiOutlineShoppingCart } from "react-icons/hi";
const LINKS: {
  name: string;
  path: string;
  button?: boolean;
  external?: boolean;
}[] = [
  { name: "About", button: false, path: "/about" },
  { name: "Services", button: false, path: "/services" },
  {
    name: "Blog",
    button: false,
    path: "https://scottprins.hashnode.dev/",
    external: true,
  },
  { name: "Book A Call", button: true, path: "/contact" },
];

export default function Navbar() {
  const cart = cartStore((state) => state.cart);
  const toggleShowCart = cartStore((state) => state.toggleShowCart);
  const cartCount = cartStore((state) => state.getTotalItemCount);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  return (
    <>
      <div className="w-full h-28">
        <div className="container mx-auto flex h-full justify-between items-center px-4 md:p-0">
          <Link onClick={() => setShowMobileMenu(false)} to="/">
            <p className="no-underline text-3xl cursor-pointer font-semibold">
              Scott Prins
              <span className=" text-teal-500">.dev</span>
            </p>
          </Link>
          <div className="hidden md:flex items-center">
            <div
              className="relative ml-4 cursor-pointer text-xl"
              onClick={toggleShowCart}
            >
              {cart.length > 0 && (
                <div className="absolute -right-1 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-teal-500 text-[10px] text-white">
                  {cartCount() > 9 ? `9+` : cartCount()}
                </div>
              )}
              <HiOutlineShoppingCart className="hover:text-teal-500" />
            </div>
            {LINKS.map((link) => {
              return link.button ? (
                <Link to={link.path}>
                  <button className="ml-6 hover:shadow-lg bg-teal-500 transition-all ease-in-out duration-150 text-white font-semibold py-2 px-4 border rounded shadow">
                    {link.name} <FaArrowRight className="inline mb-1" />
                  </button>
                </Link>
              ) : link.external ? (
                <a href={link.path} rel="noopener noreferrer" target="_blank">
                  <p className="ml-6 cursor-pointer hover:text-teal-500">
                    {link.name}
                  </p>
                </a>
              ) : (
                <Link to={link.path}>
                  <p className="ml-6 cursor-pointer hover:text-teal-500">
                    {link.name}
                  </p>
                </Link>
              );
            })}
          </div>
          <div
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden flex items-center justify-center p-4 rounded-lg hover:bg-gray-100 text-2xl"
          >
            <FaBars />
          </div>
        </div>
      </div>
      <div
        className={`absolute bg-white w-full mb-8 ${
          showMobileMenu ? "block" : "hidden"
        } md:hidden z-10`}
      >
        {LINKS.map((link) => {
          if (link.button) {
            return (
              <Link onClick={() => setShowMobileMenu(false)} to={link.path}>
                <div className="w-full px-6 bg-white mb-4">
                  <button className="w-full text-white font-semibold py-2 px-4 mb-4 bg-teal-500 rounded shadow">
                    {link.name} <FaArrowRight className="inline mb-1" />
                  </button>
                </div>
              </Link>
            );
          } else if (link.external) {
            return (
              <a
                onClick={() => setShowMobileMenu(false)}
                href={link.path}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="bg-white w-full">
                  <p className="p-4 pl-6 m-4 hover:bg-teal-100 hover:rounded-lg cursor-pointer">
                    {link.name}
                  </p>
                </div>
              </a>
            );
          } else {
            return (
              <Link onClick={() => setShowMobileMenu(false)} to={link.path}>
                <div className="bg-white w-full">
                  <p className="p-4 pl-6 m-4 hover:bg-teal-100 hover:rounded-lg cursor-pointer">
                    {link.name}
                  </p>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
}
