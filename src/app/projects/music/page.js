export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-mono text-center sm:text-left text-2xl sm:text-4xl">
          Music Computing & Composition
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
          <video
            src="/compose_demo.mp4"
            controls
            playsInline
            className="rounded-lg shadow-md max-w-[100%] sm:max-w-[45%] h-auto"
          />
          <video
            src="/music_microblocks.mov"
            controls
            playsInline
            className="rounded-lg shadow-md max-w-[100%] sm:max-w-[45%] h-auto"
          />
        </div>
        <p className="bg-background font-mono text-center sm:text-left text-foreground">
          This independent research project, supervised separately from my work with App Inventor, explores AI-driven music composition. I started by using MicroBlocks to generate and play algorithmic music via MIDI output. The current system takes in natural language descriptions and uses a large language model to generate structured musical output. I then parse that output using Music21 to create readable scores, which can be played in MuseScore. I'm particularly interested in the educational potential of this work and hope to eventually integrate music-based thinking into visual programming tools.
        </p>
        <p className="bg-background font-mono text-center sm:text-left text-foreground">
          Skills: LLM prompting, MicroBlocks, Music21, MIDI programming, generative AI
        </p>
      </main>
    </div>
  );
}