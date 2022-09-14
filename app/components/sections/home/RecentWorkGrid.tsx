import NewWorkPreviewItem from "~/components/NewWorkPreviewItem";
const posts: any[] = [
  {
    name: "Pumpt AI",
    image: "/PumptHQ-Homepage.png",
    slug: "pumpt-ai",
  },
  {
    name: "Shots By Sylva",
    image: "/shots-by-sylva.png",
    slug: "shote-by-sylva",
  },
  {
    name: "Knowledge Exchange",
    image: "/Knowledge-Exchange.png",
    slug: "knowledge-exchange",
  },
  {
    name: "Pumpt AI",
    image: "/PumptHQ-Homepage.png",
    slug: "pumpt-ai",
  },
  {
    name: "Pumpt AI",
    image: "/PumptHQ-Homepage.png",
    slug: "pumpt-ai",
  },
  {
    name: "Pumpt AI",
    image: "/PumptHQ-Homepage.png",
    slug: "pumpt-ai",
  },
];
export default function RecentWorkGrid() {
  return (
    <div className="container mx-auto px-8 md:px-0">
      <p className="lg:text-center text-4xl lg:text-5xl font-bold w-full lg:w-3/4 mx-auto mt-4">
        Check out some of my recent work!
      </p>{" "}
      <div className="flex flex-wrap">
        {posts.length
          ? posts.map((item, index) => {
              return (
                <NewWorkPreviewItem
                  title={item.name}
                  featuredImage={item.image}
                  slug={item.slug}
                  textColor={"text-gray-500"}
                  post={item}
                  index={index}
                  key={`col1_${index}`}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
