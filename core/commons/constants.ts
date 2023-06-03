export const URL = {
  HOME: "/",
  ABOUT: "/about",
  CHAT: "/chat",
  DECLARE: "/declaration",
};

export const DEV = "development";
export const PROD = "production";
export const isDev = process.env.NODE_ENV === DEV;
export const ADMIN = process.env.ADMIN;
export const MONGODB_URI = process.env.MONGODB_URI;
export const APP_SECRET = process.env.SECRET;
