import type { Request, Response } from "express";
import { updateBySlug } from "../../models/postModel";
import { sanitizeContent } from "../../utils/sanitize";
import { list as listPosts } from "../../models/postModel";
import { toSlug } from "../../utils/slug";

export function showEditForm(req: Request, res: Response) {
  const { slug } = req.params;
  const post = listPosts().find(p => toSlug(p.title) === slug);
  if (!post) return res.status(404).send("Not found");
  res.render("admin/form.njk", {
    pageTitle: "Edit Post",
    mode: "edit",
    originalSlug: slug,
    post
  });
}

export function handleEdit(req: Request, res: Response) {
  const { slug } = req.params;
  const { title = "", image = "", author = "", teaser = "", content = "", createdAt = "" } =
    (req.body ?? {}) as Record<string, string>;

  const errors: string[] = [];
  if (!title.trim())  errors.push("Title is required.");
  if (!image.trim())  errors.push("Image filename is required.");
  if (!author.trim()) errors.push("Author is required.");
  if (!teaser.trim()) errors.push("Teaser is required.");
  if (!content.trim() || content.trim() === "<p><br></p>") errors.push("Content is required.");

  if (errors.length) {
    return res.status(400).render("admin/form.njk", {
      pageTitle: "Edit Post",
      mode: "edit",
      originalSlug: slug,
      errors,
      post: { title, image, author, teaser, content, createdAt }
    });
  }

  const safe = sanitizeContent(content);
  const unix = createdAt ? Number(createdAt) : Math.floor(Date.now()/1000);

  const updated = { title, image, author, teaser, content: safe, createdAt: unix };

  const ok = updateBySlug(slug, updated);
  if (!ok) return res.status(404).send("Not found");

  return res.redirect("/admin");
}