import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartEmpty() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center font-mono">
          <div className="flex items-center justify-center pb-4">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="w-12 h-12 text-white"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Oh no, your cart is empty!
          </h2>
          <p className="mb-4">Looks like you haven’t added anything yet.</p>
          <Link href="/category" className="text-blue-600 underline">
            Browse products
          </Link>
        </div>
      </div>
    </>
  );
}
