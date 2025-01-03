import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono">
      <Link href="/" className="pl-8">
        <div className="flex items-center gap-2 text-xl leading-none font-bold">
          <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />
          <span>Interstellar</span>
        </div>
      </Link>

      <ul className="flex justify-between items-center pr-8">
        <li>
          <Link href="/" className="text-sm h-16 flex items-center px-4 hover:bg-black hover:text-white">About</Link>
        </li>
        <li>
          <Link href="/" className="text-sm h-16 flex items-center px-4 hover:bg-black hover:text-white">Services</Link>
        </li>
        <li>
          <Link href="/" className="text-sm h-16 flex items-center px-4 hover:bg-black hover:text-white">Contact</Link>
        </li>
        <li>
          <Link href="/login" className="text-sm h-16 flex items-center px-4 hover:bg-black hover:text-white">Login</Link>
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
