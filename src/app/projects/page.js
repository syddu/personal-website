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
              alt="App Inventor"
            />
            MIT App Inventor
          </a>
          <div className="flex flex-col gap-4">
            <a className="flex flex-col gap-4 items-center"
            href="/projects/music">
            <Image
              src="/music.jpg"
              width={300}
              height={300}
              alt="Music Composition"
            />
            Music Composition
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="flex flex-col gap-4 items-center"
            href="/projects/mltutor">
            <Image
              src="/eecs.png"
              width={300}
              height={300}
              alt="ML Tutor"
            />
            RAG Machine Learning Tutor
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="flex flex-col gap-4 items-center"
            href="/projects/comicgenerator">
            <Image
              src="/julian.webp"
              width={300}
              height={300}
              alt="Comic Generator"
            />
            AI Comic Strip Creator
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="flex flex-col gap-4 items-center"
            href="/projects/iosapp">
            <Image
              src="/trivia.png"
              width={300}
              height={300}
              alt="iOS App"
            />
            iOS Trivia Game
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
