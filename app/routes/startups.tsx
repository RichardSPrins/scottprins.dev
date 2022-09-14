import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
} from "react-icons/ri";
import LargeCTA from "~/components/LargeCTA";
import { Spacer } from "~/components/Spacer";

export default function StartupsPage() {
  return (
    <div className="container mx-auto px-8 lg:px-0">
      <div className="lg:mt-24">
        <h1 className="text-5xl lg:text-6xl font-bold my-6">
          Emerging Startups
        </h1>
        <p className="lg:w-3/4 my-3">
          Now is probably the best time to launch a new startup. The ecosystem
          around the startup culture is as bountiful as ever, and people are
          always looking for the next big idea to help the world and those
          around them.
        </p>
        <p className="lg:w-3/4 my-3">
          Whether you need a marketing site, need to get an MVP launched, or
          need a developer to help build onto your existing software, I love
          working with startups that want to make life easier, or have amazing
          ideas that are captivating and exciting.
        </p>
        <p className="lg:w-3/4 my-3">
          Let's get your new idea off the ground, and get to know your new and
          potential users, strategize on how to meet your growth goals, and
          build the next big thing.
        </p>
      </div>
      <Spacer size="sm" />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="sticky top-8 mr-0 md:mr-6">
            <p className="text-3xl font-bold mb-4">
              My process that helps my clients see results. You have an amazing
              idea,lets bring it to life.
            </p>
            <p>
              Hiring developers can be tricky, so why not hire someone who has
              some skin in the game. As an indie hacker and founder of a small
              startup myself, I understand the needs of emerging tech
              businesses.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full mb-4 border border-gray-100 rounded-lg p-4 flex items-start">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 shrink-0 mr-2 shadow-xl">
              <RiNumber1 className="text-white text-2xl" />
            </div>
            <p>
              Validating an idea is probably the hardest part of any new startup
              venture. You have a great idea, but you need to know if other
              people think its as great as you do. Let's strategize on how to
              validate your ideas and start growing your audience.
            </p>
          </div>
          <div className="w-full mb-4 border border-gray-100 rounded-lg p-4 flex items-start">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 shrink-0 mr-2 shadow-xl">
              <RiNumber2 className="text-white text-2xl" />
            </div>
            <p>
              In this phase I will create a mockup of the page based on your
              consultation. Before anything is coded, we will go over the design
              and you can decide if you would like to make any changes. If your
              business has used a graphic designer for brand cohesiveness, I am
              very open to working with them to make sure I get everything just
              right.
            </p>
          </div>
          <div className="w-full mb-4 border border-gray-100 rounded-lg p-4 flex items-start">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 shrink-0 mr-2 shadow-xl">
              <RiNumber3 className="text-white text-2xl" />
            </div>
            <p>
              Once you have a validated idea, and a design for your initial
              product, it's time to start slinging some code. Let's get your MVP
              fleshed out and get it in the hands of your new and excited users
              to further validate and iterate on your idea and mold it into the
              reality you dreamed about.
            </p>
          </div>
          <div className="w-full mb-4 border border-gray-100 rounded-lg p-4 flex items-start">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 shrink-0 mr-2 shadow-xl">
              <RiNumber4 className="text-white text-2xl" />
            </div>
            <p>
              Now that you have a shiny new MVP, it's time to get it into the
              hands of your users and start thinking of monetization strategies
              that can start to scale. We do things that don't scale in the
              beginning as we crawl through the trenches of early stage startup
              life, but now is the time when your product starts to show whether
              it has some merit and is ready for the long game.
            </p>
          </div>
          <div className="w-full mb-4 border border-gray-100 rounded-lg p-4 flex items-start">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 shrink-0 mr-2 shadow-xl">
              <RiNumber5 className="text-white text-2xl" />
            </div>
            <p>
              Let's talk about scale. By now, your idea is in the hands of a lot
              of people, hopefully. If they like it, chances are, a lot more
              people will start to like it soon as well. Let's make sure you are
              equiped to handle scaling as your user base grows.
            </p>
          </div>
          <div className="w-full mb-4 border border-gray-100 rounded-lg p-4 flex items-start">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 shrink-0 mr-2 shadow-xl">
              <RiNumber6 className="text-white text-2xl" />
            </div>
            <p>
              I do offer social media marketing packages for startups if that is
              something you would be interested in. I create content that
              generates traffic towards your website and handle any ad campaigns
              on social media to bring in more business. After all, you want to
              get your new app or product out to as many people as possible as
              your idea takes life.
            </p>
          </div>
        </div>
      </div>
      <Spacer size="sm" />
      <LargeCTA
        title="Ready to take your new product from idea to launch?"
        sell="There is no better time to breathe life into your next big idea."
        buttonText="Get Started Today"
      />
    </div>
  );
}
