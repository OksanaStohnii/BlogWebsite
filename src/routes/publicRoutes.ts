import express from "express";
import { aboutController } from "../controllers/aboutController";
import { homeController } from "../controllers/homeController";
import { postController } from "../controllers/postController";
import { contactController } from "../controllers/contactController";
import { postSlugController } from "../controllers/postSlugController";
import { entriesListning } from "../controllers/admin/blogController";

const router = express.Router();

router
    .get("/", homeController)
    .get("/about", aboutController)
    .get("/post", postController)
    .get("/post/:slug", postSlugController)
    .get("/contact", contactController)

export default router;