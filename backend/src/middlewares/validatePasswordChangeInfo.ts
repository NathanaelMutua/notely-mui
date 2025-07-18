import { Request, Response, NextFunction } from "express";

const validatePasswordChangeInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password, newPassword, confirmPassword } = req.body;

  if (!password || !newPassword || !confirmPassword) {
    return res.status(400).json({
      status: "fail",
      message: "Password update failed—you're missing a few puzzle pieces.",
      hint: `Password: ${Boolean(password)}, NewPassword: ${Boolean(
        newPassword
      )}, ConfirmPassword: ${Boolean(confirmPassword)}`,
    });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({
      status: "fail",
      message:
        "Passwords don't match. Like socks from different laundry loads.",
      suggestion: "Retype them slowly… or trust muscle memory less.",
    });
  }

  next();
};

export default validatePasswordChangeInfo;
