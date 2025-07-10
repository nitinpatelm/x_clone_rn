import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 8001,
  NODE_ENV: process.env.NODE_ENV || "development",
  // MongoDB
  MONGO_URI: process.env.MONGO_URI || "",
  // Clerk
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY || "",
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY || "",
  // Arcjet
  ARCJET_KEY: process.env.ARCJET_KEY || "",
  ARCJET_ENV: process.env.ARCJET_ENV || "",
  // Cloudinary
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || "",
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || "",
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || "",
  CLOUDINARY_URL: process.env.CLOUDINARY_URL || "",
};