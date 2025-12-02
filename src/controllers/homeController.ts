import type { Request, Response } from "express"
import { getPosts } from "../utils/posts";
import { Post } from "../types/models";

export const homeController = (_req:Request, res:Response) => {
  const viewPosts: Post[] = getPosts();
  res.render("../views/pages/home.njk", {
    metaTitle: "Clean Blog - Start Bootstrap Theme",
    title: "Clean Blog",
    subheading: "A Blog Theme by Start Bootstrap",
    headerImage: "/assets/img/home-bg.jpg",
    posts: viewPosts
  })
}