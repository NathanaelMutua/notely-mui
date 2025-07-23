import { Request, Response, NextFunction } from "express";

const validateNullEntryCreationInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, synopsis, content } = req.body;

  if (!title) {
    return res.status(400).json({
      status: "fail",
      message:
        "Title required! Even mysterious notes need a name to rise above the static.",
      suggestion:
        "Give it a headline that Hemingway would envy - or at least something to click on.",
    });
  }

  if (!synopsis) {
    return res.status(400).json({
      status: "fail",
      message: "No synopsis detected. Your note is silent on its own story.",
    });
  }

  if (!content) {
    return res.status(400).json({
      status: "fail",
      message: "Oops! No content found. We need words to work our magic.",
      field: "content",
    });
  }

  next();
};

export default validateNullEntryCreationInfo;
