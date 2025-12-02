import type { Request, Response } from "express";
import { addPost } from "../../models/postModel";
import { sanitizeContent } from "../../utils/sanitize";

export function schowCreateForm (_req:Request, res:Response) {
    res.render("admin/form.njk", {
        pageTitle: "New Post",
        post: null
    })
}


export function handleCreate(req: Request, res: Response) {
  console.log("new post", req.body);
  const { title, image, author, teaser, content, createdAt } = req.body;
  
  if (!title || !image || !author || !teaser || !content) {
    return res.status(400).render("admin/form.njk", {
      pageTitle: "New Post",
      error: "Please fill all required fields.",
    });
  }

  const safeContent = sanitizeContent(content);

  const post = {
    title,
    image,
    author,
    teaser,
    content: safeContent,
    createdAt: createdAt ? Number(createdAt) : Math.floor(Date.now() / 1000),
  };

  addPost(post);
  return res.redirect("/admin");
}