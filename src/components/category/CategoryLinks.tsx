"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryLinks() {
  const pathname = usePathname();

  return (
    <ul className="space-y-2">
      <li>
        <Link
          href="/category"
          className={`
            hover:bg-white hover:text-black
            ${pathname === "/category" ? "bg-white text-black" : ""}
          `}
        >
          All Categories
        </Link>
      </li>
      <li>
        <Link
          href="/category/1"
          className={`
            p-0.5 hover:bg-white hover:text-black
            ${pathname === "/category/1" ? "bg-white text-black" : ""}
          `}
        >
          New Arrivals
        </Link>
      </li>
      <li>
        <Link
          href="/category/2"
          className={`
            hover:bg-white hover:text-black
            ${pathname === "/category/2" ? "bg-white text-black" : ""}
          `}
        >
          Flowers
        </Link>
      </li>
      <li>
        <Link
          href="/category/3"
          className={`
            hover:bg-white hover:text-black
            ${pathname === "/category/3" ? "bg-white text-black" : ""}
          `}
        >
          CBD
        </Link>
      </li>
      <li>
        <Link
          href="/category/4"
          className={`
            hover:bg-white hover:text-black
            ${pathname === "/category/4" ? "bg-white text-black" : ""}
          `}
        >
          Smokeshop
        </Link>
      </li>
      <li>
        <Link
          href="/category/5"
          className={`
            hover:bg-white hover:text-black
            ${pathname === "/category/5" ? "bg-white text-black" : ""}
          `}
        >
          Extracts
        </Link>
      </li>
      <li>
        <Link
          href="/category/6"
          className={`
            hover:bg-white hover:text-black
            ${pathname === "/category/6" ? "bg-white text-black" : ""}
          `}
        >
          Edibles
        </Link>
      </li>
      <li>
        <Link
          href="/category/7"
          className={`
            hover:bg-white hover:text-black
            ${pathname === "/category/7" ? "bg-white text-black" : ""}
          `}
        >
          Cartridges & Disposables
        </Link>
      </li>
      <li>
        <Link
          href="/category/8"
          className={`
            hover:bg-white hover:text-black
            ${pathname === "/category/8" ? "bg-white text-black" : ""}
          `}
        >
          Best Sellers
        </Link>
      </li>
    </ul>
  );
}
