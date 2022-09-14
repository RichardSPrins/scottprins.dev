import * as React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const TESTIMONIALS = [
  {
    image: "/test-img-1.jpg",
    quote:
      "This is unbelievable. After using Testiminial Generator my buisness skyrocketed!",
    name: "Jennifer Musk",
    title: "Project Manager, Microsoft",
  },
  {
    image: "/test-img-2.jpg",
    quote:
      "Scott helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.",
    name: "John Frankin",
    title: "Founder, Double Bunch",
  },
];

export default function Testimonials() {
  const [testSlideIndex, setTestSlideIndex] = React.useState(0);
  const [currentTestSlide, setCurrentTestSlide] = React.useState(
    TESTIMONIALS[testSlideIndex]
  );
  const prevTestSlide = () => {
    let length = TESTIMONIALS.length;
    if (testSlideIndex > 0) {
      setTestSlideIndex(testSlideIndex - 1);
      setCurrentTestSlide(TESTIMONIALS[testSlideIndex - 1]);
    } else {
      setTestSlideIndex(length - 1);
      setCurrentTestSlide(TESTIMONIALS[length - 1]);
    }
  };

  const nextTestSlide = () => {
    let length = TESTIMONIALS.length;
    if (testSlideIndex === length - 1) {
      setTestSlideIndex(0);
      setCurrentTestSlide(TESTIMONIALS[0]);
    } else {
      setTestSlideIndex(testSlideIndex + 1);
      setCurrentTestSlide(TESTIMONIALS[testSlideIndex + 1]);
    }
  };
  return (
    <div className="container mx-auto px-8">
      <p className="text-3xl font-semibold lg:text-center">Testimonials</p>
      <p className="text-5xl font-bold mt-4 lg:text-center">
        What my clients are saying
      </p>
      <div className="mt-12">
        <div className="flex items-center flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 max-w-[500px] md:p-8">
            <img
              src={currentTestSlide.image}
              className="rounded-2xl aspect-square"
            />
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center md:p-8 mt-4 lg:mt-0">
            <FaQuoteLeft className="text-4xl" />
            <div className="my-12 flex-auto">
              <p className="text-3xl font-semibold">{currentTestSlide.quote}</p>
            </div>
            <div className="flex justify-between">
              <div className="">
                <p className="font-semibold text-lg">{currentTestSlide.name}</p>
                <p>{currentTestSlide.title}</p>
              </div>
              <div className="flex">
                <div
                  className="cursor-pointer mr-1 flex items-center justify-center bg-black hover:bg-teal-500 text-white font-semibold h-12 w-12"
                  onClick={prevTestSlide}
                >
                  <FaChevronLeft />
                </div>
                <div
                  className="cursor-pointer flex items-center justify-center bg-black hover:bg-teal-500 text-white font-semibold h-12 w-12"
                  onClick={nextTestSlide}
                >
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
