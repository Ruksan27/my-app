import Image from "next/image";
export default function ProductCard({ data }: { data: Product}) {
  return (
    <><div className="border rounded-lg p-4 shadow">
          <Image
              src={data.image}
              alt={data.title}
              width={200}
              height={200}
              unoptimized 
              />
          <h2 className="font-bold mt-4">{data.title}</h2>
          <p className="text-green-600">${data.price}</p>
      </div><div>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <div>
                  <p>{data.category}</p>
              </div>
          </div></>
  );
}
