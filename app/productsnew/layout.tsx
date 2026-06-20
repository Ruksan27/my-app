import Link from "next/link";
export default function ProductsNewLayout ({}: LayoutProps <"/productsnew">) {
    return (
        <nav className="p-4 border-b">
        <ul>
            <li> 
                <Link href="/" > Home </Link>
            </li>
            <li>
                <Link href="/products" > Products </Link>
            </li>
            <li>
                <Link href="/" > New Product </Link>
            </li>
            <li>
                <Link href="/about" > About </Link>

            </li>
            <li>
                <Link href="/contact" > Contact </Link> 

            </li>
        </ul>
</nav>

    )
}