import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

interface CatalogProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function Catalog({ onAddToCart }: CatalogProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary animate-fade-in">
          Каталог веников
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
          Выберите свой идеальный веник для бани из нашей коллекции
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}
