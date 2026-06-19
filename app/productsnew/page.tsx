
import { notFound } from "next/navigation";
import ProductCard from "../../component/productcard";

async function getfakestoreData ( path: '/products/:id' ) 
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);


export default async function ProductsNew(path: string) {
  const res = await fetch(`https://fakestoreapi.com${path}`);
  const data = (await res.json()) as Product[];

  if (!data?.length) {
    return (
      <div className="p-10 text-xl font-semibold text-red-500">
        Sorry, an unexpected error occurred.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {data.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
