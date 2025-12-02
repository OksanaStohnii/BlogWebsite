import posts from "../../data/posts.json";
import { toSlug } from "../slug";
import { formatUnix } from "../date";
import { list } from "../../models/postModel";



export function getAdminPostList() {
    return list().map(post => ({
        title: post.title,
        author: post.author,
        createdAt: post.createdAt,
        date: formatUnix(post.createdAt, "en-GB"),
        slug: toSlug(post.title),
    })
)}