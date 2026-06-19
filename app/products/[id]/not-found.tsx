import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4">
        Product Not Found
      </h2>
      <p className="text-blue-800 mt-2">
        The product you are looking for does not exist.
      </p>

      <Link
        href="/products"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Back to Products
      </Link>
      
    </div>
  );
}