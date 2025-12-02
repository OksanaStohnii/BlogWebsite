import type { Request, Response } from "express";
import { getAdminPostList } from "../../utils/admin/adminPosts";

export const entriesListning = (_req:Request, res:Response) => {
  const posts = getAdminPostList();
  res.render("../views/admin/indexPage.njk", {
    metaTitle: "Admin Posts",
    posts: posts
  })
}





