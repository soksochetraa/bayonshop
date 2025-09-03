// src/components/blog/BlogCard.tsx
import React from "react";
import { Blog } from "@/utils/blog/blog";

// Map categories to colors
const categoryColors: Record<string, string> = {
  Lifestyle: "bg-[#7db800]",
  Fashion: "bg-[#ff6b6b]",
  News: "bg-[#007bff]",
  Travel: "bg-[#f39c12]",
  Default: "bg-gray-500",
};

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const categoryColor = categoryColors[blog.category] || categoryColors.Default;

  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />

      <div className="py-4 flex flex-col gap-2 px-2">
        <span
          className={`w-[75px] h-[25px] ${categoryColor} font-semibold text-[11px] text-center p-2 rounded-sm text-white flex items-center justify-center`}
        >
          {blog.category}
        </span>
        <h3 className="text-lg font-semibold">{blog.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{blog.desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
