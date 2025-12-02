import type { Request, Response } from "express"
import { getPosts } from "../utils/posts";
import { Post } from "../types/models";

export const postController = (_req:Request, res:Response) => {
  const posts: Post[] = getPosts().sort((a, b) => b.createdAt - a.createdAt);
  const lastPost = posts[0];

  if (!lastPost) {
    return res.status(404).render("../views/pages/404.njk", {
      title: "Not found"
    });
  }

  res.render("../views/pages/post.njk", {
    metaTitle: lastPost.title,
    title: lastPost.title,
    subheading: `By ${lastPost.author} · ${lastPost.date}`,
    headerImage: `/assets/img/${lastPost.image}`,
    post: lastPost
  });
}