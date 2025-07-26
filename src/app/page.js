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
    </div>
  );
}
