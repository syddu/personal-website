import Image from "next/image";

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
        />
        Resume
        </a>
        <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/syddu"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
        />
        GitHub
        </a>
        <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/sydney-du-1ab7b635b/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
        />
        LinkedIn
        </a>
    </footer>
  );
};

export default Footer;