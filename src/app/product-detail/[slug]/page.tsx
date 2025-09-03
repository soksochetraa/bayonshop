"use client";

import { useState } from "react";
import { products, generateSlug } from "@/utils/product/products";
import Breadcrumbs from "../../../components/ui/Details/Breadcrumbs";
import ProductGallery from "../../../components/ui/Details/ProductGallery";
import ProductInfo from "../../../components/ui/Details/ProductInfo";
import ProductActions from "../../../components/ui/Details/ProductActions";
import ProductDetails from "../../../components/ui/Details/ProductDetails";
import ProductReviews from "../../../components/ui/Details/ProductReviews";
import ProductCard1 from "../../../components/ui/ProductCard1";

interface Props {
  params: { slug: string };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => generateSlug(p.title) === params.slug);

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants ? product.variants[0] : null
  );

  if (!product) return <div>Product not found</div>;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.title !== product.title)
    .slice(0, 4);

  return (
    <>
      {/* Product Main Section */}
      <div className="flex flex-col justify-center items-center font-[poppins] py-2">
        <Breadcrumbs title={product.title} />
        <div className="flex justify-between items-start w-[1320px] gap-10 max-xl:flex-col max-xl:w-full max-xl:px-4">
          <ProductGallery
            product={product}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          />
          <div className="flex flex-col justify-center items-start gap-7 w-[600px] max-xl:w-full">
            <ProductInfo
              product={product}
              selectedVariant={selectedVariant}
              setSelectedVariant={setSelectedVariant}
              setQuantity={setQuantity}
            />
            <ProductActions
              product={product}
              selectedVariant={selectedVariant}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </div>
      </div>

      {/* Product Details, Reviews, Related Products */}
      <div className="flex flex-col justify-center items-center font-[poppins] py-20">
        <ProductDetails details={product.details} />
        <ProductReviews reviews={product.reviews} />

        {relatedProducts.length > 0 && (
          <div className="w-full max-w-[1320px] px-4 mt-16">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <ProductCard1
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  category={item.category}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  rating={item.rating}
                  image={item.images[0]}
                  countdownEnd={item.countdownEnd}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
