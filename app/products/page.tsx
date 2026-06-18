import products from "@/lib/data";
import Link from "next/link";


export default function page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Products</h1>
            <ul className="text-lg text-gray-600">
                {products.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`} className="block mb-2">
                    <div key={product.id} className="mb-2">
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-gray-800 font-bold">Price: ${product.price}</p>
                    </div>
                    </Link>
                ))}
            </ul>
        </div>
                
    );
}

    export const revalidate = 60;