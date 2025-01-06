import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono">
      <Link href="/" className="pl-8">
        <div className="flex items-center gap-2 text-xl leading-none">
          <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />
          <span>Interstellar</span>
        </div>
      </Link>

      <ul className="flex justify-between items-center pr-8">
        <li>
          <div className="relative group inline-block">
            <Link
              href="/category"
              className="text-sm h-16 flex items-center px-4 hover:bg-black hover:text-white group-hover:bg-black group-hover:text-white"
            >
              Category
            </Link>

            <div
              className="
          absolute z-40 left-0 mt-1 w-40
          bg-white text-black text-sm shadow-md border border-gray-200
          hidden group-hover:block
        "
            >
              <ul>
                <li className="hover:bg-gray-100 hover:underline ">
                  <Link href="/category/1" className="block w-full p-2">
                    New Arrivals
                  </Link>
                </li>
                <li className="hover:bg-gray-100 hover:underline ">
                  <Link href="/category/2" className="block w-full p-2">
                    Flowers
                  </Link>
                </li>
                <li className="hover:bg-gray-100 hover:underline ">
                  <Link href="/category/3" className="block w-full p-2">
                    CBD
                  </Link>
                </li>
                <li className="hover:bg-gray-100 hover:underline ">
                  <Link href="/category/4" className="block w-full p-2">
                    Smokeshop
                  </Link>
                </li>
                <li className="hover:bg-gray-100 hover:underline ">
                  <Link href="/category/5" className="block w-full p-2">
                    Extracts
                  </Link>
                </li>
                <li className="hover:bg-gray-100 hover:underline ">
                  <Link href="/category/6" className="block w-full p-2">
                    Edibles
                  </Link>
                </li>
                <li className="hover:bg-gray-100 hover:underline ">
                  <Link href="/category/7" className="block w-full p-2">
                    Cartridges & Disposables
                  </Link>
                </li>
                <li className="hover:bg-gray-100 hover:underline ">
                  <Link href="/category/8" className="block w-full p-2">
                    Best Sellers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link
            href="/"
            className="text-sm h-16 flex items-center px-4 hover:bg-black hover:text-white"
          >
            Support
          </Link>
        </li>
        <li>
          <Link
            href="/cart"
            className="text-sm h-16 flex items-center px-4 hover:bg-black hover:text-white"
          >
            Cart
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className="text-sm h-16 flex items-center px-4 hover:bg-black hover:text-white"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/register"
            className="bg-black text-white text-sm h-16 flex items-center px-4 hover:bg-white hover:text-black"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
