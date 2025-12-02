import type { Request, Response } from "express";
import { getPostBySlug } from "../utils/posts";
import { Post } from "../types/models";


export const postSlugController = (req:Request, res:Response) => {
  const post: Post | null = getPostBySlug(req.params.slug);

  if (!post) {
    return res.status(404).render("../views/pages/404.njk", {
      title: "Not found"
    });
  }

  res.render("../views/pages/post.njk", {
    metaTitle: post.title,
    title: post.title,
    subheading: `By ${post.author} · ${post.date}`,
    headerImage: `/assets/img/${post.image}`,
    post,
  });
}