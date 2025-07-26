import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
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
        </div>
      </main>
    </div>
  );
}
