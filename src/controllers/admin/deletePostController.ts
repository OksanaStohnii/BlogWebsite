import type { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { toSlug } from "../../utils/slug";

const FILE_PATH = path.join(process.cwd(), "src", "data", "posts.json");

export function deletePost(req: Request, res: Response) {
  const { slug } = req.params;
  if (!slug) return res.status(400).json({ error: "Missing slug" });

  const posts = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
  const filtered = posts.filter((p: any) => toSlug(p.title) !== slug);

  const tmp = FILE_PATH + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(filtered, null, 2), "utf-8");
  fs.renameSync(tmp, FILE_PATH);

  return res.status(200).json({ success: true });
}
