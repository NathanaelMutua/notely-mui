export interface UserPayload {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  avatar: string;
  isDeleted: boolean;
}

declare global {
  namespace Express {
    interface Request {
      user: UserPayload;
    }
  }
}
