import type { Request, Response } from "express";

export const aboutController = (_req:Request, res:Response) => {
  res.render("../views/pages/about.njk", {
    metaTitle: "About Me",
    title: "About Me",
    subheading: "Who we are and what we do",
    headerImage: "/assets/img/about-bg.jpg",
  })
}