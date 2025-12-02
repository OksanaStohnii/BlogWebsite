import { Router } from "express";
import { entriesListning } from "../controllers/admin/blogController";
import { schowCreateForm, handleCreate } from "../controllers/admin/createPostController";
import { deletePost } from "../controllers/admin/deletePostController";
import { showEditForm, handleEdit }from '../controllers/admin/editPostController'


const admin = Router();

admin
    .get("/", entriesListning)
    .get("/new", schowCreateForm)
    .post("/new", handleCreate)
    .delete("/delete/:slug", deletePost)
    .get("/:slug/edit", showEditForm)
    .post("/:slug/edit", handleEdit)
    
export default admin;