import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-mono text-center sm:text-left text-2xl sm:text-4xl">
          About Me
        </h1>
        <Image
          src = "/headshot.jpeg"
          width = {200}
          height = {300}
          alt = "Headshot"
        />
        <p className="bg-background font-mono text-center sm:text-left">
          I am a sophomore at MIT studying Computer Science (6-3) and minoring in Statistics and Data Science.
        </p>
      </main>
    </div>
  );
}