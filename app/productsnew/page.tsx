import ProductCard from "@/component/productcard";
import { Product } from "@/types/type.product";
import products from "@/app/data/fakestore";

export default function ProductsNew() {
  const data: Product[] = products as Product[];
  if (!data.length) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 text-lg">Didnot found any product।</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8"> New Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

