import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-mono text-center sm:text-left text-2xl sm:text-4xl">
          Projects
        </h1>
        <p className="font-mono text-center">
          Here are some of the projects I've worked on:
        </p>
        <div className="h-8 sm:h-12" />
        <div className="flex gap-4 items-center flex-col sm:flex-row width-full animate-bounce">
          <a className="flex flex-col gap-4 items-center"
          href="/projects/appinventor">
            <Image
              src="/appinventor.jpeg"
              width={300}
              height={300}
              alt="Headshot"
            />
            MIT App Inventor
          </a>
          <div className="flex flex-col gap-4">
            <Image
              src="/project2.jpeg"
              width={300}
              height={300}
              alt="Project 2"
            />
            Project 2
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/project3.jpeg"
              width={300}
              height={300}
              alt="Project 3"
            />
            Project 3
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/prject4.jpeg"
              width={300}
              height={300}
              alt="Project 4"
            />
            Project 4
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/project5.jpeg"
              width={300}
              height={300}
              alt="Project 5"
            />
            Project 5
          </div>
        </div>
      </main>
    </div>
  );
}
