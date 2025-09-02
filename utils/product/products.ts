export interface Review {
  id: number;
  author: string;
  rating: number;
  date: Date;
  comment: string;
}

export interface ProductVariant {
  size: string;
  price: number;
  oldPrice?: number;
  stock: number;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  rating: number;
  images: string[];
  countdownEnd: Date | null;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  variants: ProductVariant[];
  reviews: Review[];
  details: string;
}

export const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const applyDiscount = (oldPrice: number, discountPercent: number) =>
  +(oldPrice - oldPrice * (discountPercent / 100)).toFixed(2);

const now = Date.now();

export const products: Product[] = [
  {
    id: 1,
    title: "Wooden Sofa Chair",
    category: "Chair",
    price: applyDiscount(299.99, 50),
    oldPrice: 299.99,
    discountPercent: 50,
    rating: 4.5,
    images: [
      "https://i.pinimg.com/736x/d5/9b/13/d59b13fc73185eaa13c2efb5bfe8323e.jpg",
      "https://i.pinimg.com/736x/72/b1/13/72b1137310fb10a9da7a337ec6d16cf8.jpg",
    ],
    countdownEnd: new Date(now + 24 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "Small",
        price: applyDiscount(249.99, 50),
        oldPrice: 249.99,
        stock: 15,
      },
      {
        size: "Medium",
        price: applyDiscount(299.99, 50),
        oldPrice: 299.99,
        stock: 10,
      },
      {
        size: "Large",
        price: applyDiscount(349.99, 50),
        oldPrice: 349.99,
        stock: 8,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        rating: 5,
        date: new Date(2023, 5, 15),
        comment: "Extremely comfortable and stylish!",
      },
      {
        id: 2,
        author: "Jane Smith",
        rating: 4,
        date: new Date(2023, 4, 22),
        comment: "Good quality wood and craftsmanship.",
      },
    ],
    details: `This exquisite wooden sofa chair combines timeless elegance with modern comfort. Crafted from premium solid oak wood with a natural finish that highlights the wood's beautiful grain patterns. The chair features a ergonomic design with a gently curved backrest that provides excellent lumbar support. The seat is generously padded with high-density foam and upholstered in premium fabric that is both durable and soft to the touch.

The chair's dimensions are carefully proportioned to fit perfectly in living rooms, reading nooks, or office spaces. The sturdy construction ensures stability and longevity, with reinforced joints and a weight capacity of up to 300 pounds. The legs are finished with protective caps to prevent floor scratching.

Each piece is meticulously sanded and finished with three coats of protective varnish, making it resistant to everyday wear and moisture. The neutral color palette allows it to blend seamlessly with various decor styles from traditional to contemporary. Assembly is straightforward with all necessary tools and instructions included.

Perfect for those who appreciate both form and function, this chair offers the ideal spot for reading, relaxing, or simply enjoying a quiet moment. The slight recline angle encourages proper posture while providing exceptional comfort.`,
  },
  {
    id: 2,
    title: "Office Chair",
    category: "Chair",
    price: applyDiscount(129.99, 20),
    oldPrice: 129.99,
    discountPercent: 20,
    rating: 4.0,
    images: [
      "https://i.pinimg.com/736x/c6/14/cd/c614cdc02eda462847fb9e7b968ec997.jpg",
      "https://i.pinimg.com/736x/4e/65/5f/4e655f54c207a4b02e5292c9dd764b53.jpg",
      "https://i.pinimg.com/736x/e7/b5/83/e7b5839e9c76fda4ac87012e1b896542.jpg",
    ],
    countdownEnd: new Date(now + 26 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "Standard",
        price: applyDiscount(129.99, 20),
        oldPrice: 129.99,
        stock: 20,
      },
      {
        size: "Executive",
        price: applyDiscount(159.99, 20),
        oldPrice: 159.99,
        stock: 12,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Mike Johnson",
        rating: 4,
        date: new Date(2023, 6, 10),
        comment: "Good value for the price.",
      },
      {
        id: 2,
        author: "Sarah Wilson",
        rating: 3,
        date: new Date(2023, 5, 5),
        comment: "Comfortable but assembly was tricky.",
      },
    ],
    details: `Designed for productivity and comfort, this office chair features an advanced ergonomic design that supports your body through long work hours. The chair includes adjustable height settings, a 360-degree swivel base, and smooth-rolling casters that glide effortlessly on both carpet and hard floors. The breathable mesh back promotes air circulation to keep you cool and comfortable throughout the day.

The chair's lumbar support is strategically placed to maintain the natural curve of your spine, reducing strain and fatigue. The seat cushion is made of high-resilience foam that maintains its shape and comfort even after extended use. The armrests are padded and adjustable to accommodate different desk heights and user preferences.

Built with a sturdy metal frame and reinforced with double-wheel casters, this chair offers exceptional durability and stability. The tilt mechanism allows you to recline comfortably while working, with tension adjustment to customize the resistance to your weight. All adjustments are intuitive and easy to access while seated.

Ideal for home offices or corporate environments, this chair combines professional appearance with exceptional functionality. The black mesh and silver frame create a modern, professional look that complements any office decor.`,
  },
  {
    id: 3,
    title: "Luxury Armchair",
    category: "Chair",
    price: applyDiscount(349.99, 30),
    oldPrice: 349.99,
    discountPercent: 30,
    rating: 4.7,
    images: [
      "https://i.pinimg.com/1200x/74/b9/5c/74b95c4146ab36f8e407d021447d7a5e.jpg",
    ],
    countdownEnd: new Date(now + 48 * 60 * 60 * 1000),
    status: "Low Stock",
    variants: [
      {
        size: "Standard",
        price: applyDiscount(349.99, 30),
        oldPrice: 349.99,
        stock: 3,
      },
      {
        size: "Oversized",
        price: applyDiscount(399.99, 30),
        oldPrice: 399.99,
        stock: 2,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Emily Davis",
        rating: 5,
        date: new Date(2023, 7, 18),
        comment: "Absolutely luxurious and so comfortable!",
      },
      {
        id: 2,
        author: "Robert Brown",
        rating: 4,
        date: new Date(2023, 6, 30),
        comment: "Beautiful addition to our living room.",
      },
    ],
    details: `Experience unparalleled luxury with this exquisite armchair that combines sophisticated design with exceptional comfort. Upholstered in premium velvet fabric that feels incredibly soft to the touch, this chair features deep seating and generous proportions that invite you to sink in and relax. The elegant button-tufted detailing on the back adds a classic touch of sophistication.

Built with a solid hardwood frame and supported by sturdy tapered legs, this armchair offers both style and durability. The high-resiliency foam cushioning provides optimal support and maintains its shape over time. The wide arms are perfect for resting your arms or placing a book and beverage.

The chair's design showcases meticulous attention to detail, from the precision stitching to the perfectly proportioned dimensions. The rich color options complement various interior styles, making it a versatile centerpiece for any room. The slightly reclined angle of the backrest promotes relaxation while maintaining proper spinal alignment.

This statement piece is ideal for creating a cozy reading corner, enhancing your living room arrangement, or adding a touch of elegance to your bedroom. The luxurious appearance is matched by exceptional comfort, making it perfect for extended sitting periods.`,
  },
  {
    id: 4,
    title: "Recliner Chair",
    category: "Chair",
    price: applyDiscount(399.99, 25),
    oldPrice: 399.99,
    discountPercent: 25,
    rating: 4.5,
    images: [
      "https://i.pinimg.com/736x/28/01/fb/2801fb2d5a8f8942d483bf8097eb7896.jpg",
    ],
    countdownEnd: new Date(now + 36 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "Standard",
        price: applyDiscount(399.99, 25),
        oldPrice: 399.99,
        stock: 7,
      },
      {
        size: "Wide",
        price: applyDiscount(449.99, 25),
        oldPrice: 449.99,
        stock: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "David Miller",
        rating: 5,
        date: new Date(2023, 8, 5),
        comment: "Best recliner I have ever owned!",
      },
      {
        id: 2,
        author: "Lisa Taylor",
        rating: 4,
        date: new Date(2023, 7, 22),
        comment: "Very comfortable and easy to operate.",
      },
    ],
    details: `Designed for ultimate relaxation, this premium recliner chair features a smooth mechanism that allows you to effortlessly transition from upright to fully reclined positions. The plush padding and generous proportions provide exceptional comfort, while the high-quality upholstery offers both durability and aesthetic appeal.

The chair is equipped with a simple lever mechanism that enables smooth reclining without needing to exert excessive force. In the fully reclined position, the extended footrest provides optimal support for your legs, promoting circulation and reducing pressure points. The padded arms and headrest offer additional comfort and support.

Constructed with a sturdy steel frame and reinforced joints, this recliner is built to withstand regular use while maintaining its functionality and appearance. The cushioning consists of multiple layers of high-density foam that conform to your body shape while providing adequate support. The neutral color options make it easy to incorporate into existing decor.

Ideal for watching television, reading, or simply relaxing after a long day, this recliner combines practical functionality with comfortable design. The compact footprint makes it suitable for various room sizes, while the comfortable design ensures it will become your favorite spot in the house.`,
  },
  {
    id: 5,
    title: "Gaming Chair",
    category: "Chair",
    price: applyDiscount(499.99, 30),
    oldPrice: 499.99,
    discountPercent: 30,
    rating: 4.8,
    images: [
      "https://i.pinimg.com/736x/d4/12/e0/d412e05ed8464bd0390f13697c3e17be.jpg",
    ],
    countdownEnd: new Date(now + 40 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "Standard",
        price: applyDiscount(499.99, 30),
        oldPrice: 499.99,
        stock: 15,
      },
      {
        size: "XL",
        price: applyDiscount(549.99, 30),
        oldPrice: 549.99,
        stock: 8,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Alex Chen",
        rating: 5,
        date: new Date(2023, 9, 12),
        comment: "Perfect for long gaming sessions!",
      },
      {
        id: 2,
        author: "Mark Wilson",
        rating: 4,
        date: new Date(2023, 8, 28),
        comment: "Great lumbar support and build quality.",
      },
    ],
    details: `Engineered for serious gamers and professionals who spend extended periods seated, this gaming chair combines ergonomic design with premium features. The chair features 4D adjustable armrests, multidirectional lumbar support, and a high-back design that provides comprehensive support for your entire back and neck.

The chair's robust construction includes a class-4 hydraulic lift system, reinforced steel frame, and durable PU leather upholstery that is both comfortable and easy to clean. The racing-inspired design includes contrasting stitching and decorative elements that create an aggressive, professional appearance.

Advanced features include a 180-degree recline function with locking mechanism, 360-degree swivel capability, and smooth-rolling casters suitable for both hard floors and carpets. The integrated headrest pillow and lumbar cushion are filled with memory foam that conforms to your body shape for personalized comfort.

Designed to promote healthy posture during extended sitting sessions, this chair helps reduce fatigue and prevent back strain. The adjustable components allow you to customize the chair to your specific body dimensions and preferences. Whether you're gaming, working, or streaming, this chair provides the comfort and support you need for peak performance.`,
  },
  {
    id: 6,
    title: "Folding Chair",
    category: "Chair",
    price: applyDiscount(99.99, 20),
    oldPrice: 99.99,
    discountPercent: 20,
    rating: 4.1,
    images: [
      "https://i.pinimg.com/736x/26/50/c1/2650c1ec374d2b78715a719f086eeaba.jpg",
    ],
    countdownEnd: new Date(now + 20 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "Standard",
        price: applyDiscount(99.99, 20),
        oldPrice: 99.99,
        stock: 50,
      },
      {
        size: "Premium",
        price: applyDiscount(129.99, 20),
        oldPrice: 129.99,
        stock: 25,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Maria Garcia",
        rating: 4,
        date: new Date(2023, 10, 8),
        comment: "Great for extra seating when needed.",
      },
      {
        id: 2,
        author: "James Anderson",
        rating: 3,
        date: new Date(2023, 9, 15),
        comment: "Functional but not for long sitting.",
      },
    ],
    details: `This versatile folding chair offers practical seating solutions for various occasions while maintaining comfort and durability. Constructed with a powder-coated steel frame that provides stability and support, the chair features a textured seat and backrest made from high-quality polypropylene that is both comfortable and easy to clean.

The innovative folding mechanism allows for quick setup and compact storage, making these chairs ideal for events, parties, or additional seating in small spaces. When folded, the chairs stack neatly, requiring minimal storage space. The weight capacity of 250 pounds ensures reliability for most users.

The ergonomically curved backrest provides adequate support for short to medium sitting periods, while the slightly contoured seat distributes weight evenly. The non-marking feet protect your floors from scratches and damage. The neutral color options blend well with various environments and decor styles.

Perfect for catering events, conference rooms, temporary seating arrangements, or as extra chairs for guests, these folding chairs combine practicality with comfort. The durable construction ensures they will withstand regular use and storage, providing reliable performance for years to come.`,
  },
  {
    id: 7,
    title: "Rocking Chair",
    category: "Chair",
    price: applyDiscount(249.99, 28),
    oldPrice: 249.99,
    discountPercent: 28,
    rating: 4.3,
    images: [
      "https://i.pinimg.com/736x/58/13/f0/5813f016f939035c03494757ad3d17dd.jpg",
    ],
    countdownEnd: new Date(now + 30 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "Standard",
        price: applyDiscount(249.99, 28),
        oldPrice: 249.99,
        stock: 12,
      },
      {
        size: "Glider",
        price: applyDiscount(299.99, 28),
        oldPrice: 299.99,
        stock: 6,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Susan Lee",
        rating: 5,
        date: new Date(2023, 10, 20),
        comment: "Perfect for nursing my baby comfortably.",
      },
      {
        id: 2,
        author: "Thomas Clark",
        rating: 4,
        date: new Date(2023, 9, 5),
        comment: "Smooth rocking motion and very sturdy.",
      },
    ],
    details: `Experience the soothing motion of this beautifully crafted rocking chair, designed for comfort and relaxation. Constructed from select hardwood with a warm finish that highlights the natural wood grain, this chair features a traditional curved base that provides a smooth, gentle rocking motion.

The ergonomically shaped backrest offers excellent support for your upper back and shoulders, while the comfortably contoured seat reduces pressure points. The wide armrests provide comfortable support for your arms and make rising from the chair easier. The careful proportions ensure optimal comfort for various body types.

The chair's construction emphasizes both aesthetics and durability, with reinforced joints and a sturdy base that maintains stability during use. The finish is resistant to scratches and moisture, ensuring the chair maintains its appearance over time. The classic design makes it suitable for nurseries, living rooms, porches, or bedrooms.

Ideal for nursing mothers, reading enthusiasts, or anyone seeking a comfortable spot to relax, this rocking chair combines timeless appeal with functional design. The gentle rocking motion has a calming effect, making it perfect for soothing babies or simply unwinding after a long day.`,
  },
  {
    id: 8,
    title: "Dining Chair",
    category: "Chair",
    price: applyDiscount(179.99, 28),
    oldPrice: 179.99,
    discountPercent: 28,
    rating: 4.2,
    images: [
      "https://i.pinimg.com/736x/95/c2/70/95c270d03ec7685cf36cd3398a4de741.jpg",
    ],
    countdownEnd: new Date(now + 22 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "Standard",
        price: applyDiscount(179.99, 28),
        oldPrice: 179.99,
        stock: 18,
      },
      {
        size: "Armchair",
        price: applyDiscount(199.99, 28),
        oldPrice: 199.99,
        stock: 10,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Jennifer White",
        rating: 4,
        date: new Date(2023, 11, 3),
        comment: "Comfortable for long dinners.",
      },
      {
        id: 2,
        author: "Christopher Hall",
        rating: 4,
        date: new Date(2023, 10, 18),
        comment: "Sturdy construction and nice finish.",
      },
    ],
    details: `Elevate your dining experience with these elegant dining chairs that combine style, comfort, and durability. Each chair features a solid wood frame with a beautiful finish that complements various table styles and interior decors. The gently curved backrest provides comfortable support while adding visual interest to the design.

The seat is generously padded and upholstered in high-quality fabric that is both comfortable and resistant to stains and wear. The subtle tapering of the legs adds a touch of sophistication while maintaining stability. The chairs are designed to stack efficiently for convenient storage when not in use.

Construction details include reinforced corner blocks, double-doweled joints, and moisture-resistant finishes that ensure long-lasting durability. The weight distribution is optimized for stability, and the comfortable seat height works with standard dining tables. The neutral color palette allows for easy integration with existing furniture.

Perfect for everyday meals and special occasions alike, these chairs offer the ideal combination of comfort and style. Whether used as part of a complete dining set or mixed with other chairs for an eclectic look, they provide reliable performance and aesthetic appeal.`,
  },
  {
    id: 9,
    title: "Modern Table",
    category: "Table",
    price: applyDiscount(199.99, 25),
    oldPrice: 199.99,
    discountPercent: 25,
    rating: 4.2,
    images: [
      "https://i.pinimg.com/736x/fa/17/ab/fa17ab326586279c05e4b77a2bd98b02.jpg",
    ],
    countdownEnd: new Date(now + 24 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: 'Small (36")',
        price: applyDiscount(199.99, 25),
        oldPrice: 199.99,
        stock: 8,
      },
      {
        size: 'Medium (48")',
        price: applyDiscount(249.99, 25),
        oldPrice: 249.99,
        stock: 6,
      },
      {
        size: 'Large (60")',
        price: applyDiscount(299.99, 25),
        oldPrice: 299.99,
        stock: 4,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Amanda Roberts",
        rating: 5,
        date: new Date(2023, 11, 15),
        comment: "Beautiful table that fits perfectly in our space.",
      },
      {
        id: 2,
        author: "Daniel Kim",
        rating: 4,
        date: new Date(2023, 10, 28),
        comment: "Modern look and very sturdy construction.",
      },
    ],
    details: `This contemporary table showcases clean lines and minimalist design, making it a versatile centerpiece for any living space. Crafted with a tempered glass top that is both scratch-resistant and easy to clean, supported by a sleek metal base with a brushed finish that adds industrial charm.

The table's design emphasizes both form and function, providing a stable surface while maintaining an airy, open feel in the room. The transparent glass top allows the table to visually recede, making it ideal for smaller spaces where bulkier furniture might feel overwhelming. The rounded edges ensure safety while maintaining the modern aesthetic.

Construction features include reinforced joints, tempered glass that meets safety standards, and protective feet that prevent scratching on floors. The table is surprisingly durable despite its lightweight appearance, with a weight capacity suitable for most common uses including dining, working, or displaying decorative items.

Perfect for modern apartments, condos, or homes with contemporary decor, this table serves multiple functions from dining to working to entertaining. The neutral design elements allow it to blend seamlessly with various color schemes and furniture styles, while the quality construction ensures it will remain a functional and attractive piece for years to come.`,
  },
  {
    id: 10,
    title: "Coffee Table",
    category: "Table",
    price: applyDiscount(119.99, 15),
    oldPrice: 119.99,
    discountPercent: 15,
    rating: 4.3,
    images: [
      "https://i.pinimg.com/1200x/00/54/f5/0054f59e998b4ebaabf493b575dd0b98.jpg",
    ],
    countdownEnd: new Date(now + 26 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: 'Small (36")',
        price: applyDiscount(119.99, 15),
        oldPrice: 119.99,
        stock: 10,
      },
      {
        size: 'Large (48")',
        price: applyDiscount(149.99, 15),
        oldPrice: 149.99,
        stock: 7,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Nicole Young",
        rating: 4,
        date: new Date(2023, 11, 22),
        comment: "Perfect size for our small living room.",
      },
      {
        id: 2,
        author: "Kevin Martin",
        rating: 5,
        date: new Date(2023, 10, 30),
        comment: "Love the storage shelf underneath!",
      },
    ],
    details: `This functional and stylish coffee table combines practical design with aesthetic appeal, featuring a clean-lined silhouette that complements various decor styles. The table is constructed with a durable wood composite top that resists scratches and moisture, supported by sturdy metal legs with a brushed finish.

The design includes a lower shelf that provides additional storage space for books, magazines, remote controls, or decorative items, helping to keep your living area organized and clutter-free. The generous tabletop surface offers ample space for beverages, snacks, and decorative accents while maintaining a proportional footprint that works well in most living room configurations.

Attention to detail is evident in the smooth rounded edges, consistent finish, and stable construction that prevents wobbling. The protective feet include felt pads to prevent scratching on hardwood or laminate floors. The neutral color options make it easy to coordinate with existing furniture and decor elements.

Ideal for small to medium-sized living rooms, this coffee table offers the perfect balance of form and function. Whether you're entertaining guests, enjoying family movie nights, or simply need a convenient surface for daily living, this table provides reliable performance and stylish appeal at an accessible price point.`,
  },
  {
    id: 11,
    title: "Dining Table Set",
    category: "Table",
    price: applyDiscount(499.99, 20),
    oldPrice: 499.99,
    discountPercent: 20,
    rating: 4.6,
    images: [
      "https://i.pinimg.com/736x/12/c1/ad/12c1ad49fbdb3ef6fff3ef905da45f03.jpg",
    ],
    countdownEnd: new Date(now + 72 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "4-Seater",
        price: applyDiscount(499.99, 20),
        oldPrice: 499.99,
        stock: 5,
      },
      {
        size: "6-Seater",
        price: applyDiscount(599.99, 20),
        oldPrice: 599.99,
        stock: 3,
      },
      {
        size: "8-Seater",
        price: applyDiscount(699.99, 20),
        oldPrice: 699.99,
        stock: 2,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Rachel Green",
        rating: 5,
        date: new Date(2023, 11, 5),
        comment: "Beautiful set that exceeded expectations!",
      },
      {
        id: 2,
        author: "Paul Walker",
        rating: 4,
        date: new Date(2023, 10, 12),
        comment: "Sturdy table and comfortable chairs.",
      },
    ],
    details: `This complete dining set transforms your dining area into an elegant space for meals and gatherings. The table features a solid wood construction with a beautiful finish that highlights the natural wood grain, complemented by matching chairs with comfortable padded seats and supportive backrests.

The table's design includes a extension mechanism that allows you to accommodate additional guests when needed, making it versatile for both everyday use and special occasions. The sturdy pedestal base provides stability without compromising leg room, ensuring comfortable seating for all guests. The table surface is treated with a protective coating that resists scratches, heat, and moisture.

The accompanying chairs are ergonomically designed with gently curved backrests that provide lumbar support and padded seats that maintain comfort through extended meals. The chairs feature a sturdy construction with reinforced joints and a weight capacity suitable for most users. The finish is consistent across all pieces, creating a cohesive look.

Perfect for family dinners, entertaining guests, or as a dedicated space for meals and conversation, this dining set offers both aesthetic appeal and practical functionality. The timeless design ensures it will remain stylish for years to come, while the quality construction guarantees reliable performance through regular use.`,
  },
  {
    id: 12,
    title: "Glass Coffee Table",
    category: "Table",
    price: applyDiscount(249.99, 28),
    oldPrice: 249.99,
    discountPercent: 28,
    rating: 4.4,
    images: [
      "https://i.pinimg.com/736x/b4/4f/60/b44f601851aaaf6ea8879807a6135107.jpg",
    ],
    countdownEnd: new Date(now + 60 * 60 * 60 * 1000),
    status: "Low Stock",
    variants: [
      {
        size: 'Round (36")',
        price: applyDiscount(249.99, 28),
        oldPrice: 249.99,
        stock: 2,
      },
      {
        size: 'Rectangle (48")',
        price: applyDiscount(279.99, 28),
        oldPrice: 279.99,
        stock: 3,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Michelle Lee",
        rating: 5,
        date: new Date(2023, 11, 18),
        comment: "Elegant and makes our room look bigger.",
      },
      {
        id: 2,
        author: "Jason Brown",
        rating: 4,
        date: new Date(2023, 10, 25),
        comment: "Beautiful table but requires frequent cleaning.",
      },
    ],
    details: `Add a touch of modern elegance to your living space with this stunning glass coffee table that combines sophisticated design with practical functionality. The table features a tempered glass top that is both durable and safe, supported by a sleek metal frame with a brushed finish that adds contemporary flair.

The transparent glass surface creates an open, airy feel in the room, making it ideal for smaller spaces where visual lightness is desired. Despite its delicate appearance, the glass is tempered to be stronger than regular glass and is designed to break into small, relatively harmless pieces if impacted. The metal frame provides sturdy support while maintaining a minimalist aesthetic.

Design details include precisely beveled edges, consistent welding on the frame, and protective feet that prevent scratching on various floor surfaces. The table's proportions are carefully considered to provide adequate surface area without overwhelming the space. The reflective qualities of the glass help to distribute light throughout the room.

Perfect for contemporary living rooms, modern apartments, or as an accent piece in traditional spaces, this coffee table offers both style and function. Its versatile design complements various decor styles, from minimalist to industrial to mid-century modern, making it a valuable addition to any home.`,
  },
  {
    id: 13,
    title: "Side Table",
    category: "Table",
    price: applyDiscount(199.99, 35),
    oldPrice: 199.99,
    discountPercent: 35,
    rating: 4.1,
    images: [
      "https://i.pinimg.com/736x/ae/4c/dd/ae4cdd6c52283d663c87d6fc8d202f53.jpg",
    ],
    countdownEnd: new Date(now + 40 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: 'Small (20")',
        price: applyDiscount(199.99, 35),
        oldPrice: 199.99,
        stock: 15,
      },
      {
        size: 'Medium (24")',
        price: applyDiscount(229.99, 35),
        oldPrice: 229.99,
        stock: 10,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Jessica Turner",
        rating: 4,
        date: new Date(2023, 11, 8),
        comment: "Perfect bedside table with enough storage.",
      },
      {
        id: 2,
        author: "Andrew Scott",
        rating: 4,
        date: new Date(2023, 10, 15),
        comment: "Sturdy and the right height for our sofa.",
      },
    ],
    details: `This versatile side table offers both functionality and style, making it the perfect addition to any room in your home. Featuring a compact design with a useful drawer for storage, this table provides a convenient surface for lamps, books, beverages, or decorative items while keeping essentials organized and within reach.

Constructed from high-quality wood composite with a durable finish that resists scratches and moisture, the table is built to withstand daily use. The smooth-gliding drawer includes a stop mechanism to prevent it from being pulled out completely, and the comfortable knob handle adds a touch of style while ensuring easy operation.

The table's proportions are carefully designed to fit comfortably beside sofas, beds, or chairs without occupying excessive space. The stable construction ensures that items placed on top remain secure, while the weighted base prevents tipping. The neutral finish allows the table to blend seamlessly with various decor styles.

Ideal for use as a bedside table, end table, or accent table in living areas, this practical piece offers the perfect combination of surface space and storage. Whether you need a place for your nighttime reading materials, remote controls, or a cup of coffee, this table provides a stylish and functional solution.`,
  },
  {
    id: 14,
    title: "Console Table",
    category: "Table",
    price: applyDiscount(299.99, 27),
    oldPrice: 299.99,
    discountPercent: 27,
    rating: 4.5,
    images: [
      "https://i.pinimg.com/736x/a9/20/d9/a920d91ca81d36262cf7bd0260ec4126.jpg",
    ],
    countdownEnd: new Date(now + 30 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: 'Standard (48")',
        price: applyDiscount(299.99, 27),
        oldPrice: 299.99,
        stock: 6,
      },
      {
        size: 'Long (60")',
        price: applyDiscount(349.99, 27),
        oldPrice: 349.99,
        stock: 4,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Stephanie Adams",
        rating: 5,
        date: new Date(2023, 11, 12),
        comment: "Beautiful table that perfect for our entryway.",
      },
      {
        id: 2,
        author: "Brian Wilson",
        rating: 4,
        date: new Date(2023, 10, 20),
        comment: "Great quality and lots of storage space.",
      },
    ],
    details: `This elegant console table combines sophisticated design with practical functionality, making it ideal for entryways, hallways, or behind sofas. Featuring a slim profile that doesn't overwhelm the space, the table offers both surface area for decorative displays and storage options for keeping essentials organized.

The design includes a combination of open shelves and drawers, providing flexible storage solutions for various items. The top surface is perfect for displaying artwork, photographs, or decorative objects, while the lower areas can accommodate baskets, books, or other items you want to keep accessible but out of sight.

Constructed from solid wood with a durable finish that resists scratches and wear, this table is built to withstand daily use while maintaining its attractive appearance. The tapered legs add a touch of mid-century modern style while providing stable support. The careful craftsmanship is evident in the smooth drawer operation, consistent finish, and sturdy construction.

Perfect for creating a welcoming entryway, defining spaces in open-concept areas, or providing additional surface and storage in living rooms, this console table offers both style and function. The versatile design works with various decor styles, from traditional to contemporary, making it a valuable addition to any home.`,
  },
  {
    id: 15,
    title: "Folding Table",
    category: "Table",
    price: applyDiscount(149.99, 33),
    oldPrice: 149.99,
    discountPercent: 33,
    rating: 4.0,
    images: [
      "https://i.pinimg.com/736x/5f/fd/66/5ffd66899a7b3c03eb422db7b18b6325.jpg",
    ],
    countdownEnd: new Date(now + 20 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "Small (4ft)",
        price: applyDiscount(149.99, 33),
        oldPrice: 149.99,
        stock: 20,
      },
      {
        size: "Large (6ft)",
        price: applyDiscount(199.99, 33),
        oldPrice: 199.99,
        stock: 12,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Robert Davis",
        rating: 4,
        date: new Date(2023, 11, 25),
        comment: "Great for parties and easy to store.",
      },
      {
        id: 2,
        author: "Karen Miller",
        rating: 3,
        date: new Date(2023, 10, 30),
        comment: "Functional but surface scratches easily.",
      },
    ],
    details: `This practical folding table offers versatile functionality for various occasions, from family gatherings to work projects to craft activities. Designed with a sturdy frame and a durable surface that withstands regular use, this table provides reliable performance while offering the convenience of compact storage when not in use.

The table features a simple folding mechanism that allows for quick setup and takedown without requiring tools or complicated instructions. When unfolded, the table locks into place securely, providing a stable surface that can support significant weight. The surface is resistant to stains, moisture, and heat, making it suitable for various activities.

Construction details include reinforced legs, cross-bracing for added stability, and protective feet that prevent damage to floors. The lightweight design makes it easy to move and position as needed, while the sturdy construction ensures it remains stable during use. The neutral color works well in various settings and for different purposes.

Ideal for extra dining space during holidays, temporary work surfaces for projects, craft tables, or outdoor events, this folding table offers practical solutions for space challenges. The ability to store it compactly makes it perfect for homes with limited storage space or for those who need occasional extra table surface.`,
  },
  {
    id: 16,
    title: "Outdoor Table",
    category: "Table",
    price: applyDiscount(349.99, 28),
    oldPrice: 349.99,
    discountPercent: 28,
    rating: 4.6,
    images: [
      "https://i.pinimg.com/1200x/af/39/36/af39364d7eb2c5acf088bfa68273bc30.jpg",
    ],
    countdownEnd: new Date(now + 50 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: 'Standard (42")',
        price: applyDiscount(349.99, 28),
        oldPrice: 349.99,
        stock: 8,
      },
      {
        size: 'Large (48")',
        price: applyDiscount(399.99, 28),
        oldPrice: 399.99,
        stock: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "William Taylor",
        rating: 5,
        date: new Date(2023, 11, 3),
        comment: "Perfect for our patio and very weather resistant.",
      },
      {
        id: 2,
        author: "Lisa Martinez",
        rating: 4,
        date: new Date(2023, 10, 10),
        comment: "Sturdy table that has held up well through seasons.",
      },
    ],
    details: `Designed specifically for outdoor use, this durable table withstands the elements while providing a stylish and functional surface for dining, entertaining, or relaxing. Constructed from weather-resistant materials including powder-coated aluminum and synthetic wicker, this table combines durability with attractive design.

The table features a sturdy frame that resists rust and corrosion, ensuring long-lasting performance even in challenging weather conditions. The surface is easy to clean and maintain, requiring only occasional wiping to keep it looking its best. The design includes drainage channels to prevent water accumulation during rainy weather.

Attention to detail is evident in the tight weave of the wicker, the consistent powder coating, and the reinforced joints that ensure stability. The table maintains its structural integrity and appearance through temperature changes, sunlight exposure, and moisture. The neutral color palette complements various outdoor decor styles.

Perfect for patios, decks, poolside areas, or gardens, this outdoor table provides a reliable surface for meals, drinks, or decorative displays. Whether you're hosting summer barbecues, enjoying morning coffee, or simply relaxing outdoors, this table enhances your outdoor living experience with both style and functionality.`,
  },
  {
    id: 17,
    title: "Modern Sofa",
    category: "Sofa",
    price: applyDiscount(699.99, 30),
    oldPrice: 699.99,
    discountPercent: 30,
    rating: 4.7,
    images: [
      "https://i.pinimg.com/736x/99/47/38/994738dc99d6b8fe0a7104a216904923.jpg",
    ],
    countdownEnd: new Date(now + 72 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "2-Seater",
        price: applyDiscount(699.99, 30),
        oldPrice: 699.99,
        stock: 4,
      },
      {
        size: "3-Seater",
        price: applyDiscount(899.99, 30),
        oldPrice: 899.99,
        stock: 3,
      },
      {
        size: "Sectional",
        price: applyDiscount(1299.99, 30),
        oldPrice: 1299.99,
        stock: 2,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Daniel White",
        rating: 5,
        date: new Date(2023, 11, 15),
        comment: "Extremely comfortable and looks fantastic!",
      },
      {
        id: 2,
        author: "Amanda Harris",
        rating: 4,
        date: new Date(2023, 10, 22),
        comment: "Great modern design but firm cushions.",
      },
    ],
    details: `This contemporary sofa combines sleek design with exceptional comfort, featuring clean lines, tailored upholstery, and thoughtful details that create a striking focal point in any living space. The low profile and minimalist silhouette reflect current design trends while providing comfortable seating for relaxation and entertainment.

Upholstered in high-quality fabric that is both durable and soft to the touch, this sofa features deep seating with generous cushioning that provides optimal support without feeling overly firm. The bench-style seat cushions maintain their shape and prevent shifting, while the loose back cushions offer flexibility for customization and comfort.

Construction details include a solid wood frame with reinforced corners, sinuous spring support system, and high-density foam cushions that retain their resilience over time. The tapered legs add mid-century modern flair while elevating the sofa slightly for a lighter visual appearance. The neutral color options work with various color schemes and decor styles.

Perfect for modern apartments, contemporary homes, or as a statement piece in eclectic interiors, this sofa offers both style and substance. Whether you're watching television, entertaining guests, or simply relaxing with a book, this sofa provides the perfect combination of comfort, support, and aesthetic appeal.`,
  },
  {
    id: 18,
    title: "Luxury Sofa Set",
    category: "Sofa",
    price: applyDiscount(999.99, 20),
    oldPrice: 999.99,
    discountPercent: 20,
    rating: 4.9,
    images: [
      "https://i.pinimg.com/1200x/00/44/6c/00446c739d58ec77d7ecfc2756558ac9.jpg",
    ],
    countdownEnd: new Date(now + 100 * 60 * 60 * 1000),
    status: "Low Stock",
    variants: [
      {
        size: "3-Piece Set",
        price: applyDiscount(999.99, 20),
        oldPrice: 999.99,
        stock: 2,
      },
      {
        size: "5-Piece Set",
        price: applyDiscount(1499.99, 20),
        oldPrice: 1499.99,
        stock: 1,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Michael Johnson",
        rating: 5,
        date: new Date(2023, 11, 8),
        comment: "Absolutely luxurious and worth every penny!",
      },
      {
        id: 2,
        author: "Sarah Thompson",
        rating: 5,
        date: new Date(2023, 10, 15),
        comment: "Most comfortable sofa we have ever owned.",
      },
    ],
    details: `Experience ultimate luxury with this premium sofa set that combines exquisite craftsmanship with exceptional comfort and style. This comprehensive set includes a spacious sofa, matching loveseat, and armchair, all upholstered in premium velvet fabric that feels incredibly soft and looks opulent.

The design features classic elements including rolled arms, tufted detailing, and elegant piping that create a sophisticated appearance. The deep seating and high backrests provide comprehensive support and comfort, while the generous proportions accommodate various sitting and lounging positions. The solid wood frame ensures durability and stability.

Each piece is constructed with attention to detail, including eight-way hand-tied springs, high-density foam cushioning, and down-blend wrap for the back cushions that provides luxurious comfort. The legs feature elegant tapered designs with brass caps that add a touch of glamour. The rich color options create a dramatic statement in any room.

Perfect for formal living rooms, spacious apartments, or as the centerpiece of your home decor, this luxury sofa set offers both aesthetic appeal and exceptional comfort. Whether you're entertaining guests or enjoying family time, these pieces provide the perfect combination of style, comfort, and quality craftsmanship.`,
  },
  {
    id: 19,
    title: "Sectional Sofa",
    category: "Sofa",
    price: applyDiscount(899.99, 25),
    oldPrice: 899.99,
    discountPercent: 25,
    rating: 4.8,
    images: [
      "https://i.pinimg.com/736x/81/ab/ee/81abee7db9f623bf842e1e5ff6492f5e.jpg",
    ],
    countdownEnd: new Date(now + 80 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "Small (2-Piece)",
        price: applyDiscount(899.99, 25),
        oldPrice: 899.99,
        stock: 3,
      },
      {
        size: "Large (3-Piece)",
        price: applyDiscount(1199.99, 25),
        oldPrice: 1199.99,
        stock: 2,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "David Clark",
        rating: 5,
        date: new Date(2023, 11, 20),
        comment: "Perfect for our family movie nights!",
      },
      {
        id: 2,
        author: "Jennifer Adams",
        rating: 4,
        date: new Date(2023, 10, 28),
        comment: "Very comfortable and spacious for guests.",
      },
    ],
    details: `This versatile sectional sofa offers flexible seating arrangements to accommodate your space and needs, featuring a modular design that can be configured in multiple ways. Upholstered in durable, family-friendly fabric that resists stains and wear, this sectional provides both comfort and practicality for everyday living.

The design includes deep seats, plush cushioning, and supportive backrests that make it ideal for lounging, watching television, or napping. The chaise lounge extension provides the perfect spot for stretching out and relaxing, while the corner wedge creates a continuous seating surface that encourages conversation and connection.

Construction features include a sturdy hardwood frame, pocket coil springs for support, and high-resiliency foam cushions that maintain their shape and comfort. The loose back cushions allow for easy fluffing and maintenance, while the reversible chaise cushion extends the life of the piece. The neutral color options work with various decor styles.

Perfect for family rooms, basements, or large living areas, this sectional offers ample seating for family and guests while providing exceptional comfort. The modular design allows you to adapt the configuration to your space and needs, making it a versatile and practical choice for modern living.`,
  },
  {
    id: 20,
    title: "Leather Sofa",
    category: "Sofa",
    price: applyDiscount(1199.99, 30),
    oldPrice: 1199.99,
    discountPercent: 30,
    rating: 4.9,
    images: [
      "https://i.pinimg.com/736x/ad/a4/c9/ada4c97c831009722cd3631807ffe4cd.jpg",
    ],
    countdownEnd: new Date(now + 90 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "2-Seater",
        price: applyDiscount(1199.99, 30),
        oldPrice: 1199.99,
        stock: 3,
      },
      {
        size: "3-Seater",
        price: applyDiscount(1499.99, 30),
        oldPrice: 1499.99,
        stock: 2,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Richard Brown",
        rating: 5,
        date: new Date(2023, 11, 12),
        comment: "Genuine leather and exceptional quality.",
      },
      {
        id: 2,
        author: "Patricia Wilson",
        rating: 5,
        date: new Date(2023, 10, 18),
        comment: "Beautiful aging and comfortable seating.",
      },
    ],
    details: `This premium leather sofa exemplifies timeless elegance and exceptional craftsmanship, featuring top-grain leather that develops a beautiful patina over time. The classic design with rolled arms, nailhead trim, and traditional details creates a sophisticated appearance that works with both traditional and contemporary decor.

The leather is carefully selected for its quality and character, with natural variations that add to its authentic appeal. The material is breathable, durable, and becomes more comfortable with use, developing a unique character that reflects your lifestyle. The cushioning combines high-density foam with down-blend wrap for luxurious comfort.

Construction details include a solid hardwood frame with double-doweled joints, sinuous spring support system, and reinforced corners that ensure long-lasting durability. The attention to detail is evident in the precise stitching, consistent nailhead placement, and carefully finished edges. The classic proportions provide comfortable seating without overwhelming the space.

Perfect for formal living rooms, executive offices, or as a statement piece in any home, this leather sofa offers both aesthetic appeal and exceptional comfort. The quality materials and construction ensure it will remain a cherished piece for years, developing character and comfort that only improves with time.`,
  },
  {
    id: 21,
    title: "Fabric Sofa",
    category: "Sofa",
    price: applyDiscount(799.99, 25),
    oldPrice: 799.99,
    discountPercent: 25,
    rating: 4.6,
    images: [
      "https://i.pinimg.com/736x/49/ef/99/49ef995e04f0ff10158cfb9f5c53d3c0.jpg",
    ],
    countdownEnd: new Date(now + 60 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "2-Seater",
        price: applyDiscount(799.99, 25),
        oldPrice: 799.99,
        stock: 5,
      },
      {
        size: "3-Seater",
        price: applyDiscount(999.99, 25),
        oldPrice: 999.99,
        stock: 4,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Thomas Anderson",
        rating: 4,
        date: new Date(2023, 11, 25),
        comment: "Very comfortable and family-friendly fabric.",
      },
      {
        id: 2,
        author: "Nancy Martinez",
        rating: 5,
        date: new Date(2023, 10, 30),
        comment: "Sturdy construction and beautiful color.",
      },
    ],
    details: `This comfortable fabric sofa combines cozy appeal with practical functionality, featuring a durable performance fabric that resists stains, fading, and wear. The relaxed design with soft lines and plush cushioning creates an inviting appearance that encourages relaxation and comfort.

The fabric is specifically engineered for family living, with advanced stain resistance that makes cleanup easy while maintaining a soft, comfortable feel. The deep seats and generous proportions accommodate various sitting and lounging positions, while the supportive back cushions provide adequate lumbar support.

Construction features include a sturdy hardwood frame, sinuous spring support system, and high-resiliency foam cushions that maintain their shape and comfort over time. The loose back cushions allow for easy fluffing and maintenance, while the bench-style seat cushion prevents shifting and maintains a neat appearance.

Perfect for family rooms, casual living spaces, or anywhere comfort is prioritized, this fabric sofa offers both practical performance and comfortable design. The durable materials and construction ensure it will withstand daily use while maintaining its attractive appearance and comfortable feel.`,
  },
  {
    id: 22,
    title: "Corner Sofa",
    category: "Sofa",
    price: applyDiscount(999.99, 25),
    oldPrice: 999.99,
    discountPercent: 25,
    rating: 4.7,
    images: [
      "https://i.pinimg.com/736x/33/64/05/336405d649276deb2e1776945683c85c.jpg",
    ],
    countdownEnd: new Date(now + 70 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "Standard",
        price: applyDiscount(999.99, 25),
        oldPrice: 999.99,
        stock: 3,
      },
      {
        size: "With Chaise",
        price: applyDiscount(1199.99, 25),
        oldPrice: 1199.99,
        stock: 2,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Charles Davis",
        rating: 5,
        date: new Date(2023, 11, 18),
        comment: "Perfect fit for our corner space and very comfortable.",
      },
      {
        id: 2,
        author: "Betty White",
        rating: 4,
        date: new Date(2023, 10, 25),
        comment: "Great for entertaining and family gatherings.",
      },
    ],
    details: `This space-efficient corner sofa maximizes seating in any room while providing exceptional comfort and style. Designed specifically to fit neatly into corners, this sofa makes intelligent use of often-wasted space while creating a cozy and inviting seating area for relaxation and entertainment.

The L-shaped design provides ample seating for multiple people while maintaining a compact footprint that works well in various room configurations. The chaise lounge extension offers the perfect spot for stretching out and relaxing, while the corner wedge creates a continuous seating surface that encourages conversation and connection.

Upholstered in durable, family-friendly fabric that resists stains and wear, this sofa features deep seats with plush cushioning and supportive backrests. The construction includes a sturdy hardwood frame, pocket coil springs for support, and high-resiliency foam cushions that maintain their shape and comfort over time.

Perfect for apartments, small living rooms, or any space where maximizing seating is important, this corner sofa offers both practical functionality and comfortable design. The versatile configuration works with various decor styles, from modern to traditional, making it a valuable addition to any home.`,
  },
  {
    id: 23,
    title: "Recliner Sofa",
    category: "Sofa",
    price: applyDiscount(849.99, 23),
    oldPrice: 849.99,
    discountPercent: 23,
    rating: 4.5,
    images: [
      "https://i.pinimg.com/1200x/4f/68/f5/4f68f568e86669571673ec8f7104289f.jpg",
    ],
    countdownEnd: new Date(now + 50 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "2-Seater",
        price: applyDiscount(849.99, 23),
        oldPrice: 849.99,
        stock: 4,
      },
      {
        size: "3-Seater",
        price: applyDiscount(1049.99, 23),
        oldPrice: 1049.99,
        stock: 3,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "George Miller",
        rating: 5,
        date: new Date(2023, 11, 5),
        comment: "Perfect for movie nights and so comfortable!",
      },
      {
        id: 2,
        author: "Helen Thompson",
        rating: 4,
        date: new Date(2023, 10, 12),
        comment: "Easy to recline and very sturdy mechanism.",
      },
    ],
    details: `Experience ultimate relaxation with this comfortable recliner sofa that combines the functionality of individual recliners with the cohesive appearance of a traditional sofa. Featuring smooth mechanisms that allow each seat to recline independently, this sofa provides personalized comfort for everyone.

The design maintains a streamlined appearance when not reclined, with clean lines and tailored upholstery that works with various decor styles. When reclined, the seats provide comfortable support for your entire body, with extended footrests and adjusted back angles that reduce pressure points and promote relaxation.

Construction features include a sturdy hardwood frame, reliable reclining mechanisms with safety locks, and high-density foam cushioning that provides both comfort and support. The upholstery is durable and easy to clean, making it suitable for family use. The neutral color options work with various color schemes.

Perfect for media rooms, family rooms, or any space dedicated to relaxation and entertainment, this recliner sofa offers both comfort and functionality. Whether you're watching movies, reading, or simply relaxing, the individual reclining seats allow everyone to find their perfect comfort position.`,
  },
  {
    id: 24,
    title: "Sleeper Sofa",
    category: "Sofa",
    price: applyDiscount(899.99, 22),
    oldPrice: 899.99,
    discountPercent: 22,
    rating: 4.6,
    images: [
      "https://i.pinimg.com/736x/83/8b/5c/838b5cb04615e1e9436478494cc24e53.jpg",
    ],
    countdownEnd: new Date(now + 40 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "Full Size",
        price: applyDiscount(899.99, 22),
        oldPrice: 899.99,
        stock: 3,
      },
      {
        size: "Queen Size",
        price: applyDiscount(1099.99, 22),
        oldPrice: 1099.99,
        stock: 2,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Paul Robinson",
        rating: 4,
        date: new Date(2023, 11, 15),
        comment: "Comfortable for both sitting and sleeping.",
      },
      {
        id: 2,
        author: "Sandra Clark",
        rating: 5,
        date: new Date(2023, 10, 22),
        comment: "Perfect solution for overnight guests.",
      },
    ],
    details: `This versatile sleeper sofa provides dual functionality as both comfortable seating by day and a convenient bed by night, making it ideal for spaces that need to accommodate overnight guests. The innovative mechanism allows for easy transformation from sofa to bed without requiring significant effort or strength.

When configured as a sofa, it offers comfortable seating with supportive cushioning and appropriate depth for relaxed sitting. When converted to a bed, it provides a comfortable sleeping surface with a supportive mattress that ensures restful sleep for guests. The mechanism operates smoothly and locks securely in both positions.

Construction features include a sturdy hardwood frame, reliable transformation mechanism, and high-quality mattress that balances comfort and support. The upholstery is durable and resistant to wear, making it suitable for regular use. The design maintains a streamlined appearance that works with various decor styles.

Perfect for studio apartments, guest rooms, or living spaces that occasionally need to accommodate overnight visitors, this sleeper sofa offers practical solutions without compromising on style or comfort. The dual functionality makes it a valuable piece for maximizing space utility in any home.`,
  },
  {
    id: 25,
    title: "Wall Art",
    category: "Decor",
    price: applyDiscount(79.99, 37),
    oldPrice: 79.99,
    discountPercent: 37,
    rating: 4.5,
    images: [
      "https://i.pinimg.com/736x/96/c6/b7/96c6b716d4af4587ea0cc4cf14d2f6cd.jpg",
    ],
    countdownEnd: new Date(now + 48 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: 'Small (24x36")',
        price: applyDiscount(79.99, 37),
        oldPrice: 79.99,
        stock: 20,
      },
      {
        size: 'Large (36x48")',
        price: applyDiscount(99.99, 37),
        oldPrice: 99.99,
        stock: 15,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Elizabeth Taylor",
        rating: 5,
        date: new Date(2023, 11, 8),
        comment: "Beautiful artwork that transformed our room.",
      },
      {
        id: 2,
        author: "Christopher Green",
        rating: 4,
        date: new Date(2023, 10, 15),
        comment: "High-quality printing and vibrant colors.",
      },
    ],
    details: `This stunning wall art piece adds personality and style to any room, featuring a high-quality print on premium canvas that captures vibrant colors and intricate details. The artwork is professionally stretched over a sturdy wooden frame, ready to hang immediately without requiring additional framing.

The design features contemporary elements that work with various decor styles, from modern to traditional to eclectic. The subject matter is carefully selected to create visual interest without overwhelming the space, making it suitable for living rooms, bedrooms, offices, or entryways. The colors are saturated and resistant to fading.

Construction details include a solid wood stretcher frame, museum-quality canvas, and archival-grade inks that ensure the artwork maintains its appearance over time. The edges are finished neatly, allowing the piece to be displayed without framing for a modern look. The included hanging hardware makes installation straightforward.

Perfect for adding a focal point to blank walls, creating visual interest in any room, or expressing your personal style, this wall art offers both aesthetic appeal and quality construction. The ready-to-hang design eliminates the need for professional framing, making it easy to refresh your space immediately.`,
  },
  {
    id: 26,
    title: "Floor Lamp",
    category: "Decor",
    price: applyDiscount(129.99, 30),
    oldPrice: 129.99,
    discountPercent: 30,
    rating: 4.3,
    images: [
      "https://i.pinimg.com/736x/66/2f/31/662f31218aa8e51db234b83e3ec0c989.jpg",
    ],
    countdownEnd: new Date(now + 60 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: 'Standard (62")',
        price: applyDiscount(129.99, 30),
        oldPrice: 129.99,
        stock: 12,
      },
      {
        size: 'Arc (78")',
        price: applyDiscount(159.99, 30),
        oldPrice: 159.99,
        stock: 8,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Donald Harris",
        rating: 4,
        date: new Date(2023, 11, 20),
        comment: "Provides perfect ambient lighting for our living room.",
      },
      {
        id: 2,
        author: "Susan Wilson",
        rating: 5,
        date: new Date(2023, 10, 28),
        comment: "Beautiful design and very stable base.",
      },
    ],
    details: `This elegant floor lamp combines functional lighting with sculptural design, creating a beautiful addition to any room while providing practical illumination. The lamp features a sleek metal construction with a brushed finish that adds contemporary style, topped with a fabric shade that diffuses light softly.

The design includes adjustable features that allow you to direct light where needed, making it ideal for reading, creating ambiance, or highlighting specific areas of a room. The stable base ensures the lamp remains upright and secure, while the thoughtful proportions work well in various spaces without overwhelming them.

Construction details include a heavy-duty base for stability, reinforced joints, and a reliable switch mechanism. The lamp accommodates standard bulbs and includes a convenient foot switch for easy operation. The neutral color options work with various decor styles, from modern to traditional to industrial.

Perfect for living rooms, bedrooms, offices, or any space that needs both additional lighting and aesthetic enhancement, this floor lamp offers both form and function. The adjustable features and soft light diffusion make it versatile for various activities and moods, while the stylish design adds to the room's decor.`,
  },
  {
    id: 27,
    title: "Vase Set",
    category: "Decor",
    price: applyDiscount(59.99, 33),
    oldPrice: 59.99,
    discountPercent: 33,
    rating: 4.2,
    images: [
      "https://i.pinimg.com/736x/49/58/27/495827cf2cfbe575d5c41a4b737f8ad9.jpg",
    ],
    countdownEnd: new Date(now + 50 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "Set of 3",
        price: applyDiscount(59.99, 33),
        oldPrice: 59.99,
        stock: 25,
      },
      {
        size: "Set of 5",
        price: applyDiscount(89.99, 33),
        oldPrice: 89.99,
        stock: 15,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Margaret Brown",
        rating: 4,
        date: new Date(2023, 11, 12),
        comment: "Beautiful vases that look more expensive than they are.",
      },
      {
        id: 2,
        author: "Joseph Davis",
        rating: 5,
        date: new Date(2023, 10, 18),
        comment: "Perfect for displaying fresh or artificial flowers.",
      },
    ],
    details: `This elegant vase set offers versatile decorative options for any room, featuring a collection of complementary sizes and shapes that work together to create visually interesting displays. Crafted from high-quality ceramic with a smooth glaze finish, these vases have substantial weight and feel premium.

The set includes various heights and diameters, allowing you to create dynamic arrangements with flowers, branches, or standing alone as sculptural elements. The neutral color palette works with various decor styles and color schemes, while the simple forms highlight whatever you choose to display rather than competing for attention.

Construction details include consistent glazing, reinforced bases for stability, and careful finishing that eliminates sharp edges. The vases are watertight, making them suitable for fresh flowers, and their substantial weight prevents easy tipping. The timeless design ensures they will remain stylish for years to come.

Perfect for coffee tables, dining tables, mantels, or shelves, these vases offer endless possibilities for decorative expression. Whether used individually or grouped together, they add sophistication and style to any space. The set approach provides coordinated pieces that work together harmoniously.`,
  },
  {
    id: 28,
    title: "Rug Carpet",
    category: "Decor",
    price: applyDiscount(159.99, 25),
    oldPrice: 159.99,
    discountPercent: 25,
    rating: 4.4,
    images: [
      "https://i.pinimg.com/1200x/d1/6d/d1/d16dd10831de9724169cbe56f005b113.jpg",
    ],
    countdownEnd: new Date(now + 70 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "5x8 ft",
        price: applyDiscount(159.99, 25),
        oldPrice: 159.99,
        stock: 8,
      },
      {
        size: "8x10 ft",
        price: applyDiscount(229.99, 25),
        oldPrice: 229.99,
        stock: 5,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Barbara Johnson",
        rating: 5,
        date: new Date(2023, 11, 25),
        comment: "Soft underfoot and beautiful pattern.",
      },
      {
        id: 2,
        author: "James Smith",
        rating: 4,
        date: new Date(2023, 10, 30),
        comment: "Great quality for the price and hides dirt well.",
      },
    ],
    details: `This beautiful area rug adds warmth, texture, and style to any room, featuring a sophisticated pattern that works with various decor styles. Crafted from soft, durable fibers that feel comfortable underfoot while resisting wear and staining, this rug combines aesthetic appeal with practical performance.

The design features a timeless pattern with subtle variations in tone that add depth and interest without overwhelming the space. The low pile height makes it easy to clean and suitable for high-traffic areas, while the dense construction provides cushioning and sound absorption. The non-slip backing enhances safety on hard surface floors.

Construction details include tightly woven fibers, finished edges that prevent fraying, and consistent dyeing that ensures color fastness. The rug maintains its appearance through regular vacuuming and occasional cleaning, making it suitable for family living. The neutral color palette works with various furniture and wall colors.

Perfect for defining spaces in open-concept areas, adding warmth to living rooms or bedrooms, or protecting hard surface floors, this area rug offers both style and function. The quality construction ensures it will maintain its appearance and performance through years of use, making it a valuable addition to your home.`,
  },
  {
    id: 29,
    title: "Bookshelf",
    category: "Decor",
    price: applyDiscount(199.99, 25),
    oldPrice: 199.99,
    discountPercent: 25,
    rating: 4.5,
    images: [
      "https://i.pinimg.com/736x/a6/a8/f2/a6a8f23d8a5ef524196e77915b7e2a9e.jpg",
    ],
    countdownEnd: new Date(now + 60 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: "5-Tier",
        price: applyDiscount(199.99, 25),
        oldPrice: 199.99,
        stock: 6,
      },
      {
        size: "7-Tier",
        price: applyDiscount(249.99, 25),
        oldPrice: 249.99,
        stock: 4,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Thomas Wilson",
        rating: 5,
        date: new Date(2023, 11, 3),
        comment: "Sturdy shelves that hold all our books beautifully.",
      },
      {
        id: 2,
        author: "Karen Davis",
        rating: 4,
        date: new Date(2023, 10, 10),
        comment: "Easy to assemble and looks more expensive than it is.",
      },
    ],
    details: `This functional and stylish bookshelf offers ample storage for books, decorative items, and essentials while adding aesthetic appeal to any room. Featuring a ladder design that creates visual interest while providing practical shelving, this piece works well in living rooms, offices, bedrooms, or even bathrooms.

The design includes multiple shelves with gradually increasing depths that create a dynamic appearance while providing varied display options. The open-back design makes the piece feel light and airy, while the sturdy construction ensures stability even when fully loaded. The neutral finish works with various decor styles.

Construction details include solid wood shelves, reinforced joints, and cross-bracing that prevents wobbling. The shelves are weight-rated to hold substantial items without sagging, and the overall structure is designed to be stable without requiring wall mounting (though hardware is included for added safety).

Perfect for book lovers, collectors, or anyone needing organized storage with style, this bookshelf offers both practical functionality and aesthetic appeal. The versatile design works in various rooms and settings, providing display space while maintaining an open, airy feel in the room.`,
  },
  {
    id: 30,
    title: "Curtain Set",
    category: "Decor",
    price: applyDiscount(99.99, 30),
    oldPrice: 99.99,
    discountPercent: 30,
    rating: 4.3,
    images: [
      "https://i.pinimg.com/736x/c2/bd/b5/c2bdb55ef969cec6af691568cebdc5c8.jpg",
    ],
    countdownEnd: new Date(now + 48 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: '84" Length',
        price: applyDiscount(99.99, 30),
        oldPrice: 99.99,
        stock: 18,
      },
      {
        size: '96" Length',
        price: applyDiscount(119.99, 30),
        oldPrice: 119.99,
        stock: 12,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Lisa Anderson",
        rating: 4,
        date: new Date(2023, 11, 15),
        comment: "Beautiful curtains that block light effectively.",
      },
      {
        id: 2,
        author: "Mark Thompson",
        rating: 5,
        date: new Date(2023, 10, 22),
        comment: "High-quality fabric and excellent value.",
      },
    ],
    details: `This complete curtain set transforms any room with style and functionality, featuring premium blackout fabric that effectively blocks light while providing privacy and insulation. The set includes two curtain panels, a valance, and all necessary hardware for easy installation, creating a coordinated look instantly.

The fabric features a sophisticated texture and weight that drapes beautifully, creating elegant folds that enhance the room's appearance. The blackout lining not only blocks light but also helps with temperature regulation and noise reduction, making rooms more comfortable and energy-efficient. The thermal properties help reduce heating and cooling costs.

Construction details include reinforced hems, weighted bottoms that improve drape, and durable heading that works with standard curtain rods. The fabric is treated to resist fading and is machine washable for easy maintenance. The neutral color options work with various decor styles and color schemes.

Perfect for bedrooms where light control is important, living rooms where privacy is desired, or any space that needs both style and function, these curtains offer comprehensive window treatment solutions. The complete set approach ensures coordinated appearance and simplifies the selection process.`,
  },
  {
    id: 31,
    title: "Table Lamp",
    category: "Decor",
    price: applyDiscount(89.99, 33),
    oldPrice: 89.99,
    discountPercent: 33,
    rating: 4.2,
    images: [
      "https://i.pinimg.com/1200x/71/23/c0/7123c04ada69bc86d09b373fee024ef4.jpg",
    ],
    countdownEnd: new Date(now + 48 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: 'Standard (24")',
        price: applyDiscount(89.99, 33),
        oldPrice: 89.99,
        stock: 20,
      },
      {
        size: 'Desktop (18")',
        price: applyDiscount(69.99, 33),
        oldPrice: 69.99,
        stock: 25,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Nancy Harris",
        rating: 4,
        date: new Date(2023, 11, 8),
        comment: "Perfect bedside lamp with soft lighting.",
      },
      {
        id: 2,
        author: "Robert Clark",
        rating: 5,
        date: new Date(2023, 10, 15),
        comment: "Beautiful design and very stable base.",
      },
    ],
    details: `This elegant table lamp combines functional lighting with decorative appeal, featuring a classic design with modern elements that work with various decor styles. The lamp base is crafted from high-quality materials with a sophisticated finish, topped with a fabric shade that diffuses light softly for ambient illumination.

The design proportions are carefully considered to work well on bedside tables, desks, console tables, or any surface needing additional light. The stable base prevents tipping, while the overall size provides adequate light without overwhelming the surface. The neutral color options work with various color schemes and styles.

Construction details include a heavy-duty base for stability, reliable switch mechanism, and standard bulb compatibility. The lamp includes a convenient on/off switch and accommodates various bulb types to achieve different lighting effects. The quality materials and construction ensure long-lasting performance.

Perfect for bedside reading, desk work, or ambient lighting in living areas, this table lamp offers both practical functionality and aesthetic enhancement. The soft light diffusion creates a warm, inviting atmosphere, while the stylish design adds to the room's decor. The versatile size works in various settings and applications.`,
  },
  {
    id: 32,
    title: "Table Lampo",
    category: "Decor",
    price: applyDiscount(89.99, 33),
    oldPrice: 39.99,
    discountPercent: 33,
    rating: 4.2,
    images: [
      "https://i.pinimg.com/1200x/71/23/c0/7123c04ada69bc86d09b373fee024ef4.jpg",
    ],
    countdownEnd: new Date(now + 48 * 60 * 60 * 1000),
    status: "In Stock",
    variants: [
      {
        size: 'Standard (24")',
        price: applyDiscount(89.99, 33),
        oldPrice: 39.99,
        stock: 15,
      },
      {
        size: 'Desktop (18")',
        price: applyDiscount(69.99, 33),
        oldPrice: 29.99,
        stock: 20,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Nancy Harris",
        rating: 4,
        date: new Date(2023, 11, 8),
        comment: "Perfect bedside lamp with soft lighting.",
      },
      {
        id: 2,
        author: "Robert Clark",
        rating: 5,
        date: new Date(2023, 10, 15),
        comment: "Beautiful design and very stable base.",
      },
    ],
    details: `This elegant table lamp combines functional lighting with decorative appeal, featuring a classic design with modern elements that work with various decor styles. The lamp base is crafted from high-quality materials with a sophisticated finish, topped with a fabric shade that diffuses light softly for ambient illumination.

The design proportions are carefully considered to work well on bedside tables, desks, console tables, or any surface needing additional light. The stable base prevents tipping, while the overall size provides adequate light without overwhelming the surface. The neutral color options work with various color schemes and styles.

Construction details include a heavy-duty base for stability, reliable switch mechanism, and standard bulb compatibility. The lamp includes a convenient on/off switch and accommodates various bulb types to achieve different lighting effects. The quality materials and construction ensure long-lasting performance.

Perfect for bedside reading, desk work, or ambient lighting in living areas, this table lamp offers both practical functionality and aesthetic enhancement. The soft light diffusion creates a warm, inviting atmosphere, while the stylish design adds to the room's decor. The versatile size works in various settings and applications.`,
  },
  {
    id: 33,
    title: "Ceramic Vase Collection",
    category: "Decor",
    price: 45.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.5,
    images: [
      "https://i.pinimg.com/1200x/54/2a/7c/542a7c468e5e6c85c639d3c0d5f97b3f.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: 'Tall (12")',
        price: 45.99,
        oldPrice: undefined,
        stock: 12,
      },
      {
        size: 'Medium (8")',
        price: 35.99,
        oldPrice: undefined,
        stock: 18,
      },
      {
        size: 'Small (6")',
        price: 25.99,
        oldPrice: undefined,
        stock: 25,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Sarah Johnson",
        rating: 5,
        date: new Date(2023, 9, 22),
        comment:
          "Beautiful craftsmanship and perfect for my floral arrangements.",
      },
      {
        id: 2,
        author: "Michael Thompson",
        rating: 4,
        date: new Date(2023, 10, 5),
        comment: "Elegant design that complements our living room perfectly.",
      },
    ],
    details: `Handcrafted ceramic vases with a smooth glaze finish. These versatile vases feature a modern minimalist design that works with various decor styles from contemporary to traditional. Each piece is uniquely crafted with slight variations that add to their artisanal charm.

The collection includes three sizes perfect for different floral arrangements or standalone decorative pieces. The taller vase works well for statement bouquets, while the medium and small sizes are ideal for table centerpieces or accent pieces. The neutral color palette complements any color scheme.

Made from high-quality ceramic that's both durable and lightweight. The vases are watertight and suitable for fresh flower arrangements. The wide opening makes arranging flowers easy, while the stable base prevents tipping. Each vase is easy to clean and maintain.

Perfect for adding an artistic touch to any room, these vases work well in living rooms, dining areas, bedrooms, or as office decor. They make excellent gifts for housewarmings, weddings, or special occasions. The timeless design ensures they will remain stylish for years to come.`,
  },
  {
    id: 34,
    title: "Premium Throw Blanket",
    category: "Home",
    price: 79.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.8,
    images: [
      "https://i.pinimg.com/1200x/89/1d/fa/891dfa28a2d798e84a3d196ca6c8a7c3.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "50x60 inches",
        price: 79.99,
        oldPrice: undefined,
        stock: 20,
      },
      {
        size: "60x80 inches",
        price: 99.99,
        oldPrice: undefined,
        stock: 15,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Jennifer Lee",
        rating: 5,
        date: new Date(2023, 8, 14),
        comment:
          "Incredibly soft and warm. Perfect for cozy evenings on the couch.",
      },
      {
        id: 2,
        author: "David Wilson",
        rating: 5,
        date: new Date(2023, 9, 3),
        comment:
          "High quality material that has held up well after multiple washes.",
      },
    ],
    details: `Luxuriously soft throw blanket made from premium blend of natural and synthetic fibers for optimal warmth and comfort. The blanket features a sophisticated textured pattern that adds visual interest to any space while providing exceptional softness against the skin.

Designed for both decorative use and practical warmth, this throw is perfect for draping over sofas, chairs, or beds. The generous size provides ample coverage while the medium weight makes it suitable for year-round use. The elegant fringe detailing on the ends adds a finishing touch to the design.

Crafted with durability in mind, the blanket maintains its softness and shape after multiple washes. The color-fast dye ensures the vibrant hues remain bright wash after wash. The fabric is hypoallergenic and suitable for those with sensitive skin.

Ideal for adding a layer of comfort and style to your living space. Use it as an accent piece on your furniture or wrap yourself in its warmth during cool evenings. The versatile design complements various interior styles from modern to rustic.`,
  },
  {
    id: 35,
    title: "Wooden Bookshelf",
    category: "Furniture",
    price: 249.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.6,
    images: [
      "https://i.pinimg.com/1200x/32/7a/4a/327a4a8b2e5d9f3d1b4e7c8f6e5d3b2c.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "5-Tier",
        price: 249.99,
        oldPrice: undefined,
        stock: 8,
      },
      {
        size: "3-Tier",
        price: 179.99,
        oldPrice: undefined,
        stock: 12,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Thomas Reed",
        rating: 4,
        date: new Date(2023, 10, 18),
        comment: "Sturdy construction and beautiful finish. Easy to assemble.",
      },
      {
        id: 2,
        author: "Amanda Scott",
        rating: 5,
        date: new Date(2023, 9, 29),
        comment:
          "Perfect size for my home office. Holds all my books with room to spare.",
      },
    ],
    details: `Elegant wooden bookshelf crafted from sustainable solid wood with a smooth natural finish. The design features clean lines and open shelving that creates an airy feel while providing substantial storage space. The versatile unit works equally well for books, display items, or organizational storage.

The bookshelf is designed with stability in mind, featuring reinforced joints and a balanced structure that prevents wobbling. Each shelf has a weight capacity of 50 pounds, making it suitable for heavy books and decorative objects. The adjustable feet allow for leveling on uneven floors.

Finished with a protective coating that resists scratches and stains, ensuring the piece maintains its beauty over time. The natural wood grain is highlighted through the finishing process, giving each piece unique character. The assembly process is straightforward with all hardware and instructions included.

Perfect for home offices, living rooms, bedrooms, or any space requiring stylish storage solutions. The neutral wood tone complements various color schemes and decor styles. The open design allows for easy access to items while creating an opportunity to display cherished possessions.`,
  },
  {
    id: 36,
    title: "Stainless Steel Cookware Set",
    category: "Kitchen",
    price: 199.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.7,
    images: [
      "https://i.pinimg.com/1200x/76/3d/ab/763dab37c4d7b4e7a8c6f9e1b2d5c8e3.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "10-Piece Set",
        price: 199.99,
        oldPrice: undefined,
        stock: 10,
      },
      {
        size: "15-Piece Set",
        price: 299.99,
        oldPrice: undefined,
        stock: 6,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Maria Rodriguez",
        rating: 5,
        date: new Date(2023, 8, 7),
        comment:
          "Professional quality at a reasonable price. Heats evenly and cleans easily.",
      },
      {
        id: 2,
        author: "James Anderson",
        rating: 4,
        date: new Date(2023, 10, 12),
        comment:
          "Great starter set for someone outfitting their first kitchen.",
      },
    ],
    details: `Professional-grade stainless steel cookware set featuring multi-ply construction for optimal heat distribution. The set includes essential pieces for everyday cooking, from sauté pans to stock pots. Each piece features stay-cool handles, tight-fitting lids, and mirror-polished exteriors for both performance and aesthetics.

The cookware is constructed with an aluminum core sandwiched between layers of stainless steel, ensuring even heating without hot spots. The interior cooking surfaces are brushed to resist sticking and make cleaning easier. The oven-safe handles are ergonomically designed for comfort and secure grip.

Designed for durability, these pieces are dishwasher safe and resistant to warping, staining, and corrosion. The lids feature drip-free rims and steam vents for controlled cooking. The set is compatible with all cooktops including induction, gas, electric, and ceramic.

Ideal for home chefs who appreciate professional performance and timeless design. The versatile set handles everything from delicate sauces to hearty stews with consistent results. The polished stainless steel exterior maintains its shine with minimal maintenance, making it a beautiful addition to any kitchen.`,
  },
  {
    id: 37,
    title: "Memory Foam Bath Mat",
    category: "Bath",
    price: 39.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.9,
    images: [
      "https://i.pinimg.com/1200x/91/5a/c7/915ac74e3d8b6c7a8f3e2d1c4b5d6e9f.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "Standard (24x17 inches)",
        price: 39.99,
        oldPrice: undefined,
        stock: 30,
      },
      {
        size: "Extra Large (31x20 inches)",
        price: 49.99,
        oldPrice: undefined,
        stock: 20,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Lisa Chen",
        rating: 5,
        date: new Date(2023, 9, 25),
        comment:
          "Feels like stepping on a cloud. Dries quickly and doesn't slip.",
      },
      {
        id: 2,
        author: "Brian Miller",
        rating: 5,
        date: new Date(2023, 11, 2),
        comment:
          "Best bath mat I've ever owned. The memory foam is therapeutic for tired feet.",
      },
    ],
    details: `Premium memory foam bath mat that provides exceptional comfort and absorption. The plush surface feels luxurious underfoot while quickly wicking moisture away from the skin. The mat features a non-slip rubber backing that stays securely in place on various bathroom surfaces.

Constructed with high-density memory foam that contours to your feet for a cushioning effect. The top layer is made of ultra-absorbent microfiber that pulls water away quickly, helping to keep your bathroom floor dry. The mat dries relatively quickly between uses to prevent mildew growth.

Designed with both comfort and practicality in mind, the mat is machine washable for easy cleaning. The materials are hypoallergenic and resistant to mold and mildew. The borderless design gives it a modern look while preventing dirt buildup around the edges.

Perfect for adding a touch of luxury to your daily routine. The comfortable surface is especially appreciated after bathing or showering. Available in multiple colors to coordinate with your bathroom decor. The mat provides both functional moisture absorption and aesthetic enhancement to your bathroom space.`,
  },
  {
    id: 38,
    title: "Wall Art Triptych",
    category: "Decor",
    price: 129.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.4,
    images: [
      "https://i.pinimg.com/1200x/67/8d/4e/678d4e3c5d7b8e9f1a2b3c4d5e6f7g8h.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "24x36 inches (3 panels)",
        price: 129.99,
        oldPrice: undefined,
        stock: 15,
      },
      {
        size: "36x48 inches (3 panels)",
        price: 189.99,
        oldPrice: undefined,
        stock: 8,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Emily Parker",
        rating: 4,
        date: new Date(2023, 10, 8),
        comment:
          "Beautiful colors and high quality printing. Makes a statement in our living room.",
      },
      {
        id: 2,
        author: "Kevin Johnson",
        rating: 5,
        date: new Date(2023, 9, 17),
        comment:
          "Exactly as pictured. The canvas material has a nice texture that adds depth.",
      },
    ],
    details: `Three-piece canvas wall art featuring a continuous abstract design across panels. The artwork is printed on high-quality canvas using archival inks that resist fading. Each panel is stretched over a wooden frame with a gallery wrap finish that allows for installation without additional framing.

The triptych format creates a dramatic visual impact while offering flexibility in arrangement. The panels can be hung with small gaps between them for a modern look or closer together for a more seamless appearance. The abstract design features a harmonious color palette that complements various decor styles.

Crafted with attention to detail, each canvas features a protective coating that guards against UV damage and dust. The edges are finished with the image wrapped around the sides, creating a cohesive look from all angles. The lightweight construction makes hanging easy while ensuring durability.

Perfect for filling large wall spaces in living rooms, bedrooms, hallways, or offices. The neutral yet impactful design serves as a focal point without overwhelming the space. The artwork arrives ready to hang with all necessary hardware included for straightforward installation.`,
  },
  {
    id: 39,
    title: "Smart Planter with Self-Watering",
    category: "Garden",
    price: 59.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.3,
    images: [
      "https://i.pinimg.com/1200x/88/4e/d5/884ed5a6b7c8e9f1a2b3c4d5e6f7g8h9.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "Medium (10-inch)",
        price: 59.99,
        oldPrice: undefined,
        stock: 22,
      },
      {
        size: "Large (14-inch)",
        price: 79.99,
        oldPrice: undefined,
        stock: 15,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Rachel Green",
        rating: 4,
        date: new Date(2023, 8, 30),
        comment:
          "My plants are thriving with the self-watering system. Perfect for forgetful gardeners.",
      },
      {
        id: 2,
        author: "Mark Taylor",
        rating: 5,
        date: new Date(2023, 10, 22),
        comment:
          "Sleek design and functional. The water level indicator is genius.",
      },
    ],
    details: `Modern self-watering planter designed to keep plants healthy with minimal maintenance. The planter features a reservoir system that provides water to plants as needed, preventing both over and under-watering. The sleek contemporary design includes a water level indicator that shows when refilling is necessary.

Crafted from durable, UV-resistant polypropylene that won't fade in sunlight. The planter is suitable for both indoor and outdoor use. The neutral color and minimalist design complement various plant types and decor styles. The integrated drainage system ensures excess water doesn't accumulate around roots.

The self-watering mechanism works through capillary action, with soil drawing water from the reservoir as needed. This system promotes healthier root growth and reduces watering frequency by up to 70%. The planter includes a removable inner pot for easy planting and maintenance.

Ideal for busy plant lovers or those who travel frequently. The planter takes the guesswork out of watering while adding modern style to your space. Suitable for a wide variety of houseplants, herbs, and small shrubs. The practical design makes plant care accessible to gardeners of all experience levels.`,
  },
  {
    id: 40,
    title: "Leather Office Chair",
    category: "Furniture",
    price: 289.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.6,
    images: [
      "https://i.pinimg.com/1200x/99/1a/bc/991abc1d2e3f4a5b6c7d8e9f0a1b2c3d.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "Executive",
        price: 289.99,
        oldPrice: undefined,
        stock: 9,
      },
      {
        size: "Managerial",
        price: 349.99,
        oldPrice: undefined,
        stock: 6,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Daniel Brown",
        rating: 5,
        date: new Date(2023, 7, 14),
        comment:
          "Extremely comfortable for long work hours. The lumbar support is perfect.",
      },
      {
        id: 2,
        author: "Jessica White",
        rating: 4,
        date: new Date(2023, 9, 5),
        comment:
          "Beautiful chair that elevates my home office. Assembly took some time but worth it.",
      },
    ],
    details: `Ergonomic office chair crafted from premium genuine leather with generous padding for all-day comfort. The chair features adjustable height, lumbar support, tilt tension, and armrests to customize your seating position. The waterfall seat edge reduces pressure on legs, promoting better circulation.

Built on a sturdy five-point base with smooth-rolling casters that work on both carpet and hard surfaces. The chair's mechanism allows for multiple locking positions and comfortable reclining. The high-back design provides support for shoulders and neck during long sitting sessions.

The top-grain leather upholstery is both durable and luxurious, developing a rich patina over time. The padding consists of high-density foam that maintains its shape after extended use. The chair meets or exceeds industry standards for office furniture safety and durability.

Ideal for home offices, executive suites, or any workspace where comfort and style are priorities. The professional appearance complements various office decors while providing essential ergonomic support. The chair assembles with included tools and instructions for straightforward setup.`,
  },
  {
    id: 41,
    title: "Copper Cookware Collection",
    category: "Kitchen",
    price: 349.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.9,
    images: [
      "https://i.pinimg.com/1200x/77/2b/cd/772bcd1e2f3a4b5c6d7e8f9a0b1c2d3e.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "3-Piece Set",
        price: 349.99,
        oldPrice: undefined,
        stock: 7,
      },
      {
        size: "5-Piece Set",
        price: 549.99,
        oldPrice: undefined,
        stock: 4,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Chef Marco",
        rating: 5,
        date: new Date(2023, 6, 18),
        comment:
          "Professional performance with stunning appearance. Heats with incredible precision.",
      },
      {
        id: 2,
        author: "Sophia Martinez",
        rating: 5,
        date: new Date(2023, 8, 9),
        comment:
          "Worth every penny. These pieces are both functional and beautiful enough to display.",
      },
    ],
    details: `Professional copper cookware collection featuring copper exterior with stainless steel cooking surface. Copper's exceptional thermal conductivity provides precise temperature control, responding instantly to heat adjustments. The stainless steel interior offers durability and resistance to staining and reacting with foods.

Each piece is crafted with a thick copper core that extends up the sides for even heating throughout. The handles are made of stay-cool stainless steel with ergonomic design for comfortable grip and balance. The riveted construction ensures durability and long-lasting performance.

The exterior copper surface develops a natural patina over time, adding to its character and beauty. The cookware is suitable for all cooktops including induction when used with an adapter. Care instructions include hand washing to maintain the copper's brilliance, though the stainless interior is dishwasher safe.

Designed for serious home cooks and professional chefs who appreciate both performance and aesthetics. These pieces make a stunning display when hung in the kitchen while offering unparalleled cooking performance. The set represents an investment in quality that will last for generations with proper care.`,
  },
  {
    id: 42,
    title: "Weighted Blanket",
    category: "Home",
    price: 89.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.7,
    images: [
      "https://i.pinimg.com/1200x/82/3c/ef/823cef1a2b3c4d5e6f7g8h9i0j1k2l3m.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "15 lbs (48x72 inches)",
        price: 89.99,
        oldPrice: undefined,
        stock: 18,
      },
      {
        size: "20 lbs (60x80 inches)",
        price: 109.99,
        oldPrice: undefined,
        stock: 12,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Michelle Roberts",
        rating: 5,
        date: new Date(2023, 5, 22),
        comment:
          "Life-changing for my sleep quality. The weight is perfectly distributed.",
      },
      {
        id: 2,
        author: "Andrew Lewis",
        rating: 4,
        date: new Date(2023, 7, 11),
        comment:
          "Helps with my anxiety. Stays cool throughout the night unlike some weighted blankets.",
      },
    ],
    details: `Therapeutic weighted blanket designed to provide the calming benefits of deep pressure stimulation. The blanket is filled with glass beads that are evenly distributed throughout small pockets to prevent shifting and ensure consistent weight coverage. The breathable cotton cover allows for air circulation to prevent overheating.

The weight of the blanket mimics the feeling of being hugged or held, which can help reduce anxiety and improve sleep quality. The blanket is available in weights calculated as approximately 10% of body weight, following common therapeutic recommendations. The removable cover is machine washable for easy care.

Crafted with premium materials, the inner blanket features baffle box construction that keeps the filling in place. The duvet-style cover includes corner ties to secure it to the inner blanket. The overall design is both functional and aesthetically pleasing, with a minimalist look that complements various bedroom styles.

Ideal for those experiencing sleep difficulties, anxiety, stress, or sensory processing challenges. The blanket can be used during sleep, while reading, or relaxing on the couch. The comforting pressure has been shown to increase serotonin and melatonin production while decreasing cortisol levels.`,
  },
  {
    id: 43,
    title: "Crystal Champagne Flutes",
    category: "Kitchen",
    price: 79.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.8,
    images: [
      "https://i.pinimg.com/1200x/83/4d/ef/834def1a2b3c4d5e6f7g8h9i0j1k2l3m4.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "Set of 4",
        price: 79.99,
        oldPrice: undefined,
        stock: 25,
      },
      {
        size: "Set of 6",
        price: 109.99,
        oldPrice: undefined,
        stock: 15,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Olivia Parker",
        rating: 5,
        date: new Date(2023, 4, 15),
        comment:
          "Absolutely stunning. The cut crystal catches the light beautifully.",
      },
      {
        id: 2,
        author: "William Davis",
        rating: 5,
        date: new Date(2023, 6, 8),
        comment:
          "Perfect for special occasions. They feel luxurious and well-balanced.",
      },
    ],
    details: `Elegant lead-free crystal champagne flutes featuring precision-cut patterns that refract light beautifully. Each flute is mouth-blown by skilled artisans, resulting in delicate yet durable glassware with a brilliant sparkle. The tall, slender design helps maintain champagne's bubbles and temperature.

The flutes are crafted from premium crystal that offers exceptional clarity and ring. The intricate cutting pattern not only adds visual appeal but also provides a secure grip. The stemmed design keeps hands away from the bowl to prevent warming the beverage. The generous bowl shape allows aromas to develop fully.

These flutes are dishwasher safe for convenient cleaning, though hand washing is recommended to preserve their brilliance long-term. The crystal is resistant to clouding and maintains its sparkle with proper care. Each piece is carefully inspected to ensure flawless quality.

Ideal for weddings, anniversaries, celebrations, or elevating everyday moments. The elegant design makes any beverage feel special, from champagne to sparkling juices. The set comes beautifully packaged, making it an excellent gift for special occasions. The timeless design ensures these flutes will remain stylish for years to come.`,
  },
  {
    id: 44,
    title: "Yoga Mat Premium",
    category: "Fitness",
    price: 68.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.6,
    images: [
      "https://i.pinimg.com/1200x/84/5e/ff/845eff1a2b3c4d5e6f7g8h9i0j1k2l3m4n.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "Standard (68x24 inches)",
        price: 68.99,
        oldPrice: undefined,
        stock: 30,
      },
      {
        size: "Extra Long (72x26 inches)",
        price: 79.99,
        oldPrice: undefined,
        stock: 20,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Yoga Instructor Tina",
        rating: 5,
        date: new Date(2023, 3, 22),
        comment:
          "Perfect thickness and grip. Doesn't slip even during hot yoga sessions.",
      },
      {
        id: 2,
        author: "Michael Chen",
        rating: 4,
        date: new Date(2023, 5, 14),
        comment:
          "Great cushioning for joints without being too soft. Excellent quality for the price.",
      },
    ],
    details: `High-performance yoga mat designed with a dual-layer structure that provides optimal cushioning and stability. The top surface features a moisture-activated grip that becomes more secure as you sweat, preventing slipping during intense practices. The closed-cell construction prevents moisture absorption and microbial growth.

The mat offers excellent shock absorption for joints while maintaining stability for balance poses. The textured surface provides tactile feedback and enhances grip. The mat is made from eco-friendly thermoplastic elastomer that is free from harmful chemicals like PVC, latex, and silicone.

With a thickness of 5mm, this mat provides ample cushioning without compromising connection to the floor. The dimensions offer plenty of space for various poses, and the extra-long version accommodates taller practitioners. The mat includes alignment markers to help with proper positioning.

Ideal for all styles of yoga from gentle to power, as well as other floor exercises. The mat rolls easily for transport and includes a carrying strap. The durable construction resists tearing and peeling, ensuring long-lasting performance. The mat is easy to clean with a mild soap and water solution.`,
  },
  {
    id: 45,
    title: "Smart Desk Lamp",
    category: "Office",
    price: 89.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.5,
    images: [
      "https://i.pinimg.com/1200x/85/6f/00/856f001a2b3c4d5e6f7g8h9i0j1k2l3m4n5.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "Standard",
        price: 89.99,
        oldPrice: undefined,
        stock: 22,
      },
      {
        size: "With Wireless Charger",
        price: 119.99,
        oldPrice: undefined,
        stock: 15,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Remote Worker Steve",
        rating: 4,
        date: new Date(2023, 4, 5),
        comment:
          "The adjustable color temperature is perfect for video calls and reducing eye strain.",
      },
      {
        id: 2,
        author: "Student Maria",
        rating: 5,
        date: new Date(2023, 6, 18),
        comment:
          "Love the smart features and app control. The minimalist design looks great on my desk.",
      },
    ],
    details: `Modern smart desk lamp featuring adjustable color temperature from warm (2700K) to cool (5000K) white light, allowing you to customize lighting for different tasks and times of day. The lamp can be controlled via touch controls on the base, through a mobile app, or via voice commands with compatible smart home systems.

The lamp features multiple preset modes for reading, working, relaxing, and focusing. The brightness is dimmable from 10% to 100% with no flickering, making it easy on the eyes. The flexible gooseneck design allows precise positioning of the light exactly where needed without taking up much desk space.

Constructed with a weighted base for stability and premium materials for durability. The LED light source provides energy-efficient illumination with a lifespan of up to 25,000 hours. The wireless charging version includes a Qi charging pad built into the base for convenient device charging.

Ideal for home offices, study areas, or any workspace where tailored lighting is beneficial. The smart features include scheduling, automation, and integration with other smart home devices. The lamp helps reduce eye strain and improve productivity by providing optimal lighting for various tasks throughout the day.`,
  },
  {
    id: 46,
    title: "Artisanal Cheese Board Set",
    category: "Kitchen",
    price: 129.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.9,
    images: [
      "https://i.pinimg.com/1200x/86/70/11/8670111a2b3c4d5e6f7g8h9i0j1k2l3m4n5o.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "Medium (16x12 inches)",
        price: 129.99,
        oldPrice: undefined,
        stock: 14,
      },
      {
        size: "Large (20x15 inches)",
        price: 159.99,
        oldPrice: undefined,
        stock: 8,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Entertainer Emma",
        rating: 5,
        date: new Date(2023, 5, 30),
        comment:
          "Beautiful craftsmanship and perfectly sized for gatherings. The tools are high quality.",
      },
      {
        id: 2,
        author: "Foodie David",
        rating: 5,
        date: new Date(2023, 7, 12),
        comment:
          "Impressive set that makes cheese serving elegant and practical. The marble slabs are genius.",
      },
    ],
    details: `Handcrafted cheese board set featuring a beautiful acacia wood board with integrated marble slabs for serving cheeses at ideal temperatures. The set includes stainless steel tools specifically designed for cheese service: a hard cheese knife, soft cheese knife, spreader, and fork. The wood is finished with food-safe mineral oil to enhance its natural grain and provide protection.

The design incorporates different materials to accommodate various cheese types—the wood surface is perfect for slicing, while the marble sections help keep cheeses cool. The board includes carved channels to catch crumbs and prevent runoff onto surfaces. The elegant presentation makes it suitable for both casual and formal entertaining.

The set comes with a dedicated storage compartment for the tools, keeping everything organized when not in use. The materials are chosen for both aesthetics and functionality—the wood is naturally antimicrobial, while the marble and stainless steel are easy to clean. The entire set is food-safe and designed for direct contact with food.

Perfect for cheese enthusiasts, entertainers, or anyone who appreciates beautiful serving pieces. The comprehensive set provides everything needed for an impressive cheese presentation. The board works equally well for charcuterie, fruits, breads, and other appetizers. The elegant design makes it a beautiful centerpiece for any gathering.`,
  },
  {
    id: 47,
    title: "Indoor Herb Garden Kit",
    category: "Garden",
    price: 49.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.4,
    images: [
      "https://i.pinimg.com/1200x/87/71/22/8771221a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "3-Pod System",
        price: 49.99,
        oldPrice: undefined,
        stock: 35,
      },
      {
        size: "6-Pod System",
        price: 79.99,
        oldPrice: undefined,
        stock: 20,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Urban Gardener Lisa",
        rating: 4,
        date: new Date(2023, 4, 8),
        comment:
          "Perfect for my apartment kitchen. Fresh herbs year-round with minimal effort.",
      },
      {
        id: 2,
        author: "Cooking Enthusiast Tom",
        rating: 5,
        date: new Date(2023, 6, 25),
        comment:
          "The automated lighting and watering takes the guesswork out of growing herbs indoors.",
      },
    ],
    details: `Compact indoor gardening system that allows you to grow fresh herbs year-round regardless of outdoor conditions. The kit includes everything needed to start growing: LED grow lights, self-watering system, nutrient-rich growing pods, and herb seeds. The adjustable lighting arm accommodates plants as they grow.

The system uses hydroponic technology that provides plants with optimal water, light, and nutrients for faster growth compared to soil gardening. The automated timer controls the LED lights, providing 16 hours of light followed by 8 hours of darkness—the ideal cycle for most herbs. The water indicator shows when to add more water.

Designed for simplicity, the system requires minimal maintenance—just add water every 2-3 weeks and nutrients as directed. The full-spectrum LED lights promote photosynthesis without excessive heat, making them safe for kitchen countertops. The modern design complements various kitchen styles.

Ideal for urban dwellers, cooking enthusiasts, or anyone wanting fresh herbs at their fingertips. The system grows herbs 3x faster than traditional methods and uses 90% less water. Choose from popular culinary herbs like basil, mint, cilantro, parsley, thyme, and oregano. The satisfaction of growing your own food adds flavor to your cooking and joy to your daily routine.`,
  },
  {
    id: 48,
    title: "Noise Cancelling Headphones",
    category: "Electronics",
    price: 299.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.8,
    images: [
      "https://i.pinimg.com/1200x/88/72/33/8872331a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "Black",
        price: 299.99,
        oldPrice: undefined,
        stock: 18,
      },
      {
        size: "Silver",
        price: 299.99,
        oldPrice: undefined,
        stock: 12,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Frequent Traveler Alex",
        rating: 5,
        date: new Date(2023, 3, 15),
        comment:
          "Exceptional noise cancellation. The sound quality is incredible for both music and calls.",
      },
      {
        id: 2,
        author: "Office Worker Rachel",
        rating: 4,
        date: new Date(2023, 5, 8),
        comment:
          "Perfect for focusing in open offices. The battery life lasts through my workweek.",
      },
    ],
    details: `Premium wireless headphones featuring advanced active noise cancellation technology that adapts to your environment. The headphones create a personalized listening experience through adaptive sound control that adjusts noise cancellation based on your activity and surroundings. The industry-leading noise cancellation effectively reduces ambient noise across a wide frequency range.

The sound quality delivers exceptional clarity across the entire frequency range with deep, precise bass and sparkling highs. The headphones feature proprietary driver technology that minimizes distortion even at high volumes. The adaptive sound control automatically optimizes audio based on your environment and wearing conditions.

With up to 30 hours of battery life on a single charge, the headphones can easily last through long trips or work weeks. Quick charging provides 3 hours of playback from just a 10-minute charge. The comfortable over-ear design features plush earpads that distribute pressure evenly and provide effective passive noise isolation.

Ideal for travelers, commuters, office workers, or anyone seeking immersive audio experiences. The headphones include smart features like wear detection (pauses audio when removed), voice assistant support, and multipoint connection to two devices simultaneously. The accompanying app allows for sound customization and firmware updates.`,
  },
  {
    id: 49,
    title: "Japanese Knife Set",
    category: "Kitchen",
    price: 199.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.9,
    images: [
      "https://i.pinimg.com/1200x/89/73/44/8973441a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "3-Piece Essential",
        price: 199.99,
        oldPrice: undefined,
        stock: 15,
      },
      {
        size: "5-Piece Professional",
        price: 299.99,
        oldPrice: undefined,
        stock: 8,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Home Chef Michael",
        rating: 5,
        date: new Date(2023, 2, 18),
        comment:
          "Razor-sharp and perfectly balanced. These knives have transformed my cooking experience.",
      },
      {
        id: 2,
        author: "Culinary Student Sarah",
        rating: 5,
        date: new Date(2023, 4, 6),
        comment:
          "Professional quality at an accessible price. The Damascus pattern is beautiful.",
      },
    ],
    details: `Traditional Japanese knife set crafted by skilled artisans using time-honored techniques. Each knife features a Damascus steel core with 67 layers of cladding for exceptional sharpness, edge retention, and corrosion resistance. The blades are hand-honed to a precise angle for superior cutting performance.

The handles are made from traditional Pakkawood, a durable and water-resistant material that provides a secure and comfortable grip. The ergonomic design balances the weight perfectly between blade and handle for controlled, effortless cutting. Each knife is designed for specific tasks—slicing, dicing, chopping, or precision work.

The set includes a magnetic storage block that keeps knives secure and easily accessible while protecting the blades. The knives are crafted from VG-10 steel, known for its excellent sharpness retention and durability. The beautiful Damascus pattern on each blade is both functional (reducing food sticking) and aesthetically striking.

Ideal for serious home cooks and professional chefs who appreciate precision cutting tools. These knives handle everything from delicate herbs to tough root vegetables with ease. The set represents the perfect marriage of traditional craftsmanship and modern metallurgy. Proper care includes hand washing and regular honing to maintain the exceptional edge.`,
  },
  {
    id: 50,
    title: "Smart Fitness Mirror",
    category: "Fitness",
    price: 1499.99,
    oldPrice: undefined,
    discountPercent: 0,
    rating: 4.7,
    images: [
      "https://i.pinimg.com/1200x/90/74/55/9074551a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q.jpg",
    ],
    countdownEnd: null,
    status: "In Stock",
    variants: [
      {
        size: "Standard",
        price: 1499.99,
        oldPrice: undefined,
        stock: 6,
      },
      {
        size: "Pro (with camera)",
        price: 1799.99,
        oldPrice: undefined,
        stock: 3,
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Fitness Enthusiast Jen",
        rating: 5,
        date: new Date(2023, 1, 22),
        comment:
          "Space-saving and effective. The live classes make me feel like I have a personal trainer.",
      },
      {
        id: 2,
        author: "Busy Professional Mark",
        rating: 4,
        date: new Date(2023, 3, 14),
        comment:
          "Perfect solution for fitting workouts into my schedule. The form feedback is incredibly helpful.",
      },
    ],
    details: `Interactive fitness mirror that transforms into a full-home gym experience when powered on. The sleek design appears as a regular mirror when not in use, blending seamlessly with home decor. When activated, the display shows workout classes with expert trainers while simultaneously reflecting your form for real-time self-correction.

The system offers thousands of on-demand and live classes across multiple fitness categories: yoga, strength training, cardio, boxing, barre, Pilates, and meditation. The subscription service provides new content daily with varying intensity levels and durations to suit all fitness goals and schedules. The camera version includes form feedback technology that provides personalized corrections.

Constructed with high-quality materials, the mirror features anti-glare glass, premium speakers, and a responsive touch interface. The integrated sensors track your movements and provide performance metrics. The space-saving design requires minimal floor space while providing a comprehensive workout experience.

Ideal for those with limited space, busy schedules, or preference for private workouts. The mirror connects you to a community of users and world-class trainers without leaving home. The system grows with your fitness journey, offering progressive programming and challenges. The investment replaces expensive gym memberships and equipment while providing convenience and motivation.`,
  },
];
