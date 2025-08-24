export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: number;
  image: string;
  countdownEnd: Date;
}

const now = Date.now();

export const products: Product[] = [
  // Chair (8)
  {
    id: 1,
    title: "Wooden Sofa Chair",
    category: "Chair",
    price: 199.99,
    oldPrice: 299.99,
    discount: "50%",
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/d5/9b/13/d59b13fc73185eaa13c2efb5bfe8323e.jpg",
    countdownEnd: new Date(now + 24 * 60 * 60 * 1000),
  },
  {
    id: 2,
    title: "Office Chair",
    category: "Chair",
    price: 99.99,
    oldPrice: 129.99,
    discount: "20%",
    rating: 4.0,
    image:
      "https://i.pinimg.com/736x/c6/14/cd/c614cdc02eda462847fb9e7b968ec997.jpg",
    countdownEnd: new Date(now + 26 * 60 * 60 * 1000),
  },
  {
    id: 3,
    title: "Luxury Armchair",
    category: "Chair",
    price: 249.99,
    oldPrice: 349.99,
    discount: "30%",
    rating: 4.7,
    image:
      "https://i.pinimg.com/1200x/74/b9/5c/74b95c4146ab36f8e407d021447d7a5e.jpg",
    countdownEnd: new Date(now + 48 * 60 * 60 * 1000),
  },
  // Table (8)
  {
    id: 9,
    title: "Modern Table",
    category: "Table",
    price: 149.99,
    oldPrice: 199.99,
    discount: "25%",
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/fa/17/ab/fa17ab326586279c05e4b77a2bd98b02.jpg",
    countdownEnd: new Date(now + 24 * 60 * 60 * 1000),
  },
  {
    id: 10,
    title: "Coffee Table",
    category: "Table",
    price: 89.99,
    oldPrice: 119.99,
    discount: "15%",
    rating: 4.3,
    image:
      "https://i.pinimg.com/1200x/00/54/f5/0054f59e998b4ebaabf493b575dd0b98.jpg",
    countdownEnd: new Date(now + 26 * 60 * 60 * 1000),
  }, // Sofa (8)
  {
    id: 17,
    title: "Modern Sofa",
    category: "Sofa",
    price: 499.99,
    oldPrice: 699.99,
    discount: "30%",
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/99/47/38/994738dc99d6b8fe0a7104a216904923.jpg",
    countdownEnd: new Date(now + 72 * 60 * 60 * 1000),
  },
  {
    id: 18,
    title: "Luxury Sofa Set",
    category: "Sofa",
    price: 799.99,
    oldPrice: 999.99,
    discount: "20%",
    rating: 4.9,
    image:
      "https://i.pinimg.com/1200x/00/44/6c/00446c739d58ec77d7ecfc2756558ac9.jpg",
    countdownEnd: new Date(now + 100 * 60 * 60 * 1000),
  },
  // Decor (8)
  {
    id: 25,
    title: "Wall Art",
    category: "Decor",
    price: 49.99,
    oldPrice: 79.99,
    discount: "37%",
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/96/c6/b7/96c6b716d4af4587ea0cc4cf14d2f6cd.jpg",
    countdownEnd: new Date(now + 48 * 60 * 60 * 1000),
  },
  {
    id: 26,
    title: "Floor Lamp",
    category: "Decor",
    price: 89.99,
    oldPrice: 129.99,
    discount: "30%",
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/66/2f/31/662f31218aa8e51db234b83e3ec0c989.jpg",
    countdownEnd: new Date(now + 60 * 60 * 60 * 1000),
  },
  {
    id: 4,
    title: "Recliner Chair",
    category: "Chair",
    price: 299.99,
    oldPrice: 399.99,
    discount: "25%",
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/28/01/fb/2801fb2d5a8f8942d483bf8097eb7896.jpg",
    countdownEnd: new Date(now + 36 * 60 * 60 * 1000),
  },
  {
    id: 5,
    title: "Gaming Chair",
    category: "Chair",
    price: 349.99,
    oldPrice: 499.99,
    discount: "30%",
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/d4/12/e0/d412e05ed8464bd0390f13697c3e17be.jpg",
    countdownEnd: new Date(now + 40 * 60 * 60 * 1000),
  },
  {
    id: 6,
    title: "Folding Chair",
    category: "Chair",
    price: 79.99,
    oldPrice: 99.99,
    discount: "20%",
    rating: 4.1,
    image:
      "https://i.pinimg.com/736x/26/50/c1/2650c1ec374d2b78715a719f086eeaba.jpg",
    countdownEnd: new Date(now + 20 * 60 * 60 * 1000),
  },
  {
    id: 7,
    title: "Rocking Chair",
    category: "Chair",
    price: 179.99,
    oldPrice: 249.99,
    discount: "28%",
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/58/13/f0/5813f016f939035c03494757ad3d17dd.jpg",
    countdownEnd: new Date(now + 30 * 60 * 60 * 1000),
  },
  {
    id: 8,
    title: "Dining Chair",
    category: "Chair",
    price: 129.99,
    oldPrice: 179.99,
    discount: "28%",
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/95/c2/70/95c270d03ec7685cf36cd3398a4de741.jpg",
    countdownEnd: new Date(now + 22 * 60 * 60 * 1000),
  },
  {
    id: 11,
    title: "Dining Table Set",
    category: "Table",
    price: 399.99,
    oldPrice: 499.99,
    discount: "20%",
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/12/c1/ad/12c1ad49fbdb3ef6fff3ef905da45f03.jpg",
    countdownEnd: new Date(now + 72 * 60 * 60 * 1000),
  },
  {
    id: 12,
    title: "Glass Coffee Table",
    category: "Table",
    price: 179.99,
    oldPrice: 249.99,
    discount: "28%",
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/b4/4f/60/b44f601851aaaf6ea8879807a6135107.jpg",
    countdownEnd: new Date(now + 60 * 60 * 60 * 1000),
  },
  {
    id: 13,
    title: "Side Table",
    category: "Table",
    price: 129.99,
    oldPrice: 199.99,
    discount: "35%",
    rating: 4.1,
    image:
      "https://i.pinimg.com/736x/ae/4c/dd/ae4cdd6c52283d663c87d6fc8d202f53.jpg",
    countdownEnd: new Date(now + 40 * 60 * 60 * 1000),
  },
  {
    id: 14,
    title: "Console Table",
    category: "Table",
    price: 219.99,
    oldPrice: 299.99,
    discount: "27%",
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/a9/20/d9/a920d91ca81d36262cf7bd0260ec4126.jpg",
    countdownEnd: new Date(now + 30 * 60 * 60 * 1000),
  },
  {
    id: 15,
    title: "Folding Table",
    category: "Table",
    price: 99.99,
    oldPrice: 149.99,
    discount: "33%",
    rating: 4.0,
    image:
      "https://i.pinimg.com/736x/5f/fd/66/5ffd66899a7b3c03eb422db7b18b6325.jpg",
    countdownEnd: new Date(now + 20 * 60 * 60 * 1000),
  },
  {
    id: 16,
    title: "Outdoor Table",
    category: "Table",
    price: 249.99,
    oldPrice: 349.99,
    discount: "28%",
    rating: 4.6,
    image:
      "https://i.pinimg.com/1200x/af/39/36/af39364d7eb2c5acf088bfa68273bc30.jpg",
    countdownEnd: new Date(now + 50 * 60 * 60 * 1000),
  },
  {
    id: 19,
    title: "Sectional Sofa",
    category: "Sofa",
    price: 699.99,
    oldPrice: 899.99,
    discount: "25%",
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/81/ab/ee/81abee7db9f623bf842e1e5ff6492f5e.jpg",
    countdownEnd: new Date(now + 80 * 60 * 60 * 1000),
  },
  {
    id: 20,
    title: "Leather Sofa",
    category: "Sofa",
    price: 899.99,
    oldPrice: 1199.99,
    discount: "30%",
    rating: 4.9,
    image:
      "https://i.pinimg.com/736x/ad/a4/c9/ada4c97c831009722cd3631807ffe4cd.jpg",
    countdownEnd: new Date(now + 90 * 60 * 60 * 1000),
  },
  {
    id: 21,
    title: "Fabric Sofa",
    category: "Sofa",
    price: 599.99,
    oldPrice: 799.99,
    discount: "25%",
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/49/ef/99/49ef995e04f0ff10158cfb9f5c53d3c0.jpg",
    countdownEnd: new Date(now + 60 * 60 * 60 * 1000),
  },
  {
    id: 22,
    title: "Corner Sofa",
    category: "Sofa",
    price: 749.99,
    oldPrice: 999.99,
    discount: "25%",
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/33/64/05/336405d649276deb2e1776945683c85c.jpg",
    countdownEnd: new Date(now + 70 * 60 * 60 * 1000),
  },
  {
    id: 23,
    title: "Recliner Sofa",
    category: "Sofa",
    price: 649.99,
    oldPrice: 849.99,
    discount: "23%",
    rating: 4.5,
    image:
      "https://i.pinimg.com/1200x/4f/68/f5/4f68f568e86669571673ec8f7104289f.jpg",
    countdownEnd: new Date(now + 50 * 60 * 60 * 1000),
  },
  {
    id: 24,
    title: "Sleeper Sofa",
    category: "Sofa",
    price: 699.99,
    oldPrice: 899.99,
    discount: "22%",
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/83/8b/5c/838b5cb04615e1e9436478494cc24e53.jpg",
    countdownEnd: new Date(now + 40 * 60 * 60 * 1000),
  },
  {
    id: 27,
    title: "Vase Set",
    category: "Decor",
    price: 39.99,
    oldPrice: 59.99,
    discount: "33%",
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/49/58/27/495827cf2cfbe575d5c41a4b737f8ad9.jpg",
    countdownEnd: new Date(now + 50 * 60 * 60 * 1000),
  },
  {
    id: 28,
    title: "Rug Carpet",
    category: "Decor",
    price: 119.99,
    oldPrice: 159.99,
    discount: "25%",
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/d1/6d/d1/d16dd10831de9724169cbe56f005b113.jpg",
    countdownEnd: new Date(now + 70 * 60 * 60 * 1000),
  },
  {
    id: 29,
    title: "Bookshelf",
    category: "Decor",
    price: 149.99,
    oldPrice: 199.99,
    discount: "25%",
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/a6/a8/f2/a6a8f23d8a5ef524196e77915b7e2a9e.jpg",
    countdownEnd: new Date(now + 60 * 60 * 60 * 1000),
  },
  {
    id: 30,
    title: "Curtain Set",
    category: "Decor",
    price: 69.99,
    oldPrice: 99.99,
    discount: "30%",
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/c2/bd/b5/c2bdb55ef969cec6af691568cebdc5c8.jpg",
    countdownEnd: new Date(now + 48 * 60 * 60 * 1000),
  },
  {
    id: 31,
    title: "Table Lamp",
    category: "Decor",
    price: 59.99,
    oldPrice: 89.99,
    discount: "33%",
    rating: 4.2,
    image:
      "https://i.pinimg.com/1200x/71/23/c0/7123c04ada69bc86d09b373fee024ef4.jpg",
    countdownEnd: new Date(now + 50 * 60 * 60 * 1000),
  },
  {
    id: 32,
    title: "Decorative Clock",
    category: "Decor",
    price: 79.99,
    oldPrice: 119.99,
    discount: "33%",
    rating: 4.4,
    image:
      "https://i.pinimg.com/1200x/fe/86/4d/fe864dde2086389a7586833d1cbcda51.jpg",
    countdownEnd: new Date(now + 60 * 60 * 60 * 1000),
  },
];
