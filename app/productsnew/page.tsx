import ProductCard from "@/component/productcard";
import { notFound } from "next/navigation";


export default async function ProductsNew(path: string) {
  const res = await fetch(`https://fakestoreapi.com${path}`);
  const data = (await res.json()) as Product [];


  if (!data?.length) return notFound();
  
    

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {data.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
