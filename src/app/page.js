import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-mono text-center sm:text-left text-2xl sm:text-4xl">
          Sydney Du
        </h1>
        <p className="font-mono text-center">
          Welcome to my website!
        </p>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-scroll">
            <Image
              className="dark:invert inline-block mx-4"
              src="/csail.png"
              alt="CSAIL logo"
              width={180}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              className="dark:invert inline-block mx-4"
              src="/noblereach_foundation.png"
              alt="NobleReach logo"
              width={440}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              className="dark:invert inline-block mx-4"
              src="/medialab.png"
              alt="Media Lab logo"
              width={165}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              className="dark:invert inline-block mx-4"
              src="/csail.png"
              alt="CSAIL logo"
              width={180}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              className="dark:invert inline-block mx-4"
              src="/noblereach_foundation.png"
              alt="NobleReach logo"
              width={440}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              className="dark:invert inline-block mx-4"
              src="/medialab.png"
              alt="Media Lab logo"
              width={165}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              className="dark:invert inline-block mx-4"
              src="/csail.png"
              alt="CSAIL logo"
              width={180}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              className="dark:invert inline-block mx-4"
              src="/noblereach_foundation.png"
              alt="NobleReach logo"
              width={440}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              className="dark:invert inline-block mx-4"
              src="/medialab.png"
              alt="Media Lab logo"
              width={165}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              className="dark:invert inline-block mx-4"
              src="/csail.png"
              alt="CSAIL logo"
              width={180}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              className="dark:invert inline-block mx-4"
              src="/noblereach_foundation.png"
              alt="NobleReach logo"
              width={440}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              className="dark:invert inline-block mx-4"
              src="/medialab.png"
              alt="Media Lab logo"
              width={165}
              height={90}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created with Nextjs
          </a>
        </div>
      </main>
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
    </div>
  );
}
