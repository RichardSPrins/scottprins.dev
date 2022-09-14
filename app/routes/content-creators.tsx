import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";
import LargeCTA from "~/components/LargeCTA";
import { Spacer } from "~/components/Spacer";

export default function ContentCreatorsPage() {
  return (
    <div className="container mx-auto px-8 lg:px-0">
      <div className="lg:mt-24">
        <h1 className="text-5xl lg:text-6xl font-bold my-6">
          Content Creators
        </h1>
        <p className="lg:w-3/4 my-3">
          As someone who dabbles with live streaming, I understand the struggle.
          You need to be online, you need to be networking, and you need to be
          on at all times. With a website you have a place to post your
          schedule, bio, and whatever else your community has going on.
        </p>
        <p className="lg:w-3/4 my-3">
          If you're a content creator on Facebook, YouTube, or Twitch, you don't
          have time to put towards anything else. Building a website takes time,
          and time is not something that content creators have much of. In
          between being live, developing new content and video editing, you
          really don't have time to build or manage a website or set up
          marketing funnels.
        </p>
        <p className="lg:w-3/4 my-3">
          I have worked with content creators in the social media marketing
          field for a long time, and with that knowledge I can build something
          your fans will enjoy when you're not live.
        </p>
      </div>
      <Spacer size="sm" />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="sticky top-8 mr-0 md:mr-6">
            <p className="text-3xl font-bold mb-4">
              My process that helps my clients see results. Engage with your
              audience in a whole new way.
            </p>
            <p>
              This proven method will boost your engagement, bring your brand to
              life, and help you with your day to day as a content creator.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full mb-4 border border-gray-100 rounded-lg p-4 flex items-start">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 shrink-0 mr-2 shadow-xl">
              <RiNumber1 className="text-white text-2xl" />
            </div>
            <p>
              Through our initial consultation, we can sit down and go over what
              you would like to accomplish with your personal site. Do you want
              it to be a hub for long form blogs or a store that your followers
              can use to purchase your products?
            </p>
          </div>
          <div className="w-full mb-4 border border-gray-100 rounded-lg p-4 flex items-start">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 shrink-0 mr-2 shadow-xl">
              <RiNumber2 className="text-white text-2xl" />
            </div>
            <p>
              Any successful streamer will tell you that building a community is
              one the most important things you should focus on. When I build a
              site for a content creator, I will also setup a discord server
              that will serve as a companion to the site.
            </p>
          </div>
          <div className="w-full mb-4 border border-gray-100 rounded-lg p-4 flex items-start">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 shrink-0 mr-2 shadow-xl">
              <RiNumber3 className="text-white text-2xl" />
            </div>
            <p>
              Brand building for influencers often ties into a product that your
              fans will want to purchase. By using Shopify or Webflow, we can
              set up an online store that will be very easy for you update when
              you take full ownership of the site. I will also take time to go
              over how to maintain the store (add items, change prices, etc.)
              over video call when the site is up and running.
            </p>
          </div>
          <div className="w-full mb-4 border border-gray-100 rounded-lg p-4 flex items-start">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 shrink-0 mr-2 shadow-xl">
              <RiNumber4 className="text-white text-2xl" />
            </div>
            <p>
              Brand building for influencers often ties into a product that your
              fans will want to purchase. By using Shopify or Webflow, we can
              set up an online store that will be very easy for you update when
              you take full ownership of the site. I will also take time to go
              over how to maintain the store (add items, change prices, etc.)
              over video call when the site is up and running.
            </p>
          </div>
          <div className="w-full mb-4 border border-gray-100 rounded-lg p-4 flex items-start">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 shrink-0 mr-2 shadow-xl">
              <RiNumber5 className="text-white text-2xl" />
            </div>
            <p>
              A big part of becoming a successful content creator is networking.
              I will set up a networking hub that other creators can use to
              contact you for collaborations. We can also use this page to
              display a stream team of other creators you work closely with for
              combined growth.
            </p>
          </div>
          <div className="w-full mb-4 border border-gray-100 rounded-lg p-4 flex items-start">
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-600 to-teal-400 shrink-0 mr-2 shadow-xl">
              <RiNumber6 className="text-white text-2xl" />
            </div>
            <p>
              When I hand over the site, I'll go over how you can post your own
              content and make small adjustments to the page. Any big changes,
              you'll probably want to ask me about prior to making them. Don't
              stress about about it too much, If something breaks on your site
              I'll always be available to fix it.
            </p>
          </div>
        </div>
      </div>
      <Spacer size="sm" />
      <LargeCTA
        title="Ready to connect with your audience?"
        sell="You deserve an online presence that speaks to you and your personal brand."
        buttonText="Get Started Today"
      />
    </div>
  );
}
