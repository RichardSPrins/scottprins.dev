import { Link } from "@remix-run/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function BlogPreview({ hashnodePosts }: any) {
  return (
    <div className="bg-black text-white p-8">
      <div className="bg-black text-white flex flex-col lg:flex-row container mx-auto">
        <div className="w-full lg:w-1/2 lg:sticky top-12 h-full my-12">
          <p className="text-5xl font-bold">Latest Blog Posts</p>
          <a
            href="https://scottprins.hashnode.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="mt-4 hover:text-teal-500">
              View All <FaArrowRight className="inline" />
            </p>
          </a>
        </div>
        <div className="w-full lg:w-1/2 my-12">
          {hashnodePosts.map((post: any, index: number) => {
            const publishedAt = new Date(post.dateAdded).toLocaleDateString();
            console.log(publishedAt);
            if (index < 5) {
              return (
                <div className="mb-12 border-b-2 border-white">
                  <p className="">{publishedAt}</p>
                  <p className="font-bold text-3xl my-6">{post.title}</p>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://scottprins.hashnode.dev/${post.slug}`}
                  >
                    <p className="font-semibold mb-4 hover:text-teal-500">
                      Read Article <FaArrowRight className="inline" />
                    </p>
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
