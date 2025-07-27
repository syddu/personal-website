import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-mono text-center sm:text-left text-2xl sm:text-4xl">
          iOS Trivia Game App
        </h1>
        <video
        src="/trivia.mov"
        width="300"
        height="600"
        autoPlay
        muted
        loop
        playsInline
        className="rounded-lg shadow-md"
        />
        <p className="bg-background font-mono text-center sm:text-left text-foreground">
          I built an iOS app that quizzes users on computer science history and calculates a final score with an option to replay. The app was designed using SwiftUI and follows a clean, responsive layout. I also experimented with Firebase integration while prototyping a social media app with user authentication and data storage.
        </p>

        <p className="bg-background font-mono text-center sm:text-left text-foreground">
          Skills: Swift, Xcode, SwiftUI, iOS development, Firebase (Auth & Storage), UI/UX prototyping
        </p>
      </main>
    </div>
  );
}