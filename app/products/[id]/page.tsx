import products from "@/lib/data";


export default async function page({ params }: PageProps<"/products/[id]">) {
    const {id} = await params;
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
        </div>
    );
}
