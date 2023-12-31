import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
  listClassName?: string;
  cardClassName?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items,
  listClassName,
  cardClassName,
}) => {
  return (
    <div className={`space-y-4 ${listClassName}`}>
      <h3>{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} className={cardClassName} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
