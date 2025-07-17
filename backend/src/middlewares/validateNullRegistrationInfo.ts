import { Request, Response, NextFunction } from "express";

const validateNullRegistrationInfo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, username, email, password } = req.body;

  if (!firstName || firstName.length < 3) {
    return res.status(400).json({
      status: "oops",
      message: "First name is required. At least 3 letters to start the plot!",
      inspo: "Even Neo had 3 letters and a whole cinematic destiny",
    });
  }

  if (!lastName || lastName.length < 3) {
    return res.status(400).json({
      status: "oops",
      message: "Last name is required. Plot twist denied!",
      inspo: "Even Neo had 3 characters - and a whole trilogy",
    });
  }

  if (!username) {
    return res.status(400).json({
      status: "oops",
      message:
        "No Username? That's like showing up to a meeting without a name-tag!",
      suggestion:
        "Try picking a name that your productivity note app will admire",
    });
  }

  if (!email || !email.includes("@")) {
    return res.status(400).json({
      status: "oops",
      message: "That doesn't look like an email.",
      suggestion: "Try something like 'name@notely.com'",
    });
  }

  if (!password) {
    return res.status(400).json({
      status: "oops",
      message: "Password required. We believe in security.",
      suggestion:
        "Try creating a unique secure password with symbols & letters",
    });
  }
  next();
};

export default validateNullRegistrationInfo;
