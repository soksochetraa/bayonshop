import HeaderBlog from "@/src/components/layout/blog/HeaderBlog";
import SocialMedia from "@/src/components/layout/blog/SocailMedia";
import BlogCard from "@/src/components/layout/blog/BlogCard";
import { relatedBlogs } from "@/utils/blog/blog";

const Blog = () => {
  return (
    <div className="font-[Poppins]">
      <HeaderBlog />
      <SocialMedia />

      {/* Blog Content */}
      <div className="w-full flex flex-col items-center justify-center gap-4 pb-10">
        <img
          src="https://i.pinimg.com/736x/d9/d9/d1/d9d9d15ea519a57c0d52551874a79417.jpg"
          alt=""
          className="w-[636px] h-[351px] object-cover"
        />
        <span className="w-[636px] text-[#212121]">
          It's a tricky thing, being a wedding guest. Among the endless list of
          requirements - buy a present, arrange accommodation, practise your
          small talk - there's one obligation that trumps them all in terms of
          effort: fix up and look sharp...
        </span>

        <img
          src="https://i.pinimg.com/736x/52/6f/0f/526f0fe0fcc1a158143eaa082e388175.jpg"
          alt=""
          className="w-[636px] h-[351px] object-cover"
        />

        <span className="w-[636px] font-light text-[36px] text-[#212121]">
          Related Products
        </span>

        <span className="w-[636px] text-[#212121]">
          It's a tricky thing, being a wedding guest... with tips from industry
          experts on the trends and colours you need to know about this season.
        </span>
      </div>

      {/* Other Blogs Section */}
      <div className="w-full flex flex-col items-center gap-6 pb-12">
        <h2 className="text-2xl font-semibold text-[#212121]">Other Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] md:w-[80%]">
          {relatedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <button className="font-normal text-sm text-center underline text-[#4f4f4f] cursor-pointer">
          See More
        </button>
      </div>
    </div>
  );
};

export default Blog;
