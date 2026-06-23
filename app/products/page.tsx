import products from "@/app/data/fakestore";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">
          Products
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600">
                  {product.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price}
                  </span>

                  <span className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium group-hover:bg-blue-600">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export const revalidate = 60;