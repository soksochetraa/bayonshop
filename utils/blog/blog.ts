// src/data/blogData.ts

export type BlogCategory = "Lifestyle" | "Fashion" | "News" | "Travel";

export interface Blog {
  id: number;
  title: string;
  image: string;
  desc: string;
  category: BlogCategory;
}

export const relatedBlogs: Blog[] = [
  {
    id: 1,
    title: "Top 5 Summer Wedding Styles",
    image:
      "https://i.pinimg.com/736x/11/6b/4c/116b4c05b923d195c9ad997c7dad2b1d.jpg",
    desc: "Discover chic and comfortable summer outfits perfect for weddings.",
    category: "Lifestyle",
  },
  {
    id: 2,
    title: "How to Choose the Right Dress",
    image:
      "https://i.pinimg.com/736x/14/c2/40/14c24002af91232a832fba55312dcc84.jpg",
    desc: "Tips from stylists on choosing the right dress for any event.",
    category: "Fashion",
  },
  {
    id: 3,
    title: "Wedding Guest Essentials",
    image:
      "https://i.pinimg.com/736x/ad/f0/22/adf022c70558a99389a4560b81406dee.jpg",
    desc: "Everything you need to bring with you to enjoy the day stress-free.",
    category: "News",
  },
];
