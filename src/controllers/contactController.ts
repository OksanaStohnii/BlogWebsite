import type { Request, Response } from "express";

export const contactController = (_req:Request, res:Response) => {
  res.render("../views/pages/contact.njk", {
    metaTitle: "Contact Me",
    title: "Contact Me",
    subheading: "Have questions? I have answers.",
    headerImage: "/assets/img/contact-bg.jpg"
  })
}