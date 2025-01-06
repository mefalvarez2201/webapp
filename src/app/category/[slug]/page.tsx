import ProductCard from "@/components/product/ProductCard";
import { getProductsByCategory } from "@/services/productService";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const products = await getProductsByCategory(params.slug);

  return (
    <>
      <section>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              slug={product.title}
              title={product.title}
              price={product.price.toNumber()}
              imageUrl={"/images/products/bag.webp"}
            />
          ))}
        </div>
      </section>
    </>
  );
}
