import HomeHero from "~/components/sections/home/HeroHome";
import { Spacer } from "~/components/Spacer";
import HomeServicesPreview from "~/components/sections/home/HomeServicesPreview";
import { useLoaderData } from "@remix-run/react";
import { getHashnodeArticles } from "~/utils/post.server";
import FAQs from "~/components/sections/home/FAQs";
import Testimonials from "~/components/sections/home/Testimonials";
import BlogPreview from "~/components/sections/home/BlogPreview";
import IdealClients from "~/components/sections/home/IdealClients";
import RecentWorkGrid from "~/components/sections/home/RecentWorkGrid";
import LargeCTA from "~/components/LargeCTA";

export const loader = async () => {
  const hashnodePosts = await getHashnodeArticles();
  return { hashnodePosts };
};

export default function Index() {
  const { hashnodePosts } = useLoaderData();
  return (
    <div className="">
      <HomeHero />
      <Spacer size="base" />
      <HomeServicesPreview />
      <Spacer size="base" />
      <IdealClients />
      <Spacer size="base" />
      {/* <div className="mx-auto px-8 md:px-0">
        <div className="flex "></div>
      </div> */}
      <BlogPreview hashnodePosts={hashnodePosts} />
      <Spacer size="base" />
      <Testimonials />
      <Spacer size="base" />
      <FAQs />
      <Spacer size="sm" />
      <div className="mx-auto px-8">
        <LargeCTA
          title="Ready to extend the possibiilities of your business?"
          sell="Get in touch today and let's talk about how I can help your business soar to new heights."
          buttonText="Get Started Today"
        />
      </div>
      <Spacer size="sm" />
    </div>
  );
}
