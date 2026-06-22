import ProductCard from "@/component/productcard";

export default async function ProductsNew() {
  let data: Product[] = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

    data = (await res.json()) as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-500 text-lg">
          please try again
        </p>
      </div>
    );
  }

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

