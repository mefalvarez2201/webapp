import ProductCard from "@/components/product/ProductCard";
import { getAllProducts } from "@/services/productService";

export default async function CategoryPage() {
  const products = await getAllProducts();

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            slug={product.title}
            title={product.title}
            price={product.price.toNumber()}
            imageUrl={"/images/products/bag.webp"}
          />
        ))}
      </div>
    </>
  );
}
