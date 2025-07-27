
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-mono text-center sm:text-left text-2xl sm:text-4xl">
          Machine Learning Tutor (MIT 6.3900)
        </h1>
        {/* <AskTutor/> */}
        <p className="bg-background font-mono text-center sm:text-left text-foreground">
          I built a FastAPI backend that powers a Retrieval-Augmented Generation (RAG) system trained on the MIT 6.3900 Introduction to Machine Learning textbook. The pipeline preprocesses the entire textbook into semantic chunks, embeds them using Sentence Transformers, and stores them in a FAISS vector database. At runtime, the backend retrieves the top 20 most relevant chunks in response to a user query and sends them as context to a large language model, which replies in the voice of a professor. The system is designed to serve as an AI tutor for the course.
        </p>

        <p className="bg-background font-mono text-center sm:text-left text-foreground">
          Skills: Python, FastAPI, OpenAI API, Retrieval-Augmented Generation (RAG), FAISS, Sentence Transformers, chunking, semantic search, LLM prompting
        </p>
      </main>
    </div>
  );
}