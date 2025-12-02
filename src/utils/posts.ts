import posts from "../data/posts.json";
import {toSlug} from "./slug";
import {formatUnix} from "./date";
import type { Posts } from "../types/models.d.ts";

export function getPosts(): Posts {
    return posts.map(post => ({
    ...post,
    slug: toSlug(post.title),
    date: formatUnix(post.createdAt, "en-GB"),
  }));
}

export function getPostBySlug(slug: string) {
  return getPosts().find(p => p.slug === slug) || null;
}