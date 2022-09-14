import * as React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { HiOutlineShoppingCart } from "react-icons/hi";
import styles from "./tailwind.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartSlider from "./components/commerce/CartSlider";
import { cartStore } from "./lib/cartStore";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap",
    },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "Scott Prins | Software Developer" };
};

export default function App() {
  const cart = cartStore((state) => state.cart);
  const cartSize = cartStore((state) => state.getTotalItemCount);
  const showCart = cartStore((state) => state.showCart);
  const toggleShowCart = cartStore((state) => state.toggleShowCart);

  return (
    <html lang="en" className="font-montserrat">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <Meta />
        <Links />
      </head>
      <body>
        <div
          onClick={toggleShowCart}
          className="fixed bottom-4 right-4 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-teal-500 text-2xl text-white shadow-lg transition-transform hover:scale-105 md:hidden"
        >
          {cart.length > 0 && (
            <div className="absolute right-3 top-3 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[8px] text-teal-500">
              {cartSize() > 9 ? `9+` : cartSize()}
            </div>
          )}
          <HiOutlineShoppingCart />
        </div>
        <CartSlider open={showCart} setOpen={toggleShowCart} />
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <Footer />
      </body>
    </html>
  );
}
