import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <div className="pl-8">
        <Link href="/">MyApp</Link>
      </div>
      <ul className="flex justify-between items-center gap-4 pr-8">
        <li>
          <p className="text-sm">&copy; 2025 All rights reserved.</p>
        </li>
        <li>
          <Link href="/">
            <span className="text-sm hover:underline hover:underline-offset-4 hover:decoration-2">
              Privacy Policy
            </span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className="text-sm hover:underline hover:underline-offset-4 hover:decoration-2">
              Terms of Service
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
