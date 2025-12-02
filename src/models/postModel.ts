import fs from "fs";
import path from "path";
import { Post } from "../types/models";
import { AdminPostRows } from "../types/admin/posts";
import { toSlug } from "../utils/slug";

const FILE_PATH = path.join(process.cwd(), "src", "data", "posts.json");

export function list(): AdminPostRows[] {
  const raw = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(raw);
}

function readPosts(): Post[] {
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data);
}

function writePosts(posts: Post[]) {
  const tmp = FILE_PATH + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(posts, null, 2), "utf-8");
  fs.renameSync(tmp, FILE_PATH);
}

export function addPost(newPost: Post) {
  const posts = readPosts();
  posts.push(newPost);
  writePosts(posts);
}

export function updateBySlug(slug: string, updated: Post): boolean {
  const posts = readPosts();
  const idx = posts.findIndex(p => toSlug(p.title) === slug);
  if (idx === -1) return false;
  posts[idx] = updated; 
  writePosts(posts);
  return true;
}