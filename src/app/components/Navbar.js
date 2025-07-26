import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex items-center justify-between">
        <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/">
            <Image
                src="/home.webp"
                alt="Home"
                width={20}
                height={20}/>
            Home
        </a>
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