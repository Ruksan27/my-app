
import products from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: PageProps<"/products/[id]">) {
  const { id } = await params;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
          
          {/* Product Image */}
          <div className="bg-gray-200 flex items-center justify-center p-10">
            <div className="w-72 h-72 bg-white rounded-2xl shadow-md flex items-center justify-center">
              <span className="text-6xl">📦</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
              In Stock
            </span>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                Add to Cart
              </button>

              <button  className="px-6 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>

            <div className="mt-8 border-t pt-6">
              <h3  className="font-semibold text-gray-800 mb-2">
                Product Features
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Premium Quality</li>
                <li>Fast Delivery</li>
                <li>Easy Return Policy</li>
                <li>Secure Payment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}