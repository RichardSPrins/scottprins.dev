import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";
import { myArticlesQuery } from "../lib/queries";

export const getHashnodeArticles = async () => {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: myArticlesQuery,
      variables: { page: 0, username: "scottprins" },
    }),
  });

  const result = await data.json();
  const articles = result.data.user.publication.posts;
  console.log(articles);

  return articles;
};
