import { Disclosure, Transition } from "@headlessui/react";
import * as React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQs() {
  return (
    <div className="bg-black text-white">
      <div className="bg-black text-white flex flex-col items-center container mx-auto py-20">
        <p className="text-3xl font-semibold text-center">FAQs</p>
        <p className="text-5xl font-bold text-center my-4">
          Frequently Asked Questions
        </p>

        <div className="flex w-full flex-col lg:flex-row lg:max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 flex flex-col">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button>
                    <div className=" text-left flex justify-between px-8 mt-6 mb-4">
                      <span>What type of projects do you take on?</span>

                      <FaChevronDown
                        className={`${
                          open
                            ? "transform rotate-180 transition-all"
                            : "transform rotate-0  transition-all"
                        } w-5 h-5 hover:text-teal-500`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    className="overflow-hidden"
                    enter="transition transition-[max-height] duration-300 ease-in"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition transition-[max-height] duration-400 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel>
                      <p className="px-8 pt-4 text-gray-500 ">
                        I usually work on B2C software, that's my forte--where I
                        shine best. But I also have some B2B software products
                        in my portfolio. I do end-to-end product design +
                        development.
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button>
                    <div className=" text-left flex justify-between px-8 mt-6 mb-4">
                      <span>What is your hourly rate?</span>

                      <FaChevronDown
                        className={`${
                          open
                            ? "transform rotate-180 transition-all"
                            : "transform rotate-0  transition-all"
                        } w-5 h-5 hover:text-teal-500`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    className="overflow-hidden"
                    enter="transition transition-[max-height] duration-300 ease-in"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition transition-[max-height] duration-400 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel>
                      <p className="px-8 pt-4 text-gray-500">
                        I only charge hourly for my ongoing projects that need
                        work on the regular. One-time projects are charged
                        upfront to keep it transparent and clean! My hourly rate
                        is $75.
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button>
                    <div className=" text-left flex justify-between px-8 mt-6 mb-4">
                      <span>What time-zone do you work in?</span>

                      <FaChevronDown
                        className={`${
                          open
                            ? "transform rotate-180 transition-all"
                            : "transform rotate-0  transition-all"
                        } w-5 h-5 hover:text-teal-500`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    className="overflow-hidden"
                    enter="transition transition-[max-height] duration-300 ease-in"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition transition-[max-height] duration-400 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel>
                      <p className="px-8 pt-4 text-gray-500">
                        I work Mountain Standard Time, but I'm always ready to
                        help out in emergencies, no matter the hour.
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button>
                    <div className=" text-left flex justify-between px-8 mt-6 mb-4">
                      <span>What is the typical timeline for a project?</span>

                      <FaChevronDown
                        className={`${
                          open
                            ? "transform rotate-180 transition-all"
                            : "transform rotate-0  transition-all"
                        } w-5 h-5 hover:text-teal-500`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    className="overflow-hidden"
                    enter="transition transition-[max-height] duration-300 ease-in"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition transition-[max-height] duration-400 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel>
                      <p className="px-8 pt-4 text-gray-500">
                        Depends on the scope of the project, really. Some
                        projects take less than a week. Some take months. The
                        best way to find out is to get on a quick call with me,
                        and discuss it. No strings attached!
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button>
                    <div className=" text-left flex justify-between px-8 mt-6 mb-4">
                      <span>How do you charge for projects ?</span>

                      <FaChevronDown
                        className={`${
                          open
                            ? "transform rotate-180 transition-all"
                            : "transform rotate-0  transition-all"
                        } w-5 h-5 hover:text-teal-500`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    className="overflow-hidden"
                    enter="transition transition-[max-height] duration-300 ease-in"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition transition-[max-height] duration-400 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel>
                      <p className="px-8 pt-4 text-gray-500">
                        I quote a price upfront--so that you know exactly what
                        you're paying and for what, and there are no surprises
                        later. The exact cost of your project depends on the
                        scope and requirements!
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button>
                    <div className=" text-left flex justify-between px-8 mt-6 mb-4">
                      <span>What does your design process look like?</span>

                      <FaChevronDown
                        className={`${
                          open
                            ? "transform rotate-180 transition-all"
                            : "transform rotate-0  transition-all"
                        } w-5 h-5 hover:text-teal-500`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    className="overflow-hidden"
                    enter="transition transition-[max-height] duration-300 ease-in"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition transition-[max-height] duration-400 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel>
                      <p className="px-8 pt-4 text-gray-500">
                        I take a problem-forward approach. Whether we're
                        iterating on an existing product or building a new one
                        from scratch, how to solve the user's problem in the
                        simplest way possible is my first concern. Send me an
                        email to understand my process in depth!
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button>
                    <div className=" text-left flex justify-between px-8 mt-6 mb-4">
                      <span>What metrics do you use to measure success?</span>

                      <FaChevronDown
                        className={`${
                          open
                            ? "transform rotate-180 transition-all"
                            : "transform rotate-0  transition-all"
                        } w-5 h-5 hover:text-teal-500`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    className="overflow-hidden"
                    enter="transition transition-[max-height] duration-300 ease-in"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition transition-[max-height] duration-400 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel>
                      <p className="px-8 pt-4 text-gray-500">
                        The best metrics are customer adoption, happiness, task
                        success, and engagement. There are a number of
                        frameworks such as the System Usability Scale that help
                        us understand product performance and I'm happy to help
                        with that.
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button>
                    <div className=" text-left flex justify-between px-8 mt-6 mb-4">
                      <span>
                        What if I need help after the project is complete?
                      </span>

                      <FaChevronDown
                        className={`${
                          open
                            ? "transform rotate-180 transition-all"
                            : "transform rotate-0  transition-all"
                        } w-5 h-5 hover:text-teal-500`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    className="overflow-hidden"
                    enter="transition transition-[max-height] duration-300 ease-in"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition transition-[max-height] duration-400 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel>
                      <p className="px-8 pt-4 text-gray-500">
                        I always make sure to help out my clients one month
                        after the project ends, for free. For any help post
                        that, we can work out an ongoing arrangement!
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
}
