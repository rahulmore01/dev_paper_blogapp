import mongoose from "mongoose";
// Define the schema for the blog post
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please provide a title"],
  },
  body: {
    type: String,
    required: [true, "please provide a body"],
  },
  // updated after cloudinary
  imageUrl: {
    type: String,
  },

  category: {
    type: String,
    required: true,
    enum: ["Frontend", "Backend", "FullStack", "Deployment", "Other"],
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// Create the BlogPost model

const BlogPost =
  mongoose.models.blogposts || mongoose.model("blogposts", blogPostSchema);

export default BlogPost;
