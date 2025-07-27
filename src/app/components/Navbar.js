import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="bg-background mx-auto flex flex-wrap items-center justify-between px-4 sm:px-8">
        <Link href="/" className="cursor-pointer rounded-full transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium h-10 sm:h-12 px-8 py-4 sm:w-auto">
          <Image
            src="/home.webp"
            alt="Home"
            width={20}
            height={20}
          />
          Home
        </Link>
        <ul className="nav-links flex gap-6">
          <li>
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;