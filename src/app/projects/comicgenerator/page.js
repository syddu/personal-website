import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-mono text-center sm:text-left text-2xl sm:text-4xl">
          Comic Strip Generator
        </h1>

        <a
          href="https://julian-comic.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/comic_preview.png"
            width={400}
            height={250}
            alt="Comic App Preview"
            className="rounded-lg shadow-md hover:opacity-90 transition"
          />
        </a>

        <p className="bg-background font-mono text-center sm:text-left text-foreground">
          Comic Strip Generator is a creative web app that turns text prompts into personalized comic stories. I fine-tuned a Flux image generation model on a small dataset of 20–30 photos of my younger brother, Julian. Using OpenAI’s API, the app generates a storyline based on a user prompt and then renders comic-style images of Julian in that story. I built the frontend using Next.js and deployed the project on Vercel. While the API key is currently disabled, the full pipeline—from prompt to comic—is functional and designed for easy reactivation.
        </p>

        <p className="bg-background font-mono text-center sm:text-left text-foreground">
          Skills: TypeScript, Next.js, OpenAI API, LLM fine-tuning, generative AI, image generation, full-stack development, Vercel deployment
        </p>
      </main>
    </div>
  );
}