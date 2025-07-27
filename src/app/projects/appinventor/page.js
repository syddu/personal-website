import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-mono text-center sm:text-left text-2xl sm:text-4xl">
          MIT App Inventor
        </h1>
        <Image
        src = "/appinventor.jpeg"
        width = {300}
        height = {300}
        alt = "App Inventor"
        />
        <p className="bg-background font-mono text-center sm:text-left text-foreground">
          MIT App Inventor is an open-source, block-based programming platform that empowers people around the world—many with no prior coding experience—to build mobile apps. It has reached over 15 million users in 195 countries, supporting everything from education to community impact projects. As an undergraduate research assistant on the App Inventor team, I started on the Education Team by developing a chat app using App Inventor’s blocks and TinyDB for local storage. I now work on the Development Team, contributing to debugging and iOS support. This fall, I’ll be part of Aptly, a new research initiative using AI to help users generate apps from natural language instructions.
        </p>
        <p className="bg-background font-mono text-center sm:text-left text-foreground">
          Skills: Swift, XCode, software testing, debugging, version control (Git), AI, reinforcement learning, open-source contribution, block-based programming
        </p>
      </main>
    </div>
  )
};