import { Request, Response, NextFunction } from "express";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import hljs from "markdown-it-highlightjs";

const myConverter = new MarkdownIt().use(anchor).use(hljs);

const markdownToHtml = (req: Request, res: Response, next: NextFunction) => {
  //checks if the content is a string
  if (typeof req.body.content === "string") {
    req.body.htmlContent = myConverter.render(req.body.content);
  } else {
    res.status(400).json({
      message: "Invalid content! Try again",
    });
  }
  next();
};

export default markdownToHtml;
